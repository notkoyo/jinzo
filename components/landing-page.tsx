import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import LandingPageNav from "./ui/landing-nav";
import LandingPageContent from "./ui/landing-content";
import LandingPageFooter from "./ui/landing-footer";

export default async function LandingPage() {
  const { isAuthenticated } = getKindeServerSession();
  const isAuth = await isAuthenticated();

  return (
    <>
      <LandingPageNav isAuth={isAuth} />
      <LandingPageContent isAuth={isAuth} />
      <LandingPageFooter />
    </>
  );
}
