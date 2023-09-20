import React, { useState } from "react";
import kImaging from "../img/4kImaging.png";
import kImagingHover from "../img/4kImagingHover.png";
import shoulderRestortion from "../img/shoulderRestortion.png";
import shoulderRestortionHover from "../img/shoulderRestortionHover.png";
import kneePreservation from "../img/kneePreservation.png";
import kneePreservationHover from "../img/kneePreservationHover.png";
import extremitySecurity from "../img/extremitySecurity.png";
import extremitySecurityHover from "../img/extremitySecurityHover.png";
import poweredInstruction from "../img/poweredInstruction.png";
import poweredInstructionHover from "../img/poweredInstructionHover.png";
import rightIcon from "../img/rightIcon.svg";
import Reasons from "../img/Reasons.png";
import customer from "../img/customer.png";
import customer2 from "../img/customer2.png";
import Partners1 from "../img/Partners1.png";
import Partners2 from "../img/Partners2.png";
import blogImg1 from "../img/blogImg1.png";
import blogImg2 from "../img/blogImg2.jpeg";
import blogImg3 from "../img/blogImg3.jpg";
import HomeSlider from "../components/homeslider";

const upperBox = [
  {
    title: "Sport Medicine",
    desc: "4K Imaging System, Shoulder Restoration System, Knee Repair and Construction System และ Extremity System",
    btnText: "ดูเพิ่มเติม",
    btnLink:
      "https://www.conmed.com/en-US/Specialties-and-Techniques/Specialties/Orthopedics",
  },
  {
    title: "Powered Instruments",
    desc: "Large bone, small bone, sternal saw, high-speed drill",
    btnText: "ดูเพิ่มเติม",
    btnLink: "https://www.conmed.com/en-US/Products/Surgical-Power-Tools",
  },
  {
    title: "VWELL Products",
    desc: "Personalized Insole",
    btnText: "ดูเพิ่มเติม",
    btnLink: "https://www.vwell.care/footcare",
  },
];

const imageItems = [
  {
    key: "kImaging",
    image: kImaging,
    hoverImage: kImagingHover,
  },
  {
    key: "shoulderRestortion",
    image: shoulderRestortion,
    hoverImage: shoulderRestortionHover,
  },
  {
    key: "kneePreservation",
    image: kneePreservation,
    hoverImage: kneePreservationHover,
  },
  {
    key: "extremitySecurity",
    image: extremitySecurity,
    hoverImage: extremitySecurityHover,
  },
  {
    key: "poweredInstruction",
    image: poweredInstruction,
    hoverImage: poweredInstructionHover,
  },
];

const perks = [
  {
    name: "ประสบการณ์กว่า 10 ปี",
    description: "เราคือผู้เชี่ยวชาญด้านสินค้าออร์โธปิดิกส์ในตลาดมากกว่า 10 ปี",
  },
  {
    name: "สินค้าคุณภาพจากสหรัฐอเมริกา",
    description:
      "อุปกรณ์การแพทย์ทางด้านออร์โรปิดิกส์ที่มีคุณภาพได้มาตรฐาน นำเข้าจากประเทศสหรัฐอเมริกาและได้รับการรับรองจาก US FDA",
  },
  {
    name: "ลูกค้าเป็นที่ 1 สำหรับเรา",
    description:
      "เราพัฒนาการให้บริการตลอดเวลา เพื่อสร้างความพึงพอใจและผลลัพธ์ที่ดีที่สุด",
  },
  {
    name: "เราทำงานด้วยใจ",
    description:
      "มุ่งมั่นพัฒนาตนเองและองค์กรตลอดเวลาเพื่อส่งผลลัพธ์ที่ดีที่สุดสู่ผู้ป่วย",
  },
];

const posts = [
  {
    date: "22 ธ.ค.",
    href: "/การประชุมเชิงปฏิบัติกา-2/",
    category: { name: "WORKSHOP", href: "#" },
    description:
      "บริษัทเมดิไทม์ให้ความสนับสนุนการถ่ายทอดองค์ความรู้การผ่าตัดด้านกระดูก และข้อโดยการจับมือแลกเปลี่ยนอง…",
    imageUrl: blogImg1,
  },
  {
    date: "21 ธ.ค.",
    href: "/การประชุมเชิงปฏิบัติกา",
    category: { name: "BOOTH EXIBITION", href: "#" },
    description:
      "งานประชุมวิชาการประจำปี 2563 ราชวิทยาลัยแพทย์ออร์โธปิดิกส์แห่งประเทศไทย(RCOST2563)",
    imageUrl: blogImg2,
  },
  {
    date: "4 พ.ย.",
    href: "/กิจกรรมอื่นๆ/",
    category: { name: "OTHER EVENT    ", href: "#" },
    description:
      "ทางบริษัทเมดิไทม์ ยินดีเป็นส่วนหนึ่งในการมีส่วนร่วมเพื่อทำให้สังคมไทยดีขึ้นกิจกรรมล่าสุดทางบริษัทเมด…",
    imageUrl: blogImg3,
  },
];

const Home = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (key) => {
    setHoveredItem(key);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const renderImageContainers = () => {
    return imageItems.map((item) => (
      <div
        key={item.key}
        className="image-container w-1/5 h-[230px] leading-4 bg-no-repeat bg-contain"
        onMouseEnter={() => handleMouseEnter(item.key)}
        onMouseLeave={handleMouseLeave}
        style={{
          backgroundImage: `url(${
            hoveredItem === item.key ? item.hoverImage : item.image
          })`,
        }}
      ></div>
    ));
  };

  return (
    <>
      <section className="x-[80vh] sm:h-[512px] xl:h-[280px]">
        <HomeSlider />
      </section>
      <main>
        <section className=" bg-[#E5F0EB] px-6 xl:px-0">
          <div className="max-w-[1200px] mx-auto flex flex-wrap sm:flex-nowrap flex-col sm:flex-row justify-around gap-x-3 xl:gap-x-14  py-24 gap-y-4">
            {upperBox.map((item, index) => (
              <div
                key={index}
                className="bg-[#006B3D] sm:w-1/3 p-8 sm:p-6 xl:p-8 text-white rounded-[10px] flex flex-col gap-5"
              >
                <h2 className="text-[24px] font-bold">{item.title}</h2>
                <p className="text-base font-medium">{item.desc}</p>
                <a
                  href={item.btnLink}
                  className="flex items-center font-bold text-[14px]"
                >
                  <span>{item.btnText}</span>

                  <span className="font-bold">
                    <img src={rightIcon} alt="" className="w-[10px] ml-1" />
                  </span>
                </a>
              </div>
            ))}
          </div>
        </section>
        <section className="max-w-[1270px] mx-auto interesting-products mt-28">
          <h2 className="text-[#003190] text-[48px] font-bold text-center">
            สินค้าที่น่าสนใจ
          </h2>
          <div className="flex gap-x-5 mt-28">{renderImageContainers()}</div>
        </section>

        <section className="mt-20">
          <div className="flex">
            <div className="w-full xl:w-[35%] ">
              <div className="mt-[30%] ">
                <div className="-mr-[66%] text-center">
                  <img src={Reasons} alt="" className="w-[485px] mx-auto relative z-1" />
                </div>
              </div>
            </div>
            <div className="w-full xl:w-[65%] pt-[11%] pr-[5%] pb-[10%] pl-[15%] bg-[#E6F0EC]">
              <div>
                <h2 className="text-[#003190] text-[48px] font-bold">
                  เหตุผลที่เลือก
                  <span className="text-green-600"> MediTime</span>
                </h2>

                <div className="mt-6">
                  <div className="mx-auto max-w-7xl">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-12 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                      {perks.map((perk) => (
                        <div key={perk.name} className="sm:flex">
                          <div className="sm:flex-shrink-0"></div>
                          <div className="mt-3 sm:mt-0 sm:ml-3">
                            <h3 className="text-2xl font-semibold text-[#3A8717]">
                              {perk.name}
                            </h3>
                            <p className="mt-2 text-base font-normal text-[#3a4f66]">
                              {perk.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="relative  px-6 pt-16 lg:px-8 lg:pt-32">
            <div className="absolute inset-0">
              <div className="h-1/3 bg-white sm:h-2/3" />
            </div>
            <div className="relative mx-auto max-w-7xl">
              <div className="text-center">
                <h2 className="text-5xl font-bold text-[#003190] sm:text-4xl">
                  ข่าวสารและกิจกรรมที่เกี่ยวข้อง
                </h2>
              </div>
              <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
                {posts.map((post) => (
                  <div
                    key={post.title}
                    className="flex flex-col overflow-hidden rounded-lg"
                  >
                    <div className=" h-[270px]">
                      <img
                        className="h-full w-full object-cover rounded-[10px]"
                        src={post.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between mt-5">
                      <div className="flex-1">
                        <p className="text-[18px] font-medium text-[#2a3d53]">
                          <a
                            href={post.category.href}
                            className="hover:underline"
                          >
                            {post.category.name}
                          </a>
                        </p>
                        <a href={post.href} className="mt-2 block">
                          <p className="mt-3 text-[18px] font-medium text-black">
                            {post.description}
                          </p>
                        </a>

                        <a
                          href={post.href}
                          className="flex items-center font-bold text-[16px] text-[#3A8717] mt-3"
                        >
                          <span>อ่านต่อ</span>

                          <span className="font-bold">
                            <img
                              src={rightIcon}
                              alt=""
                              className="w-[10px] ml-1"
                            />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-[1270px] mx-auto interesting-products mt-28">
          <h2 className="text-[#003190] text-[48px] font-bold text-center">
            พาร์ทเนอร์ของเรา
          </h2>
          <div className="flex gap-x-20 justify-center mt-20">
            <img src={Partners1} className=" " alt="" />
            <img src={Partners2} className="" alt="" />
          </div>
        </section>

        <section className="max-w-[1270px] mx-auto interesting-products my-32 ">
          <h2 className="text-[#003190] text-[48px] font-bold text-center">
            ลูกค้าของเรา
          </h2>
          <img src={customer} className="mx-auto mt-10" alt="" />
          <img src={customer2} className="mx-auto mt-4" alt="" />
        </section>
      </main>
    </>
  );
};

export default Home;