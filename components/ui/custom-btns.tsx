"use client";

import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs";
import { LogOut, Settings } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./button";

export function LoginBtn() {
  return (
    <Button asChild size="sm">
      <LoginLink>Login</LoginLink>
    </Button>
  );
}

export function RegisterBtn() {
  return (
    <Button asChild size="sm">
      <RegisterLink>Signup</RegisterLink>
    </Button>
  );
}

export function LogoutBtn() {
  return (
    <LogoutLink className="flex w-full items-center justify-between">
      Logout
      <LogOut className="h-4 w-4" />
    </LogoutLink>
  );
}

export function SettingsBtn() {
  return (
    <Link
      href="/dashboard/settings"
      className="flex w-full items-center justify-between"
    >
      settings
      <Settings className="h-4 w-4" />{" "}
    </Link>
  );
}

export function DashboardBtn() {
  return (
    <Button asChild size="sm">
      <Link href="/dashboard">Dashboard</Link>
    </Button>
  );
}
