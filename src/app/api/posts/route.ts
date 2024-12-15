import {getallPosts} from "@/src/actions/guestPost"
import { auth } from "@/src/lib/auth"
import { NextResponse } from "next/server"

// todo get all posts from database and sort into a json object with the structure of [id, title, body, createdAt, updatedAt, username, discordId] - all strings
export const GET = auth(function GET(req) {
    const posts = getallPosts()
    if (!posts) return NextResponse.json({ error: "No posts found" }, { status: 404 })
    
    if (req.auth) return NextResponse.json(posts)

    return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
})