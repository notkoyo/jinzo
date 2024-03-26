import React from "react";
import {
  DashboardBtn,
  LoginBtn,
  RegisterBtn,
} from "@/components/ui/custom-btns";
import { Brain } from "lucide-react";
import Link from "next/link";

export default function LandingPageNav({ isAuth }: { isAuth: boolean }) {
  return (
    <header>
      <nav className="flex justify-between px-[2rem] py-[1.25rem]">
        <div className="flex items-center gap-x-[2rem]">
          <Link href="/" className="flex items-center gap-x-2">
            <Brain className="h-8 w-8" />
            <h2 className="text-2xl font-bold">Jinzo</h2>
          </Link>
          <ul className="hidden md:flex items-center gap-x-5 capitalize font-medium text-muted-foreground">
            <li>
              <Link href="#about" className="hover:text-foreground transition duration-300">About</Link>
            </li>
            <li>
              <Link href="#features" className="hover:text-foreground transition duration-300">features</Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-foreground transition duration-300">Contact</Link>
            </li>
          </ul>
        </div>
        {isAuth ? (
          <DashboardBtn />
        ) : (
          <div className="flex items-center gap-x-2">
            <LoginBtn />
            <RegisterBtn />
          </div>
        )}
      </nav>
    </header>
  );
}
