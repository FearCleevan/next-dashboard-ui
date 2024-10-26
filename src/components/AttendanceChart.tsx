"use client"

import Image from 'next/image';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Mon',
        present: 60,
        absent: 10,
    },
    {
        name: 'Tues',
        present: 70,
        absent: 10,
    },
    {
        name: 'Wed',
        present: 60,
        absent: 10,
    },
    {
        name: 'Thu',
        present: 60,
        absent: 10,
    },
    {
        name: 'Fri',
        present: 60,
        absent: 10,
    },
    {
        name: 'Sat',
        present: 60,
        absent: 10,
    },
];

const AttendanceChart = () => {
    return (
        <div className='bg-white rounded-[10px] w-full h-full p-4'>
            <div className="flex justify-between items-center">
                <h1 className='text-lg font-semibold'>Attendance</h1>
                <Image src="/moreDark.png" alt='' width={20} height={20} />
            </div>
            <ResponsiveContainer width="100%" height="90%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    barSize={20}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false}  stroke="#ddd"/>
                    <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
                    <YAxis axisLine={false} tickLine={false}/>
                    <Tooltip contentStyle={{borderRadius:"10px", borderColor:"lightgray"}}/>
                    <Legend align='left' verticalAlign='top' wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }} />
                    <Bar dataKey="present" fill="#73d8b8" legendType='circle' radius={[10,10,0,0]}/>
                    <Bar dataKey="absent" fill="#7c93d3" legendType='circle' radius={[10,10,0,0]}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default AttendanceChart