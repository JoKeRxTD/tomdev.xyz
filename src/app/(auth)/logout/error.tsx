"use client";
import { useEffect } from "react";
import { Code } from "@nextui-org/react";
import { ScrollShadow } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

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

  // if error 45 characters long, slice the error message 
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
          <Card className="sm:w-[60vh] lg:w-[65vh] sm:h-[35vh] lg:h-[30vh] text-center justify-center items-center flex flex-col border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30">
            <CardHeader className="flex flex-col items-center justify-center text-2xl font-bold text-center text-primary-300">
              <div className="pb-2 text-center">
                <a className="items-center justify-center text-5xl font-extrabold text-center text-blue-500 dark:text-blue-800">
                  Error
                </a>
              </div>
              <Code
                size="lg"
                color="danger"
                className="font-bold text-center text-zinc-800 dark:text-pink-600"
              >
                500 Internal Server Error
              </Code>
            </CardHeader>
            <CardBody className="flex flex-wrap items-center justify-between pb-1 space-y-2 text-center">
              <div className="pb-2 text-center">
                <a className="pb-2 text-center">
                  <Code
                    color="danger"
                    size="sm"
                    className="font-bold text-center text-zinc-800 dark:text-pink-600"
                  >
                    {error.message}
                  </Code>
                </a>
                If you think this is a mistake, please contact me at{" "}
                <Code
                  size="sm"
                  className="font-bold cursor-pointer text-zinc-800 dark:text-blue-600"
                  color="primary"
                  onClick={() =>
                    window.open("mailto:contact@tomdev.xyz", "_blank")
                  }
                >
                  contact@tomdev.xyz
                </Code>
              </div>
            </CardBody>
            <CardFooter className="flex flex-row items-center justify-center gap-2 text-center">
              <Button
          type="button"
          onClick={reset}
          className="flex flex-col items-center justify-center p-2 space-y-2 text-center border border-gray-300 rounded-xl bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30"
          title="nextui.org homepage"
        >
          <span className="text-default-600">Return to the light</span>
        </Button>
            </CardFooter>
          </Card>
      </motion.div>
    </ScrollShadow>
  );
}
