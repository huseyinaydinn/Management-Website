import airbnb from '../assets/images/Brands/airbnb.svg'
import google from '../assets/images/Brands/google.svg'
import walmart from '../assets/images/Brands/walmart.svg'
import hubspot from '../assets/images/Brands/hubspot.svg'
import fedex from '../assets/images/Brands/fedex.svg'
import microsoft from '../assets/images/Brands/microsoft.svg'

export const Brands = () => {
    return (
        <div className="w-full flex justify-center">
        <div className="container flex flex-row flex-wrap items-center gap-x-16 gap-y-8 justify-center mt-4">
            <img src={airbnb} alt="" />
            <img src={hubspot} alt="" />
            <img src={google} alt="" />
            <img src={microsoft} alt="" />
            <img src={walmart} alt="" />
            <img src={fedex} alt="" />
        </div>
            </div>
    )
}
