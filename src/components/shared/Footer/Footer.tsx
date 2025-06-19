"use client";

import { IoLogoInstagram } from "react-icons/io5";
import { FacebookFilled, TwitterOutlined } from "@ant-design/icons";

// const thirdRow = [
//   {
//     title: "About Us",
//     link: "/about",
//   },
//   {
//     title: "Blog",
//     link: "/blogs",
//   },
//   {
//     title: "Reviews",
//     link: "/reviews",
//   },
//   // {
//   //   title: "Certification",
//   //   link: "/certification",
//   // },
//   {
//     title: "Careers",
//     link: "/career",
//   },
//   {
//     title: "Financing",
//     link: "/finance",
//   },
//   {
//     title: "Service Area",
//     link: "/service-area",
//   },
// ];
// const forthRow = [
//   {
//     title: (
//       <a
//         href="https://www.google.com/maps/search/?api=1&query=16555+South+Oak+Park+Ave,+Tinley+Park,+IL+60477"
//         target="_blank"
//       >
//         16555 South Oak Park Ave, Tinley Park, IL 60477
//       </a>
//     ),
//     icon: <PiBuildingOffice />,
//   },
//   {
//     title: "8200 Beckett Park Dr West Chester Township OH 45069",
//     icon: <RiHomeOfficeLine />,
//   },

//   {
//     title: <a href="tel:708-949-4553">708-949-4553</a>,
//     icon: <MdOutlineCall />,
//   },
//   {
//     title: <a href="mailto:info@arcroofs.com">info@arcroofs.com</a>,
//     icon: <MdMailOutline />,
//   },
// ];
const Footer = () => {
  // const pathname = usePathname();
  return (
    <div className="bg-white border-t border-[#0056B380] py-10">
      <div className="container">

        <div className=" flex flex-col md:flex-row  justify-between gap-10 md:gap-0">
          {/* logo section */}
          <div className="flex flex-col">
            <div className=" ">
              {/* <Image
                src={logo}
                className="object-contain"
                height={400}
                width={400}
                alt="image"
              /> */}
              <p className="font-semibold text-xl">Logo</p>
            </div>
           
          </div>
          {/* route section */}
          <div>
            <div className=" w-full text-base text-[#6B7280] flex flex-col md:flex-row gap-5">
              <div>
                Terms of Service
              </div>
              <div>
                Privacy Policy
              </div>
              <div>
                Help Center
              </div>
              <div>
               Contact Us
              </div>
              <div>
              About Us
              </div>
            </div>
          </div>
          {/* social media */}
          <div>
             <div className="flex items-center gap-4">
              <div className=" p-2 rounded-full text-blue-500 ">
                <FacebookFilled size={20} />
              </div>
              <div className=" p-2 rounded-full text-blue-500 ">
                <TwitterOutlined size={20} />
              </div>
              <div className=" p-2 rounded-full text-blue-500 ">
                <IoLogoInstagram size={20} />
              </div>
            </div>
          </div>

        </div>
      <div className="text-center text-[#6B7280]">
        © 2025 company name. All rights reserved.
      </div>
      </div>
    </div>
  );
};

export default Footer;
