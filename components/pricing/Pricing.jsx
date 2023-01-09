import { useState } from "react";
import { pricing } from "../../data/price";
import Modal from 'react-awesome-modal';
import { IoClose } from 'react-icons/io5'

const Pricing = () => {
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);
  return (
    <section id="pricing">
      <div className="bg-[url('/image/pricing/bg.png')] bg-no-repeat bg-cover">
        <div className=" max-w-[1296px]  z-10 flex flex-col items-center mx-auto pt-[65px] pb-[70px] md:pt-[127px] md:pb-[120px]">
          <h2 className="text-white  font-bold  text-3xl md:text-[57px]">
            Get Your Ticket
          </h2>
          <p className="md:max-w-lg  mx-3 mb-10 md:mb-14 text-white text-center mt-5 text-sm md:text-lg md:mt-[28px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum
            urna sed erat tortor aliquam ipsum
          </p>
          <div className="flex flex-wrap max-w-full px-3 xl:px-0 justify-center gap-4">
            {pricing.map((item, i) => (
              <div
                className=" bg-white w-[300px] lg:w-[417px] shadow-[0px_4px_18px_rgba(148,148,148,0.25)] rounded-[10px]  "
                key={item.title}
              >
                <div className="flex flex-col justify-between">
                  <div
                    className={`${i == 1 && "bg-[#F112A2] text-white"
                      } pt-10 md:pt-[69px] rounded-t-lg`}
                  >
                    <h2
                      className={`text-center font-bold text-2xl md:text-[57px] mb-3 md:mb-[34px] ${i == 1 ? "bg-[#F112A2] text-white" : "primary-color"
                        }`}
                    >
                      ${item.price}
                    </h2>
                    <h4
                      className={`text-lg md:text-3xl text-center font-semibold mb-4 md:mb-8 ${i == 1 ? "text-white" : "text-[#222]"
                        }`}
                    >
                      {item.title}
                    </h4>
                  </div>
                  {i !== 1 && (
                    <div className="w-28 h-1 mx-auto bg-[#5A00CC]"></div>
                  )}
                  <div className="px-10  pb-8 md:pb-[60px]">
                    <ul className="flex flex-1 flex-col gap-2  items-center mt-[34px] mb-9">
                      {item.features.map((feature) => (
                        <li className="text-[#222] text-lg  " key={feature}>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex justify-center w-full">
                      <button onClick={openModal} className="text-white self-end font-semibold  text-lg py-2 md:py-4 rounded-md px-4 md:px-6 bg-[#F112A2] hover:shadow-[#f112a360] hover:shadow-lg duration-200">
                        Purchase Ticket
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Modal
        visible={open}
        width="500"
        height="800"
        effect="fadeInUp"
        onClickAway={closeModal}
      >
        <div className="rounded-[25px] p-7">
          <div className="flex justify-between items-center pb-4">
            <h3 className="text-3xl font-medium">Buy Ticket</h3>
            <IoClose size={30} className="cursor-pointer" onClick={closeModal} />
          </div>
          <form>
            <div className="flex flex-col">
              <label className="py-2 block" htmlFor="name">Name</label>
              <input className="w-full border-2 rounded-xl p-4" type="text" placeholder="Full Name" id="name" required/>
            </div>
            <div className="flex flex-col">
              <label className="py-2 block" htmlFor="email">Email</label>
              <input className="w-full border-2 rounded-xl p-4" type="email" placeholder="example@domain.com" id="name" required/>
            </div>
            <div className="flex flex-col">
              <label className="py-2 block" htmlFor="pass">Choose Pass:</label>
              <select className="w-full border-2 rounded-xl p-4" name="pass" id="pass" required>
                <option value="Basic - $150">Basic - $150</option>
                <option value="Standard - $250">Standard - $250</option>
                <option value="Premium - $450">Premium - $450</option>
              </select>
            </div>
            <p className="py-7">Velit praesentium vitae nihil expedita tempore culpa exercitationem quia beatae aut consectetur debitis corrupti veniam labore at.</p>
            <span className="pb-4 block text-lg">Payment method:</span>
            <div className="flex gap-3 text-lg">
              <input type="radio" name="method" id="visa" />
              <label htmlFor="visa">Visa</label>
            </div>
            <div className="flex gap-3 text-lg">
              <input type="radio" name="method" id="mastercard" />
              <label htmlFor="mastercard">Mastercard</label>
            </div>
            <div className="flex gap-3 text-lg mb-10">
              <input type="radio" name="method" id="paypal" />
              <label htmlFor="paypal">Paypal</label>
            </div>
            <div className="flex justify-center">
              <button className="text-white self-end font-semibold  text-lg py-2 md:py-4 rounded-md px-4 md:px-6 bg-[#F112A2] hover:shadow-[#f112a360] hover:shadow-lg duration-200">
                Purchase Ticket
              </button>
            </div>
          </form>

        </div>
      </Modal>
    </section>
  );
};

export default Pricing;
