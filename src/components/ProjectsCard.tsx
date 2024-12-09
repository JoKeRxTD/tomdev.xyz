'use client'
import { Link } from "@nextui-org/link";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { Image } from "@nextui-org/image"
import { Button } from "@/src/components/ui/button";
import { useState } from "react";
import { Code } from "@nextui-org/react";
import { ButtonHTMLAttributes, ReactElement } from "react";
import { Badge } from "@/src/components/ui/badge";

type Project = {
    title: string;
    description: string;
    image: string;
    tags: string[];
    links: {
        title: string;
        link: string;
    }[];
};

const Projects: Project[] = [
    {
        title: "My Website",
        description: "This is my website, it is made with NextUI, NextJS and TailwindCSS, This project is open source.",
        image: "/joker.jpg",
        tags: ["NextJS", "TailwindCSS", "NextUI"],
        links: [
            {
                title: "Github",
                link: "https://github.com/JoKeRxTD/tomdev.xyz",
            },
            {
                title: "Website",
                link: "https://tomdev.xyz",
            },
            {
                title: "Discord",
                link: "https://discord.gg/UnTTbM7ySS"
            }
        ]
    },
    {
        title: "JK:Development",
        description: "JK:Development is a development service that privides services for FiveM, Discord and more.",
        image: "/jk_dev2.png",
        tags: ["LUA", "FiveM", "DiscordJS"],
        links: [
            {
                title: "Store",
                link: "https://jkdev.tebex.io"
            },
            {
                title: "Discord",
                link: "https://discord.gg/UnTTbM7ySS"
            }
        ]
    },
    {
        title: "Mythbot Radio",
        description: "Join 1,585,911 Users, Use MythBot Radio, With over 30+ Radio Stations From All Over The World..",
        image: "/mythbot.png",
        tags: ["DiscordJS", "NodeJS"],
        links: [
            {
                title: "Discord",
                link: "https://discord.gg/UnTTbM7ySS"
            },
            {
                title: "Website",
                link: "https://mythbot.org"
            }
        ]
    },
    {
        title: "JoKeR LinkTree",
        description: "This is my version of the popular website LinkTree, This project is open source.",
        image: "/joker3.png",
        tags: ["NextJS", "ShadCn", "Typescript"],
        links: [
            {
                title: "Github",
                link: "https://github.com/jokerxtd"
            },
            {
                title: "Preview",
                link: "https://linktree.tomdev.xyz"
            },
            {
                title: "Discord",
                link: "https://discord.gg/UnTTbM7ySS"
            },
        ]
    },
    {
        title: "Nodus Roleplay",
        description: "Nodus Roleplay is a FiveM server that I am currently a developer for. Check Nodus Roleplay out for a great experience.",
        image: "/nodus.png",
        tags: ["LUA", "HTML", "CSS", "Javascript"],
        links: [
            {
                title: "Discord",
                link: "https://discord.gg/nodus"
            },
            {
                title: "Information",
                link: "https://nodus.gitbook.io/nodus"
            },
        ]
    },
]

export default function ProjectsCard() {
    const [show, setShow] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    if (loading) {
        return <div>Loading Projects...</div>
    }
    if (error) {
        return <div>Error Fetching: {error}</div>
    }
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 flex-wrap w-full gap-4 p-4 justify-center">
            {Projects.map((project) => (
                <Card
                    key={project.title}
                    shadow="md"
                    className="flex flex-col gap-2 p-2 rounded-md ring-1 ring-inset bg-zinc-900/25 text-zinc-800 ring-zinc-400/25 dark:bg-zinc-900/25 dark:text-zinc-400 dark:ring-zinc-400/25"
                >
                    <CardHeader className="text-center justify-center items-center text-2xl text-primary-300 font-bold">
                        <h2>{project.title}</h2>
                    </CardHeader>
                    <CardBody className="items-center text-center space-y-2 p-1 justify-between">
                        <Image
                            isBlurred
                            src={project.image}
                            alt={project.title}
                            width={150}
                            height={150}
                            className="p-1 rounded-md ring-1 ring-inset bg-zinc-900/25 text-zinc-800 ring-zinc-400/25 dark:bg-zinc-900/25 dark:text-zinc-400 dark:ring-zinc-400/25"
                        />
                        <span>{project.description}</span>
                        <span className="text-xs gap-1 justify-around items-center flex flex-row">
                            Tags:{" "}
                            {project.tags.map((tag, index) => (
                                <Badge key={index} variant="default" className="text-xs">
                                    {tag.toString()}
                                </Badge>
                            ))}
                        </span>
                    </CardBody>
                    <CardFooter className="flex flex-row justify-center gap-2 ">
                        {project.links.map((link) => (
                            <>
                            <Link
                                href={link.link}
                                isExternal
                                color="foreground">
                                <Button
                                    key={link.title}
                                    variant="blue"
                                    size="sm"
                                    rounded="md"
                                    className="text-sm p-4 h-5 w-20"
                                >
                                    {link.title}
                                </Button>
                            </Link>
                            </>
                        ))}
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}
