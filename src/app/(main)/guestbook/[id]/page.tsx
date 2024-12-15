import prisma from "@/src/lib/db";
import { notFound } from "next/navigation";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import { auth } from "@/src/lib/auth";
import DeletePostButton from "@/src/components/DeletePostButton";
// import { useState } from "react";

export default async function GuestBook({ params }: { params: { id: string } }) {
  // const user = await auth();
  // if (!user) {
  //   return <div>You are not logged in, Login to view this post.</div>;
  // }
  
  // get the post from the database
  const post = await prisma.post.findUnique({
    where: {
      id: params.id,
    },
  });
  
  if (!post) {
    return <div className="text-center">Post not found</div>;
  }

  // edit post with new data handler with formData
  // const editPost = async (formData: FormData) => {
  //   const title = formData.get("title") as string;
  //   const body = formData.get("body") as string;
  //   const username = (formData.get("username") as string) ?? "";
  //   const discordId = (formData.get("discordId") as string) ?? "";
  //   await prisma.post.update({
  //     where: {
  //       id: params.id,
  //     },
  //     data: {
  //       title,
  //       body,
  //       username,
  //       discordId,
  //     },
  //   });
  // };

  function deletePost() {
    prisma.post.delete({
      where: {
        id: params.id,
      },
    });
  } 
  
  return (
    <main className="text-center items-center justify-center">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="max-w-sm w-full sm:w-1/2 lg:w-full justify-around items-center flex flex-col rounded-md ring-1 ring-inset bg-zinc-900/25 text-zinc-800 ring-zinc-400/25 dark:bg-zinc-900/25 dark:text-zinc-400 dark:ring-zinc-400/25 hover:text-zinc-400 dark:hover:text-zinc-400">
          <CardHeader>
            <CardTitle className="text-center justify-center items-center text-2xl text-primary-300 font-bold">
              {post.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col justify-center items-center gap-2">
            <CardDescription>
              {post.body}
            </CardDescription>
          </CardContent>
          <CardFooter className="flex flex-col justify-center gap-2">
            <span className="text-center justify-center items-center text-gray-800 dark:text-gray-200">
              Created By {post.username || "Anonymous"}
            </span>
            <span>{new Date(post.createdAt).toLocaleDateString()}</span>
            <div className="flex flex-row justify-center items-center gap-2">
              <DeletePostButton id={post.discordId}/>
            </div>
            {/* <div className="flex flex-row justify-center items-center gap-2">
              <Button 
                variant="blue" 
                size="default" 
                rounded="md"
                
              >
                Edit Post
              </Button>
            </div> */}
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
