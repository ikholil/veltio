import Image from "next/image";
import React from "react";
import { Fade } from "react-reveal";
import { reviews } from "../../data/review";

const Review = () => {
  return (
    <div>
      <div className="relative">
        <div className="bg-[url('/image/review/review-bg.png')] bg-no-repeat opacity-10 min-h-[950px] w-full absolute top-0 flex items-center justify-center"></div>
        <Fade bottom>
        <div className=" md:py-[120px]  max-w-[1296px] mx-auto z-10 relative">
          <h2 className="text-center text-4xl  md:text-[57px] font-extrabold mb-7">
            Previous <span className="text-[#F112A2]">Event</span>
          </h2>
          <p className="text-[#444] text-lg px-2 text-center mb-8 md:mb-14">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="flex flex-col mx-2 md:mx-0 flex-wrap md:flex-row gap-6 justify-center items-center">
           {
            reviews.map(review => (
              <div key={review.id} className="flex flex-col rounded-sm shadow-lg pb-[30px] px-[30px] pt-1 text-center bg-white md:w-[400px]">
                <div className="pb-3">
                  <Image src={review.image} width={118} height={130} alt="review image" />
                </div>
                <p className="text-lg text-[#444] text-center">
                  {review.desc }
                </p>
              </div>
            ))
           }
          </div>
        </div>
        </Fade>
      </div>
    </div>
  );
};

export default Review;
