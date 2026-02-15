import { useSite } from '../context/SiteContext';

export const Skills = () => {
  // Context'ten t ve isDarkMode'u çekiyoruz
  const { isDarkMode, t } = useSite();
  
  const skills = [
    { name: "JAVASCRIPT", img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
    { name: "REACT", img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "REDUX", img: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" },
    { name: "NODE", img: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
    { name: "VS CODE", img: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" },
    { name: "FIGMA", img: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
  ];

  return (
    <section className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-[#484148] text-white' : 'bg-white text-gray-900'}`}>
      <div className="container mx-auto">
        {/* Başlık: t.skillsTitle kullanıldı ve renk isDarkMode'a bağlandı */}
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-20 transition-colors ${isDarkMode ? 'text-[#AEB0B4]' : 'text-[#1F2937]'}`}>
          {t.skillsTitle}
        </h2>

        {/* Logolar ve İsimler Grubu */}
        <div className="flex flex-wrap justify-center items-end gap-x-12 gap-y-16 md:gap-x-20">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center group">
              {/* Logo Alanı */}
              <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mb-6">
                <img 
                  src={skill.img} 
                  alt={skill.name} 
                  className="max-w-full max-h-full object-contain transition-all duration-300 cursor-pointer  hover:grayscale-0"
                />
              </div>
              
              {/* Skill İsmi */}
              <p className={`font-bold text-xs md:text-sm tracking-[0.2em] text-center ${isDarkMode ? 'text-[#D9D9D9]' : 'text-[#777777]'}`}>
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;