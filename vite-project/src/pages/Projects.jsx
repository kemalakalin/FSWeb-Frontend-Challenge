import { useSite } from '../context/SiteContext';

export const Projects = () => {
  const { isDarkMode, t } = useSite();

  const projects = [
    {
      title: t.project1Title, // Çeviriden geliyor
      description: t.project1Desc, // Çeviriden geliyor
      tags: ["react", "vercel", "redux", "axios", "router"],
      github: "#",
      app: "#",
      bgColor: isDarkMode ? "bg-[#2D3235]" : "bg-[#DDEEFE]", 
      img: "/assets/img/1.png" 
    },
    {
      title: t.project2Title, // Çeviriden geliyor
      description: t.project2Desc, // Çeviriden geliyor
      tags: ["react", "redux", "axios", "router", "vercel"],
      github: "#",
      app: "#",
      bgColor: isDarkMode ? "bg-[#2D3235]" : "bg-[#D9F6F1]", 
      img: "/assets/img/2.png" 
    }
  ];

  return (
    <section className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-[#484148] text-white' : 'bg-white text-gray-900'}`}>
      <div className="container mx-auto max-w-6xl">
        {/* Ana Başlık */}
        <h2 className={`text-4xl md:text-5xl font-bold mb-16 text-center transition-colors ${isDarkMode ? 'text-[#D9D9D9]' : 'text-[#1F2937]'}`}>
          {t.projectsTitle}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`${project.bgColor} rounded-3xl p-8 md:p-12 flex flex-col h-full shadow-sm transition-colors duration-300`}
            >
              <h3 className={`text-3xl font-serif font-bold mb-6 ${isDarkMode ? 'text-[#E92577]' : 'text-[#1F2937]'}`}>
                {project.title}
              </h3>

              <p className={`text-lg leading-relaxed mb-8 flex-grow ${isDarkMode ? 'text-[#AEB0B4]' : 'text-[#1F2937]'}`}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className={`px-5 py-1.5 rounded-full font-semibold text-sm shadow-sm ${isDarkMode ? 'bg-[#484148] text-white border border-gray-600' : 'bg-white text-[#1F2937]'}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className={`flex justify-between items-center text-lg font-bold mb-8 ${isDarkMode ? 'text-[#D9D9D9]' : 'text-[#1F2937]'}`}>
                <a href={project.github} className="underline hover:opacity-70 transition-opacity">
                  {t.viewGithub}
                </a>
                <a href={project.app} className="flex items-center gap-2 hover:opacity-70 transition-opacity">
                  {t.goToApp}
                </a>
              </div>

              <div className="mt-auto pt-4">
                <img 
                  src={project.img} 
                  alt={`${project.title} mockup`} 
                  className="w-full drop-shadow-2xl rounded-2xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;