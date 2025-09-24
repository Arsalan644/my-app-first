// import React from "react";
// import "./WhyJoin.css";
// // import { libre_baskerville, eula, metropolis, mainlux } from "../app/layout.js";

// function WhyJoin() {
//   return (
//     <section className="why-join relative">

//       <h2 className="section-title  text-[#1a1814] font-bold text-4xl">Why Join <span className="text-[#ad9437]">Genie?</span></h2>
//       <p className="section-subtitle">
//         A values-based matchmaking platform built for Muslims worldwide.
//       </p>

//       <div className="reasons">
//         <div className="reason-card">
//           <h3 className="text-shadow-sm">Faith-Centered</h3>
//           <p className="">
//             Connect with like-minded Muslims who share your values and beliefs,
//             ensuring relationships rooted in faith.
//           </p>
//         </div>

//         <div className="reason-card">
//           <h3 className="text-shadow-sm">AI-Powered</h3>
//           <p>
//             Genie uses Voice AI, psychological frameworks, and smart algorithms
//             to create meaningful, long-term matches.
//           </p>
//         </div>

//         <div className="reason-card">
//           <h3 className="text-shadow-sm">Global Community</h3>
//           <p>
//             Access a trusted worldwide Muslim network with support for 10 major
//             languages, making connections easier than ever.
//           </p>
//         </div>

//         <div className="reason-card">
//           <h3 className="text-shadow-sm">Privacy First</h3>
//           <p>
//             Your data and conversations are kept secure with advanced encryption
//             and privacy protection at every step.
//           </p>
//         </div>

//          <div className="reason-card">
//           <h3 className="text-shadow-sm">Citizen Genie</h3>
//           <p>
//             Join a movement, not just an app. Genie commits a share of every dollar to building lasting institutions that elevate Muslims worldwide for generations to come.
//           </p>
//         </div>

//          <div className="reason-card">
//           <h3 className="text-shadow-sm">Matched or you do not pay</h3>
//           <p>
//             We stand by what we believe in. You don’t find your match, you won’t pay.

//           </p>
//         </div>

//          <div className="reason-card">
//           <h3 className="text-shadow-sm">Elevating muslims globally</h3>
//           <p>
//             Beyond matchmaking, Genie is on a mission to uplift Muslim voices, values, and visibility on the world stage
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default WhyJoin;

// CarouselComponent.jsx

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "./WhyJoin.css";

import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";

SwiperCore.use([Navigation]);

const sampleData = [
  {
    title: "Faith-Centered",
    description:
      "Connect with like-minded Muslims who share your values and beliefs, ensuring relationships rooted in faith.",
  },
  {
    title: "AI-Powered",
    description:
      "Genie uses Voice AI, psychological frameworks, and smart algorithms to create meaningful, long-term matches.",
  },
  {
    title: "Global Community",
    description:
      "Access a trusted worldwide Muslim network with support for 10 major languages, making connections easier than ever.",
  },
  {
    title: "Privacy First",
    description:
      "Your data and conversations are kept secure with advanced encryption and privacy protection at every step.",
  },
  {
    title: "Citizen Genie",
    description:
      "Join a movement, not just an app. Genie commits a share of every dollar to building lasting institutions that elevate Muslims worldwide for generations to come.",
  },
  {
    title: "Matched or You Do Not Pay",
    description:
      "We stand by what we believe in. You don’t find your match, you won’t pay.",
  },
  {
    title: "Elevating Muslims Globally",
    description:
      "Beyond matchmaking, Genie is on a mission to uplift Muslim voices, values, and visibility on the world stage.",
  },
];

const CarouselComponent = () => {
  return (
    <section className="bg-[#FCFDF5] w-full">
      <div className="carousel-container">
        <div className="carousel-title">
          <h2>
            Why Join <span>Genie?</span>
          </h2>
          <p>
            A values-based matchmaking platform built for Muslims worldwide.
          </p>
        </div>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          className="mySwiper"
        >
          {sampleData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="reason-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

// Styles moved to WhyJoin.css

export default CarouselComponent;
