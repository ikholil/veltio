import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { Formik } from "formik";
const ContactForm = () => {
  return (
    <div className="relative">
      <div>
        <div className="absolute top-40 left-20">
          <Image
            src="/image/contact/form-bg-dots.png"
            width={200}
            height={400}
            alt="bg dots"
          />
        </div>
        <div className="bg-[url('/image/contact/form-bg.png')] bg-no-repeat opacity-10 min-h-[1050px] w-full absolute top-0 flex items-center justify-center bg-cover"></div>
        <Fade bottom>
          <div className="  max-w-[1296px] mx-3 md:mx-auto h-full pt-14 md:pt-[125px] z-10 relative">
            <h2 className="text-center text-3xl  md:text-[57px] font-bold mb-6 md:mb-10">
              Send <span className="text-[#F112A2]">Message</span>
            </h2>
            <p className="text-[#444] text-lg px-2 text-center mb-8 md:mb-12">
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
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
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
                    <input
                      type="text"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      placeholder="Full Name"
                      className="p-5 w-full rounded-md mt-3 mb-1 focus:outline-none"
                    />
                    <span className="text-red-500">
                      {" "}
                      {errors.name && touched.name && errors.name}
                    </span>
                    <input
                      type="text"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      placeholder="Email"
                      className="p-5 w-full rounded-md mt-3 mb-1 focus:outline-none"
                    />
                    <span className="text-red-500">
                      {" "}
                      {errors.email && touched.email && errors.email}
                    </span>
                    <input
                      type="text"
                      name="subject"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.subject}
                      placeholder="Subject"
                      className="p-5 w-full rounded-md mt-3 mb-1 focus:outline-none"
                    />
                    <span className="text-red-500">
                      {" "}
                      {errors.subject && touched.subject && errors.subject}
                    </span>
                    <textarea
                      rows="8"
                      onChange={handleChange}
                      name="message"
                      onBlur={handleBlur}
                      value={values.message}
                      placeholder="Type a Message"
                      className=" mt-3 mb-1 p-5 w-full rounded-md focus:outline-none"
                    />
                    <span className="text-red-500">
                      {" "}
                      {errors.message && touched.message && errors.message}
                    </span>

                    <div className="flex justify-center mt-[50px] mb-16 md:mb-[120px]">
                      <button className="bg-[#F112A2] font-semibold px-12 py-4 rounded-lg text-white" type="submit">
                        Contact Us
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default ContactForm;
