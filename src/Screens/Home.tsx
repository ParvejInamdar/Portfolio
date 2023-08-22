import '../App.css';
import { Contact, Experience, Footer, Hero, NavBar, Portfolio, Services, Works } from '../Component';

function Home() {
    return (
        <div className='h-full w-full flex flex-col items-center justify-center relative'>
            <div className='sticky top-0 z-50 w-full'>
                <NavBar />
            </div>
            <div className='h-full w-full flex items-center justify-center overflow-hidden '>
                <div className='flex mx-auto items-center justify-center flex-col'>
                    <div id="hero" className='w-full relative flex items-center justify-center bg-gradient-to-b from-blue-50 to-green-300 xl:!bg-gradient-to-br xl:!from-blue-200 xl:!to-cyan-200 xl:!via-red-50 pt-8 xl:!pt-4 '>
                        <Hero />
                    </div>
                    <div id="service" className='relative w-full flex items-center justify-center px-5 lg:!px-10'>
                        <Services />
                    </div>
                    <div id="experience" className='lg:!mt-12 relative w-full px-5 lg:!px-10 '>
                        <Experience />
                    </div>
                    <div id="work" className=' lg:!mt-10 relative w-full px-5 lg:!px-10 '>
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
        </div>
    )
}

export default Home;