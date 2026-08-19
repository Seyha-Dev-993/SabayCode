import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { useAuth } from '../context/AuthContext';
import { authTranslations } from '../utils/authTranslations';
import { 
  Eye, EyeOff, Mail, Lock, User, Phone, CheckCircle, AlertTriangle, 
  Sparkles, ShieldCheck, X, ChevronRight, Loader2, ArrowLeft, Globe 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SabayCodeLogo } from './SabayCodeLogo';

interface RegisterPageProps {
  onNavigateToLogin: () => void;
  onSuccess: () => void;
  onNavigateToVerifyEmail?: () => void;
}

export const RegisterPage: React.FC<RegisterPageProps> = ({ onNavigateToLogin, onSuccess, onNavigateToVerifyEmail }) => {
  const { language, theme } = useApp();
  const { register, loginWithGoogle, loginWithMicrosoft, loginWithFacebook } = useAuth();
  const t = authTranslations[language];

  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  // Field touch/focus states
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Show/Hide Password states
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // UI state
  const [loading, setLoading] = useState(false);
  const [generalError, setGeneralError] = useState('');
  const [showTermsModal, setShowTermsModal] = useState<boolean>(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState<boolean>(false);

  // Real-time Validation States
  const [emailError, setEmailError] = useState('');
  const [passwordStrength, setPasswordStrength] = useState<'weak' | 'medium' | 'strong' | ''>('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  // Validate email in real time
  useEffect(() => {
    if (!email) {
      setEmailError('');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError(t.errEmailFormat);
    } else {
      setEmailError('');
    }
  }, [email, language]);

  // Evaluate password strength in real time
  useEffect(() => {
    if (!password) {
      setPasswordStrength('');
      setPasswordError('');
      return;
    }

    if (password.length < 6) {
      setPasswordStrength('weak');
      setPasswordError(t.errPasswordLength);
      return;
    }

    setPasswordError('');
    const hasNumbers = /\d/.test(password);
    const hasNonalphas = /\W/.test(password);
    const hasMixed = /[a-z]/.test(password) && /[A-Z]/.test(password);

    if (password.length >= 10 && hasNumbers && hasNonalphas && hasMixed) {
      setPasswordStrength('strong');
    } else if (password.length >= 8 && (hasNumbers || hasNonalphas)) {
      setPasswordStrength('medium');
    } else {
      setPasswordStrength('weak');
    }
  }, [password, language]);

  // Validate confirm password in real time
  useEffect(() => {
    if (!confirmPassword) {
      setConfirmPasswordError('');
      return;
    }
    if (password !== confirmPassword) {
      setConfirmPasswordError(t.errPasswordMatch);
    } else {
      setConfirmPasswordError('');
    }
  }, [password, confirmPassword, language]);

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGeneralError('');

    // Mark all as touched
    setTouched({ name: true, email: true, password: true, confirmPassword: true });

    // Validate all fields
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name.trim()) {
      setGeneralError(language === 'en' ? "Please enter your name." : "សូមបំពេញឈ្មោះរបស់អ្នក។");
      return;
    }
    if (!emailRegex.test(email)) {
      setGeneralError(t.errEmailFormat);
      return;
    }
    if (password.length < 6) {
      setGeneralError(t.errPasswordLength);
      return;
    }
    if (password !== confirmPassword) {
      setGeneralError(t.errPasswordMatch);
      return;
    }
    if (!agreeTerms) {
      setGeneralError(t.errTerms);
      return;
    }

    setLoading(true);
    try {
      const cleanEmail = email.trim().toLowerCase();
      sessionStorage.setItem('sabaicode_pending_email', cleanEmail);
      const res = await register(name, cleanEmail, password, phone);
      if (res.success) {
        // Trigger success callback
        onSuccess();
      } else {
        setGeneralError(res.error || "An error occurred during registration.");
      }
    } catch (err) {
      setGeneralError("Authentication server failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setGeneralError('');
    setLoading(true);
    try {
      const res = await loginWithGoogle();
      if (res.success) {
        onSuccess();
      } else if (res.error) {
        setGeneralError(res.error);
      }
    } catch (err: any) {
      setGeneralError(err?.message || "Google sign-in failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleMicrosoftSignIn = async () => {
    setGeneralError('');
    setLoading(true);
    try {
      const res = await loginWithMicrosoft();
      if (res.success) {
        onSuccess();
      } else if (res.error) {
        setGeneralError(res.error);
      }
    } catch (err: any) {
      setGeneralError(err?.message || "Microsoft sign-in failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleFacebookSignIn = async () => {
    setGeneralError('');
    setLoading(true);
    try {
      const res = await loginWithFacebook();
      if (res.success) {
        onSuccess();
      } else if (res.error) {
        setGeneralError(res.error);
      }
    } catch (err: any) {
      setGeneralError(err?.message || "Facebook sign-in failed.");
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

  // Helpers for Password Strength Badge UI
  const getStrengthColor = () => {
    if (passwordStrength === 'strong') return 'bg-emerald-500';
    if (passwordStrength === 'medium') return 'bg-amber-500';
    return 'bg-rose-500';
  };

  const getStrengthLabel = () => {
    if (passwordStrength === 'strong') return t.strengthStrong;
    if (passwordStrength === 'medium') return t.strengthMedium;
    return t.strengthWeak;
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
        id="register-container"
      >
        <div className="bg-white dark:bg-slate-900 shadow-xl dark:shadow-2xl/40 rounded-2xl border border-slate-200/60 dark:border-slate-800/80 p-8 overflow-hidden">
          {/* Card Head / Logo */}
          <div className="text-center mb-6">
            <div className="inline-flex justify-center mb-4 cursor-pointer" onClick={onNavigateToLogin}>
              <SabayCodeLogo size={44} showText={true} />
            </div>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              {t.createAccount}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 max-w-sm mx-auto leading-relaxed">
              {t.joinThousands}
            </p>
          </div>

          {/* General Error Alert */}
          {generalError && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mb-4 p-3 bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 border border-rose-100 dark:border-rose-900/30 rounded-xl text-xs flex items-start space-x-2 font-medium"
            >
              <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
              <span className="whitespace-pre-line break-words">{generalError}</span>
            </motion.div>
          )}

          {/* Register Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                {t.fullName} <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onBlur={() => handleBlur('name')}
                  placeholder={t.fullNamePlaceholder}
                  className="block w-full pl-10 pr-3.5 py-2.5 bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
              </div>
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                {t.email} <span className="text-rose-500">*</span>
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
                  onBlur={() => handleBlur('email')}
                  placeholder={t.emailPlaceholder}
                  className={`block w-full pl-10 pr-3.5 py-2.5 bg-slate-50 dark:bg-slate-950/60 border rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all ${
                    touched.email && emailError 
                      ? 'border-rose-400 focus:border-rose-500' 
                      : 'border-slate-200 dark:border-slate-800/80 focus:border-blue-500'
                  }`}
                />
              </div>
              {touched.email && emailError && (
                <p className="text-[11px] text-rose-500 font-medium mt-1 pl-1 flex items-center space-x-1">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>{emailError}</span>
                </p>
              )}
            </div>

            {/* Phone Number (Optional) */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                {t.phone}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Phone className="w-4 h-4" />
                </div>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={t.phonePlaceholder}
                  className="block w-full pl-10 pr-3.5 py-2.5 bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                  {t.password} <span className="text-rose-500">*</span>
                </label>
                {/* Real-time Password Strength Indicator */}
                {passwordStrength && (
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full text-white ${getStrengthColor()} transition-all duration-300`}>
                    {getStrengthLabel()}
                  </span>
                )}
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
                  onBlur={() => handleBlur('password')}
                  placeholder={t.passwordPlaceholder}
                  className={`block w-full pl-10 pr-10 py-2.5 bg-slate-50 dark:bg-slate-950/60 border rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all ${
                    touched.password && passwordError 
                      ? 'border-rose-400 focus:border-rose-500' 
                      : 'border-slate-200 dark:border-slate-800/80 focus:border-blue-500'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {touched.password && passwordError && (
                <p className="text-[11px] text-rose-500 font-medium mt-1 pl-1 flex items-center space-x-1">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>{passwordError}</span>
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                {t.confirmPassword} <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onBlur={() => handleBlur('confirmPassword')}
                  placeholder={t.confirmPasswordPlaceholder}
                  className={`block w-full pl-10 pr-10 py-2.5 bg-slate-50 dark:bg-slate-950/60 border rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all ${
                    touched.confirmPassword && confirmPasswordError 
                      ? 'border-rose-400 focus:border-rose-500' 
                      : 'border-slate-200 dark:border-slate-800/80 focus:border-blue-500'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                >
                  {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {touched.confirmPassword && confirmPasswordError && (
                <p className="text-[11px] text-rose-500 font-medium mt-1 pl-1 flex items-center space-x-1">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>{confirmPasswordError}</span>
                </p>
              )}
            </div>

            {/* Terms of Service Checkbox */}
            <div className="flex items-start mt-1">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  required
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="w-4.5 h-4.5 border border-slate-300 rounded bg-slate-50 focus:ring-3 focus:ring-blue-300 dark:bg-slate-700 dark:border-slate-600 dark:focus:ring-blue-600 accent-blue-600 cursor-pointer"
                />
              </div>
              <label htmlFor="terms" className="ml-2 text-xs text-slate-500 dark:text-slate-400 leading-normal select-none">
                {language === 'en' ? (
                  <>
                    I agree to the{" "}
                    <button type="button" onClick={() => setShowTermsModal(true)} className="text-blue-600 dark:text-blue-400 font-bold hover:underline cursor-pointer">Terms of Service</button>
                    {" "}and{" "}
                    <button type="button" onClick={() => setShowPrivacyModal(true)} className="text-blue-600 dark:text-blue-400 font-bold hover:underline cursor-pointer">Privacy Policy</button>
                  </>
                ) : (
                  <>
                    ខ្ញុំយល់ព្រមតាម{" "}
                    <button type="button" onClick={() => setShowTermsModal(true)} className="text-blue-600 dark:text-blue-400 font-bold hover:underline cursor-pointer">លក្ខខណ្ឌប្រើប្រាស់</button>
                    {" "}និង{" "}
                    <button type="button" onClick={() => setShowPrivacyModal(true)} className="text-blue-600 dark:text-blue-400 font-bold hover:underline cursor-pointer">គោលការណ៍ឯកជនភាព</button>
                  </>
                )}
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] transition-all disabled:opacity-75 cursor-pointer shadow-md shadow-blue-600/10"
              id="submit-register-btn"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4.5 h-4.5 animate-spin" />
                  <span>{language === 'en' ? "Creating Account..." : "កំពុងបង្កើតគណនី..."}</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4.5 h-4.5 fill-white/10" />
                  <span>{t.createAccountButton}</span>
                </>
              )}
            </button>
          </form>

          {/* Social Register Section */}
          <div className="mt-6 space-y-4">
            <div className="relative flex items-center justify-center">
              <div className="border-t border-slate-200 dark:border-slate-800 w-full" />
              <span className="bg-white dark:bg-slate-900 px-3 text-[11px] font-bold uppercase tracking-wider text-slate-400 shrink-0">
                {language === 'en' ? 'Or Register With' : 'ឬ ចុះឈ្មោះជាមួយ'}
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



          {/* Card Footer */}
          <div className="mt-8 text-center text-xs text-slate-500 dark:text-slate-400">
            <span>{t.alreadyHaveAccount} </span>
            <button
              type="button"
              onClick={onNavigateToLogin}
              className="text-blue-600 dark:text-blue-400 font-extrabold hover:underline cursor-pointer focus:outline-none"
              id="switch-to-login"
            >
              {t.logIn}
            </button>
          </div>
        </div>
      </motion.div>

      {/* 1. TERMS OF SERVICE MODAL */}
      <AnimatePresence>
        {showTermsModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowTermsModal(false)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white dark:bg-slate-900 rounded-2xl max-w-lg w-full p-4 sm:p-6 shadow-2xl border border-slate-200 dark:border-slate-800 relative z-10 overflow-hidden text-left my-auto max-h-[calc(100vh-2rem)] flex flex-col"
            >
              <div className="flex justify-between items-center pb-4 border-b border-slate-100 dark:border-slate-800">
                <h3 className="font-bold text-slate-900 dark:text-white text-base flex items-center space-x-2">
                  <ShieldCheck className="w-5 h-5 text-blue-500" />
                  <span>{language === 'en' ? "Terms of Service" : "លក្ខខណ្ឌប្រើប្រាស់សេវាកម្ម"}</span>
                </h3>
                <button onClick={() => setShowTermsModal(false)} className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="py-4 text-xs text-slate-500 dark:text-slate-400 space-y-3 max-h-[300px] overflow-y-auto pr-2 leading-relaxed">
                <p className="font-bold text-slate-700 dark:text-slate-300">1. Welcome to SabayCode</p>
                <p>
                  By registering an account on our bilingual learning platform, you agree to comply with our academic guidelines and code of conduct. SabayCode provides digital learning paths, interactive sandbox environments, and course materials free of charge.
                </p>
                <p className="font-bold text-slate-700 dark:text-slate-300">2. Account Responsibility</p>
                <p>
                  You are responsible for keeping your credentials and password secure. Simulated email verification and streak trackers are provided to encourage diligent and persistent study habits. Do not engage in copying other students' sandbox solutions.
                </p>
                <p className="font-bold text-slate-700 dark:text-slate-300">3. Educational Use Only</p>
                <p>
                  All lessons, references, and mini-projects are designed strictly for educational training purposes. All sandbox simulations execute code in a safe browser context without any server-side database writing or liability.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-right">
                <button
                  onClick={() => { setShowTermsModal(false); setAgreeTerms(true); }}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-xs font-bold text-white rounded-xl transition cursor-pointer"
                >
                  {language === 'en' ? "Accept & Close" : "យល់ព្រម និងបិទ"}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 2. PRIVACY POLICY MODAL */}
      <AnimatePresence>
        {showPrivacyModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPrivacyModal(false)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white dark:bg-slate-900 rounded-2xl max-w-lg w-full p-4 sm:p-6 shadow-2xl border border-slate-200 dark:border-slate-800 relative z-10 overflow-hidden text-left my-auto max-h-[calc(100vh-2rem)] flex flex-col"
            >
              <div className="flex justify-between items-center pb-4 border-b border-slate-100 dark:border-slate-800">
                <h3 className="font-bold text-slate-900 dark:text-white text-base flex items-center space-x-2">
                  <ShieldCheck className="w-5 h-5 text-blue-500" />
                  <span>{language === 'en' ? "Privacy Policy" : "គោលការណ៍ឯកជនភាព"}</span>
                </h3>
                <button onClick={() => setShowPrivacyModal(false)} className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="py-4 text-xs text-slate-500 dark:text-slate-400 space-y-3 max-h-[300px] overflow-y-auto pr-2 leading-relaxed">
                <p className="font-bold text-slate-700 dark:text-slate-300">1. Data Storage</p>
                <p>
                  SabayCode stores your registered name, simulated password hashes, phone number, and completed lessons strictly in the client's local database wrapper (localStorage). This ensures that your private data never leaves your device and is kept secure.
                </p>
                <p className="font-bold text-slate-700 dark:text-slate-300">2. Learning Analytics</p>
                <p>
                  We keep track of your active learning streak, quiz high-scores, sandbox codes, and earned XP so that you can view your progress reports, print your completion certificates, and resume exactly where you left off.
                </p>
                <p className="font-bold text-slate-700 dark:text-slate-300">3. Consent</p>
                <p>
                  By using this platform, you consent to this local storage. You can wipe all data, logs, and accounts instantly at any time from your Profile Settings panel.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-right">
                <button
                  onClick={() => { setShowPrivacyModal(false); setAgreeTerms(true); }}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-xs font-bold text-white rounded-xl transition cursor-pointer"
                >
                  {language === 'en' ? "Accept & Close" : "យល់ព្រម និងបិទ"}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
