import { Link } from "react-router"


function GetInTouchBanner() {
  return (
    <div className="container py-24">
        <div className="w-full p-12 h-[500px] group flex items-center rounded-lg overflow-hidden relative">
            <div className="absolute z-[4]">
                <h1 className="text-4xl font-semibold text-white pb-5">Open for business.</h1>
                <p className="font-light w-5/12 text-white ">We&apos;re here to help you take your business to the next level. Contact our team to discuss how our products and solutions can benefit your company.</p>
                <div className="pt-8">
                    <Link to="/contact" className="px-14 bg-primary font-medium py-4 rounded-md text-white">Get in Touch</Link>
                </div>
            </div>
            <div className="w-full absolute z-[2] h-full bg-black/20 top-0 left-0">
            </div>
            <img className="w-full group-hover:scale-105 transition-all duration-300 h-full absolute top-0 left-0 object-cover" src="https://images.pexels.com/photos/6646770/pexels-photo-6646770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
    </div>
  )
}

export default GetInTouchBanner