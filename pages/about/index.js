import React from 'react';
import BookSeat from '../../components/about/BookSeat';
import GlobalBusiness from '../../components/about/GlobalBusiness';
import TopBanner from '../../components/banner/TopBanner';
import Event from '../../components/event/Event';
import Team from '../../components/team/Team';
import Statics from '../../components/statics/Statics'
import Head from 'next/head';
const About = () => {
    return (
        <>
        <Head>
            <title>About</title>
        </Head>
            <TopBanner text="About Us" indicator="About Us" />
            <GlobalBusiness />
            <Team />
            <Event />
            <BookSeat />
            <Statics />
           
        </>
    );
};

export default About;