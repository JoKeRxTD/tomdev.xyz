"use client";
import { Link } from "@nextui-org/link";
import { Code } from "@nextui-org/code";
import { Image } from "@nextui-org/image";
import React from "react";
import { useState } from "react";
import SupportCard from "@/src/components/SupportCard";
import { BackgroundBeams } from "@/src/components/Header-BG";
import Spotify from "@/src/components/Spotify";
import LanyardCard from "@/src/components/Lanyard";
import { motion } from "framer-motion";

export default function Header() {
    const [index, setIndex] = useState<number>(0);
    const text = `Tom`;

    return (
        <section
            className={`relative flex w-full flex-col items-center justify-center gap-4 overflow-hidden h-full lg:h-[700px]`}
            style={{ transition: "opacity 0.5s ease-in-out" }}
        >
            {/* <BackgroundBeams /> */}
            <div className="mt-6 text-center text-4xl font-bold text-gray-800 dark:text-gray-100 lg:mt-0">
                Hello, I`m&nbsp;
                {text.split("").map((letter, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0 }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: index * 0.3,
                        }}
                        style={{
                            color:
                                letter === "T" || letter === "o" || letter === "m"
                                    ? "blue"
                                    : "inherit",
                        }}
                    >
                        {letter}
                    </motion.span>
                ))}
            </div>
            <Image
                isBlurred
                shadow="md"
                src="/me.jpg"
                alt={"my logo is supposed to be here"}
                height={200}
                width={200}
                className="rounded-xl border border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30"
            />
            <div className="flex flex-row items-center justify-center gap-2">
                <div className="text-md lg:text-lg flex flex-col lg:flex-row items-center justify-center gap-2">
                    I am a passionate self taught
                    <div  className="flex flex-row items-center justify-center">
                        <div className="rounded-md bg-blue-900/75 p-1 text-md text-blue-400 ring-1 ring-inset ring-blue-400/25 dark:bg-blue-900/25 dark:text-blue-400 dark:ring-blue-400/25">
                            Fullstack Web Developer
                        </div>
                        &nbsp;&&nbsp;
                        <div className="text-md rounded-md bg-blue-900/75 p-1 text-blue-400 ring-1 ring-inset ring-blue-400/25 dark:bg-blue-900/25 dark:text-blue-400 dark:ring-blue-400/25">
                            Discord App Developer
                        </div>
                    </div>
                    from
                    <div className="text-md rounded-md bg-blue-900/75 p-1 text-blue-400 ring-1 ring-inset ring-blue-400/25 dark:bg-blue-900/25 dark:text-blue-400 dark:ring-blue-400/25">
                        EU/UK
                    </div>
                </div>
            </div>
            <div className="flex flex-col space-y-2 items-center justify-center gap-2">
                <div className="text-md lg:text-lg flex flex-col items-center justify-center gap-2">
                    <span className="text-center text-gray-800 dark:text-gray-100 gap-2 lg:mt-4 lg:gap-1">
                        You can read a little about me&nbsp;
                        <Link href="/about">
                            <span className="font-bold text-gray-800 underline decoration-purple-800 decoration-wavy decoration-2 dark:text-gray-100 lg:mt-4 lg:text-3xl">
                                here
                            </span>
                        </Link>
                    </span>
                    <span className="text-gray-800 dark:text-gray-100">
                        I am&nbsp;
                        <span className="font-bold underline decoration-yellow-800 decoration-wavy decoration-2">
                            available
                        </span>
                        &nbsp;for hire,&nbsp;
                        <Link
                            className="font-bold text-gray-800 underline decoration-blue-800 decoration-wavy decoration-2 dark:text-gray-100 lg:mt-4 lg:text-3xl"
                            href="/contact"
                        >
                            Contact
                        </Link>
                        &nbsp;me for more info.
                    </span>
                </div>
            </div>
            <LanyardCard />
            <Spotify />
        </section>
    );
}
