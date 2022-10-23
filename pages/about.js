import React from 'react';
import BookSeat from '../components/about/BookSeat';
import GlobalBusiness from '../components/about/GlobalBusiness';
import TopBanner from '../components/banner/TopBanner';
import Event from '../components/event/Event';
import Team from '../components/team/Team';
import Statics from '../components/statics/Statics'
import Footer from '../components/footer/Footer'
const About = () => {
    return (
        <div>
            <TopBanner text="About Us" indicator="About Us" />
            <GlobalBusiness />
            <Team />
            <Event />
            <BookSeat />
            <Statics />
            <Footer />
        </div>
    );
};

export default About;