import React from 'react';
import TopBanner from '../components/banner/TopBanner';
import Footer from '../components/footer/Footer';
import GalleryPage from '../components/gallery/GalleryPage';

const gallary = () => {
    return (
        <div>
            <TopBanner text="Gallery" indicator="Pages → Gallery" />
            <GalleryPage />
            <Footer />
        </div>
    );
};

export default gallary;