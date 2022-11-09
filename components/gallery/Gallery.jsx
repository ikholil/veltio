import Image from "next/image";
import React, { useEffect, useState } from "react";
import { galleryImages } from "../../data/galleryImage";
import { MdClose } from "react-icons/md";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
const Gallery = () => {
  const [modal, setModal] = useState(false);
  const [tempImg, setTempImg] = useState({});

  const handleImgClick = (item) => {
    setModal(true);
    setTempImg(item);
  };
  const handleRight = () => {
    const item = tempImg.id == 6 ? 1 : tempImg.id + 1;
    setTempImg(galleryImages[item - 1]);
  };
  const handleLeft = () => {
    const item = tempImg.id == 1 ? 6 : tempImg.id - 1;
    setTempImg(galleryImages[item - 1]);
  };
  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [modal]);
  return (
    <div className="relative">
      {modal && (
        <div onClick={()=> setModal(!modal)} className="fixed top-0 w-full h-full bg-gray-400 flex items-center justify-center z-50">
          <div onClick={(e) => e.stopPropagation()} className="relative rounded-md">
            <Image
              height={800}
              width={1200}
              className={`rounded-md `}
              src={tempImg?.img}
              alt="modal"
            />
            <button
              className="absolute top-2 pinkhover right-2 p-2 bg-white rounded-full "
              onClick={() => setModal(false)}
            >
              <MdClose />
            </button>
            <button
              onClick={handleLeft}
              className="absolute  pinkhover p-2 bg-white rounded-full top-[50%] left-2 "
            >
              <BsChevronLeft />
            </button>
            <button
              onClick={handleRight}
              className="absolute  pinkhover p-2 bg-white rounded-full top-[50%] right-2"
            >
              <BsChevronRight />
            </button>
          </div>
        </div>
      )}
      <div className="absolute hidden md:block animate-pulse -z-10 top-5 -right-1">
        <Image
          src="/image/gallery/bg-dots-home.png"
          height={260}
          width={260}
          alt="shape"
        />
      </div>

        <div className="max-w-[1296px] mx-auto mb-[70px] md:mb-[120px] mt-[66px] md:mt-[122px]">
          <h2 className="text-4xl md:text-[57px] font-bold text-center mb-6 md:mb-[37px] ">
            Our <span className="text-[#5A00CC]">Gallery</span>
          </h2>
          <p className="text-center text-lg text-[#444] mb-[35px] md:mb-[55px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="grid grid-cols-12 gap-1 md:gap-6 items-center content-center  mx-2 lg:mx-0">
            {galleryImages.map((item) => (
              <div
                key={item.id}
                className="col-span-6 flex justify-center   cursor-pointer lg:col-span-4"
                onClick={() => handleImgClick(item)}
              >
                <Image
                  className="zoom"
                  src={item.img}
                  height={287}
                  width={416}
                  alt="gallery img"
                />
              </div>
            ))}
          </div>
        </div>
   
    </div>
  );
};

export default Gallery;
