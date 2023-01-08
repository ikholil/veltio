import Button from '../others/Button';

const BookSeat = () => {
    return (
        <div className="bg-[url('/image/about/about-bg-book.png')] bg-cover bg-no-repeat">
            <div className='flex flex-col  text-center justify-center items-center pt-[65px] pb-[70px] md:py-[120px]'>
            <h2 className='text-white font-bold text-4xl md:text-[57px] mb-5 md:mb-14'>Book Your Seat</h2>
            <Button name="Get Ticket" classes="text-white bg-[#F112A2]" />
            </div>
        </div>
    );
};

export default BookSeat;