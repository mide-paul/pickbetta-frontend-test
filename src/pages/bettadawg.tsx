import { Link } from 'react-router-dom'
import arrow from './../assets/icons/arrow_left_dark.png'

export const Bettadawg = () => {
    return (
        <div className='sm:h-40'>
            <div className='border border-gray sm:h-8 sm:w-full'>
                <h3 className='relative sm:mt-4.5 font-bold sm:text-center sm:text-green sm:text-base font-montserrat'>
                    <span className='text-orange-light'>Betta</span> Dawg Data
                </h3>
            </div>
            
            <div>
            <Link to="/bettadeepdive"><img src={arrow} alt="" className='absolute sm:-mt-6.5 sm:ml-4' /></Link>
            </div>

            <div>
                <h3 className='relative sm:ml-4 sm:mt-5 sm:text-left sm:text-dark font-semibold sm:max-w-20 leading-6'>
                    This week’s top Dawgs to watch: New
                    York Jets +7 at Kansas City (60% cover rate as road underdogs), and Stanford +10 at USC
                    (Stanford is 6-2 ATS in their last 8 games as double-digit underdogs).
                </h3>
            </div>
        </div>
    )
}