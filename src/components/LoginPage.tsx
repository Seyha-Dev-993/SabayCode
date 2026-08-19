import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useAuth } from '../context/AuthContext';
import { authTranslations } from '../utils/authTranslations';
import { 
  Eye, EyeOff, Mail, Lock, AlertTriangle, Sparkles, 
  ChevronRight, Loader2, KeyRound, CheckCircle, ArrowLeft, X, ShieldCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SabayCodeLogo } from './SabayCodeLogo';

interface LoginPageProps {
  onNavigateToRegister: () => void;
  onSuccess: () => void;
  onNavigateToVerifyEmail?: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onNavigateToRegister, onSuccess, onNavigateToVerifyEmail }) => {
  const { language } = useApp();
  const { currentUser, login, loginWithGoogle, loginWithMicrosoft, loginWithFacebook, sendPasswordReset, resetPasswordWithToken } = useAuth();
  const t = authTranslations[language];

  // Auth fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // UI state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Forgot password wizard state
  const [resetStep, setResetStep] = useState<'none' | 'email-input' | 'sent-success' | 'new-password' | 'finished' >('none');
  const [resetEmail, setResetEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [resetError, setResetError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError(language === 'en' ? "Please fill in all fields." : "សូមបំពេញគ្រប់ប្រអប់។");
      return;
    }

    setLoading(true);
    try {
      const res = await login(email, password);
      if (res.success || (res as { isUnverified?: boolean }).isUnverified) {
        onSuccess();
      } else {
        setError(res.error || "Incorrect email or password.");
      }
    } catch (err) {
      setError("Failed to connect to authentication services.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError('');
    setLoading(true);
    try {
      const res = await loginWithGoogle();
      if (res.success) {
        onSuccess();
      } else if (res.error) {
        setError(res.error);
      }
    } catch (err: any) {
      setError(err?.message || "Google sign-in failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleMicrosoftSignIn = async () => {
    setError('');
    setLoading(true);
    try {
      const res = await loginWithMicrosoft();
      if (res.success) {
        onSuccess();
      } else if (res.error) {
        setError(res.error);
      }
    } catch (err: any) {
      setError(err?.message || "Microsoft sign-in failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleFacebookSignIn = async () => {
    setError('');
    setLoading(true);
    try {
      const res = await loginWithFacebook();
      if (res.success) {
        onSuccess();
      } else if (res.error) {
        setError(res.error);
      }
    } catch (err: any) {
      setError(err?.message || "Facebook sign-in failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleOAuthClick = (provider: 'google' | 'facebook') => {
    if (provider === 'google') {
      handleGoogleSignIn();
    } else {
      handleFacebookSignIn();
    }
  };

  // Forgot Password Actions
  const handleRequestResetLink = async (e: React.FormEvent) => {
    e.preventDefault();
    setResetError('');
    if (!resetEmail) return;

    setLoading(true);
    try {
      const res = await sendPasswordReset(resetEmail);
      if (res.success) {
        setResetStep('sent-success');
      } else {
        setResetError(res.error || "No account found with this email.");
      }
    } catch (err) {
      setResetError("Error contacting reset servers.");
    } finally {
      setLoading(false);
    }
  };

  const handleSaveNewPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setResetError('');
    if (newPassword.length < 6) {
      setResetError(t.errPasswordLength);
      return;
    }

    setLoading(true);
    try {
      const res = await resetPasswordWithToken(resetEmail, newPassword);
      if (res.success) {
        setResetStep('finished');
        // Pre-fill login email with the newly reset one
        setEmail(resetEmail);
      } else {
        setResetError("Failed to update password.");
      }
    } catch (err) {
      setResetError("Error resetting password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950 transition-colors duration-200">
      {/* Background radial highlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 h-72 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="w-full max-w-md relative z-10"
        id="login-container"
      >
        <div className="bg-white dark:bg-slate-900 shadow-xl dark:shadow-2xl/40 rounded-2xl border border-slate-200/60 dark:border-slate-800/80 p-8 overflow-hidden">
          
          <AnimatePresence mode="wait">
            {resetStep === 'none' ? (
              /* LOGIN STATE */
              <motion.div
                key="login-form-view"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2 }}
              >
                {/* Header Logo */}
                <div className="text-center mb-6">
                  <div className="inline-flex justify-center mb-4 cursor-pointer" onClick={onNavigateToRegister}>
                    <SabayCodeLogo size={44} showText={true} />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                    {t.welcomeBack}
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 max-w-sm mx-auto">
                    {t.continueJourney}
                  </p>
                </div>

                {/* General Login Error */}
                {error && (
                  <div className="mb-4 p-3 bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 border border-rose-100 dark:border-rose-900/30 rounded-xl text-xs flex items-start space-x-2 font-medium">
                    <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span className="whitespace-pre-line break-words">{error}</span>
                  </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      {t.email}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t.emailPlaceholder}
                        className="block w-full pl-10 pr-3.5 py-2.5 bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                        {t.password}
                      </label>
                      <button
                        type="button"
                        onClick={() => setResetStep('email-input')}
                        className="text-xs text-blue-600 dark:text-blue-400 font-extrabold hover:underline cursor-pointer"
                      >
                        {t.forgotPassword}
                      </button>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Lock className="w-4 h-4" />
                      </div>
                      <input
                        type={showPassword ? "text" : "password"}
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="block w-full pl-10 pr-10 py-2.5 bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Log In Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] transition-all disabled:opacity-75 cursor-pointer shadow-md shadow-blue-600/10"
                    id="submit-login-btn"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4.5 h-4.5 animate-spin" />
                        <span>{language === 'en' ? "Signing In..." : "កំពុងចូលគណនី..."}</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4.5 h-4.5 fill-white/10" />
                        <span>{t.logIn}</span>
                      </>
                    )}
                  </button>
                </form>

                {/* Social Login Section */}
                <div className="mt-6 space-y-4">
                  <div className="relative flex items-center justify-center">
                    <div className="border-t border-slate-200 dark:border-slate-800 w-full" />
                    <span className="bg-white dark:bg-slate-900 px-3 text-[11px] font-bold uppercase tracking-wider text-slate-400 shrink-0">
                      {language === 'en' ? 'Or Sign In With' : 'ឬ ចូលប្រើជាមួយ'}
                    </span>
                    <div className="border-t border-slate-200 dark:border-slate-800 w-full" />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {/* Google Account */}
                    <button
                      type="button"
                      onClick={handleGoogleSignIn}
                      disabled={loading}
                      className="flex items-center justify-center space-x-2 py-2.5 px-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-200 text-xs font-bold transition-all cursor-pointer shadow-xs disabled:opacity-50"
                    >
                      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                      </svg>
                      <span>Google</span>
                    </button>

                    {/* Microsoft Account */}
                    <button
                      type="button"
                      onClick={handleMicrosoftSignIn}
                      disabled={loading}
                      className="flex items-center justify-center space-x-2 py-2.5 px-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-200 text-xs font-bold transition-all cursor-pointer shadow-xs disabled:opacity-50"
                    >
                      <svg className="w-4 h-4 shrink-0" viewBox="0 0 23 23">
                        <path fill="#f35325" d="M1 1h10v10H1z"/>
                        <path fill="#81bc06" d="M12 1h10v10H12z"/>
                        <path fill="#05a6f0" d="M1 12h10v10H1z"/>
                        <path fill="#ffba08" d="M12 12h10v10H12z"/>
                      </svg>
                      <span>Microsoft</span>
                    </button>
                  </div>
                </div>



                {/* Footer Switcher */}
                <div className="mt-8 text-center text-xs text-slate-500 dark:text-slate-400 space-y-2.5">
                  <div>
                    <span>{t.dontHaveAccount} </span>
                    <button
                      type="button"
                      onClick={onNavigateToRegister}
                      className="text-blue-600 dark:text-blue-400 font-extrabold hover:underline cursor-pointer"
                      id="switch-to-register"
                    >
                      {t.signUp}
                    </button>
                  </div>
                </div>
              </motion.div>
            ) : (
              /* FORGOT PASSWORD WIZARD FLOW */
              <motion.div
                key="reset-wizard-view"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="py-2 text-left"
              >
                <button
                  onClick={() => { setResetStep('none'); setResetError(''); }}
                  className="flex items-center space-x-1 text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-100 mb-4 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>{t.backToLogin}</span>
                </button>

                {resetStep === 'email-input' && (
                  <form onSubmit={handleRequestResetLink} className="space-y-4">
                    <div className="mb-4">
                      <KeyRound className="w-10 h-10 text-blue-500 mb-3" />
                      <h3 className="text-lg font-black text-slate-900 dark:text-white">{t.forgotTitle}</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                        {t.forgotInstructions}
                      </p>
                    </div>

                    {resetError && (
                      <div className="p-3 bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 border border-rose-100 dark:border-rose-900/30 rounded-xl text-xs flex items-start space-x-2 font-medium">
                        <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                        <span>{resetError}</span>
                      </div>
                    )}

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                        {t.email}
                      </label>
                      <input
                        type="email"
                        required
                        value={resetEmail}
                        onChange={(e) => setResetEmail(e.target.value)}
                        placeholder="example@sabaicode.com"
                        className="block w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center py-2.5 px-4 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all cursor-pointer shadow-md"
                    >
                      {loading ? <Loader2 className="w-4.5 h-4.5 animate-spin" /> : t.sendResetLink}
                    </button>
                  </form>
                )}

                {resetStep === 'sent-success' && (
                  <div className="space-y-4 text-center">
                    <div className="p-3.5 bg-emerald-50 dark:bg-emerald-950/20 rounded-full inline-flex mx-auto border border-emerald-100 dark:border-emerald-900/30">
                      <CheckCircle className="w-8 h-8 text-emerald-500" />
                    </div>
                    <h3 className="text-lg font-black text-slate-900 dark:text-white">
                      {language === 'en' ? "Reset Link Dispatched" : "តំណកំណត់ឡើងវិញត្រូវបានបញ្ជូន"}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 px-4 leading-relaxed">
                      {t.resetEmailSent}
                    </p>
                    <div className="bg-slate-50 dark:bg-slate-950/50 border border-slate-200/50 dark:border-slate-850 p-4 rounded-xl text-left font-mono text-[10px] text-slate-500">
                      <p className="text-[9px] text-blue-500 font-bold mb-1 uppercase tracking-wider">Simulated Inbox Dispatch:</p>
                      <p><strong>From:</strong> auth@sabaicode.com</p>
                      <p><strong>To:</strong> {resetEmail}</p>
                      <p className="mt-2 text-blue-600 dark:text-blue-400 font-bold hover:underline cursor-pointer text-center py-1 bg-white dark:bg-slate-900 border border-blue-100 dark:border-blue-950 rounded" onClick={() => setResetStep('new-password')}>
                        {language === 'en' ? "→ Click to open simulated link" : "→ ចុចទីនេះដើម្បីបើកតំណសាកល្បង"}
                      </p>
                    </div>
                  </div>
                )}

                {resetStep === 'new-password' && (
                  <form onSubmit={handleSaveNewPassword} className="space-y-4">
                    <div className="mb-4">
                      <Lock className="w-10 h-10 text-blue-500 mb-3" />
                      <h3 className="text-lg font-black text-slate-900 dark:text-white">{t.enterNewPassword}</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        {language === 'en' ? "Please establish a strong password for security." : "សូមកំណត់ពាក្យសម្ងាត់រឹងមាំដើម្បីសុវត្ថិភាព។"}
                      </p>
                    </div>

                    {resetError && (
                      <div className="p-3 bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 border border-rose-100 dark:border-rose-900/30 rounded-xl text-xs flex items-start space-x-2 font-medium">
                        <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                        <span>{resetError}</span>
                      </div>
                    )}

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                        {t.password}
                      </label>
                      <input
                        type="password"
                        required
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder={t.newPasswordPlaceholder}
                        className="block w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center py-2.5 px-4 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all cursor-pointer shadow-md"
                    >
                      {loading ? <Loader2 className="w-4.5 h-4.5 animate-spin" /> : t.changePasswordButton}
                    </button>
                  </form>
                )}

                {resetStep === 'finished' && (
                  <div className="space-y-4 text-center">
                    <div className="p-3 bg-emerald-50 dark:bg-emerald-950/20 rounded-full inline-flex mx-auto">
                      <CheckCircle className="w-10 h-10 text-emerald-500" />
                    </div>
                    <h3 className="text-lg font-black text-slate-900 dark:text-white">
                      {language === 'en' ? "Password Restored" : "ពាក្យសម្ងាត់ត្រូវបានប្តូរជោគជ័យ"}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 px-2 leading-relaxed">
                      {t.passwordChangedSuccess}
                    </p>
                    <button
                      onClick={() => setResetStep('none')}
                      className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-xs font-bold text-white rounded-xl transition cursor-pointer shadow-md"
                    >
                      {t.logIn}
                    </button>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </motion.div>
    </div>
  );
};
