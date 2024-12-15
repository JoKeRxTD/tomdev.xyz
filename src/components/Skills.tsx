import { Tooltip } from "@nextui-org/react";
import { Button } from "../components/ui/button";
import { useState, useEffect } from "react";
import { Code } from "@nextui-org/react";
import { classNames } from "@/src/utils/classNames";
import { SiTypescript, SiHtml5, SiCss3, SiJavascript, SiNodedotjs, SiReact, SiTailwindcss, SiLua, SiDiscord, SiD3Dotjs } from "react-icons/si";
import { Badge } from "./ui/badge";

interface TagProps {
  label: string;
  color: string;
  icon?: JSX.Element;
}

const Tags: TagProps[] = [
  { label: "NextUI", color: "default", icon: <SiCss3 /> },
  { label: "NextJS", color: "default", icon: <SiTypescript /> },
  { label: "TailwindCSS", color: "default", icon: <SiTailwindcss /> },
  { label: "React.JS", color: "default", icon: <SiReact /> },
  { label: "Discord.JS", color: "default", icon: <SiD3Dotjs /> },
  { label: "NodeJS", color: "default", icon: <SiNodedotjs /> },
  { label: "TypeScript", color: "default", icon: <SiTypescript /> },
  { label: "JavaScript", color: "default", icon: <SiJavascript /> },
  { label: "HTML", color: "default00", icon: <SiHtml5 /> },
  { label: "CSS", color: "default00", icon: <SiCss3 /> },
  { label: "LUA", color: "default00", icon: <SiLua /> },
];

export default function Skills() {
  const [show, setShow] = useState(false);

  return (
    <div className={classNames("block flex-wrap text-center content-center justify-center items-center p-1 gap-4 text-[#161616] dark:text-[#fafafa] [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]")}>
      <div className="flex flex-col items-center justify-center gap-5 p-5 text-center">
        <span className="text-5xl font-extrabold text-center items-center justify-center text-primary-300">Skills</span>
        <span className="text-center pb-2">
          Here are some of my skills that I have learned.
        </span>
      </div>
      <div className="gap-2 flex justify-center items-center animate-appearance-in text-center flex-wrap p-2 m-2 rounded-md">
        {Tags.map((tag, index) => (
          <Tooltip
            key={index}
            content={tag.label}
            color={tag.color as any}
            className={classNames('z-11 rounded-md ring-1 ring-inset text-zinc-800 ring-zinc-400/25 dark:text-zinc-400 dark:ring-zinc-400/25 hover:text-zinc-400 dark:hover:text-zinc-400')}
          >
            <Badge
              key={index}
              variant="default"
              className={classNames("m-2 flex-wrap-reverse justify-center items-center animate-slide text-2xl rounded-md")}
            >
                {tag.icon ? tag.icon : tag.label}
            </Badge>
          </Tooltip>
        ))}
      </div>
        <p className="p-3 text-gray-800 dark:text-gray-100">
          I am currently learning <span className="p-1 rounded-md text-sm ring-1 ring-inset bg-blue-900/75 text-blue-400 ring-blue-400/25 dark:bg-blue-900/25 dark:text-blue-400 dark:ring-blue-400/25">Typescript</span> and <span className="p-1 rounded-md text-sm ring-1 ring-inset bg-emerald-700/25 text-emerald-700 ring-emerald-700/25 dark:bg-emerald-700/25 dark:text-emerald-700 dark:ring-emerald-700/25">NextJS v14</span>.
        </p>
    </div>
  );
}