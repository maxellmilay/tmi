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
        <div>
          <hr className="border-t-2 border-white" />
          <hr className="border-t border-white mt-1 mx-1" />
        </div>
      </Section>

    </div >
  )
}
