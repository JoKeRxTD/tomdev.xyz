"use client";
import { useEffect } from "react";
import { Code } from "@nextui-org/react";
import { ScrollShadow } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  // if error 45 characters long insert new line
  if (error.message.length > 45) {
    error.message = error.message.slice(0, 150) + "...";
  }

  return (
    <ScrollShadow hideScrollBar className="w-full h-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ ease: "easeOut", duration: 0.15 }}
        className="w-full h-full"
      >
          <Card className=" text-center justify-center items-center flex flex-col border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30">
            <CardHeader className="flex flex-col text-center justify-center items-center text-2xl text-primary-300 font-bold">
              <div className="text-center pb-2">
                <p className="text-5xl font-extrabold text-center items-center justify-center text-blue-500 dark:text-blue-800">
                  Error
                </p>
              </div>
              <Code
                size="lg"
                color="danger"
                className="text-center font-bold text-zinc-800 dark:text-pink-600"
              >
                500 Internal Server Error
              </Code>
            </CardHeader>
            <CardBody className="flex flex-wrap items-center text-center space-y-2 pb-1 justify-between">
              <div className="text-center pb-2">
                <p className="text-center pb-2">
                  <Code
                    color="danger"
                    size="sm"
                    className="text-center font-bold text-zinc-800 dark:text-pink-600"
                  >
                    
                  </Code>
                </p>
                If you think this is a mistake, please contact me at{" "}
                <Code
                  size="sm"
                  className="text-zinc-800 dark:text-blue-600 font-bold cursor-pointer"
                  color="primary"
                  onClick={() =>
                    window.open("mailto:contact@jokerdev.xyz", "_blank")
                  }
                >
                  contact@jokerdev.xyz
                </Code>
              </div>
            </CardBody>
            <CardFooter className="flex flex-row items-center text-center justify-center gap-2">
              <button
                className="text-base border rounded-xl p-2 border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30"
                color="default"
                onClick={reset}
              >
                Try Again
              </button>
              <button
                className="text-base border rounded-xl p-2 border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30"
                color="default"
                onClick={() => window.location.replace("/")}
              >
                Go Home
              </button>
            </CardFooter>
          </Card>
      </motion.div>
    </ScrollShadow>
  );
}
