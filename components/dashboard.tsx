import Link from "next/link";
import { CircleUser, Brain, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/lib/data";
import { LogoutBtn, SettingsBtn } from "./ui/custom-btns";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";

export async function Dashboard() {
  const { getUser }: { getUser: Function } = getKindeServerSession();
  const user: KindeUser | null = await getUser();

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Brain className="h-6 w-6" />
              <span>Jinzo</span>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all duration-300 hover:bg-muted hover:text-primary"
                >
                  {link.icon}
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="mt-auto p-4">
            <Card>
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>Stay Updated</CardTitle>
                <CardDescription>
                  Check out the latest features and planned updates.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Button size="sm" className="w-full">
                  <Link
                    className="flex items-center gap-x-1"
                    href="https://github.com/notkoyo"
                    target="_blank"
                  >
                    View Here
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Brain className="h-8 w-8" />
                  <span className="text-lg">Jinzo</span>
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={`${link.label}-mobile`}
                    href={link.href}
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-foreground transition duration-300 hover:text-muted-foreground"
                  >
                    {link.icon}
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <span className="sr-only">Spacer</span>
          </div>
          <div className="flex items-center gap-x-3">
            <h3 className="cursor-default font-medium capitalize">
              welcome, {user?.given_name}
            </h3>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full"
                >
                  {user?.picture ? (
                    <img
                      src={user.picture}
                      alt="profile image"
                      className="rounded-full"
                    />
                  ) : (
                    <CircleUser className="h-5 w-5" />
                  )}
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="capitalize">
                <DropdownMenuLabel>my account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <SettingsBtn />
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogoutBtn />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        {/* Main Content @ HOME DASHBOARD */}
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Home</h1>
          </div>
          <div className="flex flex-1 flex-col gap-3 rounded-lg border p-[0.75rem] shadow-sm">
            <div className="h-fit w-full rounded-lg">
              <div className="flex h-[4rem] items-center justify-center rounded-lg border">
                {/*<QuoteWidget />*/}
                <h3 className="text-xl font-medium">MOTIVATIONAL QUOTE</h3>
              </div>
            </div>
            <div className="h-[12rem] w-full rounded-lg">
              <div className="flex h-[12rem] items-center justify-center rounded-lg bg-red-500">
                <h3>WEATHER WIDGET</h3>
              </div>
            </div>
            <div className="flex h-full justify-between">
              <div className="flex h-full w-full rounded-lg">
                <div className="hidden h-full items-center justify-center lg:flex lg:w-1/2">
                  <h3>BUILT BY KAIDEN</h3>
                </div>
                <div className="flex h-full w-full items-center justify-center rounded-lg bg-red-500 lg:w-1/2">
                  <h3>TO-DO LIST</h3>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
