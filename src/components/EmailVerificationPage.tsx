import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { useAuth } from '../context/AuthContext';
import { authTranslations } from '../utils/authTranslations';
import { 
  Mail, AlertTriangle, ShieldCheck, Loader2, RefreshCw, Clock, KeyRound, ArrowLeft, CheckCircle2 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SabayCodeLogo } from './SabayCodeLogo';

interface EmailVerificationPageProps {
  onSuccess: () => void;
  onBackToLogin: () => void;
  emailToVerify?: string;
}

export const EmailVerificationPage: React.FC<EmailVerificationPageProps> = ({ onSuccess, onBackToLogin, emailToVerify }) => {
  const { language } = useApp();
  const { pendingEmail, verifyEmail, resendVerification, logout, currentUser } = useAuth();
  const t = authTranslations[language];

  // Target Email string - pending registration email always takes absolute priority
  const targetEmail = (
    emailToVerify ||
    pendingEmail || 
    sessionStorage.getItem('sabaicode_pending_email') || 
    currentUser?.email ||
    ''
  ).trim().toLowerCase();

  // Form & Input States
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [infoMessage, setInfoMessage] = useState('');
  const [verified, setVerified] = useState(false);

  // Expiry Timer State (5 Minutes = 300 seconds)
  const [timeLeft, setTimeLeft] = useState(300);
  const [isExpired, setIsExpired] = useState(false);

  // Resend Cooldown State (10 seconds)
  const [cooldown, setCooldown] = useState(10);
  const [resending, setResending] = useState(false);

  // Security Attempts State
  const [attemptsLeft, setAttemptsLeft] = useState<number | null>(5);
  const [attemptsExceeded, setAttemptsExceeded] = useState(false);

  // 5-Minute Countdown Effect
  useEffect(() => {
    if (verified || isExpired) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsExpired(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [verified, isExpired]);

  // 10-Second Resend Cooldown Effect
  useEffect(() => {
    if (cooldown <= 0) return;

    const cooldownTimer = setInterval(() => {
      setCooldown(prev => {
        if (prev <= 1) {
          clearInterval(cooldownTimer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(cooldownTimer);
  }, [cooldown > 0]);

  // Format seconds to MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setInfoMessage('');

    const cleanCode = code.trim();
    if (cleanCode.length !== 6) {
      setError(language === 'en' ? "Please enter a 6-digit verification code." : "សូមបញ្ចូលកូដឲ្យបានគ្រប់ ៦ ខ្ទង់។");
      return;
    }

    if (isExpired) {
      setError(language === 'en' ? "Your verification code has expired. Please click Resend Code." : "កូដផ្ទៀងផ្ទាត់បានផុតកំណត់។ សូមចុច 'ផ្ញើកូដឡើងវិញ'។");
      return;
    }

    if (attemptsExceeded) {
      setError(language === 'en' ? "Too many failed attempts. Please request a new code." : "ព្យាយាមខុសច្រើនដងពេក។ សូមស្នើសុំកូដថ្មី។");
      return;
    }

    setLoading(true);
    try {
      const res = await verifyEmail(cleanCode, targetEmail);
      if (res.success) {
        setVerified(true);
        setTimeout(() => {
          onSuccess();
        }, 2000);
      } else {
        setError(res.error || "Verification failed. Please check the code.");
        if (res.attemptsLeft !== undefined) {
          setAttemptsLeft(res.attemptsLeft);
        }
        if (res.expired) {
          setIsExpired(true);
        }
        if (res.attemptsExceeded) {
          setAttemptsExceeded(true);
        }
      }
    } catch (err) {
      setError(language === 'en' ? "An error occurred during verification. Please try again." : "មានបញ្ហាក្នុងការផ្ទៀងផ្ទាត់។ សូមព្យាយាមម្តងទៀត។");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (cooldown > 0 || resending) return;

    setError('');
    setInfoMessage('');
    setResending(true);

    try {
      const res = await resendVerification(targetEmail);
      if (res.success) {
        setInfoMessage(language === 'en' ? "A new 6-digit verification code has been sent to your email address!" : "កូដ ៦ ខ្ទង់ថ្មីត្រូវបានផ្ញើទៅកាន់អ៊ីមែលរបស់អ្នករួចរាល់ហើយ!");
        // Reset state
        setTimeLeft(300); // 5 minutes reset
        setIsExpired(false);
        setAttemptsExceeded(false);
        setAttemptsLeft(5);
        setCooldown(10); // 10s cooldown reset
        setCode('');
      } else {
        setError(res.error || "Failed to resend verification code.");
      }
    } catch (err) {
      setError(language === 'en' ? "Network error. Failed to resend code." : "មានបញ្ហាបណ្តាញ។ មិនអាចផ្ញើកូដឡើងវិញបានទេ។");
    } finally {
      setResending(false);
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950 transition-colors duration-200">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-md relative z-10"
        id="verification-container"
      >
        <div className="bg-white dark:bg-slate-900 shadow-xl dark:shadow-2xl/40 rounded-2xl border border-slate-200/60 dark:border-slate-800/80 p-8 text-center overflow-hidden">
          
          <AnimatePresence mode="wait">
            {!verified ? (
              <motion.div
                key="verify-prompt"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {/* Icon badge */}
                <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900/40 flex items-center justify-center mb-5 text-blue-600 dark:text-blue-400 shadow-inner">
                  <Mail className="w-8 h-8 animate-pulse" />
                </div>

                {/* Header */}
                <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                  {language === 'en' ? "Verify Your Email" : "ផ្ទៀងផ្ទាត់អ៊ីមែលរបស់អ្នក"}
                </h2>
                
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2.5 max-w-sm mx-auto leading-relaxed">
                  {language === 'en' 
                    ? "We sent a 6-digit verification OTP code to " 
                    : "យើងបានផ្ញើកូដផ្ទៀងផ្ទាត់ OTP ៦ ខ្ទង់ទៅកាន់ "
                  }
                  <strong className="text-blue-600 dark:text-blue-400 font-bold block mt-1 text-sm break-all">{targetEmail || "your email address"}</strong>
                </p>

                {/* Timer & Expiration Banner */}
                <div className="mt-5 p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/50 dark:border-slate-800/80 flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2 font-medium text-slate-600 dark:text-slate-400">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span>{language === 'en' ? "Code Expiration:" : "កូដផុតកំណត់ក្នុងរយៈ:"}</span>
                  </div>
                  <span className={`font-mono font-black text-sm px-2.5 py-0.5 rounded-lg ${
                    isExpired 
                      ? 'bg-rose-100 text-rose-600 dark:bg-rose-950/50 dark:text-rose-400' 
                      : 'bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300'
                  }`}>
                    {isExpired ? (language === 'en' ? "EXPIRED" : "ផុតកំណត់") : formatTime(timeLeft)}
                  </span>
                </div>

                {/* Success Info Message */}
                {infoMessage && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-4 p-3 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900/30 rounded-xl text-xs flex items-start space-x-2 font-medium text-left"
                  >
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{infoMessage}</span>
                  </motion.div>
                )}

                {/* Error Box */}
                {error && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-4 p-3 bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 border border-rose-100 dark:border-rose-900/30 rounded-xl text-xs flex items-start space-x-2 font-medium text-left"
                  >
                    <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <span>{error}</span>
                      {attemptsLeft !== null && attemptsLeft > 0 && !attemptsExceeded && !isExpired && (
                        <p className="mt-1 text-[11px] font-bold text-rose-700 dark:text-rose-300">
                          {language === 'en' ? `Attempts remaining: ${attemptsLeft}/5` : `ចំនួនដងដែលនៅសល់៖ ${attemptsLeft}/៥`}
                        </p>
                      )}
                    </div>
                  </motion.div>
                )}

                {/* Verification Form */}
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                      {language === 'en' ? "Enter 6-Digit Verification Code" : "បញ្ចូលកូដផ្ទៀងផ្ទាត់ ៦ ខ្ទង់"}
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        maxLength={6}
                        disabled={isExpired || attemptsExceeded}
                        value={code}
                        onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))}
                        placeholder="123456"
                        className="block w-full text-center tracking-[0.5em] sm:tracking-[0.6em] pl-4 py-3.5 bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 rounded-2xl text-2xl font-black text-slate-900 dark:text-white placeholder:tracking-normal placeholder:font-normal placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all font-mono disabled:opacity-50"
                        id="otp-input-field"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading || code.trim().length !== 6 || isExpired || attemptsExceeded}
                    className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] transition-all disabled:opacity-50 cursor-pointer shadow-md shadow-blue-600/10"
                    id="submit-otp-btn"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4.5 h-4.5 animate-spin" />
                        <span>{language === 'en' ? "Verifying..." : "កំពុងផ្ទៀងផ្ទាត់..."}</span>
                      </>
                    ) : (
                      <>
                        <KeyRound className="w-4 h-4" />
                        <span>{language === 'en' ? "Verify & Create Account" : "ផ្ទៀងផ្ទាត់ និងបង្កើតគណនី"}</span>
                      </>
                    )}
                  </button>
                </form>

                {/* Resend Code Section */}
                <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800/60 flex flex-col items-center justify-center space-y-3">
                  <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center space-x-1.5">
                    <span>{language === 'en' ? "Didn't receive the code?" : "មិនបានទទួលកូដមែនទេ?"}</span>
                    <button
                      type="button"
                      onClick={handleResend}
                      disabled={cooldown > 0 || resending}
                      className="text-blue-600 dark:text-blue-400 font-extrabold hover:underline disabled:opacity-50 disabled:no-underline cursor-pointer inline-flex items-center space-x-1"
                      id="resend-otp-btn"
                    >
                      <RefreshCw className={`w-3.5 h-3.5 mr-0.5 ${resending ? 'animate-spin' : ''}`} />
                      <span>
                        {resending 
                          ? (language === 'en' ? "Sending..." : "កំពុងផ្ញើ...") 
                          : cooldown > 0 
                            ? `${language === 'en' ? "Resend Code" : "ផ្ញើកូដឡើងវិញ"} (${cooldown}s)`
                            : (language === 'en' ? "Resend Code" : "ផ្ញើកូដឡើងវិញ")
                        }
                      </span>
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      logout();
                      onBackToLogin();
                    }}
                    className="inline-flex items-center space-x-1 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 font-medium cursor-pointer transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>{language === 'en' ? "Back to Registration" : "ត្រឡប់ទៅការចុះឈ្មោះ"}</span>
                  </button>
                </div>
              </motion.div>
            ) : (
              /* VERIFIED SUCCESS STATE */
              <motion.div
                key="verify-success"
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="py-6 space-y-5"
              >
                <div className="w-20 h-20 mx-auto rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/30 flex items-center justify-center text-emerald-500 shadow-lg shadow-emerald-500/10">
                  <ShieldCheck className="w-12 h-12 animate-bounce" />
                </div>

                <div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                    {language === 'en' ? "Account Verified!" : "បានផ្ទៀងផ្ទាត់ជោគជ័យ!"}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs mx-auto mt-1.5 leading-relaxed">
                    {language === 'en' 
                      ? "Your email address has been verified and your SabayCode account was successfully created." 
                      : "អ៊ីមែលរបស់អ្នកត្រូវបានផ្ទៀងផ្ទាត់ជោគជ័យ ហើយគណនីសប្បាយកូដត្រូវបានបង្កើតរួចរាល់។"}
                  </p>
                </div>

                {/* XP Reward Presentation */}
                <div className="inline-flex items-center space-x-2 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 px-4 py-2.5 rounded-2xl text-amber-600 dark:text-amber-400 font-bold text-sm animate-pulse">
                  <span>✨ +100 XP {language === 'en' ? "WELCOME BONUS" : "រង្វាន់ស្វាគមន៍"} ✨</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </motion.div>
    </div>
  );
};
