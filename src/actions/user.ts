"use server";
import { RedisClient } from '@/src/lib/redis'
import { getDate } from '@/src/utils'
import { parse } from 'date-fns'

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const redis = RedisClient();


//! Redis command examples below
// // string
// await redis.set('key', 'value');
// let data = await redis.get('key');
// console.log(data)

// await redis.set('key2', 'value2', {ex: 1});

// // sorted set
// await redis.zadd('scores', { score: 1, member: 'team1' })
// data = await redis.zrange('scores', 0, 100 )
// console.log(data)

// // list
// await redis.lpush('elements', 'magnesium')
// data = await redis.lrange('elements', 0, 100 )
// console.log(data)

// // hash
// await redis.hset('people', {name: 'joe'})
// data = await redis.hget('people', 'name' )
// console.log(data)

// // sets
// await redis.sadd('animals', 'cat')
// data  = await redis.spop('animals', 1)
// console.log(data)
//! End Of Redis command examples


const RoleList = [
    'admin',
    'user'
]

// create user in 
export async function createUser(user: any) {
    const key = `user::${user.id}::${user.username}`
    try {
        await redis.hmset(key, user)
    } catch (error) {
        console.error(error)
    }
}

// check if user exists
export async function userExists(id: string) {
    const key = `user::${id}`
    try {
        return await redis.exists(key)
    } catch (error) {
        console.error(error)
    }
}

// get user by id
export async function getUserById(id: string) {
    return redis.hgetall(`user::${id}`)
}

// get all users
export async function getAllUsers() {
    const keys = await redis.keys('user::*')
    const users = await redis.mget(keys)
    return users
}

// update user with form data & session/account data
export async function updateUser(discordId: string, user: any) {
    const key = `user::${discordId}::${user.username}`
    try {
        await redis.hmset(key, user)
    } catch (error) {
        console.error(error)
    }
}

// delete user
export async function deleteUser(id: string) {
    const key = `user::${id}`
    await redis.del(key)
}

// get user posts
export async function getUserPosts(id: string) {
    return redis.lrange(`posts::${id}`, 0, -1)
}

// check if user had admin role
export async function checkAdminRole(id: string) {
    const user = await getUserById(id)
    return user !== null && user.role === 'admin'
}

// get user by username
export async function getUserByUsername(username: string) {
    const keys = await redis.keys('user::*')
    const users = await redis.mget(keys)
    return users.find((user: any) => user.username === username)
}

// get user by email
export async function getUserByEmail(email: string) {
    const keys = await redis.keys('user::*')
    const users = await redis.mget(keys)
    return users.find((user: any) => user.email === email)
}

// get user by discord id
export async function getUserByid(id: string) {
    const keys = await redis.keys('user::*')
    const users = await redis.mget(keys)
    return users.find((user: any) => user.id === id)
}

//! start of example data structure
// {
//   "user": {
//     "id": "116730818822537225",
//     "username": "jokerxtd",
//     "global_name": "\u003CJoKeR/\u003E",
//     "avatar": "a_cbb55ad2943f1fd0fde2f886a34eb311",
//     "avatar_decoration_data": {
//       "asset": "a_554b7c34f7b6c709f19535aacb128e7b",
//       "sku_id": "1207047808838799410"
//     },
//     "discriminator": "0",
//     "public_flags": 4325952,
//     "clan": null,
//     "flags": 4325952,
//     "banner": "a_4e83137451cf4fb1fe76acfecaf0012b",
//     "banner_color": "#040404",
//     "accent_color": 263172,
//     "bio": "***`\u003CJoKeR/\u003E - Developer EST 2015`***\n➥ **Portfolio** \u003C:NextJS:1097578602519871498\u003E \n*https://tomdev.xyz*\n➥ **JK:Development** \u003C:Vip:1233665849605492798\u003E  \n*https://store.tomdev.xyz*"
//   },
//   "user_profile": {
//     "bio": "***`\u003CJoKeR/\u003E - Developer EST 2015`***\n➥ **Portfolio** \u003C:NextJS:1097578602519871498\u003E \n*https://tomdev.xyz*\n➥ **JK:Development** \u003C:Vip:1233665849605492798\u003E  \n*https://store.tomdev.xyz*",
//     "accent_color": 263172,
//     "pronouns": "tomdev.xyz",
//     "profile_effect": null,
//     "banner": "a_4e83137451cf4fb1fe76acfecaf0012b",
//     "theme_colors": [328965, 4934475],
//     "popout_animation_particle_type": null,
//     "emoji": null
//   },
//   "legacy_username": "JoKeR#0001",
//   "connected_accounts": [
//     {
//       "type": "battlenet",
//       "id": "CsGJoKeR#2634",
//       "name": "CsGJoKeR#2634",
//       "verified": true
//     },
//     {
//       "type": "github",
//       "id": "33557806",
//       "name": "JoKeRxTD",
//       "verified": true
//     },
//     {
//       "type": "leagueoflegends",
//       "id": "fAoRcJpQwbkptUQ_T93cFfaY8kt1qXJXBWu2xR7JrjM93UP3o6zuPCimBQ9KVIqwQlDgkf2cACZ_oA",
//       "name": "vZia",
//       "verified": true
//     },
//     {
//       "type": "riotgames",
//       "id": "fAoRcJpQwbkptUQ_T93cFfaY8kt1qXJXBWu2xR7JrjM93UP3o6zuPCimBQ9KVIqwQlDgkf2cACZ_oA",
//       "name": "HeadEyez#0001",
//       "verified": true
//     },
//     {
//       "type": "steam",
//       "id": "76561198024904754",
//       "name": "JoKeR",
//       "verified": true,
//       "metadata": {
//         "created_at": "2010-05-11T16:57:38",
//         "game_count": "215",
//         "item_count_dota2": "2",
//         "item_count_tf2": "16"
//       }
//     },
//     {
//       "type": "twitch",
//       "id": "58748161",
//       "name": "jokeerxhd",
//       "verified": true
//     },
//     {
//       "type": "xbox",
//       "id": "3064831910013526",
//       "name": "JoKeeRxHD",
//       "verified": true
//     },
//     {
//       "type": "youtube",
//       "id": "UCrQmJZuXR1G0ueq8Svmqsng",
//       "name": "Dynamic_UK",
//       "verified": true
//     }
//   ],
//   "premium_since": "2023-04-08T13:13:48.353471+00:00",
//   "premium_type": 2,
//   "premium_guild_since": "2023-06-21T23:53:11.076000+00:00"
// }
//! end of example data structure

// save the data structure provided above with the key ('dcdn::${discordId}`)
export async function savedcdnUser(discordId: string, data: any) {
    try {
        await redis.hmset(`dcdn::${discordId}`, data)
    } catch (error) {
        console.error(error)
    }
}


