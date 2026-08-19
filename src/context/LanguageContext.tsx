import { useApp } from './AppContext';

export const useLanguage = () => {
  const { language, setLanguage } = useApp();
  return { language, setLanguage };
};
