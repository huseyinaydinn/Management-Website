import achievements1 from '../assets/icons/about/achievements1.svg'
import achievements2 from '../assets/icons/about/achievements2.svg'
import achievements3 from '../assets/icons/about/achievements3.svg'
import achievements4 from '../assets/icons/about/achievements4.svg'

export const About = () => {
    return (
        <section className="container mx-auto flex flex-col justify-center" id="about">
            <div className="flex flex-col md:flex-row gap-12 md:gap-8 items-center py-12 sm:py-20">
                <div className="flex flex-col gap-2 w-full md:w-1/2 text-start">
                    <h2 className="text-[30px] sm:text-4xl leading-[45px] md:text-5xl md:leading-[60px] font-bold">Our 18 years of achievements</h2>
                    <p className="text-[16px] leading-6 sm:text-lg">With our super powers we have reached this</p>
                </div>
                <div className="grid grid-cols-2 w-full md:w-1/2 justify-center content-center gap-6 sm:gap-x-8 sm:gap-y-10 ">
                    <div className="col-span-2 sm:col-span-1 flex flex-row gap-4">
                        <img src={achievements1} alt="achievements4 icon" />
                        <div className="flex flex-col text-start ">
                            <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-8">10,000+</h4>
                            <p className="text-sm sm:text-lg leading-5">Downloads per day</p>
                        </div>
                    </div>

                    <div className="col-span-2 sm:col-span-1 flex flex-row gap-4">
                        <img src={achievements2} alt="achievements4 icon" />
                        <div className="flex flex-col text-start ">
                            <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-8">2 Million</h4>
                            <p className="text-sm sm:text-lg leading-5">Users</p>
                        </div>
                    </div>

                    <div className="col-span-2 sm:col-span-1 flex flex-row gap-4">
                        <img src={achievements3} alt="achievements4 icon" />
                        <div className="flex flex-col text-start ">
                            <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-8">500+</h4>
                            <p className="text-sm sm:text-lg leading-5">Clients</p>
                        </div>
                    </div>

                    <div className="col-span-2 sm:col-span-1 flex flex-row gap-4">
                        <img src={achievements4} alt="achievements4 icon" />
                        <div className="flex flex-col text-start ">
                            <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-8">140</h4>
                            <p className="text-sm sm:text-lg leading-5">Countries</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-12 md:gap-8 py-10 sm:py-20 items-center">
                {/* Text */}
                <div className="flex flex-col gap-2 items-center sm:items-start w-full sm:w-1/2">
                    <h2 className="text-[30px] sm:text-4xl leading-[45px] md:text-5xl md:leading-[60px] font-bold text-center sm:text-start">Easy integrations with 170+ tools</h2>
                    <p className="text-[16px] leading-6 sm:text-lg  text-center sm:text-start">Connect Landify with your favourite tools that you use daily and keep things on track.</p>
                </div>
                {/* Cloud */}
                <div className="grid grid-row-2 about-cloud w-[400px] h-[200px] content-center gap-y-5 justify-center">

                    <div className="row-span-1 flex flex-row items-center justify-center gap-7">
                        <a href="#"><img src="src/assets/icons/about/1.svg" alt="about brand icon" className="hover:-translate-y-1 transition-all duration-300" /></a>
                        <a href="#"><img src="src/assets/icons/about/2.svg" alt="about brand icon" className="hover:-translate-y-1 transition-all duration-300" /></a>
                        <a href="#"><img src="src/assets/icons/about/3.svg" alt="about brand icon" className="hover:-translate-y-1 transition-all duration-300" /></a>
                        <a href="#"><img src="src/assets/icons/about/4.svg" alt="about brand icon" className="hover:-translate-y-1 transition-all duration-300" /></a>
                    </div>

                    <div className="row-span-1 flex items-center justify-center gap-7">
                        <a href="#"><img src="src/assets/icons/about/5.svg" alt="about brand icon" className="hover:-translate-y-1 transition-all duration-300" /></a>
                        <a href="#"><img src="src/assets/icons/about/6.svg" alt="about brand icon" className="hover:-translate-y-1 transition-all duration-300" /></a>
                        <a href="#"><img src="src/assets/icons/about/7.svg" alt="about brand icon" className="hover:-translate-y-1 transition-all duration-300" /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}
