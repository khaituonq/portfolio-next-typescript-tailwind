"use client";

import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { BsSend } from "react-icons/bs";
import axios from 'axios';
import { useState } from "react";

import { images } from "../constants";
import Input from "./Input";
import MixedText from "./MixedText";
import Button from "./navbar/buttons/Button";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Contact = () => {
  const { Keyboard, DoodleArrowDown2, DeveloperWalk, DoodleMail, Shadow } =
    images;
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true)

    await axios.post('/api/email', data)
    .then(() => {
      toast.success('Send email successfully.')
      router.push('#home')
      reset()
    })
    .catch(() => {
      toast.error("Can't send the mail.")
    })
    .finally(() => {
      setIsLoading(false)
    })
  };

  return (
    <div
      id="contact"
      className="
        w-full 
        h-screen
        md:py-52
        py-16
        relative
        flex
        md:flex-row
        flex-col
        justify-between
        items-center
      "
    >
      <div
        className="
          relative
          h-full
          lg:w-2/5
          md:w-1/3
          w-full
          z-10
          md:text-left
          text-center
        "
      >
        <MixedText label="Got a project in" secondaryLabel="mind?" newLine />
        <DoodleArrowDown2
          className="
            absolute
            bottom-1/4
            left-0
            lg:block
            hidden
          "
        />
        <Shadow
          className="
            absolute
            bottom-0
            right-20
            lg:block
            hidden
          "
        />
        <DeveloperWalk
          className="
            absolute
            bottom-4
            right-0
            lg:block
            hidden
          "
        />
      </div>

      <div
        className="
          relative
          lg:w-1/2
          md:w-3/5
          flex
          flex-col
          gap-6
        "
      >
        <Keyboard
          className="
            absolute
            left-20
            -top-40
            z-0
            md:block
            hidden
          "
        />
        <DoodleMail
          className="
            absolute
            top-full
            right-10
            md:block
            hidden
          "
        />
        <div className="flex flex-row gap-4">
          <Input
            id="name"
            register={register}
            disabled={isLoading}
            errors={errors}
            label="Your name"
            placeholder="Name"
            required
          />
          <Input
            id="email"
            register={register}
            disabled={isLoading}
            errors={errors}
            label="Your email"
            placeholder="Email"
            required
          />
        </div>
        <Input
          message
          id="message"
          register={register}
          disabled={isLoading}
          errors={errors}
          label="Your message"
          placeholder="Message"
          required
        />
        <div
          className="
            md:w-2/4
            w-full
            hover:opacity-75
            duration-300
          "
        >
          <Button
            disabled={isLoading}
            label="Send Message"
            icon={BsSend}
            color
            onClick={handleSubmit(onSubmit)}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
