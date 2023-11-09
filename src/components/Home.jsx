import { AiOutlinePlayCircle } from 'react-icons/ai'
import HomePhone from '../assets/images/Home/Mobile.svg'

export const Home = () => {
    return (
        <section className="mt-[88px] sm:mt-[80px] container mx-auto" id="home">
            <div className="grid grid-cols-12 sm:gap-8 items-center">
                {/* Text */}
                <div className="col-span-12 md:col-span-7 flex flex-col text-center items-center md:items-start md:text-start">
                    <h1 className="h1 ">The easiest way to <br /> manage projects</h1>
                    <p className="description mt-4">From the small stuff to the big picture, organizes the work so teams know what to do, why it matters, and how to get it done.</p>
                    {/* btns */}
                    <div className="flex gap-x-1 sm:gap-x-4 mt-8">
                        <button className="btn btn-primary">Get Started</button>
                        <button className="btn btn-secondary"><AiOutlinePlayCircle /> Watch Video</button>
                    </div>
                </div>

                <div className="col-span-12 md:col-span-5 flex flex-col text-center items-center md:items-end md:text-start mt-8 md:mt-0">
                    <img src={HomePhone} alt="Mobile-Landify" />
                </div>

            </div>

        </section>
    )
}
