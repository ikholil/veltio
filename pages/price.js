import React from 'react';
import TopBanner from '../components/banner/TopBanner';
import EventPricing from '../components/event/EventPricing';
import Footer from '../components/footer/Footer';
import PricePlan from '../components/pricing/PricePlan';

const Price = () => {
    return (
        <div>
             <TopBanner text="Price Plan" indicator="Pages → Pricing" />
             <PricePlan  />
             <EventPricing /> 
             <Footer />
        </div>
    );
};

export default Price;