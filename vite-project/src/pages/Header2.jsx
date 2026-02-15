import { useSite } from '../context/SiteContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Header = () => {
  // Context'ten verileri çekiyoruz
  const { isDarkMode, toggleTheme, lang, toggleLang } = useSite();

  return (
    // Ana konteynere dinamik dark mode class'ı ekliyoruz
   <section className={`min-h-screen flex flex-col px-4 lg:px-48 transition-colors duration-300 ${isDarkMode ? 'bg-[#252128]' : 'bg-[#F4F4F4]'}`}>
      
      <ToastContainer />

      {/* Üst Ayar Çubuğu (Görseldeki Kısım) */}
   <div className="relative z-50 w-full flex justify-end items-center py-6 gap-4 font-bold text-sm tracking-wider">
        {/* Dark Mode Switch */}
 <div 
    className="flex items-center gap-3 cursor-pointer p-2 hover:opacity-80 active:scale-95 transition-all" 
    onClick={(e) => {
      console.log("Tema butonuna basıldı!"); // Konsolda bunu görüyor musun?
      toggleTheme();
    }}
  >
          <div className="relative w-12 h-6 bg-[#E92577] rounded-full transition-all">
            <div className={`absolute top-1 w-4 h-4 bg-[#FFE86E] rounded-full transition-all duration-300 ${isDarkMode ? 'left-7' : 'left-1'}`} />
          </div>
          <span className={`${isDarkMode ? 'text-[#D9D9D9]' : 'text-[#777777]'}`}> DARK MODE</span>
        </div>

        <div className="text-[#777777]">|</div>

        {/* Dil Seçeneği */}
        <div 
          className="cursor-pointer"
          onClick={() => toggleLang(lang === 'EN' ? 'TR' : 'EN')}
        >
          <span className="text-[#E92577]">{lang === 'EN' ? 'TÜRKÇE' : 'ENGLISH'}</span>
          <span className="text-[#777777]">'{lang === 'EN' ? 'YE GEÇ' : ' SWITCH'}</span>
        </div>
      </div>

      {/* Ana İçerik Alanı (Ortalanmış) */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 flex-grow">
        
        {/* Sol İçerik Alanı */}
        <div className="flex-1 z-10">
          <p className="text-2xl md:text-3xl mb-6 flex items-center gap-2">
            Hi! <span className="animate-bounce">👋</span>
          </p>
          
          <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-2xl relative transition-colors">
            <span className="relative inline-block">
              I'm Kemal.
              <span className={`absolute bottom-2 left-0 w-full h-4 bg-[#E92577] -z-10 opacity-80`}></span>
            </span>
            {" "}I'm a frontend developer. I can craft solid and scalable frontend products. Let's meet!
          </h1>

          {/* Sosyal Medya İkonları */}
          <div className="flex gap-4 mt-12 mb-10">
            <a href="#" className="hover:opacity-75 transition-opacity bg-white p-2 rounded-lg">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a href="#" className="hover:opacity-75 transition-opacity bg-white p-2 rounded-lg">
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className="w-6 h-6" />
            </a>
          </div>

          <div className="space-y-6">
            <h3 className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Currently <span className="text-[#E92577] font-medium">Freelancing</span> for 
              <span className="text-[#E92577] font-medium text-nowrap"> UX, UI, & Web Design</span> Project.
            </h3>
            <h3 className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Invite me to join your team → 
              <a href="mailto:pskkemalakalin@gmail.com" className="text-[#E92577] underline ml-1 font-medium">
                pskkemalakalin@gmail.com
              </a>
            </h3>
          </div>
        </div>

        {/* Sağ Görsel Alanı */}
        <div className="flex-1 flex justify-center lg:justify-end relative">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full bg-[#E92577] rounded-3xl transition-transform hover:scale-105"></div>
            <img 
              src="/src/assets/img/0.jpeg" 
              alt="Kemal" 
              className={`relative w-[300px] md:w-[400px] h-[350px] md:h-[450px] object-cover rounded-3xl border-4 ${isDarkMode ? 'border-[#252128]' : 'border-[#F4F4F4]'} shadow-xl`}
            />
          </div>
        </div>
      </div>

  
    </section>
  );
};

export default Header;