import profile_pic from './../assets/images/profile_pic.svg'
import notification from './../assets/icons/notification.svg'
import button_base from './../assets/icons/button_base.svg'
import menu from './../assets/icons/menu.svg'
import search from './../assets/icons/search.png'
import { useAuthStore } from "../store/authStore";

export const Homenavbar = () => {
    const { firstname } = useAuthStore();

    return (
        <div>
            <div className='fixed sm:-mt-0.5 sm:border sm:bg-green-deep sm:border-gray sm:h-15.1 sm:w-full z-20'>
                <img src={menu} alt="" className='relative sm:mt-4 sm:ml-4' />
                <img src={profile_pic} alt="" className='relative sm:mt-4 sm:ml-4' />
                <h5 className='sm:text-white sm:-mt-6.5'>Welcome</h5>
                <h3 className='sm:text-white sm:mt-0.5 sm:pb-5 font-semibold'>{firstname}</h3>
                <img src={search} alt="" className='absolute sm:mt-5.1 sm:ml-5.1 size-4.4 z-10' />
                <img src={notification} alt="" className='relative sm:-mt-5 sm:ml-20.3' />
                <input className='relative sm:mt-3 sm:-ml-7.5 sm:rounded sm:h-6.3 sm:w-19.4 sm:pl-6.1 sm:pr-3 sm:text-sm' placeholder='Search' />
                <img src={button_base} alt="" className='relative sm:-mt-6.4 sm:ml-19.9' />
            </div>
        </div>
    )
}