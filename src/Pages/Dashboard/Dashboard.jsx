import React from 'react';
import { AiFillCaretDown,AiFillCaretRight } from 'react-icons/ai';
import { HorizontalBarChart } from '../../components/HorizontalBar/HorizontalBar';
import { LineChart } from '../../components/LineChart/LineChart';
import { LineChartResponse } from '../../components/LineChartResponse/LineChartResponse';


const Dashboard = () => {

    return (
        <div className='h-full'>
            <div className="container mx-auto bg-neutral">
                <div className='grid lg:grid-cols-6 bg-neutral gap-2 lg:gap-5 p-1 lg:p-5'>
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
                <div className="grid lg:grid-cols-5 p-2 lg:p-5 gap-3 lg:gap-5 mx-2 lg:mx-auto">
                    <div className="lg:col-span-2 h-full lg:h-96 bg-white rounded-xl  w-96 lg:w-full lg:h-80">
                        <p className="font-semibold text-center text-black ">Tickets Solved by Agent</p>
                        <div className="bg-white rounded-b-xl  ">
                              <HorizontalBarChart />
                        </div>

                    </div>
                    <div className="lg:col-span-3 w-96 lg:w-full lg:h-full flex flex-col  gap-1 lg:gap-5">
                         <div className="flex flex-col text-center ">
                            <p className='text-xl font-bold text-black p-2 bg-white rounded-t-xl drop-shadow-sm'>First Response Time</p>
                            <p className='lg:text-4xl text-[#D6A5FF] py-3 bg-base-100'>1h 17min (Month: 1h 38min)</p>
                            <div className="bg-white lg:p-5 rounded-b-xl lg:w-full p-2">
                                <LineChartResponse/>
                            </div>
                        </div>
                         <div className="flex flex-col text-center ">
                            <p className='text-xl font-bold text-black p-2 bg-white rounded-t-xl drop-shadow-sm'>Full Resolution Time</p>
                            <p className='lg:text-4xl text-primary py-3 bg-base-100'>1h 43min (Month: 2h 25min)</p>
                            <div className="bg-white lg:p-5 rounded-b-xl lg:w-full p-2">
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