import React from 'react';
import TopBanner from '../../components/banner/TopBanner';
import Conference from '../../components/conference/Conference';
import Footer from '../../components/footer/Footer';

const Schedule = () => {
    return (
        <div>
            <TopBanner text="Schedule" indicator="Schedule" />
            <Conference />
          
        </div>
    );
};

export default Schedule;