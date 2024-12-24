import { Tooltip } from "@radix-ui/react-tooltip";
import { Github, Instagram, Linkedin, Slack, Twitter } from "lucide-react";
import Link from "next/link";
import { TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

const socialData = [
    {
        title: "GitHub",
        href: "/",
        icon: <Github/>,
    },
    {
        title: "LinkedIn",
        href: "/",
        icon: <Linkedin />,
    },
    {
        title: "Twitter",
        href: "/",
        icon: <Twitter />,
    },
    {
        title: "Instagram",
        href: "/",
        icon: <Instagram />,
    },
    {
        title: "Slack",
        href: "/",
        icon: <Slack />,
    },

]
const SocialLinks = () => {
  return (
    <TooltipProvider>
    <div className="flex items-center gap-3">
    {socialData?.map((item) => (
    <Tooltip key={item?.title}>
        <TooltipTrigger asChild>
        <div className="text-lightSky/80 border-lightSky/30 p-2.5 rounded-full hover:bg-lightSky/10 hover:border-lightSky hoverEffect">
    <Link href={item?.href} target="_blank">
    <span>{item?.icon}</span>
    </Link>
     </div>
        </TooltipTrigger>
        <TooltipContent className="bg-hoverColor text-black font-semibold">
            {item?.title}
        </TooltipContent>
    </Tooltip>
    ))}
    </div>
    
    </TooltipProvider>
  
  )
}

export default SocialLinks;