import Head from "next/head";
import React from "react";
import TopBanner from "../../components/banner/TopBanner";
import ContactForm from "../../components/contact/ContactForm";
import ContactInfo from "../../components/contact/ContactInfo";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <TopBanner text="Contact Us" indicator="Pages → Contact Us" />
      <ContactInfo />
      <ContactForm />
    </>
  );
};

export default Contact;
