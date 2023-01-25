import { useEffect } from "react";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import SocialIcons from "@/components/SocialIcons";
import AOS from 'aos'
import 'aos/dist/aos.css';

export default function Home() {

  useEffect(() => {
    AOS.init({ duration: 750 })
  }, [])

  return (
    <Layout>
      <Section className="h-screen bg-[url('/images/home/latest-sermon.png')] no-repeat bg-cover bg-bottom px-6 sm:px-10 pt-[26rem] sm:pt-[24rem] md:pt-[20rem] lg:pt-[20rem]">
        <div className="home-landing-animation">
          <h1 className="text-3xl font-thin">LATEST SERMON</h1>
          <p className="font-bold md:text-6xl sm:text-4xl text-xl mb-8 mt-5">
            The Premise of the Promise <br /> of a Happy New Year
          </p>
          <button className="bg-tmi-yellow py-1.5 px-7 font-bold rounded-3xl mr-3 mb-3 text-xs sm:text-xl">
            Watch Now
          </button>
          <button className="bg-transparent border border-white rounded-3xl py-1.5 px-7 text-xs sm:text-xl">
            See More Sermons
          </button>
        </div>
      </Section>
      <Section className="h-screen bg-[url('/images/home/welcome-to-tmi.png')] no-repeat px-6 sm:px-10 bg-cover bg-top p-5">
        <hr className="border-t-2 border-white" />
        <hr className="border-t border-white mt-1 mx-1" />
        <div className="flex flex-col items-center mt-14" data-aos="fade-up">
          <p className="text-xl sm:text-3xl font-thin mb-4">Welcome to</p>
          <h2 className="font-bold md:text-7xl sm:text-5xl text-4xl mb-4">
            TMI Fellowship
          </h2>
          <p className="text-tmi-yellow text-xl sm:text-2xl mb-20 xl:mb-28">
            we&apos;re glad you&apos;re here
          </p>
          <p className="text-center text-xl sm:text-4xl font-semibold">
            Live Worship Service Every <br /> Sunday at 9:30 AM
          </p>
        </div>
        <div className="grid call-container mobile-socmed-call socmed-call w-fit mx-auto md:mx-5 mt-44 sm:mt-36 md:mt-24 lg:mt-28 xl:mt-28 ">
          <div className="flex icons">
            <SocialIcons imgURL="/images/socials/instagram.png" alt="Instagram" />
            <SocialIcons imgURL="/images/socials/facebook.png" alt="Facebook" />
            <SocialIcons imgURL="/images/socials/youtube.png" alt="Youtube" />
          </div>
          <p className="font-bold call text-center md:text-left">Follow Us!</p>
          <p className="handle text-center md:text-left">@tmifellowship </p>
        </div>
      </Section>
      <Section className="h-screen flex flex-col-reverse sm:flex-row">
        <div className="flex flex-col text-center sm:text-right bg-[url('/images/home/cause-of-christ.png')] h-full sm:w-1/2 bg-cover items-center sm:items-end px-7 lg:px-14 justify-center">
          <p className="text-tmi-blue text-[2.2rem] leading-[2.7rem] sm:text-4xl lg:text-6xl mb-4 sm:mb-8 max-w-sm sm:max-w-lg">
            Investing for the <span className="font-bold">Cause of Christ</span>
          </p>
          <p className="text-black w-fit text-sm sm:text-lg lg:text-2xl mb-5 sm:mb-8 max-w-sm sm:max-w-lg">
            TMI Fellowship hinges on the capability of the working class to{" "}
            <span className="font-bold">effect change</span> in society for the
            Cause of Christ
          </p>
          <button className="bg-tmi-yellow py-1.5 px-7 font-bold rounded-3xl mr-3 mb-3 w-fit xl:text-xl">
            About Us
          </button>
        </div>
        <div className="flex h-full sm:w-1/2 overflow-hidden">
          <div className="h-full w-full bg-[url('/images/home/investing-pic.png')] bg-cover bg-top scale-105 hover:scale-100 hover:duration-500 transition-all" />
        </div>
      </Section>
      <Section className="h-screen flex flex-col-reverse sm:flex-row-reverse">
        <div className="flex flex-col text-center sm:text-left bg-[url('/images/home/rooted-in-education.png')] h-full sm:w-1/2 bg-cover items-center sm:items-start px-7 lg:px-14 justify-center">
          <p className="text-tmi-blue text-[2.2rem] leading-[2.7rem] sm:text-4xl lg:text-6xl mb-4 sm:mb-8 max-w-sm sm:max-w-lg">
            Rooted in <span className="font-bold">Education</span>
          </p>
          <p className="text-black w-fit text-sm sm:text-lg lg:text-2xl mb-5 sm:mb-8 max-w-sm sm:max-w-lg">
            TMI Fellowship stems from an initiative to provide{" "}
            <span className="font-bold">free education</span> to the
            marginalized sector
          </p>
          <button className="bg-tmi-yellow py-1.5 px-8 font-bold rounded-3xl mr-3 mb-3 w-fit xl:text-xl">
            Our Ministry
          </button>
        </div>
        <div className="flex h-full sm:w-1/2 overflow-hidden">
          <div className="h-full w-full bg-[url('/images/home/rooted-pic.png')] bg-cover bg-top sm:bg-center scale-105 hover:scale-100 hover:duration-500 transition-all" />
        </div>
      </Section>
    </Layout>
  );
}
