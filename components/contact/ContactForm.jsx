import Image from "next/image";
import { Formik } from "formik";
import formDots from "../../public/image/contact/form-bg-dots.png";
const ContactForm = () => {
  return (
    <div className="relative">
      <div>
        <div className="absolute animate-pulse top-40 left-20">
          <Image src={formDots} width={200} height={400} alt="bg dots" />
        </div>
        <div className="bg-[url('/image/contact/form-bg.png')] bg-no-repeat opacity-10 h-full w-full absolute top-0 flex items-center justify-center bg-cover"></div>
        <div className="  max-w-[1296px] mx-3 md:mx-auto h-full pt-16 md:pt-[125px] z-10 relative">
          <h2 className="text-center text-3xl  md:text-[57px] font-bold mb-4 md:mb-10">
            Send <span className="text-[#F112A2]">Message</span>
          </h2>
          <p className="text-[#444] text-lg px-2 text-center mb-7 md:mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="w-full md:w-[635px] mx-auto">
            <Formik
              initialValues={{
                name: "",
                email: "",
                subject: "",
                message: "",
              }}
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = "Email is Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                if (!values.name) {
                  errors.name = "Name is Required";
                }
                if (!values.subject) {
                  errors.subject = "Subject is Required";
                }
                if (!values.message) {
                  errors.message = "Message is Required";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  console.log(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col">
                    <input
                      type="text"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      placeholder="Full Name"
                      className="p-5 w-full shadow-lg rounded-md mt-1 mb-1 focus:outline-none"
                    />
                    <span className="text-red-500 text-sm h-5">
                      {" "}
                      {errors.name && touched.name && errors.name}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="text"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      placeholder="Email"
                      className="p-5 w-full shadow-lg rounded-md mt-1 mb-1 focus:outline-none"
                    />
                    <span className="text-red-500 text-sm h-5">
                      {" "}
                      {errors.email && touched.email && errors.email}
                    </span>
                  </div>
                  <div className="flex flex-col">

                    <input
                      type="text"
                      name="subject"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.subject}
                      placeholder="Subject"
                      className="p-5 w-full shadow-lg rounded-md mt-1 mb-1 focus:outline-none"
                    />
                    <span className="text-red-500 text-sm h-5">
                      {" "}
                      {errors.subject && touched.subject && errors.subject}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <textarea
                      rows="8"
                      onChange={handleChange}
                      name="message"
                      onBlur={handleBlur}
                      value={values.message}
                      placeholder="Type a Message"
                      className=" mt-1 p-5 w-full shadow-lg rounded-md focus:outline-none"
                    />
                    <span className="text-red-500 text-sm h-5">
                      {" "}
                      {errors.message && touched.message && errors.message}
                    </span>
                  </div>

                  <div className="flex justify-center mt-6 md:mt-[50px] pb-[70px] md:pb-[120px]">
                    <button
                      className="bg-[#F112A2] font-semibold px-12 py-4 rounded-lg text-white hover:shadow-lg hover:shadow-[#f112a360] duration-200"
                      type="submit"
                    >
                      Contact Us
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
