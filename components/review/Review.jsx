import Image from "next/image";
import React from "react";
import { reviews } from "../../data/review";

const Review = () => {
  return (
    <div>
      <div className="relative">
        <div className="bg-[url('/image/review/review-bg.png')] bg-no-repeat bg-cover opacity-10 h-full w-full absolute top-0 flex items-center justify-center"></div>
        <div className="pb-[71px] md:pb-[120px] pt-16 md:pt-[127px]  max-w-[1296px] mx-auto z-10 relative">
          <h2 className="text-center text-3xl  md:text-[57px] font-bold mb-4 md:mb-[25px]">
            Previous <span className="text-[#F112A2]">Event</span>
          </h2>
          <p className="text-[#444] text-base md:text-lg px-2 text-center mb-10 md:mb-14">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="flex flex-col mx-2 md:mx-0 flex-wrap md:flex-row gap-4 md:gap-6 justify-center items-center">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="flex flex-col rounded-sm hover:shadow-xl cursor-pointer transition-all duration-300 pb-[30px] px-3 md:px-[30px] pt-1 text-center bg-white w-[300px] md:w-[400px]"
              >
                <div className="pt-4">
                  <Image
                    src={review.image}
                    width={118}
                    height={130}
                    alt="review image"
                  />
                </div>
                <p className="text-lg text-[#444] text-center">{review.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
