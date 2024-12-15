
'use client'
import { createPost, getPostByUserId, CheckUserById } from '@/src/actions/guestPost';
import React from "react";
import { Divider } from "@nextui-org/react";
import { useState } from 'react';
import { Button } from "@/src/components/ui/button";
import { ImSpinner2 } from "react-icons/im";
import { RiSendPlane2Fill } from 'react-icons/ri';
import { useSession } from "next-auth/react"
import { SignIn, SignOut } from "@/src/components/SignInOut"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/src/components/ui/accordion"
import discord from "next-auth/providers/discord";


export default function SignGuestBook() {
    const [error, setError] = useState('');
    const [sending, setSending] = useState(false);

    const { data: session } = useSession()
    const auth = useSession();

    if (!session?.user) {
        return (
            <div className="flex flex-col items-center content-center w-[45vh] h-full gap-2 p-2 border rounded-md border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-md lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30">
                <span className="text-md font-bold text-center text-blue-500 dark:text-blue-800 mx-2 underline decoration-from-font underline-offset-1 decoration-blue-500 dark:decoration-blue-800">
                    You must be signed in to sign the guestbook.
                </span>
                <SignIn />
            </div>
        )
    }

    const user = session?.user;
    const username = user.username;
    const discordId = user.discordId;
    if (!username) {
        return "Invalid username";
    }
    if (!discordId) {
        return "Invalid discordId";
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        setSending(true);
        const checkUser = await getPostByUserId(discordId);
        if (checkUser) {
            setError("You have already signed the guestbook.");
            setSending(false);
            return;
        }
        try {
            await createPost(formData);
            form.reset();
            setError('');
        } catch (error) {
            console.error(error);
            setError("An error occurred, please try again.");
        }
        setSending(false);
    }

    return (
        <div className="flex-wrap w-[45vh] h-full gap-2 p-2 rounded-md ring-1 ring-inset bg-zinc-900/25 text-zinc-800 ring-zinc-400/25 dark:bg-zinc-900/25 dark:text-zinc-400 dark:ring-zinc-400/25 hover:text-zinc-400 dark:hover:text-zinc-400">
            <Accordion type="single" collapsible>
                <AccordionItem value="Sign-the-guestbook">
                    <AccordionTrigger className="gap-4 text-center items-center justify-center text-md font-bold text-blue-500 dark:text-blue-800 mx-2 underline decoration-from-font underline-offset-1 decoration-blue-500 dark:decoration-blue-800 text-medium">
                        Sign the guestbook
                    </AccordionTrigger>
                    <AccordionContent>
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col mx-auto gap-2 my-5 justify-center items-center"
                        >
                            <div className="flex flex-row items-center justify-center gap-4">
                                <div className="flex flex-col text-center justify-center items-center text-gray-800 dark:text-gray-200">
                                    <span className="text-gray-800 text-sm dark:text-gray-200">Username</span>
                                    <input
                                        name="username"
                                        value={username}
                                        className=" p-2 w-[11rem] h-8 text-center inline-flex items-center justify-center rounded-md text-sm ring-1 ring-inset bg-zinc-900/25 text-zinc-800 ring-zinc-400/25 dark:bg-zinc-900/25 dark:text-zinc-400 dark:ring-zinc-400/25 hover:bg-zinc-900/50 hover:text-zinc-400 hover:ring-zinc-400/50 dark:hover:bg-zinc-900/50 dark:hover:text-zinc-400 dark:hover:ring-zinc-400/50 transition-colors duration-90 ease-in-out"
                                        readOnly
                                        required
                                    />
                                </div>
                                <div className="flex flex-col text-center justify-center items-center text-gray-800 dark:text-gray-200">
                                    <span className="text-gray-800 text-sm dark:text-gray-200">DiscordID</span>
                                    <input
                                        name="discordId"
                                        value={discordId}
                                        className=" p-2 w-[11rem] h-8 text-center inline-flex items-center justify-center rounded-md text-sm ring-1 ring-inset bg-zinc-900/25 text-zinc-800 ring-zinc-400/25 dark:bg-zinc-900/25 dark:text-zinc-400 dark:ring-zinc-400/25 hover:bg-zinc-900/50 hover:text-zinc-400 hover:ring-zinc-400/50 dark:hover:bg-zinc-900/50 dark:hover:text-zinc-400 dark:hover:ring-zinc-400/50 transition-colors duration-90 ease-in-out"
                                        readOnly
                                        required
                                    />
                                </div>
                            </div>
                            <input
                                type="text"
                                name="title"
                                placeholder="Your Post Title..."
                                className=" px-3 w-[20vh] h-10 text-zinc-800 dark:text-zinc-400 border rounded-md border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-md lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30"
                                required
                            />
                            <textarea
                                name="body"
                                placeholder="Your respectful message..."
                                className="px-3 py-2 w-[40vh] h-full text-zinc-800 dark:text-zinc-400  border rounded-md border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-md lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30"
                                rows={4}
                                required
                            />
                            <Button
                                type="submit"
                                variant="green"
                                size="default"
                                rounded="md"
                                className="inline-flex items-center justify-center">
                                Post
                                {sending ? <ImSpinner2 className="animate-spin mx-2" /> : <RiSendPlane2Fill className="mx-2" />}
                            </Button>
                            <Divider />
                            <span className="font-bold text-blue-500 dark:text-blue-800 mx-2 underline decoration-from-font underline-offset-1 decoration-blue-500 dark:decoration-blue-800 text-medium text-center">
                                This is a guestbook, please be respectful.
                            </span>
                            {error && <span className="text-red-500 dark:text-red-800">{error}</span>}
                        </form>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}