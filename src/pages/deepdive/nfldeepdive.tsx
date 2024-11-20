import { Link } from 'react-router-dom'
import arrow from './../../assets/icons/arrow_left_dark.png'

export const Nfldeepdive = () => {
    return (
        <div className='sm:h-40'>
            <div className='border border-gray sm:h-8 sm:w-full'>
                <h3 className='relative sm:mt-4.5 font-bold sm:text-center sm:text-green sm:text-base font-montserrat'><span className='text-orange-light'>NFL</span> Deep Dive</h3>
            </div>

            <div>
                <h3 className='relative sm:mt-5 sm:text-dark font-bold'>Tuesday 30, October, 2024</h3>
                <div>
                <Link to="/bettadeepdive"><img src={arrow} alt="" className='absolute sm:-mt-10.2 sm:ml-4' /></Link>
                    <table className='relative border'></table>
                </div>
            </div>
        </div>
    )
}