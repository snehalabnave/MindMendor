import React from "react";
import "./css/therapistlist.css";
import avatar1 from "../assets/images/avatars/a1.jpg";
import avatar2 from "../assets/images/avatars/a2.jpg";
import avatar3 from "../assets/images/avatars/a3.jpg";
import avatar4 from "../assets/images/avatars/a4.jpg";
import avatar5 from "../assets/images/avatars/a5.jpg";
import avatar6 from "../assets/images/avatars/a6.jpg";
import avatar7 from "../assets/images/avatars/a7.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
import Header from "./Header";
import Footer from "./Footer";

function Therapistlist() {
  const therapistItems = [
    {
      image: avatar1,
      name: "Dr. Shreya Pandit",
      proff: "Psychologist",
    },
    {
      image: avatar2,
      name: "Dr. Emily Carter",
      proff: "Clinical Psychologist",
    },
    {
      image: avatar4,
      name: "Michael Rivera",
      proff: "LCSW",
    },
    {
      image: avatar3,
      name: "Dr. Priya Sharma",
      proff: "Psychiatrist",
    },
    {
      image: avatar1,
      name: "Jessica Nguyen",
      proff: "MFT",
    },
    {
      image: avatar5,
      name: "David Thompson",
      proff: "Psychologist",
    },
    {
      image: avatar3,
      name: "Dr. Sofia Alvarez",
      proff: "Behavioral Therapist",
    },
    {
      image: avatar6,
      name: "Alex Chen",
      proff: "LGBTQ+ Affirmative Therapist",
    },
    {
      image: avatar7,
      name: "Dr. Maria DeLuca",
      proff: "Substance Abuse Counselor",
    },
  ];

  return (
    <>
      <Header />
      <div className="therpistlist py-8 px-8 mb-10 bg-[#212121] h-[90vh] w-[100%] gap-10 flex flex-wrap justify-center items-center">
        <Swiper
          slidesPerView={3}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            769: {
              slidesPerView: 3,
              slidesPerGroup: 1,
            },
          }}
          scrollbar={false}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          className="mySwiper container flex flex-wrap justify-center items-center p-10"
        >
          {therapistItems.map((item, index) => (
            <SwiperSlide className="py-4" key={index}>
              <div className="content flex flex-wrap justify-center items-center">
                <div className="card">
                  <div className="card-content flex flex-wrap flex-col items-center">
                    <div className="image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="media-icons flex flex-col gap-4 items-center justify-center">
                      <i className="fa-brands fa-facebook"></i>
                      <i className="fa-brands fa-twitter"></i>
                      <i className="fa-brands fa-instagram"></i>
                    </div>
                    <div className="name-desc mt-4 flex flex-col gap-2 items-center justify-center">
                      <span className="name">{item.name}</span>
                      <span className="profession">{item.proff}</span>
                    </div>
                    <div className="ratings mt-4 flex gap-2">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                    </div>

                    <div className="buttons mt-5 flex gap-2 justify-around">
                      <button className="about-me">About Me</button>
                      <button className="hire-me">Hire Me</button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Footer />
    </>
  );
}

export default Therapistlist;
