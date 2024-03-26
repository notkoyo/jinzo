import React from "react";
import Link from "next/link";
import { features } from "@/lib/data";
import { DashboardBtn } from "./custom-btns";
import { Button } from "./button";
import KaideDevLogo from "../icons/kaide-dev-logo";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { SendIcon } from "lucide-react";

export default function LandingPageContent({ isAuth }: { isAuth: boolean }) {
  return (
    <main>
      {/* Hero section */}
      <div className="flex h-fit w-screen cursor-default flex-col items-center justify-center gap-y-[1.75rem] pt-[10rem] text-center antialiased">
        <h1 className="text-4xl font-medium md:text-6xl">
          Accelerate learning
          <br />
          Change the game
        </h1>
        <p className="md:text-lg max-w-sm text-xs font-medium md:max-w-xl">
          Jinzo is the ultimate learning platform for developers. <br />
          Streamline your study sessions, organize learning materials, create
          goals and boost your productivity with ease.
        </p>
        <div className="flex gap-x-4">
          {isAuth ? (
            <DashboardBtn />
          ) : (
            <>
              <Button asChild>
                <Link href="/signup" className="capitalize">
                  Get started
                </Link>
              </Button>
              <Button asChild>
                <Link href="#features" className="capitalize">
                  view features
                </Link>
              </Button>
            </>
          )}
        </div>
        <div className="flex flex-col items-center justify-center gap-y-2 pt-[2rem]">
          <p className="cursor-default text-xs opacity-50">
            Created by Kaiden Riley
          </p>
          <Link
            href="https://kaide.dev"
            target="_blank"
            className="flex gap-x-2 opacity-80"
          >
            <KaideDevLogo />
            <span className="font-medium">kaide.dev</span>
          </Link>
        </div>
      </div>
      {/* Features section */}
      <div
        id="features"
        className="flex h-fit w-screen -scroll-mt-8 justify-center px-[2rem] py-[10rem] md:px-[8rem]"
      >
        <div className="grid w-full auto-rows-[200px] grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item, i) => (
            <div
              key={`${item.feature}`}
              className={`flex cursor-default flex-col justify-center gap-y-[1rem] rounded-lg border-2 border-dashed p-[2rem] ${item.feature === "New Features" ? "md:col-span-2 lg:col-span-3" : ""}`}
            >
              <h3 className="flex items-center justify-center gap-x-2">
                {item.icon}
                {item.feature}
              </h3>
              <p className="text-foregroud text-center opacity-65">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* About Section */}
      <div
        id="about"
        className="flex scroll-mt-80 items-center justify-center px-[3rem] pb-[8rem]"
      >
        <p className="max-w-xl text-center">
          This project was initially created as a side project to prepare a
          collaborative space for me and a friend to build a project together. I
          wanted to create a platform that would help us organize our learning
          materials, set goals and track our progress. Incorporating features
          that would benefit us as developers and help us stay focused and
          motivated. I soon realised it was something that not only I could
          benefit from and chose to turn it into a platform that would be
          beneficial to other developers too. In turn Jinzo became my main focus
          instead of the project we initially set out to build.
        </p>
      </div>
      {/* Contact Section */}
      <div
        id="contact"
        className="flex flex-col items-center justify-center shadow-md"
      >
        <h2 className="text-5xl font-medium">Contact</h2>
        <form className="flex w-3/4 flex-col gap-2 py-[8rem] md:w-1/2">
          <Input type="text" placeholder="Full Name" />
          <Input type="email" placeholder="Email" />
          <Textarea
            placeholder="Write your message here..."
            className="resize-none"
          />
          <Button className="mt-[3rem]" asChild>
            <Link href="#" className="flex gap-x-3 capitalize">
              Send Message
              <SendIcon size={20} />
            </Link>
          </Button>
        </form>
      </div>
    </main>
  );
}
