import ContactForm from "./Components/Form";

const ContactUsPage = () => {
  return (
    <div className="bg-[#fff] max-w-[1440px] mx-auto max-h-screen justify-center text-center">
      <h2 className="text-black text-lg font-bold">
        "If you need help or have any questions, we are here to serve you!"
      </h2>
      <div className="justify-center text-center ">
        <div className="flex justify-center text-left">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
