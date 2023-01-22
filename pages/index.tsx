import Layout from "@/components/Layout";
import Section from "@/components/Section";
import SocialIcons from "@/components/SocialIcons";

export default function Home() {
  return (
    <Layout>
      <Section className="bg-[url('/images/home/latest-sermon.png')] no-repeat bg-cover bg-top px-6 sm:px-10 pt-[26rem] sm:pt-80">
        <h1 className="text-3xl font-thin">LATEST SERMON</h1>
        <p className="font-bold md:text-6xl sm:text-4xl text-xl mb-8 mt-5">
          The Premise of the Promise <br /> of a Happy New Year
        </p>
        <button className="bg-tmi-yellow py-1.5 px-7 font-bold rounded-3xl mr-3 mb-3 text-xs sm:text-md">
          Watch Now
        </button>
        <button className="bg-transparent border border-white rounded-3xl py-1.5 px-7 text-xs sm:text-md">
          See More Sermons
        </button>
      </Section>
      <Section className="bg-[url('/images/home/welcome-to-tmi.png')] no-repeat px-6 sm:px-10 bg-cover bg-top p-5">
        <hr className="border-t-2 border-white" />
        <hr className="border-t border-white mt-1 mx-1" />
        <div className="flex flex-col items-center mt-14">
          <p className="text-xl sm:text-3xl font-thin mb-4">Welcome to</p>
          <h2 className="font-bold md:text-7xl sm:text-5xl text-4xl mb-4">
            TMI Fellowship
          </h2>
          <p className="text-tmi-yellow text-xl sm:text-2xl mb-20">
            we&apos;re glad you&apos;re here
          </p>
          <p className="text-center text-xl sm:text-4xl font-semibold">
            Live Worship Service Every <br /> Sunday at 9:30 AM
          </p>
        </div>
        <div className="flex mt-44 md:mt-24 md:mx-5 justify-center md:justify-start">
          <SocialIcons imgURL='/images/socials/instagram.png' alt='Instagram' />
          <SocialIcons imgURL='/images/socials/facebook.png' alt='Facebook' />
          <SocialIcons imgURL='/images/socials/youtube.png' alt='Youtube' />
          <div className="flex flex-col">
            <p className="font-bold">Follow Us!</p>
            <p>@tmifellowship </p>
          </div>
        </div>
      </Section >
      <Section className="flex flex-col-reverse sm:flex-row">
        <div className="flex flex-col text-center sm:text-right bg-[url('/images/home/cause-of-christ.png')] h-full sm:w-[45%] lg:w-[55%] bg-cover items-center sm:items-end px-7 lg:px-14 justify-center">
          <p className="text-tmi-blue text-[2.2rem] leading-[2.7rem] sm:text-4xl lg:text-6xl mb-4 sm:mb-8 max-w-sm sm:max-w-lg">Investing for the <span className="font-bold">Cause of Christ</span></p>
          <p className="text-tmi-blue w-fit text-sm sm:text-lg lg:text-2xl mb-5 sm:mb-8 max-w-sm sm:max-w-lg">TMI Fellowship hinges on the capability of the working class to <span className="font-bold">effect change</span> in society for the Cause of Christ</p>
          <button className="bg-tmi-yellow py-1.5 px-7 font-bold rounded-3xl mr-3 mb-3 w-fit">About Us</button>
        </div>
        <div className="flex bg-[url('/images/home/investing-pic.png')] h-full sm:w-[55%] lg:w-[45%] bg-cover bg-top sm:bg-center"></div>
      </Section >
    </Layout>
  )
}
