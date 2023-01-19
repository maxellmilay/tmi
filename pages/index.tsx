import Section from "@/components/Section"

export default function Home() {
  return (
    <div>
      <Section>
        <div className="pt-72">
          <p className="text-3xl font-thin">LATEST SERMON</p>
          <p className="font-bold text-7xl mb-8 mt-5">The Premise of the Promise <br /> of a Happy New Year</p>
          <button className="bg-tmi-yellow py-1.5 px-7 font-bold rounded-3xl mr-3">Watch Now</button>
          <button className="bg-transparent border border-white rounded-3xl py-1.5 px-7">See More Sermons</button>
        </div>
      </Section>
      <Section>
        <div className="mx-5 pt-5">
          <hr className="border-t-2 border-white" />
          <hr className="border-t border-white mt-1 mx-1" />
          <div className="flex flex-col items-center mt-10">
            <p className="text-3xl font-thin mb-3">Welcome to</p>
            <p className="font-bold text-7xl mb-3">TMI Fellowship</p>
            <p className="text-tmi-yellow font-thin text-2xl mb-20">we're glad you're here</p>
            <p className="text-center text-4xl font-semibold">Live Worship Service Every <br /> Sunday at 9:30 AM</p>
          </div>
          <div className="flex mt-36">
            <div className="flex flex-col">
              <p>Follow Us!</p>
              <p>@tmifellowship</p>
            </div>
          </div>
        </div>
      </Section>

    </div >
  )
}
