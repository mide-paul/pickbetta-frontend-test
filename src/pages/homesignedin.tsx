import { Link } from 'react-router-dom'
import menu from './../assets/icons/menu_green.png'
import search from './../assets/icons/search.png'
import bell from './../assets/icons/bell.png'
import editor_image from './../assets/images/editor_image.png'
import users from './../assets/icons/users.png'
import pad from './../assets/icons/pad.png'
import balls from './../assets/icons/balls.png'
import pie from './../assets/icons/pie.png'
import bar from './../assets/icons/bar.png'
import shop from './../assets/icons/shop.png'
import arrow from './../assets/icons/arrow_right_dark.png'

export const Homesignedin = () => {
    return (
        <div className='relative sm:h-65 sm:w-full sm:bg-white'>
            <div className='border border-gray sm:h-8 sm:w-full'>
                <img src={menu} alt="" className='relative sm:mt-4 sm:ml-4' />
                <img src={search} alt="" className='relative sm:-mt-5 sm:ml-8' />
                <img src={bell} alt="" className='relative sm:-mt-5 sm:ml-19.5' />
                <div className='relative sm:-mt-5 sm:ml-20.8 sm:h-5 sm:w-5 sm:bg-gray-light rounded-full'></div>
            </div>

            <div>
                <Link to='/editornote'><div className='relative sm:mt-4 sm:ml-4.51 sm:h-16.6 sm:w-20.8 sm:bg-white shadow-xl rounded-xl'>
                <img src={editor_image} alt="" className='relative sm:mt-0 sm:ml-0 rounded-t-xl' />
                <div className='relative sm:mt-3 sm:ml-3 sm:h-6.3 sm:w-6.3 sm:bg-gray-light rounded-full'></div>
                <h3 className='relative sm:-mt-6.3 sm:ml-8.5 font-bold sm:text-left sm:text-dark sm:text-sm font-montserrat'>Editor's Note</h3>
                <p className='relative sm:mt-1 sm:ml-8.5 font-medium sm:text-left sm:text-gray sm:text-sm font-montserrat'>Lorem ipsum dolor siet ggdunt eg...</p>
                </div></Link>
            </div>

            <div>
                <h3 className='relative sm:mt-5.2 sm:ml-4.51 sm:text-left sm:font-bold sm:text-sm'>Categories</h3>
                <div>
                    <Link to='/bettadawg'><div className='relative sm:pt-0.1 sm:mt-4 sm:ml-4.51 sm:h-8.1 sm:w-20.8 sm:bg-green-very-light rounded'>
                        <img src={users} alt="" className='relative sm:bg-white p-1.5 sm:mt-1 sm:ml-1.5 rounded-xl' />
                        <h3 className='relative sm:-mt-6.3 sm:ml-8.5 font-bold sm:text-left sm:text-dark sm:text-sm font-montserrat'>Betta Dawg</h3>
                        <p className='relative sm:mt-0.5 sm:ml-8.5 font-medium sm:text-left sm:text-gray sm:text-xss font-montserrat'>Lorem ipsum dolor sit amet ggdunt egestas</p>
                        <img src={arrow} alt="" className='relative sm:-mt-5.3 sm:ml-19.8' />
                    </div>
                    </Link>

                    <div className='relative sm:pt-0.1 sm:mt-4 sm:ml-4.51 sm:h-8.1 sm:w-20.8 sm:bg-green-very-light rounded'>
                        <img src={pad} alt="" className='relative sm:bg-white p-1.5 sm:mt-1 sm:ml-1.5 rounded-xl' />
                        <h3 className='relative sm:-mt-6.3 sm:ml-8.5 font-bold sm:text-left sm:text-dark sm:text-sm font-montserrat'>Betta Gameplan</h3>
                        <p className='relative sm:mt-0.5 sm:ml-8.5 font-medium sm:text-left sm:text-gray sm:text-xss font-montserrat'>Lorem ipsum dolor sit amet ggdunt egestas</p>
                        <img src={arrow} alt="" className='relative sm:-mt-5.3 sm:ml-19.8' />
                    </div>

                    <div className='relative sm:pt-0.1 sm:mt-4 sm:ml-4.51 sm:h-8.1 sm:w-20.8 sm:bg-green-very-light rounded'>
                        <img src={balls} alt="" className='relative sm:bg-white p-1.5 sm:mt-1 sm:ml-1.5 rounded-xl' />
                        <h3 className='relative sm:-mt-6.3 sm:ml-8.5 font-bold sm:text-left sm:text-dark sm:text-sm font-montserrat'>Betta Plays</h3>
                        <p className='relative sm:mt-0.5 sm:ml-8.5 font-medium sm:text-left sm:text-gray sm:text-xss font-montserrat'>Lorem ipsum dolor sit amet ggdunt egestas</p>
                        <img src={arrow} alt="" className='relative sm:-mt-5.3 sm:ml-19.8' />
                    </div>

                    <div className='relative sm:pt-0.1 sm:mt-4 sm:ml-4.51 sm:h-8.1 sm:w-20.8 sm:bg-green-very-light rounded'>
                        <img src={pie} alt="" className='relative sm:bg-white p-1.5 sm:mt-1 sm:ml-1.5 rounded-xl' />
                        <h3 className='relative sm:-mt-6.3 sm:ml-8.5 font-bold sm:text-left sm:text-dark sm:text-sm font-montserrat'>Betta stats</h3>
                        <p className='relative sm:mt-0.5 sm:ml-8.5 font-medium sm:text-left sm:text-gray sm:text-xss font-montserrat'>Lorem ipsum dolor sit amet ggdunt egestas</p>
                        <img src={arrow} alt="" className='relative sm:-mt-5.3 sm:ml-19.8' />
                    </div>

                    <div className='relative sm:pt-0.1 sm:mt-4 sm:ml-4.51 sm:h-8.1 sm:w-20.8 sm:bg-green-very-light rounded'>
                        <img src={bar} alt="" className='relative sm:bg-white p-1.5 sm:mt-1 sm:ml-1.5 rounded-xl' />
                        <h3 className='relative sm:-mt-6.3 sm:ml-8.5 font-bold sm:text-left sm:text-dark sm:text-sm font-montserrat'>Betta Value</h3>
                        <p className='relative sm:mt-0.5 sm:ml-8.5 font-medium sm:text-left sm:text-gray sm:text-xss font-montserrat'>Lorem ipsum dolor sit amet ggdunt egestas</p>
                        <img src={arrow} alt="" className='relative sm:-mt-5.3 sm:ml-19.8' />
                    </div>

                    <div className='relative sm:pt-0.1 sm:mt-4 sm:ml-4.51 sm:h-8.1 sm:w-20.8 sm:bg-green-very-light rounded'>
                        <img src={shop} alt="" className='relative sm:bg-white p-1.5 sm:mt-1 sm:ml-1.5 rounded-xl' />
                        <h3 className='relative sm:-mt-6.3 sm:ml-8.5 font-bold sm:text-left sm:text-dark sm:text-sm font-montserrat'>Betta Trends</h3>
                        <p className='relative sm:mt-0.5 sm:ml-8.5 font-medium sm:text-left sm:text-gray sm:text-xss font-montserrat'>Lorem ipsum dolor sit amet ggdunt egestas</p>
                        <img src={arrow} alt="" className='relative sm:-mt-5.3 sm:ml-19.8' />
                    </div>

                    <div className='relative sm:pt-0.1 sm:mt-4 sm:ml-4.51 sm:h-8.1 sm:w-20.8 sm:bg-green-very-light rounded'>
                        <img src={shop} alt="" className='relative sm:bg-white p-1.5 sm:mt-1 sm:ml-1.5 rounded-xl' />
                        <h3 className='relative sm:-mt-6.3 sm:ml-8.5 font-bold sm:text-left sm:text-dark sm:text-sm font-montserrat'>Betta Last Look</h3>
                        <p className='relative sm:mt-0.5 sm:ml-8.5 font-medium sm:text-left sm:text-gray sm:text-xss font-montserrat'>Lorem ipsum dolor sit amet ggdunt egestas</p>
                        <img src={arrow} alt="" className='relative sm:-mt-5.3 sm:ml-19.8' />
                    </div>

                    <Link to='/bettadeepdive'><div className='relative sm:pt-0.1 sm:mt-4 sm:ml-4.51 sm:h-8.1 sm:w-20.8 sm:bg-green-very-light rounded'>
                        <img src={shop} alt="" className='relative sm:bg-white p-1.5 sm:mt-1 sm:ml-1.5 rounded-xl' />
                        <h3 className='relative sm:-mt-6.3 sm:ml-8.5 font-bold sm:text-left sm:text-dark sm:text-sm font-montserrat'>Betta Deep Dive</h3>
                        <p className='relative sm:mt-0.5 sm:ml-8.5 font-medium sm:text-left sm:text-gray sm:text-xss font-montserrat'>Lorem ipsum dolor sit amet ggdunt egestas</p>
                        <img src={arrow} alt="" className='relative sm:-mt-5.3 sm:ml-19.8' />
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}