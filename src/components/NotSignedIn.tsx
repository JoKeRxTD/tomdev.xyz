'use client'
import { Card, CardHeader, CardBody, CardFooter, Code, ScrollShadow, Link } from "@nextui-org/react";
import { error } from "console";
import { motion } from "framer-motion";
import { Button } from "@/src/components/ui/button";

export default function NotSignedIn() {
    const error = new Error("You must be signed in to view this page.");
    return (
        <ScrollShadow hideScrollBar className="w-full h-full">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ ease: "easeOut", duration: 0.15 }}
            >
                <Card className="sm:w-[60vh] lg:w-[65vh] sm:h-[45vh] lg:h-[40vh] text-center justify-center items-center flex flex-col ring-1 ring-inset bg-zinc-900/25 text-zinc-800 ring-zinc-400/25 dark:bg-zinc-900/25 dark:text-zinc-400 dark:ring-zinc-400/25 hover:text-zinc-400 dark:hover:text-zinc-400">
                    <CardHeader className="flex flex-col text-center justify-center items-center text-2xl text-primary-300 font-bold">
                        <div className="text-center p-4">
                            <p className="text-5xl font-extrabold text-center items-center justify-center text-blue-500 dark:text-blue-800">Login Required</p>
                        </div>
                        <span className="text-center font-bold ring-1 ring-inset bg-red-900/75 text-red-400 ring-red-400/25 dark:bg-red-900/25 dark:text-red-400 dark:ring-red-400/25 p-2 rounded-md">403 Forbidden</span>
                    </CardHeader>
                    <CardBody className="flex flex-row items-center text-center space-y-2 p-2 justify-between">
                        <div className="text-center p-2 text-sm justify-between items-center ">
                            <span className="text-center ring-1 ring-inset bg-blue-900/75 text-blue-400 ring-blue-400/25 dark:bg-blue-900/25 dark:text-blue-400 dark:ring-blue-400/25 p-2 rounded-md">
                                {error.message}
                            </span>
                            <span className="text-center font-bold">
                                If you think this is a mistake, please contact me at
                            </span>
                            <span className="cursor-pointer ring-1 ring-inset bg-blue-900/75 text-blue-400 ring-blue-400/25 dark:bg-blue-900/25 dark:text-blue-400 dark:ring-blue-400/25 p-2 rounded-md" onClick={() => window.open("mailto:contact@tomdev.xyz", "_blank")} >
                                contact@tomdev.xyz
                            </span>
                        </div>
                    </CardBody>
                    <CardFooter className="flex flex-row items-center text-center justify-center gap-2">
                        <Link href="/login">
                            <Button
                                variant="green"
                                size="default"
                                rounded="md"
                            >
                                Sign In
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>
            </motion.div>
        </ScrollShadow>
    );
}

// href="mailto:contact@tomdev.xyz"