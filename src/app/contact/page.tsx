import Link from 'next/link';
// import { WavyBackground } from "./ui/wavy-background";

function Contact() {
  return (
    <>
      {/* <WavyBackground className="max-w-4xl mx-auto  text-black"> */}
        <div className="flex justify-center items-center h-full  bg-black-900">
          <div className="max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-12 px-6 py-12 ">
            {/* Logo and Branding */}
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-4xl font-bold">fitRent</h2>
              <p className="mt-4 text-gray-300">Rent workout equipment hassle-free.</p>
            </div>

            {/* Quick Links */}
            <div className="col-span-1 md:col-span-1">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul>
                <li><Link href={"/"}  className="text-gray-300 hover:text-white">Home</Link></li>
                <li><Link href={"/listing"} className="text-gray-300 hover:text-white">Rent Equipment</Link></li>
                {/* <li><Link href={"/about"}  className="text-gray-300 hover:text-white">About Us</Link></li> */}
                {/* <li><Link href={"/contact"}  className="text-gray-300 hover:text-white">Contact</Link></li> */}
              </ul>
            </div>

            {/* Contact Information */}
            <div className="col-span-1 md:col-span-1  bg-opacity-20 ">
              <h3 className="text-lg font-semibold mb-4 ">Contact Us</h3>
              <p className="text-gray-300"> Street, India</p>
              <p className="text-gray-300">Phone: +91 989677890</p>
              <p className="text-gray-300">Email: fitrent1@gmail.com</p>
            </div>
            {/* <p className="text-center text-gray-600">
          &copy; 2023 [Your Company Name]. All rights reserved.
        </p> */}
          </div>
        </div>
      {/* </WavyBackground> */}
    </>
  );
}

export default Contact;
