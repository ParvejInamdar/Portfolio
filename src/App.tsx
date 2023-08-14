import './App.css';
import { Hero, NavBar } from './Component';
import Contact from './Component/Contact/contact';
import Experience from './Component/Experiences/experience';
import Footer from './Component/Footer/footer';
import Services from './Component/Services/services';
import Works from './Component/Work/work';
import Portfolio from './Component/portfolio/portfolio';

function App() {
  return (
    <>
      <div className='sticky top-0 z-50'>
        <NavBar />
      </div>
      <div className='App h-full w-screen max-w-screen flex items-center justify-center overflow-hidden lg:!-mx-[17px]'>
        <div className='flex mx-auto items-center justify-center flex-col'>
          <div id="hero" className='w-full relative flex items-center justify-center bg-gradient-to-b from-yellow-100 to-orange-100 pt-8 xl:!pt-4 '>
            <Hero />
          </div>
          <div id="service" className='relative w-full px-5 lg:!px-10 '>
            <Services />
          </div>
          <div id="experience" className='mt-24 mb-24 relative w-full px-5 lg:!px-10 '>
            <Experience />
          </div>
          <div id="work" className='mt-20 relative w-full px-5 lg:!px-10 '>
            <Works />
          </div>
          <div id="portfolio" className='mt-12 w-full px-5 lg:!px-10 '>
            <Portfolio />
          </div>
          <div id="contact" className='mt-12 w-full px-5 lg:!px-10 '>
            <Contact />
          </div>
        </div>

      </div>
      <div className='mt-4 w-full'>
        <Footer />
      </div>
    </>

  );
}

export default App;
