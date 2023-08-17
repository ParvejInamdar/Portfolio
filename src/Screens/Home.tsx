import '../App.css';
import { Contact, Experience, Footer, Hero, NavBar, Portfolio, Services, Works } from '../Component';

function Home() {
    return (
        <div className='h-full w-full'>
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