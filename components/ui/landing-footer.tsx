import React from 'react'
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import { Button } from "./button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import Link from "next/link";

export default function LandingPageFooter() {
  return (
    <footer>
        <div className="flex h-fit w-screen justify-between p-[2rem]">
          <div className="flex flex-col gap-y-5">
            <p className="text-xs opacity-50">
              &copy; Jinzo 2024. All rights reserved.
            </p>
            <ul>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Cookie Policy</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-10">
            <ul className="flex gap-x-3">
              <li>
                <Linkedin />
              </li>
              <li>
                <Instagram />
              </li>
              <li>
                <Github />
              </li>
            </ul>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="link">@developer</Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 m-[2rem]">
                <div className="flex justify-between space-x-4">
                  <Avatar>
                    <AvatarImage src="https://avatars.githubusercontent.com/u/135956230?v=4" />
                    <AvatarFallback>KR</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">@notkoyo - kaiden</h4>
                    <p className="text-sm">
                      I'm a junior fullstack developer who loves to build things.
                    </p>
                    <div className="flex items-center pt-2 gap-x-4">
                      <Link href="https://github.com/notkoyo" className="flex items-center gap-x-2 text-sm text-muted-foreground"><Github size={16} />GitHub</Link>
                      <Link href="https://twitter.com/notkoyo" className="flex items-center gap-x-2 text-sm text-muted-foreground"><Linkedin size={16} />LinkedIn</Link>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
      </footer>
  )
}
