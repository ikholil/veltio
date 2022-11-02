import Head from "next/head";
import React from "react";
import TopBanner from "../../components/banner/TopBanner";
import Footer from "../../components/footer/Footer";
import GalleryPage from "../../components/gallery/GalleryPage";

const gallary = () => {
  return (
    <>
      <Head>
        <title>Gallery</title>
      </Head>
      <TopBanner text="Gallery" indicator="Pages → Gallery" />
      <GalleryPage />
    </>
  );
};

export default gallary;
