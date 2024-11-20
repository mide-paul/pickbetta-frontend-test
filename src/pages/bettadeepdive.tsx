import { Link } from 'react-router-dom'
import arrow from './../assets/icons/arrow_left_dark.png'
import ball from './../assets/icons/ball.png'
import basketball from './../assets/icons/basketball.png'
import hockey from './../assets/icons/hockey.png'

export const Bettadeepdive = () => {
    return (
        <div className="relative sm:h-40 sm:w-full bg-gray-white">
            <div className='border border-gray sm:h-8 sm:w-full'>
            <h3 className='relative sm:-mt-4.5 font-bold sm:text-center sm:text-green sm:text-base font-montserrat'><span className='text-orange-light'>Betta</span> Deep Dive</h3>
            </div>

            <Link to='/homesignedin'><img src={arrow} alt="" className='absolute sm:-mt-6.5 sm:ml-4' /></Link>

            <div className='flex sm:flex-wrap'>
                <Link to='/nfldeepdive'>
                <div>
                    <div className='relative sm:ml-5 sm:mt-4 sm:text-sm sm:text-dark font-semibold sm:p-3 sm:pl-5 sm:w-14 shadow-sm rounded'>NFL</div>
                    <img src={ball} alt="" className='relative sm:-mt-6.3 sm:ml-6.3 sm:p-0.5 sm:bg-green-light rounded-full' />
                </div>
                </Link>

                <div>
                    <div className='relative sm:ml-5 sm:mt-4 sm:text-sm sm:text-dark font-semibold sm:p-3 sm:pl-5 sm:w-14 shadow-sm rounded'>NCAAB</div>
                    <img src={basketball} alt="" className='relative sm:-mt-6.3 sm:ml-6.3 sm:p-0.5 sm:bg-green-light rounded-full' />
                </div>

                <div>
                    <div className='relative sm:ml-5 sm:mt-4 sm:text-sm sm:text-dark font-semibold sm:p-3 sm:pl-5 sm:w-14 shadow-sm rounded'>NBA</div>
                    <img src={basketball} alt="" className='relative sm:-mt-6.3 sm:ml-6.3 sm:p-0.5 sm:bg-green-light rounded-full' />
                </div>

                <div>
                    <div className='relative sm:ml-5 sm:mt-4 sm:text-sm sm:text-dark font-semibold sm:p-3 sm:pl-5 sm:w-14 shadow-sm rounded'>NHL</div>
                    <img src={hockey} alt="" className='relative sm:-mt-6.3 sm:ml-6.3 sm:p-0.5 sm:bg-green-light rounded-full' />
                </div>

                <div>
                    <div className='relative sm:ml-5 sm:mt-4 sm:text-sm sm:text-dark font-semibold sm:p-3 sm:pl-5 sm:w-14 shadow-sm rounded'>NFL</div>
                    <img src={ball} alt="" className='relative sm:-mt-6.3 sm:ml-6.3 sm:p-0.5 sm:bg-green-light rounded-full' />
                </div>

                <div>
                    <div className='relative sm:ml-5 sm:mt-4 sm:text-sm sm:text-dark font-semibold sm:p-3 sm:pl-5 sm:w-14 shadow-sm rounded'>NCAAB</div>
                    <img src={basketball} alt="" className='relative sm:-mt-6.3 sm:ml-6.3 sm:p-0.5 sm:bg-green-light rounded-full' />
                </div>
            </div>
        </div>
    )
}