import quote from '../assets/icons/stories/quote.svg'
import cardQuote from '../assets/icons/stories/cardQuote.svg'
import hubspot from '../assets/icons/stories/hubspot.svg'
import airbnb from '../assets/icons/stories/airbnb.svg'
import strapi from '../assets/icons/stories/strapi.svg'

export const Stories = () => {
    return (
        <section className="w-full bg-secondary-100" id="stories">
            <div className="container mx-auto pt-10 sm:pt-32 flex flex-col lg:flex-row gap-8 lg:px-28">
                <div className="w-full lg:w-1/2 flex flex-col items-start lg:items-end gap-16">
                    <div className="relative flex flex-col items-start">
                        <img src={quote} alt="quote" className="opacity-20 -top-16 -left-20 absolute story-quote" />
                        <h2 className="font-bold text-3xl sm:text-5xl leading-[60px] tracking-[2.5%] z-10 story-h2">Real Stories from Real Customers</h2>
                        <p className="text-[18px] leading-7">Get inspired by these stories.</p>
                    </div>
                    {/* card */}
                    <div className="flex flex-col items-start bg-white gap-8 w-full lg:w-[384px] p-8 rounded-lg">
                        <img src={hubspot} alt="card-quote" />
                        <div className="flex flex-row items-start">
                            <img src={cardQuote} alt="" />
                            <div className="flex flex-col items-start">
                                <p className="text-[18px] leading-7">
                                    To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable.
                                </p>
                                <h5 className="text-[18px] font-bold leading-7 mt-6">Floyd Miles</h5>
                                <p className="text-[14px] leading-5">Vice President, GoPro</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 flex flex-col items-start lg:pt-[196px] gap-8 md:pb-[96px]">
                    <div className="flex flex-col items-start bg-white gap-8 w-full lg:w-[488px] p-8 rounded-lg">
                        <img src={airbnb} alt="card-quote" />
                        <div className="flex flex-row items-start">
                            <img src={cardQuote} alt="" />
                            <div className="flex flex-col items-start">
                                <p className="text-[18px] leading-7">
                                    I used landify and created a landing page for my startup within a week. The Landify UI Kit is simple and highly intuitive, so anyone can use it.
                                </p>
                                <h5 className="text-[18px] font-bold leading-7 mt-6">Jane Cooper</h5>
                                <p className="text-[14px] leading-5">CEO, Airbnb</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-start bg-white gap-8 w-full lg:w-[384px] p-8 rounded-lg">
                        <img src={strapi} alt="card-quote" />
                        <div className="flex flex-row items-start">
                            <img src={cardQuote} alt="" />
                            <div className="flex flex-col items-start">
                                <p className="text-[18px] leading-7">
                                    Landify saved our time in designing my company page.
                                </p>
                                <h5 className="text-[18px] font-bold leading-7 mt-6">Kristin Watson</h5>
                                <p className="text-[14px] leading-5">Co-Founder, Strapi</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
