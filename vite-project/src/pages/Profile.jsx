import { useSite } from '../context/SiteContext';

export const Profile = () => {
  // t ve isDarkMode'u Context'ten alıyoruz
  const { isDarkMode, t } = useSite();

  return (
    <section className={`py-16 md:py-24 px-6 font-sans transition-colors duration-300 ${isDarkMode ? 'bg-[#252128]' : 'bg-[#F4F4F4]'}`}>
      <div className="container mx-auto max-w-6xl">
        {/* Sayfa Başlığı */}
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 transition-colors ${isDarkMode ? 'text-[#AEB0B4]' : 'text-[#1F2937]'}`}>
          {t.profileTitle}
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Sol Blok: Basic Information Kartı */}
          <div className="flex-1">
            <div className={`p-8 md:p-10 rounded-xl shadow-[10px_10px_0px_0px_rgba(233,37,119,0.3)] relative transition-colors ${isDarkMode ? 'bg-[#1A1A1A]' : 'bg-white'}`}>
              <h3 className="text-[#E92577] text-2xl font-serif italic mb-8">
                {t.basicInfoTitle}
              </h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className={`font-bold w-40 shrink-0 ${isDarkMode ? 'text-[#D9D9D9]' : 'text-[#1F2937]'}`}>{t.labelBirthday}</span>
                  <p className={isDarkMode ? 'text-[#AEB0B4]' : 'text-[#1F2937]'}>{t.valueBirthday}</p>
                </div>
                
                <div className="flex gap-4">
                  <span className={`font-bold w-40 shrink-0 ${isDarkMode ? 'text-[#D9D9D9]' : 'text-[#1F2937]'}`}>{t.labelCity}</span>
                  <p className={isDarkMode ? 'text-[#AEB0B4]' : 'text-[#1F2937]'}>{t.valueCity}</p>
                </div>
                
                <div className="flex gap-4">
                  <span className={`font-bold w-40 shrink-0 ${isDarkMode ? 'text-[#D9D9D9]' : 'text-[#1F2937]'}`}>{t.labelEducation}</span>
                  <p className={isDarkMode ? 'text-[#AEB0B4]' : 'text-[#1F2937]'}>{t.valueEducation}</p>
                </div>
                
                <div className="flex gap-4">
                  <span className={`font-bold w-40 shrink-0 ${isDarkMode ? 'text-[#D9D9D9]' : 'text-[#1F2937]'}`}>{t.labelRole}</span>
                  <p className={isDarkMode ? 'text-[#AEB0B4]' : 'text-[#1F2937]'}>{t.valueRole}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sağ Blok: About Me */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="relative mb-8">
              <h3 className={`text-2xl font-bold relative inline-block z-10 ${isDarkMode ? 'text-[#D9D9D9]' : 'text-[#1F2937]'}`}>
                {t.aboutTitle}
              </h3>
              {/* Mavi/Pembe Vurgu Çizgisi */}
              <div className="absolute bottom-0.5 left-0 w-1/4 h-3 bg-[#3B82F6] opacity-70 -z-0"></div>
            </div>

            <div className={`space-y-6 text-lg leading-relaxed ${isDarkMode ? 'text-[#AEB0B4]' : 'text-gray-600'}`}>
              <p>{t.aboutText}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Profile;