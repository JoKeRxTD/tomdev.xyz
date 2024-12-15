"use server";
import prisma from "../lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export async function findPostByUser(username: string) {

    // find post
    const checkUser = await prisma.post.findMany({
        where: {
            username: username
        }
    });

    return checkUser;
}

//find all posts in the database
export async function getallPosts() {
    const posts = await prisma.post.findMany();
    return posts;
}

export async function deletePost(id: string) {

    await prisma.post.delete({
        where: {
            id: id
        },
    });
    redirect("/guestbook");
}

//create post
export async function createPost(formData: FormData) {
    try {
    
    // get form data
    const title = formData.get("title") as string;
    const body = formData.get("body") as string;
    const username = (formData.get("username") as string) ?? "";
    const discordId = (formData.get("discordId") as string) ?? "";

    // update database
    await prisma.post.create({
        data: {
            title,
            body,
            username,
            discordId,
        },
    });
        // revalidate
        revalidatePath("/guestbook");
    } catch (error) {
        console.error(error);
    }
}

export async function CheckUser(user: string) {
    const checkUser = await findPostByUser(user);
    if (checkUser.length > 0) {
        return true;
    }
}

export async function CheckUserById(discordId: string) {
    try {
        const checkUser = await prisma.post.findMany({
            where: {
                discordId: discordId
            }
        });
        if (checkUser.length > 0) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error(error);
    }
}

export async function updatePost(id: number, formData: FormData) {
    const title = formData.get("title") as string;
    const body = formData.get("body") as string;
    await prisma.post.update({
        where: {
            id: id.toString()
        },
        data: {
            title,
            body
        }
    });
    revalidatePath("/guestbook");
}

export async function findPostByDiscordId(discordId: string) {
    const post = await prisma.post.findMany({
        where: {
            discordId: discordId
        }
    });
    return post;
}

export async function getPostByUserId(discordId: string) {
    try {
        const post = await prisma.post.findMany({
            where: {
                discordId: discordId
            }
        });
        if (post.length > 0) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error(error);
    }
}

// export async function getPostBySlug(slug: string) {
//     const post = await prisma.post.findMany({
//         where: {
//             slug: slug
//         }
//     });
//     return post;
// }

