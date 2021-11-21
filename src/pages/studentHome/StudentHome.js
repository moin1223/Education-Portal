import React from 'react';
import FeaturedInfo from '../../components/studentDashboard/featuredInfo/FeaturedInfo';
import Chart from '../../components/studentDashboard/chart/Chart';
import { userData } from '../../demoData';
import Navbar from '../../components/studentDashboard/Navbar/Navbar';

const StudentHome = () => {
    return (
        <div> 
                <Navbar />
               <FeaturedInfo/>
               <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
        </div>
    );
};

export default StudentHome;