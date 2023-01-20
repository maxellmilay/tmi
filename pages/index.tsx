import Section from "@/components/Section"
import Image from "next/image"
import latestSermon from '../images/latest-sermon.png'
import welcomeToTMI from '../images/welcome-to-tmi.png'
import facebookLogo from '../images/facebook.png'
import instagramLogo from '../images/instagram.png'
import youtubeLogo from '../images/youtube.png'

export default function Home() {
  return (
    <div>
      <Section>
        <div className="relative bg-gradient-to-t from-tmi-gradient-blue to-transparent w-full h-full">
          <Image src={latestSermon} fill alt="Latest Sermon" className="w-full h-full object-cover absolute -z-10" />
          <div className="pt-72 mx-10">
            <p className="text-3xl font-thin">LATEST SERMON</p>
            <p className="font-bold text-7xl mb-8 mt-5">The Premise of the Promise <br /> of a Happy New Year</p>
            <button className="bg-tmi-yellow py-1.5 px-7 font-bold rounded-3xl mr-3">Watch Now</button>
            <button className="bg-transparent border border-white rounded-3xl py-1.5 px-7">See More Sermons</button>
          </div>
        </div>
      </Section>
      <Section>
        <div className="relative bg-gradient-to-b from-tmi-gradient-blue to-transparent w-full h-full">
          <Image src={welcomeToTMI} fill alt="Latest Sermon" className="w-full h-full object-cover absolute -z-10" />
          <div className="mx-8 pt-5">
            <hr className="border-t-2 border-white" />
            <hr className="border-t border-white mt-1 mx-1" />
            <div className="flex flex-col items-center mt-14">
              <p className="text-3xl font-thin mb-3">Welcome to</p>
              <p className="font-bold text-7xl mb-3">TMI Fellowship</p>
              <p className="text-tmi-yellow text-2xl mb-20">we're glad you're here</p>
              <p className="text-center text-4xl font-semibold">Live Worship Service Every <br /> Sunday at 9:30 AM</p>
            </div>
            <div className="flex mb-10 mt-32 mx-5">
              <Image src={instagramLogo} alt='Instagram' width={50} className="mr-2"></Image>
              <Image src={facebookLogo} alt='Instagram' width={50} className="mr-2"></Image>
              <Image src={youtubeLogo} alt='Instagram' width={50} className="mr-2"></Image>
              <div className="flex flex-col">
                <p className="font-bold">Follow Us!</p>
                <p>@tmifellowship</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

    </div >
  )
}
