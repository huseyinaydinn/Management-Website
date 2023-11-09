import React from 'react'
import PlayStoreBtn from '../assets/PlayStore.svg'
import AppStoreBtn from '../assets/AppStore.svg'
import MockupPhone1 from '../assets/images/MobileApp/Mockup1.svg'
import MockupPhone2 from '../assets/images/MobileApp/Mockup2.svg'

export const MobileApp = () => {
    return (
        <section className="w-full bg-secondary-600">
            <div className="container  mx-auto pb-0 flex flex-col md:flex-row items-center justify-center gap-8">
                {/* Text */}
                <div className="flex flex-col gap-12 w-full md:w-1/2">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-[30px] sm:text-4xl md:text-5xl font-bold leading-10 text-start">Manage all projects from your mobile</h2>
                        <p className="text-[16px] sm:text-lg leading-6 text-start">Download the app to manage your projects, keep track of the progress and complete tasks without procastinating. Stay on track and complete on time!</p>
                    </div>
                    <div className="flex flex-col items-start">
                        <p className="text-lg leading-7 text-start">Get the App</p>
                        <div className="flex flex-row items-start gap-3">
                            <a href="#"><img src={PlayStoreBtn} alt="" /></a>
                            <a href="#"><img src={AppStoreBtn} alt="" /></a>
                        </div>
                    </div>
                </div>
                {/* images */}
                <div className="flex flex-col md:flex-row gap-8 items-center overflow-hidden">
                    <div className="md:relative md:w-[232px] md:h-[464px]">
                        <img src={MockupPhone1} alt="Mobile App Mockup" className="md:absolute -top-20" />
                    </div>
                    <div className="md:relative md:w-[232px] md:h-[464px]">
                        <img src={MockupPhone2} alt="Mobile App Mockup" className="md:absolute -bottom-24" />
                    </div>
                </div>
            </div>
        </section>
    )
}
