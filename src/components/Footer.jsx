import React from 'react'
import PlayStoreBtn from '../assets/PlayStore.svg'
import AppStoreBtn from '../assets/AppStore.svg'

export const Footer = () => {
    return (
        <section className="w-full bg-black">
            <div className="container mx-auto py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between">
                <div className="flex flex-col gap-6">
                    <img src="src/assets/Logo2.svg" alt="Landify Logo" width={32} height={32} />
                    <div className="text-white">
                        <div className="flex flex-row gap-x-6 gap-y-3">
                            <a href="#">Download Now</a>
                            <a href="#">License</a>
                        </div>
                        <div className="flex flex-row flex-wrap gap-x-6 gap-y-3 mt-3">
                            <a href="#">About</a>
                            <a href="#">Features</a>
                            <a href="#">Pricing</a>
                            <a href="#">News</a>
                            <a href="#">Help</a>
                            <a href="#">Contact</a>
                        </div>
                    </div>
                    <p className="text-sm leading-5 text-neutral-300 mt-6">© 2023 Landify UI Kit. All rights reserved</p>
                </div>

                <div className="flex flex-col gap-y-4">
                    <h5 className="text-lg text-neutral-300">Get the App</h5>
                    <a href="#"><img src={PlayStoreBtn} alt="PlayStore Btn" /></a>
                    <a href="#"><img src={AppStoreBtn} alt="AppStore Btn" /></a>
                </div>
            </div>
        </section>
    )
}
