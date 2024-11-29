'use client'
import { Card, CardHeader, CardBody, CardFooter, Code, ScrollShadow } from "@nextui-org/react";
import { Button } from "./ui/button";
import { error } from "console";
import { motion } from "framer-motion";

export default function AccessDenied() {
    const error = new Error("You do not have permission to view this page.");
    return (
        <ScrollShadow hideScrollBar className="w-full h-full">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ ease: "easeOut", duration: 0.15 }}
            >
                <Card className="sm:w-[60vh] lg:w-[65vh] sm:h-[35vh] lg:h-[30vh] text-center justify-center items-center flex flex-col ring-1 ring-inset bg-zinc-900/25 text-zinc-800 ring-zinc-400/25 dark:bg-zinc-900/25 dark:text-zinc-400 dark:ring-zinc-400/25 hover:text-zinc-400 dark:hover:text-zinc-400">
                    <CardHeader className="flex flex-col text-center justify-center items-center text-2xl text-primary-300 font-bold">
                    <div className="text-center pb-2">
                        <p className="text-5xl font-extrabold text-center items-center justify-center text-blue-500 dark:text-blue-800">Access Denied</p>
                    </div>
                    <Code size="lg" color="danger" className="text-center font-bold text-zinc-800 dark:text-pink-600">403 Forbidden</Code>
                    </CardHeader>
                    <CardBody className="flex flex-wrap items-center text-center space-y-2 pb-1 justify-between">
                        <div className="text-center pb-2">
                            <p className="text-center pb-2">
                                <div className="text-center font-bold ring-1 ring-inset bg-red-900/25 text-red-800 ring-red-400/25 dark:bg-red-900/25 dark:text-red-400 dark:ring-red-400/25">
                                    {error.message}
                                </div>
                            </p>
                            If you think this is a mistake, please contact me at <Code size="sm" className="text-zinc-800 dark:text-blue-600 font-bold cursor-pointer" color="primary" onClick={() => window.open("mailto:contact@tomdev.xyz", "_blank")} >contact@tomdev.xyz</Code>
                        </div>
                    </CardBody>
                    <CardFooter className="flex flex-row items-center text-center justify-center gap-2">
                        <Button
                            rounded="md"
                            size="default"
                            variant="destructive"
                            onClick={() => window.history.back()}
                        >
                            Go Back
                        </Button>
                    </CardFooter>
                </Card>
            </motion.div>
        </ScrollShadow>
    );
}
