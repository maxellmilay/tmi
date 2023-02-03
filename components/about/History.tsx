import React from "react";
import Section from "@/components/Section";
import Image from "next/image";
import HistoryPic1 from "@/public/images/about/history-pic-1.webp";
import HistoryPic2 from "@/public/images/about/history-pic-2.webp";

export default function History() {
  return (
    <>
      <Section
        id="history"
        className="flex items-end bg-[url('/images/about/mobile-history-header.webp')] md:bg-[url('/images/about/history-header.webp')] no-repeat bg-cover bg-center"
      >
        <div className="history-header-animation flex items-center mt-32 mb-12 sm:mb-16">
          <div className="h-1 sm:h-2 bg-white w-[55vw]" />
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold ml-5 sm:ml-9 md:ml-14">
            History
          </h1>
        </div>
      </Section>
      <Section className="flex flex-col md:flex-row justify-start md:justify-evenly items-center bg-[url('/images/about/history-bg-1.webp')] no-repeat bg-cover bg-center">
        <Image
          src={HistoryPic1}
          alt="1st history pic"
          className="w-[80vw] h-[65vw] md:w-[50vw] md:h-[80vh] object-cover relative -top-8 md:bottom-10"
        />
        <div className="flex md:mt-0 justify-center items-center h-full">
          <p className="text-black text-sm sm:text-xl md:h-fit w-[80vw] md:max-w-[35vw] text-justify mb-10 md:my-5">
            <span className="font-bold">MOVED WITH THE DESIRE</span> to make a
            difference in the lives of underprivileged children in the
            marginalized sector of society who are deprived of preschool
            education, three families and one individual from the Nazarene
            Christian Fellowship College Church (NCF College Church) met,
            bonded, and crafted the blueprint for the free pre-school program.
            On February 4, 2018, in a simple worship and thanksgiving service at
            the residence of the Somera family in Lapu-Lapu City, Cebu, the TMI
            Mobile school program and Tentmakers Initiative Fellowship (TMI
            Fellowship) was born.
          </p>
        </div>
      </Section>
      <Section className="flex md:items-center justify-center md:justify-start px-12 sm:px-20 bg-[url('/images/about/mobile-history-bg-2.webp')] md:bg-[url('/images/about/history-bg-2.webp')] no-repeat bg-cover bg-center">
        <p className="text-white md:max-w-[40vw] text-sm sm:text-2xl text-justify leading-6 md:leading-10 my-20">
          The following month, on March 10, 2018, at Parklane Hotel, TMI Mobile
          School Program (TMSP) was officially launched. The event was witnessed
          by friends and supporters representing various sectors of society.
        </p>
      </Section>
      <Section className="flex flex-col items-center justify-center bg-[url('/images/about/history-bg-3.webp')] no-repeat bg-cover bg-center">
        <Image
          src={HistoryPic2}
          alt="2nd history pic"
          className="h-[60vw] md:h-[40vw] w-[80vw] md:[65vw] object-cover relative -top-8"
        />
        <div className="flex flex-col items-center mb-16 text-black max-w-[70vw] text-lg sm:text-2xl text-justify">
          <p className="mb-5">
            <span className="font-bold">ON NOVEMBER 18, 2018</span>, 52 children
            from the resettlement area at Sito Kapasar, Barangay Budlaan, Cebu
            City, graduated from the program. Two more batches from the same
            area followed and successfully completed the program until the Covid
            19 scare halted the project.
          </p>
          <p>
            TMI Fellowship looks at 2023 with great anticipation as TMSP hopes
            to resume.
          </p>
        </div>
      </Section>
    </>
  );
}
