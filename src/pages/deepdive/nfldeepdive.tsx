import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import arrow from './../../assets/icons/arrow_left_dark.png';
import { Nfl } from '../../core/interface';
import { Loader } from '../../components/Loader';

export const Nfldeepdive = () => {

    const [nfldatas, setNfldata] = useState([]);

    useEffect(() => {
        axios.get("https://api.sportsdata.io/v3/nfl/scores/json/AllTeams?key=4e8cca39433844f6936e89a39e2ae50a")
            .then(res => setNfldata(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className='sm:h-150'>
            <div className='border border-gray sm:bg-green sm:h-8 sm:w-full'>
                <h3 className='relative sm:mt-4.5 sm:ml-7 font-semibold sm:text-left sm:text-white sm:text-base font-montserrat'><span className='text-gold'>NFL</span> Deep Dive</h3>
            </div>

            <Link to="/bettadeepdive"><img src={arrow} alt="" className='absolute sm:-mt-6.5 sm:ml-4 sm:h-5 sm:w-5 sm:p-0.3 sm:bg-white sm:rounded-full' /></Link>

            <div>
                <h3 className='relative sm:mt-5 sm:text-dark font-semibold'>Thursday 21, November, 2024</h3>
                <div>
                    <table className='relative border sm:mt-5 sm:ml-4'>
                        <thead>
                            <tr>
                                <th className='sm:pt-2 sm:pr-1 sm:pl-1 sm:text-left sm:text-sm'>TeamID</th>
                                <th className='sm:pt-2 sm:pl-1 sm:text-left sm:text-sm'>PlayerID</th>
                                <th className='sm:pt-2 sm:pl-1 sm:text-left sm:text-sm'>City</th>
                                <th className='sm:pt-2 sm:pl-1 sm:text-left sm:text-sm'>FullName</th>
                            </tr>
                        </thead>
                        <tbody>
                            {nfldatas.length > 0 ?
                                nfldatas.map((item:Nfl, index) => {
                                    return <tr key={index}>
                                        <td className='sm:pt-2 sm:pb-3 sm:pr-1 sm:pl-1 sm:text-left sm:text-sm'>{item.TeamID}</td>
                                        <td className='sm:pt-2 sm:pb-3 sm:pr-1 sm:pl-1 sm:text-left sm:text-sm'>{item.PlayerID}</td>
                                        <td className='sm:pt-2 sm:pb-3 sm:pr-1 sm:pl-1 sm:text-left sm:text-sm'>{item.City}</td>
                                        <td className='sm:pt-2 sm:pb-3 sm:pr-1 sm:pl-1 sm:text-left sm:text-sm'>{item.FullName}</td>
                                    </tr>
                                }) : (<Loader />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}