// import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa6';

const Contact = () => (
  <section id="contact" className="text-center scroll-mt-20">
    <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
    <p className="max-w-2xl mx-auto text-lg mb-8">
     I'm happy to discuss potential projects, ideas, or collaborations. Kindly reach out with genuine intentions, unless it’s just to waste your time.
    </p>
    <div className="flex justify-center space-x-6 text-3xl">
      <a href="https://github.com/ruderbytes" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"><i className="fa-brands fa-github"></i></a>
      <a href="https://wa.me/6282245717390" className="hover:text-blue-500"><i className="fa-solid fa-phone"></i></a>
      <a href="mailto:ruderbytes@gmail.com" className="hover:text-blue-500"><i className="fa-solid fa-envelope"></i></a>
    </div>
  </section>
);

export default Contact;