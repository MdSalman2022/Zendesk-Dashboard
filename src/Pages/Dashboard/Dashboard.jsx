import React from 'react';
import { AiFillCaretDown,AiFillCaretRight } from 'react-icons/ai';
import { HorizontalBarChart } from '../../components/HorizontalBar/HorizontalBar';
import { LineChart } from '../../components/LineChart/LineChart';
import { LineChartResponse } from '../../components/LineChartResponse/LineChartResponse';


const Dashboard = () => {

    return (
        <div>
            <div className="container mx-auto  bg-neutral">
                <div className='grid grid-cols-6 bg-neutral gap-5 p-5'>
                    <div className="flex flex-col text-center ">
                        <p className='text-xl font-bold text-black p-2 bg-white rounded-t-xl drop-shadow-sm '>Created</p>
                        <p className='text-4xl text-primary py-3 bg-base-100 '>593</p>
                        <div className="bg-white p-1 rounded-b-xl ">
                            <p className="text-black">to yesterday</p>
                            <p className='flex text-primary justify-center items-center'><AiFillCaretDown/> 9%</p>
                        </div>
                    </div>
                    <div className="flex flex-col text-center ">
                        <p className='text-xl font-bold text-black p-2 bg-white rounded-t-xl drop-shadow-sm'>Unassigned</p>
                        <p className='text-4xl text-primary py-3 bg-base-100'>7</p>
                        <div className="bg-white p-1 rounded-b-xl">
                            <p className="text-black">to yesterday</p>
                            <p className='flex text-primary justify-center items-center'><AiFillCaretDown/> 30%</p>
                        </div>
                    </div>
                    <div className="flex flex-col text-center ">
                        <p className='text-xl font-bold text-black p-2 bg-white rounded-t-xl drop-shadow-sm'>Open</p>
                        <p className='text-4xl text-primary py-3 bg-base-100'>46</p>
                        <div className="bg-white p-1 rounded-b-xl">
                            <p className="text-black">to yesterday</p>
                            <p className='flex text-primary justify-center items-center'><AiFillCaretDown/> 13%</p>
                        </div>
                    </div>
                    <div className="flex flex-col text-center ">
                        <p className='text-xl font-bold text-black p-2 bg-white rounded-t-xl drop-shadow-sm'>Solved</p>
                        <p className='text-4xl text-primary py-3 bg-base-100'>526</p>
                        <div className="bg-white p-1 rounded-b-xl">
                            <p className="text-black">to yesterday</p>
                            <p className='flex text-error justify-center items-center'><AiFillCaretDown/> 8%</p>
                        </div>
                    </div>
                    <div className="flex flex-col text-center ">
                        <p className='text-xl font-bold text-black p-2 bg-white rounded-t-xl drop-shadow-sm'>Escalated</p>
                        <p className='text-4xl text-primary py-3 bg-base-100'>2</p>
                        <div className="bg-white p-1 rounded-b-xl">
                            <p className="text-black">to yesterday</p>
                            <p className='flex text-primary justify-center items-center'><AiFillCaretRight/> 0%</p>
                        </div>
                    </div>
                    <div className="flex flex-col text-center ">
                        <p className='text-xl font-bold text-black p-2 bg-white rounded-t-xl drop-shadow-sm'>Sydney</p>
                        <p className='text-4xl text-primary py-3 bg-base-100'>01:41 AM</p>
                        <div className="bg-white p-1 rounded-b-xl">
                            <p className="text-black">Tuesday</p>
                            <p className='flex text-primary justify-center items-center'>18 Dec 2018</p>
                        </div>
                    </div>
                </div>
                
                <div className="grid grid-cols-3 p-5 gap-5">
                    <div className="col-span-1 h-96 bg-white rounded-xl">
                        <p className="font-semibold text-center text-black ">Tickets Solved by Agent</p>
                            <HorizontalBarChart/>

                    </div>
                    <div className="col-span-2 flex flex-col gap-5">
                         <div className="flex flex-col text-center ">
                            <p className='text-xl font-bold text-black p-2 bg-white rounded-t-xl drop-shadow-sm'>First Response Time</p>
                            <p className='text-4xl text-[#D6A5FF] py-3 bg-base-100'>1h 17min (Month: 1h 38min)</p>
                            <div className="bg-white p-5 rounded-b-xl">
                             
                                <LineChartResponse/>
                            </div>
                        </div>
                         <div className="flex flex-col text-center ">
                            <p className='text-xl font-bold text-black p-2 bg-white rounded-t-xl drop-shadow-sm'>Full Resolution Time</p>
                            <p className='text-4xl text-primary py-3 bg-base-100'>1h 43min (Month: 2h 25min)</p>
                            <div className="bg-white p-5 rounded-b-xl">
                               <LineChart/>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default Dashboard;