import axios from 'axios';
import { useSite } from '../context/SiteContext';
import { toast } from 'react-toastify';

export const Footer = () => {
  const { isDarkMode, t, lang } = useSite();

const handleHireMe = async () => {
    const loadingToast = toast.loading(lang === 'EN' ? "Sending request..." : "İstek gönderiliyor...");
    
    try {
      // JSONPlaceholder CORS konusunda çok daha rahattır.
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: 'Portfolio Contact',
        body: 'Kemal Akalin - Frontend Dev',
        userId: 1,
      });

      toast.update(loadingToast, { 
        render: lang === 'EN' ? "API Success! 🚀 (JSONPlaceholder)" : "API Başarılı! 🚀 (JSONPlaceholder)", 
        type: "success", 
        isLoading: false,
        autoClose: 3000 
      });

      console.log("API Response:", response.data);
    } catch (error) {
      toast.update(loadingToast, { 
        render: lang === 'EN' ? "API Error! Please check console." : "API Hatası! Konsolu kontrol edin.", 
        type: "error", 
        isLoading: false,
        autoClose: 3000 
      });
      console.error("API Error Detayı:", error);
    }
  };

  return (
    <footer className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-[#484148] text-white' : 'bg-[#F4F4F4] text-gray-900'}`}>
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center md:items-start justify-center gap-12 md:gap-24">
        
        <div className="max-w-xl text-center md:text-right">
          <h2 className={`text-4xl md:text-5xl font-bold leading-tight mb-8 ${isDarkMode ? 'text-[#AEB0B4]' : 'text-[#1F2937]'}`}>
            {t.footerTitle}
          </h2>
          {/* Sahte API İsteğini Tetikleyen Buton */}
          <button 
            onClick={handleHireMe}
            className="bg-[#E92577] text-white px-8 py-3 rounded-full font-bold hover:scale-105 active:scale-95 transition-all shadow-lg"
          >
            {lang === 'EN' ? "API Request 👋" : "API İsteği👋"}
          </button>
        </div>

        <div className="flex flex-col items-center md:items-start space-y-3 text-xl font-medium">
          <a href="#" className="text-[#1769FF] hover:opacity-80">Github</a>
          <a href="#" className={isDarkMode ? 'text-[#D9D9D9]' : 'text-[#0A0A14]'}>Personal Blog</a>
          <a href="#" className="text-[#0077B5]">Linkedin</a>
          <a href="mailto:pskkemalakalin@gmail.com" className="text-[#AF0C48]">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;