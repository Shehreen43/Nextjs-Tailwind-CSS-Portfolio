"use client";
import PageLayout from "@/components/PageLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, Calendar, Code2, GraduationCap, User } from "lucide-react";
import {motion} from "framer-motion";


const tabMenu = [
  { title: "Experience", value: "experience", icon: Briefcase },
  { title: "Education", value: "education", icon: GraduationCap },
  { title: "Skills", value: "skills", icon: Code2 },
  { title: "About Me", value: "about", icon: User },
];

const tabContent = {
  experience: {
    title: "Perfessional Experience",
    items: [
      {
        role: "Frontend Developer",
        company: "Freelancer",
        period: "2023 - Present",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        highlights: ["React", "Next.js", "Typescript", "Team", "LeaderShip"],
      },
      {
        role: "Frontend Developer",
        company: "Freelancer",
        period: "2023 - Present",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        highlights: ["React", "Next.js", "Typescript", "Team", "LeaderShip"],
      },
    ],
  },
  education: {
    title: "Educatonal Background",
    items: [
      {
        degree: "AI Engineer",
        institution: "GIAIC ",
        period: "2024 - Present",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        Achievement: [
          "Typescript Developer",
          "UIUX Engineer",
          "Frontend Developer",
        ],
      },
      {
        degree: "AI Engineer",
        institution: "GIAIC ",
        period: "2024 - Present",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        Achievement: [
          "Typescript Developer",
          "UIUX Engineer",
          "Frontend Developer",
        ],
      },
    ],
  },
  skills: {
    title: "Techical Skills",
    categories: [
      {
        name: "Frontend Development",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quaerat optio excepturi. Voluptate, vero nisi.",
        skills: ["React", "Next.js", "Tailwind CSS", "Typescript", "HTML"],
      },
      {
        name: "Backend Development",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quaerat optio excepturi. Voluptate, vero nisi.",
        skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Prisma"],
      },
      {
        name: "Tools & Other Skills",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quaerat optio excepturi. Voluptate, vero nisi.",
        skills: ["Git", "GitHub", "Docker", "Kubernetes", "AWS"],
      },
    ],
  },
  about: {
    title: "About Me",
   bio:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quaerat optio excepturi. Voluptate, vero nisi.",
   interests: [
    "Open Source Contributing",
    "Teach Blogging",
     "UI/UX Design",
     "Web Development",
   ],
    languages: ["English (Native)","English (Intermediate)"],
    contact: {
      email: "example@example.com",
      phone: "+1234567890",
      address: "123 Main St, City, Country",
    },
  }
};


const ResumePage = () => {
  return (
    <div className="flex flex-col justify-center py-10">
      <PageLayout>
        <Tabs
          defaultValue="experience"
          className="w-full flex flex-col md:flex-row gap-6 md:gap-11"
        >
          <TabsList className="flex md:flex-col h-full bg-transparent md:w-64 gap-4">
            {tabMenu?.map((item) => (
              <TabsTrigger
                key={item?.value}
                value={item?.value}
                className="bg-white/10 w-full py-2.5 text-white data-[state=active]:bg-hoverColor hover:bg-lightSky/50 text-xs sm:text-sm"
              >
                <div className="flex items-center gap-1.5 md:w-[50%] md:gap-3">
                  <item.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  {item?.title}
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="flex-1 min-h-[400px]">
            <TabsContent value="experience">
              <motion.h2
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              className="text-2xl font-bold text-lightSky"
              >{tabContent.experience.title}</motion.h2>
              
                <div className="space-y-6 w-full">
                {tabContent?.experience?.items.map((item, index) => (
                  <motion.div key={index} className="border rounded-lg border-lightSky/20 p-6">
                   <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold">{item?.role}</h3>
                      <p className="text-muted-foreground">{item?.company}</p>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2"/>
                      {item?.period}
                    </div>
                   </div>
                   <p className="mb-4 text-white">{item?.description}</p>
                  </motion.div>
                

                ))}
             </div>
            </TabsContent>
          </div>
        </Tabs>
      </PageLayout>
    </div>
  );
};

export default ResumePage;
