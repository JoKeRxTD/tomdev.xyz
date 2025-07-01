'use client'
import { useEffect } from 'react'
import { Code } from "@nextui-org/react";
import { Button } from '@nextui-org/react';

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <section className="flex flex-col items-center justify-center gap-4 p-6 py-12 text-center border border-gray-300 rounded-xl md:space-y-8 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30">
      <div >
      <Code color="danger" size="lg" className='mb-4'>404 Error</Code>
        <p className="mb-6 text-center text-gray-800 text-2xmd dark:text-gray-100">
        Oops, Looks like you have entered a void, Lets get you back to the light.
        </p>
        <h2 className="text-center text-gray-800 dark:text-gray-100">
        Click the button below to go back to the light.
        </h2>
      </div>

      <div className="flex gap-3">
        <Button
          type="button"
          onClick={reset}
          className="flex flex-col items-center justify-center p-2 space-y-2 text-center border border-gray-300 rounded-xl bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30"
          title="nextui.org homepage"
        >
          <span className="text-default-600">Return to the light</span>
        </Button>

      </div>
    </section>
  )
}