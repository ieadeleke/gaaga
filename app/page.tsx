import HomeContact from "@/features/home/Contact";
import HomeHero from "@/features/home/Hero";
import MeetTheTeam from "@/features/home/MeetTheTeam";
import HomeProps from "@/features/home/Props";
import WhatWeDo from "@/features/home/WhatWeDo";

export default function Home() {
  return (
    <section className="bg-[#111]">
      <HomeHero />
      <HomeProps />
      <MeetTheTeam />
      <WhatWeDo />
      <HomeContact />
    </section>
  );
}
