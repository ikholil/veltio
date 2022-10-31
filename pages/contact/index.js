import React from 'react';
import TopBanner from '../../components/banner/TopBanner';
import ContactForm from '../../components/contact/ContactForm';
import ContactInfo from '../../components/contact/ContactInfo';
import Footer from '../../components/footer/Footer';

const Contact = () => {
    return (
        <div>
            <TopBanner text="Contact Us" indicator="Pages → Contact Us" />
            <ContactInfo />
            <ContactForm /> 
          
        </div>
    );
};

export default Contact;