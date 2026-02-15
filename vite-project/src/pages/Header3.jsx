import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Header = () => {
  return (
    
    <section className="bg-[#F4F4F4] min-h-screen flex items-center px-4 lg:px-90 font-sans overflow-hidden relative">

      <ToastContainer />
      
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-1">
        
        {/* Sol İçerik Alanı */}
        <div className="flex-1 z-10">
          <p className="text-2xl md:text-3xl mb-6 flex items-center gap-2 text-[#1F2937]">
            Hi! <span className="animate-bounce">👋</span>
          </p>
          
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#1F2937] max-w-2xl relative">
            {/* "I'm Kemal" altındaki pembe çizgi efekti */}
            <span className="relative inline-block">
              I'm Kemal.
              <span className="absolute bottom-2 left-0 w-full h-4 bg-[#E92577] -z-10 opacity-80"></span>
            </span>
            {" "}I'm a frontend developer. I can craft solid and scalable frontend products. Let's meet!
          </h1>

          {/* Sosyal Medya İkonları (Placeholder) */}
          <div className="flex gap-4 mt-12 mb-10">
            <a href="#" className="hover:opacity-75 transition-opacity">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-8 h-8" />
            </a>
            <a href="#" className="hover:opacity-75 transition-opacity">
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className="w-8 h-8" />
            </a>
          </div>

          {/* Alt Bilgiler */}
          <div className="space-y-10">
            <h3 className="text-lg text-gray-700">
              Currently <span className="text-[#E92577] font-medium">Freelancing</span> for 
              <span className="text-[#E92577] font-medium"> UX, UI, & Web Design</span> Project.
            </h3>
            <h3 className="text-lg text-gray-700">
              Invite me to join your team → 
              <a href="mailto:pskkemalakalin@gmail.com" className="text-[#E92577] underline ml-1 font-medium">
                pskkemalakalin@gmail.com
              </a>
            </h3>
          </div>
        </div>

        {/* Sağ Görsel Alanı */}
        <div className="flex-1 flex justify-center lg:justify-end relative">
          {/* Pembe Arka Çerçeve */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full bg-[#E92577] rounded-3xl"></div>
            
            {/* Ana Görsel */}
            <img 
              src="/src/assets/img/0.jpeg" 
              alt="Kemal" 
              className="relative w-[350px] md:w-[450px] h-[400px] md:h-[500px] object-cover rounded-3xl border-4 border-[#F4F4F4] shadow-xl"
            />
          </div>
        </div>

      </div>

      {/* Dekoratif Pembe Şekil (Sağ alt) */}
      <div className="absolute -right-10 bottom-20 w-32 h-16 bg-[#E92577] rounded-l-full hidden lg:block"></div>
    </section>
  );
};

export default Header;