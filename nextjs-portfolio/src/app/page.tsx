import Container from "@/components/Container";
import HomeDescription from "@/components/HomeDescription";
import Photo from "@/components/Photo";
import SocialLinks from "@/components/SocialLinks";
import Statistics from "@/components/Statistics";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="bg-bodyColor text-white/80 min-h-screen">
        <Container className="py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col text-center items-center md:items-start gap-5 md:gap-7 md:text-start">
            <div className="">
               {/* photo */}
          <div className="md:hidden">
            <Photo />
          </div>
              <h3 className="font-semibold tracking-wider mb-1">
                Software Engineer
              </h3>
              <h2 className="text-3xl md:text-5xl mb-2 text-white">
                Hello I&apos;m
              </h2>
              <h1 className="text-lightSky text-5xl md:text-7xl tracking-normal mb-4">
                Shehreen
              </h1>
              <div className="md:w-2/3 xl:w-full">
                <div className="top-0 left-0 w-full h-full">
                <HomeDescription />
                </div>
              </div>
              <Button className="bg-transparent rounded-full border border-lightSky/50 text-lightSky hover:bg-hoverColor hover:text-black hoverEffect h-11 mb-6">
                {" "}
                Download cv <Download />
              </Button>
              <div className="mb-6 ml-[5%] md:ml-0">
                {" "}
                <SocialLinks />
              </div>
              <div className="">
                <Statistics />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="hidden md:inline-flex">
            <Photo />
          </div>
        </Container>
      </div>
    </>
  );
}
