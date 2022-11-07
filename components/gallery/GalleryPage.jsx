import Image from "next/image";
import { MdClose } from "react-icons/md";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { galleryPageImg } from "../../data/gallaryPageImg";
import { useState, useEffect } from "react";
const GalleryPage = () => {
  const [modal, setModal] = useState(false);
  const [tempImg, setTempImg] = useState({});

  const handleImgClick = (item) => {
    setModal(true);
    setTempImg(item);
  };
  const handleRight = () => {
    const item = tempImg.id == 9 ? 1 : tempImg.id + 1;
    setTempImg(galleryPageImg[item - 1]);
  };
  const handleLeft = () => {
    const item = tempImg.id == 1 ? 9 : tempImg.id - 1;
    setTempImg(galleryPageImg[item - 1]);
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
        <div onClick={()=> setModal(!modal)} className="fixed top-0 w-screen h-full bg-gray-400 flex items-center justify-center z-50">
         
          <div onClick={(e) => e.stopPropagation()} className="relative rounded-md">
            <Image
              height={800}
              width={1000}
              className="rounded-md"
              src={tempImg?.img}
              alt="modal"
            />
            <button
              className="absolute top-2 shadow-md pinkhover right-2 p-2 bg-white rounded-full "
              onClick={() => setModal(false)}
            >
              <MdClose />
            </button>
            <button
              onClick={handleLeft}
              className="absolute shadow-md pinkhover p-2 bg-white rounded-full top-[50%] left-2 "
            >
              <BsChevronLeft />
            </button>
            <button
              onClick={handleRight}
              className="absolute shadow-md pinkhover p-2 bg-white rounded-full top-[50%] right-2"
            >
              <BsChevronRight />
            </button>
          </div>
        </div>
      )}
      <div className="absolute top-0 right-10 animate-pulse">
        <Image
          src="/image/contact/contact-info-bg.png"
          height={550}
          width={1600}
          alt="bg dots"
        />
      </div>
      <div className="max-w-[1296px] mx-auto mt-16 md:mt-[120px]">

          <div className="text-center">
            <h2 className="text-center font-extrabold  mb-6 md:mb-10 text-4xl md:text-[57px]">
              Our <span className="text-[#5A00CC]">Gallery</span>
            </h2>
            <p className=" mx-4 mb-8 md:mb-14 text-center text-sm md:text-lg md:mt-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>


        <div className="grid mx-2 xl:mx-0 grid-cols-12 mb-7 md:mb-[50px]  gap-4">
          {galleryPageImg.map((item) => (
            <div
              onClick={() => handleImgClick(item)}
              key={item.id}
              className={`col-span-12 sm:col-span-6 cursor-pointer md:col-span-4 ${
                item.id == 2 && "row-span-2"
              } ${item.id == 8 && "row-span-2"} ${
                item.id == 9 && "md:col-span-8"
              }`}
            >
              <Image
                className="zoom"
                src={item.img}
                width={item.width}
                height={item.height}
                alt="gallery photos"
              />
            </div>
          ))}

        
        </div>

        <div className="flex justify-center mb-[70px] md:mb-[120px] gap-2">
          <a
            href="#"
            className="bg-[#F112A2] w-7 flex justify-center text-white border border-[#F112A2]"
          >
            1
          </a>
          <a
            href="#"
            className="text-[#F112A2] w-7 flex justify-center border border-[#F112A2]"
          >
            2
          </a>
          <a
            href="#"
            className="text-[#F112A2] w-7 flex justify-center border border-[#F112A2]"
          >
            {" "}
            {">"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
