"use client";

import { FiDownload } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { saveAs } from "file-saver";
import { v4 as uuidv4} from 'uuid'
import { toast } from 'react-hot-toast'
import { useGSAP } from "@gsap/react";
import gsap from "gsap"

import MixedText from "./MixedText";
import Button from "./buttons/Button";
import { images } from "../constants";

const Overview = () => {
  const router = useRouter();
  const { DoodleArrowDown, ArrowDown, DoodleCircle, Developer } = images;

  const handleDownloadCV = () => {
    // toast("There isn't CV to download")
    // return
    saveAs('/cv/my_cv.pdf', uuidv4());
  };

  useGSAP(() => {
    gsap.to(".doodle-down", { opacity: 1, y: 40, duration: 1 })
    gsap.to(".doodle-circle", { opacity: 1, rotation: 0, duration: 2 })
  }, [])

  return (
    <div
      id="home"
      className="
        pt-40 
        lg:pl-20 
        sm:pl-10 
        pl-0 
        flex 
        flex-row 
        h-[89vh]
      "
    >
      <div
        className="
          relative 
          sm:w-auto 
          w-full 
          lg:items-start
          text-center
          lg:text-left
          flex-1
          flex 
          flex-col 
          items-center
          pl-4
        "
      >
        <DoodleArrowDown className="doodle-down lg:block hidden absolute -left-20 top-0 opacity-0" />

        <MixedText
          label="Fullstack"
          secondaryLabel="Developer"
          large
          newLine
        />
        <div className="flex flex-row items-center sm:gap-6 gap-4 mt-16 lg:justify-start justify-center">
          <Button label="Hire me" color onClick={() => router.push("#contact")}/>
          <Button
            label="Download CV"
            icon={FiDownload}
            onClick={handleDownloadCV}
          />
        </div>

        <div
          onClick={() => router.push("#about")}
          className="
            w-24 
            h-24 
            bg-button 
            flex 
            items-center 
            justify-center 
            absolute 
            bottom-12 
            lg:left-2/4
            animate-bounce
            cursor-pointer
            hover:animate-none
          "
        >
          <ArrowDown />
        </div>
      </div>

      <div className="relative flex-1 lg:block hidden">
        <DoodleCircle className="doodle-circle rotate-45 absolute -right-10" />
        <Developer className="absolute z-10 bottom-0" />
      </div>
    </div>
  );
};

export default Overview;
