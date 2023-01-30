import { useEffect } from "react";
import Section from "../Section";
import StatementDetail from "./StatementDetail";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Statement() {
  useEffect(() => {
    AOS.init({ duration: 750 });
  }, []);

  return (
    <>
      <Section
        id="statement"
        className="flex items-end justify-end bg-[url('/images/about/statement-header.png')] no-repeat bg-cover bg-center"
      >
        <div
          className="flex items-center mb-5 mt-10 md:mb-10 md:mt-20"
          data-aos="fade-left"
        >
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mr-3 ml-3 sm:ml-0 sm:mr-7 md:mr-14">
            Statement of Faith
          </h2>
          <div className="h-1 sm:h-2 bg-white w-[30vw] sm:w-[40vw] md:w-[45vw]" />
        </div>
      </Section>
      <Section className="flex flex-col items-center py-14 md:py-24 text-tmi-blue">
        <StatementDetail
          className="my-11"
          number="1"
          info="We believe in One God, existing in three persons: The Father, the Son, the Holy Spirit"
        />
        <StatementDetail
          className="my-11"
          number="2"
          info="We believe in Jesus Christ, the begotten Son and eternally one with the Father, became incarnate by the Holy Spirit and was born by the Virgin Mary."
        />
        <StatementDetail
          className="my-11"
          number="3"
          info="We believe in the Holy Spirit, eternally one with the Father and the Son, who is ever present and efficiently active in and with the church."
        />
        <StatementDetail
          className="my-11"
          number="4"
          info="We believe in the inerrancy of the sixty-six books in the Bible in so far as what it teaches as written by men under the plenary inspiration of the Holy Spirit."
        />
        <StatementDetail
          className="my-11"
          number="5"
          info="We believe in the depravity of men because of sin that came into the world."
        />
        <StatementDetail
          className="my-11"
          number="6"
          info="We believe that Jesus Christ suffered, died, and is resurrected for the redemption of the fallen man."
        />
        <StatementDetail
          className="my-11"
          number="7"
          info="We believe that the depraved man, by repentance, can be saved through the atoning sacrifice of Jesus Christ on the cross."
        />
        <StatementDetail
          className="my-11"
          number="8"
          info="We believe in the need for fellowship and corporate gathering of believers for worship, prayer, thanksgiving, and supplication."
        />
        <StatementDetail
          className="my-11"
          number="9"
          info="We believe in the twin ordinances of the Lord’s Supper and Water Baptism prescribed in the Bible."
        />
        <StatementDetail
          className="my-11"
          number="10"
          info="We believe that the Lord Jesus Christ will come again for the believers to forever be with Him."
        />
      </Section>
    </>
  );
}
