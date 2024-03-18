'use client'

import { useGSAP } from "@gsap/react";
import gsap from "gsap"

import MixedText from "./MixedText";
import ReadMore from "./ReadMore";
import { images, aboutMe } from '@/app/constants'

const About = () => {
  const {
    DevOnChair,
    DoodleArrowUp,
    DoodleSquare,
    MusicMote,
    LightBulb
  } = images

  useGSAP(() => {
    gsap.to(".doodle-up", { y: 0, repeat: -1, duration: 1, yoyo: true})
  }, [])

  return (
    <div
      id="about"
      className='
      w-full
      h-screen
      md:pt-40
      py-20
      flex
      flex-row
      justify-between
    '
    >
      <div
        className="
          lg:w-1/3
          lg:text-left 
          w-full 
          mt-12 
          relative 
          text-center
        "
      >
        <div className="mb-6">
          <MixedText
            label="About"
            secondaryLabel="me"
          />
        </div>
        <ReadMore>
          {aboutMe}
        </ReadMore>

        <MusicMote className="absolute md:-top-40 -top-20 left-0" />
        <LightBulb className="absolute lg:block hidden -top-3 -right-20" />
        <DoodleArrowUp className="doodle-up translate-y-20 absolute sm:block hidden md:bottom-20 bottom-0 left-1/2" />
      </div>

      <div className="w-7/12 relative lg:block hidden">
        <DoodleSquare className="absolute" />
        <DevOnChair
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        />
      </div>
    </div>
  );
}

export default About;