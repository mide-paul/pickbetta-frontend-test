import { Link } from 'react-router-dom'
import editor_image from './../assets/images/editor_image.png'
import users from './../assets/icons/users.png'
import pad from './../assets/icons/pad.png'
import pie from './../assets/icons/pie.png'
import bar from './../assets/icons/bar.png'
import shop from './../assets/icons/shop.png'
import { Homenavbar } from '../components/homenavbar'
import user from './../assets/icons/user.svg'

export const Homesignedin = () => {
    return (
        <div className='relative sm:h-50 sm:w-full sm:bg-white'>
            <Homenavbar />
            <div>
                <h3 className='absolute sm:mt-15.8 sm:ml-4.51 font-bold sm:text-left sm:text-dark sm:text-sm font-montserrat'>Editor's Note</h3>
                <div className='flex overflow-scroll scroll-smooth sm:w-22'>
                <Link to='/editornote'><div className='relative sm:mt-17 sm:ml-4.51 sm:h-16.6 sm:w-15.6 sm:bg-white shadow-xl rounded-xl'>
                <img src={editor_image} alt="" className='relative sm:mt-5 sm:ml-0 sm:h-13 rounded-t-xl' />
                <p className='relative sm:mt-1.2 sm:ml-2 font-medium sm:text-left sm:text-dark sm:text-xss font-montserrat sm:min-w-11 sm:max-w-19.6'>How to Place a Bet Like a Pro Safely Without b...</p>
                <img src={user} alt="" className='relative sm:mt-1 sm:ml-2' />
                <h3 className='sm:-mt-2.5 sm:ml-6 font-medium sm:text-left sm:text-gray sm:text-sm sm:font-semibold'>Cee Green</h3>
                </div></Link>

                <Link to='/editornote'><div className='relative sm:mt-17 sm:ml-4.51 sm:h-16.6 sm:w-15.6 sm:bg-white shadow-xl rounded-xl'>
                <img src={editor_image} alt="" className='relative sm:mt-5 sm:ml-0 sm:h-13 rounded-t-xl' />
                <p className='relative sm:mt-1.2 sm:ml-2 font-medium sm:text-left sm:text-dark sm:text-xss font-montserrat sm:min-w-11 sm:max-w-19.6'>How to Place a Bet Like a Pro Safely Without b...</p>
                <img src={user} alt="" className='relative sm:mt-1 sm:ml-2' />
                <h3 className='sm:-mt-2.5 sm:ml-6 font-medium sm:text-left sm:text-gray sm:text-sm sm:font-semibold'>Cee Green</h3>
                </div></Link>

                <Link to='/editornote'><div className='relative sm:mt-17 sm:ml-4.51 sm:h-16.6 sm:w-15.6 sm:bg-white shadow-xl rounded-xl'>
                <img src={editor_image} alt="" className='relative sm:mt-5 sm:ml-0 sm:h-13 rounded-t-xl' />
                <p className='relative sm:mt-1.2 sm:ml-2 font-medium sm:text-left sm:text-dark sm:text-xss font-montserrat sm:min-w-11 sm:max-w-19.6'>How to Place a Bet Like a Pro Safely Without b...</p>
                <img src={user} alt="" className='relative sm:mt-1 sm:ml-2' />
                <h3 className='sm:-mt-2.5 sm:ml-6 font-medium sm:text-left sm:text-gray sm:text-sm sm:font-semibold'>Cee Green</h3>
                </div></Link>
                </div>
            </div>

            <div>
                <h3 className='relative sm:mt-5.2 sm:ml-4.51 sm:text-left sm:font-bold sm:text-sm'>Categories</h3>
                <div className='flex sm:flex-wrap'>
                    <Link to='/bettadawg'><div className='relative sm:pt-0.1 sm:mt-4 sm:ml-4.51 sm:h-8.1 sm:w-15 sm:bg-white border rounded-xl'>
                        <img src={users} alt="" className='relative sm:bg-green-very-light p-1.5 sm:mt-1 sm:ml-0.6 rounded-xl' />
                        <h3 className='relative sm:-mt-5.3 sm:ml-7.7 font-semibold sm:text-left sm:text-dark sm:text-xsss font-montserrat'>Betta Data</h3>
                    </div>
                    </Link>

                    <div className='relative sm:pt-0.1 sm:mt-4 sm:ml-3 sm:h-8.1 sm:w-15 border rounded-xl'>
                        <img src={pad} alt="" className='relative sm:bg-green-very-light p-1.5 sm:mt-1 sm:ml-0.6 rounded-xl' />
                        <h3 className='relative sm:-mt-5.4 sm:ml-7.7 font-semibold sm:text-left sm:text-dark sm:text-xsss font-montserrat'>Betta Gameplan</h3>
                    </div>

                    <div className='relative sm:pt-0.1 sm:mt-4 sm:ml-4.51 sm:h-8.1 sm:w-15 border rounded-xl'>
                        <img src={pie} alt="" className='relative sm:bg-green-very-light p-1.5 sm:mt-1 sm:ml-0.6 rounded-xl' />
                        <h3 className='relative sm:-mt-5.4 sm:ml-7.7 font-semibold sm:text-left sm:text-dark sm:text-xsss font-montserrat'>Betta stats</h3>
                    </div>

                    <div className='relative sm:pt-0.1 sm:mt-4 sm:ml-3 sm:h-8.1 sm:w-15 border rounded-xl'>
                        <img src={bar} alt="" className='relative sm:bg-green-very-light p-1.5 sm:mt-1 sm:ml-0.6 rounded-xl' />
                        <h3 className='relative sm:-mt-5.4 sm:ml-7.7 font-semibold sm:text-left sm:text-dark sm:text-xsss font-montserrat'>Betta Value</h3>
                    </div>

                    <div className='relative sm:pt-0.1 sm:mt-4 sm:ml-4.51 sm:h-8.1 sm:w-15 border rounded-xl'>
                        <img src={shop} alt="" className='relative sm:bg-green-very-light p-1.5 sm:mt-1 sm:ml-0.6 rounded-xl' />
                        <h3 className='relative sm:-mt-5.4 sm:ml-7.7 font-semibold sm:text-left sm:text-dark sm:text-xsss font-montserrat'>Betta Trends</h3>
                    </div>

                    <div className='relative sm:pt-0.1 sm:mt-4 sm:ml-3 sm:h-8.1 sm:w-15 border rounded-xl'>
                        <img src={shop} alt="" className='relative sm:bg-green-very-light p-1.5 sm:mt-1 sm:ml-0.6 rounded-xl' />
                        <h3 className='relative sm:-mt-5.4 sm:ml-7.7 font-semibold sm:text-left sm:text-dark sm:text-xsss font-montserrat'>Betta Last Look</h3>
                    </div>

                    <Link to='/bettadeepdive'><div className='relative sm:pt-0.1 sm:mt-4 sm:ml-4.51 sm:h-8.1 sm:w-15 border rounded-xl'>
                        <img src={shop} alt="" className='relative sm:bg-green-very-light p-1.5 sm:mt-1 sm:ml-0.6 rounded-xl' />
                        <h3 className='relative sm:-mt-5.4 sm:ml-7.7 font-semibold sm:text-left sm:text-dark sm:text-xsss font-montserrat'>Betta Deep Dive</h3>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}