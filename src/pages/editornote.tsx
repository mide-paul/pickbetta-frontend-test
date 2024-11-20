import { Link } from 'react-router-dom'
import arrow from './../assets/icons/arrow_left_dark.png'
import editor_image from './../assets/images/editor_image.png'

export const Editornote = () => {
    return (
        <div className='relative sm:h-65 sm:w-full sm:bg-white'>
            <div className='border border-gray sm:bg-green sm:h-8 sm:w-full'>
            <Link to='/homesignedin'><img src={arrow} alt="" className='relative sm:mt-4 sm:ml-4' /></Link>
            <h3 className='relative sm:-mt-4.7 font-bold sm:text-center sm:text-dark sm:text-base font-montserrat'>Editor's Note</h3>
            </div>

            <div>
                <div className='relative sm:mt-4 sm:ml-4.51'>
                <div className='relative sm:mt-3 sm:ml-0 sm:h-6.3 sm:w-6.3 sm:bg-gray-light rounded-full'></div>
                <h3 className='relative sm:-mt-6.3 sm:ml-7.5 font-bold sm:text-left sm:text-dark sm:text-sm font-montserrat'>David. D</h3>
                <p className='relative sm:mt-1 sm:ml-7.5 font-medium sm:text-left sm:text-gray sm:text-sm font-montserrat'>Editor</p>
                <p className='relative sm:-mt-6 sm:ml-17.5 font-medium sm:text-left sm:text-gray sm:text-sm font-montserrat'>August 04, 2024</p>
                <img src={editor_image} alt="" className='relative sm:mt-6 sm:ml-0 sm:w-20.8 rounded-xl' />
                </div>
            </div>

            <div>
                <h3 className='relative sm:ml-4 sm:mt-5 sm:text-base sm:text-left sm:text-dark sm:font-bold'>Title: Lorem ipsum dolor</h3>
                <h3 className='relative sm:ml-4 sm:mt-3 sm:text-sm sm:text-left sm:text-dark sm:font-bold'>Lorem ipsum dolor sit amet consectetur Quam</h3>
                <p className='relative sm:ml-4 sm:mt-3 sm:text-sm sm:text-left sm:text-gray sm:font-medium max-w-21'>
                    Lorem ipsum dolor sit amet consectetur. Quam lacus a eros commodo scelerisque egestas
                    integer egestas semper. Accumsan bibendum ut nulla nec velit. Ac a enim in tincidunt
                    ipsum urna. Malesuada tincidunt lacus sit suspendisse risus. Lorem ipsum dolor sit amet
                    consectetur. Quam lacus a eros commodo scelerisque egestas integer egestas semper.
                    Accumsan bibendum ut nulla nec velit. Ac a enim in tincidunt ipsum urna. Malesuada
                    tincidunt lacus sit suspendisse risus. Lorem ipsum dolor sit amet consectetur. Quam
                    lacus a eros commodo scelerisque egestas integer egestas semper. Accumsan bibendum ut
                    nulla nec velit. Ac a enim in tincidunt ipsum urna. Malesuada tincidunt lacus sit
                    suspendisse risus. Lorem ipsum dolor sit amet consectetur. Quam lacus a eros commodo
                    scelerisque egestas integer egestas semper. Accumsan bibendum ut nulla nec velit. Ac a
                    enim in tincidunt ipsum urna. Malesuada tincidunt lacus sit suspendisse risus. Lorem
                    ipsum dolor sit amet consectetur. Quam lacus a eros commodo scelerisque egestas integer
                    egestas semper. Accumsan bibendum ut nulla nec velit. Ac a enim i
                </p>
            </div>
        </div>
    )
}