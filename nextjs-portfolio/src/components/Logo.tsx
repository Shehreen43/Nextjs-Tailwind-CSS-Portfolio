import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props{
   className?: string;
   title: string;
   subtitle: string;
}
const Logo = (
    {className, title, subtitle}:Props
) => {
  return (
    <div className="text-2xl group">
        <Link href={'/'}>
        <h2 className={cn(
            "font-semibold hover:text-hoverColor hoverEffect"
        )}>
       {title} <span className="text-lightSky group-hover:text-white hoverEffect"
       >{subtitle}</span>
        </h2>
        </Link>
    </div>
  )
}

export default Logo