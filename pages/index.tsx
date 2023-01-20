import Section from "@/components/Section"
import SocialIcons from "@/components/SocialIcons"

export default function Home() {
  return (
    <div>
      <Section className="bg-[url('/images/latest-sermon.png')] no-repeat bg-cover bg-top pt-96 sm:pt-80">
        <h1 className="text-3xl font-thin">LATEST SERMON</h1>
        <p className="font-bold md:text-6xl sm:text-4xl text-xl mb-8 mt-5">The Premise of the Promise <br /> of a Happy New Year</p>
        <button className="bg-tmi-yellow py-1.5 px-7 font-bold rounded-3xl mr-3 mb-3">Watch Now</button>
        <button className="bg-transparent border border-white rounded-3xl py-1.5 px-7">See More Sermons</button>
      </Section>
      <Section className="bg-[url('/images/welcome-to-tmi.png')] no-repeat bg-cover bg-center p-5">
        <hr className="border-t-2 border-white" />
        <hr className="border-t border-white mt-1 mx-1" />
        <div className="flex flex-col items-center mt-14">
          <p className="text-xl sm:text-3xl font-thin mb-4">Welcome to</p>
          <h2 className="font-bold md:text-7xl sm:text-5xl text-4xl mb-4">TMI Fellowship</h2>
          <p className="text-tmi-yellow text-xl sm:text-2xl mb-20">we&apos;re glad you&apos;re here</p>
          <p className="text-center text-xl sm:text-4xl font-semibold">Live Worship Service Every <br /> Sunday at 9:30 AM</p>
        </div>
        <div className="flex mt-44 sm:mt-36 md:mx-5 justify-center md:justify-start">
          <SocialIcons imgURL='/images/instagram.png' alt='Instagram' />
          <SocialIcons imgURL='/images/facebook.png' alt='Facebook' />
          <SocialIcons imgURL='/images/youtube.png' alt='Youtube' />
          <div className="flex flex-col">
            <p className="font-bold">Follow Us!</p>
            <p>@tmifellowship </p>
          </div>
        </div>
      </Section >

    </div >
  )
}
