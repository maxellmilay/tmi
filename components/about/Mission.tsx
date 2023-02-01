import { useEffect } from "react";
import Section from "../Section";
import MissionDetail from "./MissionDetail";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Mission() {
  useEffect(() => {
    AOS.init({ duration: 750 });
  }, []);

  return (
    <>
      <Section
        id="mission"
        className="flex items-end justify-end bg-[url('/images/about/mission-header.jpg')] no-repeat bg-cover bg-center"
      >
        <div
          className="flex items-center mb-5 mt-10 md:mb-10 md:mt-20"
          data-aos="fade-left"
        >
          <h2 className="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl mr-5 sm:mr-9 md:mr-14">
            Mission
          </h2>
          <div className="h-1 sm:h-2 bg-white w-[50vw] md:w-[60vw]" />
        </div>
      </Section>
      <Section className="flex flex-col items-center py-14 md:py-24 text-tmi-blue">
        <MissionDetail
          className="mb-16"
          title="Teach Christ"
          info="Bring people closer to Jesus Christ and guide them to become better hearers and readers of the Word of God."
        />
        <MissionDetail
          className="mb-16"
          title="Service"
          info="Help provide opportunity of learning to preschool children deprived of education because of poverty and other limiting causes."
        />
        <MissionDetail
          className="mb-16"
          title="Discipleship"
          info="Discipling people becoming tentmakers who invest for the cause of Christ in time, talent and tithing."
        />
        <MissionDetail
          title="Prayer"
          info="Share the practice of praying as a direct link to God for worship, thanksgiving and supplication."
        />
      </Section>
    </>
  );
}
