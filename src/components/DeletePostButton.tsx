"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { deletePost, findPostByDiscordId } from "@/src/actions/guestPost";
import { cn } from "@/src/utils/cn";
import { useRef } from "react";
import { useToast } from "@/src/components/ui/use-toast"
import { BinIcon } from "./Icons";
import { Button } from "@/src/components/ui/button";
import { ImSpinner2 } from "react-icons/im";
import * as React from "react";
import { useSession } from "next-auth/react"
import { SignIn, SignOut } from "@/src/components/SignInOut"

export default function DeletePostButton({ id }: { id: string}) {
    const { data: session } = useSession()
    const { toast } = useToast()
    const [isPending, setIsPending] = useState(false);

    if (!session) {
        return null;
    }

    async function onSubmit() {
        setIsPending(true);
        const discordId = session?.user.discordId || '';
        if (!discordId) {
            console.log('No discordId found');
            return;
        }
        const isPostOwner = await findPostByDiscordId(discordId);
        if (isPostOwner) {
            try {
                await deletePost(id as string);
                toast({
                    title: 'Success',
                    description: 'Post deleted successfully',
                    variant: "success",
                });
            } catch (error) {
                console.error(error);
                toast({
                    title: 'Error',
                    description: 'An error occurred while deleting the post',
                    variant: "destructive",
                });
            }
        } else {
            toast({
                title: 'Error',
                description: 'You are not authorized to delete this post',
                variant: "destructive",
            });
        }
        setIsPending(false);
    }

    // return button if post belongs to user
    return (
        <div className="flex flex-row items-center justify-center">
            <Button
                size="default"
                rounded="md"
                variant="destructive"
                onClick={onSubmit}
                className="flex items-center justify-center"
            >
                {isPending ? <ImSpinner2 className="animate-spin" /> : <BinIcon height={16} width={16} />}
            </Button>
        </div>
    );
}