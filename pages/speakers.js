import React from 'react';
import TopBanner from '../components/banner/TopBanner';
import Footer from '../components/footer/Footer';
import TeamAll from '../components/team/TeamAll';

const Speakers = () => {
    return (
        <div>
            <TopBanner text="Speakers" indicator="Pages → Speakers" />
            <TeamAll />
            <Footer />
        </div>
    );
};

export default Speakers;