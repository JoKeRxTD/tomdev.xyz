'use client'
import { Card, CardHeader, CardBody, CardFooter, Code, Button, ScrollShadow } from "@nextui-org/react";
import { error } from "console";
import { motion } from "framer-motion";

export default function SignUpClosed() {
    const error = new Error("We have currently disabled the signup functionality. Please check back later.");
    return (
        <ScrollShadow hideScrollBar className="w-full h-full">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ ease: "easeOut", duration: 0.15 }}
            >
                <Card className="sm:w-[60vh] lg:w-[65vh] sm:h-[35vh] lg:h-[30vh] text-center justify-center items-center flex flex-col border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30">
                    <CardHeader className="flex flex-col text-center justify-center items-center text-2xl text-primary-300 font-bold">
                    <div className="text-center pb-2">
                        <p className="text-5xl font-extrabold text-center items-center justify-center text-blue-500 dark:text-blue-800">Sign Up Closed</p>
                    </div>
                    <Code size="lg" color="danger" className="text-center font-bold text-zinc-800 dark:text-pink-600">403 Forbidden</Code>
                    </CardHeader>
                    <CardBody className="flex flex-wrap items-center text-center space-y-2 pb-1 justify-between">
                        <div className="text-center pb-2">
                            <p className="text-center pb-2">
                                <Code color="danger" size="sm" className="text-center font-bold text-zinc-800 dark:text-pink-600">{error.message}</Code>
                            </p>
                            If you think this is a mistake, please contact me at <Code size="sm" className="text-zinc-800 dark:text-blue-600 font-bold cursor-pointer" color="primary" onClick={() => window.open("mailto:contact@tomdev.xyz", "_blank")} >contact@tomdev.xyz</Code>
                        </div>
                    </CardBody>
                    <CardFooter className="flex flex-row items-center text-center justify-center gap-2">
                        <Button
                            color="default"
                            className="border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30"
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

// href="mailto:contact@tomdev.xyz"