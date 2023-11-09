import feature1 from '../assets/icons/features/feature1.svg'
import feature2 from '../assets/icons/features/feature2.svg'
import feature3 from '../assets/icons/features/feature3.svg'
import feature4 from '../assets/icons/features/feature4.svg'
import feature5 from '../assets/icons/features/feature5.svg'
import feature6 from '../assets/icons/features/feature6.svg'


export const Features = () => {
    return (
        <section className="container mx-auto w-full" id="features">
            <div className="flex flex-col md:w-2/3 w-full mx-auto py-[48px] sm:py-[80px] md:py-[96px]">
                {/* Title */}
                <div className="col-span-8 flex flex-col justify-center items-center">
                    <h1 className="h1 text-center">Tailor-made features</h1>
                    <p className="description text-center">Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.</p>
                </div>
                {/* cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <div className="flex flex-col gap-6 items-center">
                        <div>
                            <img src={feature1} alt="" />
                        </div>
                        <div className="text-center">
                            <h2 className="font-bold text-[30px] leading-10">Robust workflow</h2>
                            <p className="text-[16px] leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 items-center">
                        <div>
                            <img src={feature3} alt="" />
                        </div>
                        <div className="text-center">
                            <h2 className="font-bold text-[30px] leading-10">Robust workflow</h2>
                            <p className="text-[16px] leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 items-center">
                        <div>
                            <img src={feature2} alt="" />
                        </div>
                        <div className="text-center">
                            <h2 className="font-bold text-[30px] leading-10">Robust workflow</h2>
                            <p className="text-[16px] leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 items-center">
                        <div>
                            <img src={feature4} alt="" />
                        </div>
                        <div className="text-center">
                            <h2 className="font-bold text-[30px] leading-10">Robust workflow</h2>
                            <p className="text-[16px] leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 items-center">
                        <div>
                            <img src={feature5} alt="" />
                        </div>
                        <div className="text-center">
                            <h2 className="font-bold text-[30px] leading-10">Robust workflow</h2>
                            <p className="text-[16px] leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 items-center">
                        <div>
                            <img src={feature6} alt="" />
                        </div>
                        <div className="text-center">
                            <h2 className="font-bold text-[30px] leading-10">Robust workflow</h2>
                            <p className="text-[16px] leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}
