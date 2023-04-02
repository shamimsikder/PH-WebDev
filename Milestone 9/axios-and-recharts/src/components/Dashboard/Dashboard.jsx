import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Dashboard = () => {

    const students = [
        {
            "id": 1,
            "name": "John Doe",
            "Mathematics": 95,
            "English Composition": 85,
            "Computer Science": 90      
        },
        {
            "id": 2,
            "name": "Jane Smith",
            "Mathematics": 90,
            "English Composition": 80,
            "Computer Science": 85    
        },
        {
            "id": 3,
            "name": "Mark Johnson",
            "Mathematics": 87,
            "English Composition": 92,
            "Computer Science": 89    
        },
        {
            "id": 4,
            "name": "Emily Brown",
            "Mathematics": 85,
            "English Composition": 83,
            "Computer Science": 90    
        },
        {
            "id": 5,
            "name": "David Lee",          
            "Mathematics": 88,
            "English Composition": 82,
            "Computer Science": 91    
        },
        {
            "id": 6,
            "name": "Amanda Taylor",
            "Mathematics": 87,
            "English Composition": 89,
            "Computer Science": 84    
        },
        {
            "id": 7,
            "name": "Michael Davis",
            "Mathematics": 92,
            "English Composition": 86,
            "Computer Science": 80    
        },
        {
            "id": 8,
            "name": "Sophia Martinez",
            "Mathematics": 90,
            "English Composition": 93,
            "Computer Science": 88    
        },
        {
            "id": 9,
            "name": "Kevin Wilson",
            "Mathematics": 82,
            "English Composition": 88,
            "Computer Science": 90    
        },
        {
            "id": 10,
            "name": "Olivia Hernandez",
            "Mathematics": 85,
            "English Composition": 80,
            "Computer Science": 88    
        }
    ];
    

    return (
        <div className='mt-10 w-full flex justify-center items-center'>
            
            <LineChart width={1600} height={300} data= {students}>
            
                <XAxis dataKey={"name"} />
                <YAxis />
                <Tooltip />
                <Legend />

                <Line dataKey={"Mathematics"}></Line>
                <Line dataKey={"Computer Science"}></Line>
                <Line dataKey={"English Composition"}></Line>

            </LineChart>

        </div>
    );
};

export default Dashboard;