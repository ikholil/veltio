import React from 'react';
import Button from '../others/Button';

const BookSeat = () => {
    return (
        <div className="bg-[url('/image/about/about-bg-book.png')] bg-cover bg-no-repeat">
            <div className='flex flex-col  text-center justify-center items-center py-[120px]'>
            <h1 className='text-white font-bold text-4xl md:text-[57px] mb-5 md:mb-14'>Book Your Seat</h1>
            <Button name="Get Ticket" class="text-white bg-[#F112A2]" />
            </div>
        </div>
    );
};

export default BookSeat;