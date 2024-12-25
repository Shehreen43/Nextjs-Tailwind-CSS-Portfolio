'use client'
import PageLayout from "@/components/PageLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, Code2, GraduationCap, User } from "lucide-react";

const tabMenu = [
  {title: "Experience", value: "experience", icon: Briefcase },
  {title: "Education", value: "education", icon: GraduationCap },
  {title: "Skills", value: "skills", icon: Code2 },
  {title: "About Me", value: "about me", icon: User },
]
const ResumePage = () => {
  return (
   <div className="flex flex-col justify-center py-10">
    <PageLayout>
      <Tabs defaultValue="experience" className="w-full flex flex-col md:flex-row gap-6 md:gap-11">
        <TabsList className="flex md:flex-col h-full bg-transparent md:w-64 gap-4">
          {tabMenu?.map((item) => (
            <TabsTrigger key={item?.value} value={item?.value} className="bg-white/10 w-full py-2.5 text-white data-[state=active]:bg-hoverColor hover:bg-lightSky/50 text-xs sm:text-sm">
              <div className="flex items-center gap-1.5 md:w-[50%] md:gap-3">
                <item.icon className="h-4 w-4 sm:h-5 sm:w-5" /> 
                {item?.title}
                </div>
            </TabsTrigger>
          ))}
        </TabsList>
        <div>
          <TabsContent value="experience">
           <h2>Experience</h2>
          </TabsContent>
        </div>
      </Tabs>
    </PageLayout>
   </div>
  )
}

export default ResumePage;