/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useLanyard } from 'use-lanyard';
import { motion } from 'framer-motion';
import React from 'react';
import { Badges } from '../../public/badges/BadgesEncoded';
import { Tooltip } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import { Badge } from "@/src/components/ui/badge";
import { Image } from "@nextui-org/react";


const DiscordID = '116730818822537225';


const UserStatusBadge = ({ status }: { status: string }) => {
    const { data: activity } = useLanyard(DiscordID);
    // todo: if activity is null, return null
    if (!activity || !activity.discord_user) return null;
    const currentStatus = activity.discord_status as "online" | "idle" | "dnd" | "offline";

    const statusMap = {
        online: "Online",
        idle: "Idle",
        dnd: "Do Not Disturb",
        offline: "Offline",
    };

    const TextSize = {
        online: `text-[12px] w-[6.1rem] p-[-1px] justify-center items-center`,
        idle: `text-[12px] w-[6.1rem] p-[-1px] justify-center items-center`,
        dnd: `text-[12px] w-[6.1rem] p-[-1px] justify-center items-center`,
        offline: `text-[10px] w-[6.1rem] p-[-1px] justify-center items-center`,
    }

    return (
        <Badge variant={currentStatus} className={`${TextSize[currentStatus]}`}>
            {statusMap[currentStatus]}
        </Badge>
    );
}

            

// show dicord bagdes based on public_flags int
export const DiscordBadges = (flag: number): string[] => {
    let flags: string[] = [];

    // In the order they appear on profiles
    if (flag & 1) flags.push("Discord_Employee"); // 1 << 0
    if (flag & 262144) flags.push("Discord_Certified_Moderator"); // 1 << 18
    if (flag & 2) flags.push("Partnered_Server_Owner"); // 1 << 1
    if (flag & 4) flags.push("HypeSquad_Events"); // 1 << 2
    if (flag & 64) flags.push("House_Bravery"); // 1 << 6
    if (flag & 128) flags.push("House_Brilliance"); // 1 << 7
    if (flag & 256) flags.push("House_Balance"); // 1 << 8
    if (flag & 8) flags.push("Bug_Hunter_Level_1"); // 1 << 3
    if (flag & 16384) flags.push("Bug_Hunter_Level_2"); // 1 << 14
    if (flag & 4194304) flags.push("Active_Developer"); // 1 << 22
    if (flag & 131072) flags.push("Early_Verified_Bot_Developer"); // 1 << 17
    if (flag & 512) flags.push("Early_Supporter"); // 1 << 9

    return flags;
};

const LanyardCard = () => {
    const { data: activity } = useLanyard(DiscordID);

    if (!activity || !activity.discord_user) return null;

    const notSpotify = activity.activities.filter(a => a.type !== 2);
    const CustomStatus = activity.activities.filter(a => a.type === 4);
    const CallOfDuty = activity.activities.filter(a => a.name === "Call of Duty®: MWIII");

    // todo: implement sync ounty and strp for image filtering
    // const SynCounty = activity.activities.filter(a => a.name === "Syn County");
    // const fivemSTRP = activity.activities.filter(a => a.name === "EU STRP");

    let flags: string[] = DiscordBadges(activity.discord_user.public_flags);
    if (activity.discord_user.avatar && activity.discord_user.avatar.includes("a_")) flags.push("Nitro");

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5, easing: [0, 0.5, 0.28, 0.99] }}
            className="hidden lg:flex lg:flex-row lg:grow lg:fixed lg:bottom-[100px] rounded-md lg:right-7 lg:w-[390px] lg:h-[200px] ring-1 ring-inset bg-zinc-900/25 text-zinc-800 ring-zinc-400/25 dark:bg-zinc-900/25 dark:text-zinc-400 dark:ring-zinc-400/25 hover:text-zinc-400 dark:hover:text-zinc-400"
        >
            <div className="flex flex-col justify-center mx-2 mt-3 grow p-1/2 text-2/xl">
                <div className="flex flex-row items-center justify-center">
                    <Tooltip
                        key={activity?.discord_user?.username}
                        content={activity?.discord_user?.username}
                        color='default'
                        className='rounded-md z-11 ring-1 ring-inset text-zinc-800 ring-zinc-400/25 dark:text-zinc-400 dark:ring-zinc-400/25 hover:text-zinc-400 dark:hover:text-zinc-400'
                    >
                        <Image
                            src={`https://cdn.discordapp.com/avatars/${activity?.discord_user?.id}/${activity?.discord_user?.avatar}.gif`}
                            alt="Discord Avatar"
                            fallbackSrc="https://cdn.tomdev.xyz/img/dev_emsam8ty.jpg"
                            className="rounded-md ring-1 ring-inset text-zinc-800 ring-zinc-400/25 dark:text-zinc-400 dark:ring-zinc-400/25 hover:text-zinc-400 dark:hover:text-zinc-400"
                            height={45}
                            width={50}
                        />
                    </Tooltip>
                    <div className="flex flex-col justify-center gap-1 ml-2 text-center">
                        <p className='text-sm font-semibold text-zinc-600 dark:text-white'>{activity?.discord_user?.global_name}</p>
                        <UserStatusBadge status={activity?.discord_status} />
                    </div>
                    <div className="flex flex-col ml-2 mt-1 w-[180px]">
                        <div className='items-center justify-center text-center rounded-md ring-1 ring-inset bg-zinc-900/25 text-zinc-800 ring-zinc-400/25 dark:bg-zinc-900/25 dark:text-zinc-400 dark:ring-zinc-400/25 hover:text-zinc-400 dark:hover:text-zinc-400'>
                            <p className='p-2 text-gray-800 dark:text-gray-100 text-md'>
                                {flags.map(v => (
                                    <Tooltip
                                        key={v}
                                        content={v.split("_").join(" ")}
                                        color='default'
                                        className='rounded-md z-11 ring-1 ring-inset text-zinc-800 ring-zinc-400/25 dark:text-zinc-400 dark:ring-zinc-400/25 hover:text-zinc-400 dark:hover:text-zinc-400'
                                    >
                                        <img
                                            src={`data:image/png;base64,${Badges[v]}`}
                                            alt={`${v.split("_").join(" ")} badge`}
                                            className='inline-block w-5 h-5 mx-1'
                                        />
                                    </Tooltip>
                                ))}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center mx-2 p-1 text-lg w-[355px] h-[510px]">
                    <div className="flex flex-col gap-2 px-1 mb-1 rounded-md ring-1 ring-inset text-zinc-800 ring-zinc-400/25 dark:text-zinc-400 dark:ring-zinc-400/25 hover:text-zinc-400 dark:hover:text-zinc-400">
                        {notSpotify?.length > 0 ? (
                            <div className='flex flex-row items-center justify-center gap-1 mt-1 mb-1'>
                                <Tooltip
                                    key={notSpotify[0]?.name}
                                    content={notSpotify[0]?.name}
                                    className='rounded-md ring-1 ring-inset text-zinc-800 ring-zinc-400/25 dark:text-zinc-400 dark:ring-zinc-400/25 hover:text-zinc-400 dark:hover:text-zinc-400'
                                >
                                    {/* if not spotify then get activity path 1 if CallOfDuty then get activity path 0 */}
                                    <div className='flex flex-row'>
                                        {CustomStatus?.length > 0 ? (
                                            <Image
                                                src={`https://cdn.discordapp.com/emojis/${CustomStatus[0]?.emoji?.id}.png`}
                                                alt="Discord Avatar"
                                                fallbackSrc="https://cdn.tomdev.xyz/img/dev_emsam8ty.jpg"
                                                className="w-8 h-8 mr-2 rounded-full"
                                            />
                                        ) : CallOfDuty?.length > 0 ? (
                                            <Image
                                                src={`https://cdn.discordapp.com/app-assets/${CallOfDuty[0]?.application_id}/${CallOfDuty[0]?.assets?.large_image}.png`}
                                                alt="Discord Avatar"
                                                fallbackSrc="https://cdn.tomdev.xyz/img/dev_emsam8ty.jpg"
                                                className="w-12 h-12 mr-6 rounded-lg  ring-1 ring-inset bg-zinc-900/25 text-zinc-800 ring-zinc-400/25 dark:bg-zinc-900/25 dark:text-zinc-400 dark:ring-zinc-400/25 hover:text-zinc-400 dark:hover:text-zinc-400"
                                            />
                                        ) : (
                                            <Image
                                                src={`https://media.discordapp.net/external/${notSpotify[0]?.assets?.large_image.replace("mp:external/", "")}`}
                                                alt="Discord Avatar"
                                                fallbackSrc="https://cdn.tomdev.xyz/img/dev_emsam8ty.jpg"
                                                className="w-12 h-12 rounded-lg ring-1 ring-inset bg-zinc-900/25 text-zinc-800 ring-zinc-400/25 dark:bg-zinc-900/25 dark:text-zinc-400 dark:ring-zinc-400/25 hover:text-zinc-400 dark:hover:text-zinc-400"
                                            />
                                        )}
                                    </div>
                                </Tooltip>
                                {CustomStatus?.length > 0 ? (
                                    <div className='flex items-center justify-center text-center'>
                                        {/* <p className='text-sm font-semibold text-zinc-600 dark:text-white'>{CustomStatus[0]?.name}</p> */}
                                        <p className='text-sm font-semibold text-zinc-600 dark:text-white'>{CustomStatus[0]?.state}</p>
                                    </div>
                                ) : CallOfDuty?.length > 0 ? (
                                    <div className='flex flex-col items-center justify-center text-center'>
                                        <p className='text-sm font-semibold text-zinc-600 dark:text-white'>{CallOfDuty[0]?.name}</p>
                                        <p className='text-sm font-semibold text-zinc-600 dark:text-white'>{CallOfDuty[0]?.state}</p>
                                        <p className='text-sm font-semibold text-zinc-600 dark:text-white'>{CallOfDuty[0]?.details}</p>
                                    </div>
                                ) : (
                                    <div className='flex flex-col items-center justify-center text-center'>
                                        <p className='font-bold text-zinc-600 dark:text-white text-md'>{notSpotify[0]?.name}</p>
                                        <p className='text-zinc-600 dark:text-white text-[12px]'>{notSpotify[0]?.details}</p>
                                        <p className='text-zinc-600 dark:text-white text-[12px]'>{notSpotify[0]?.state}</p>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center p-1 pt-8 pb-8">
                                <p className="text-lg font-semibold text-zinc-600 dark:text-white">Not doing anything right now.</p>
                            </div>
                        )}
                    </div>
                    <div className="text-[10px] text-center justify-center">
                        <p className='text-default dark:text-default font-semibold text-[10px]'>
                            Powered by{" "}
                            <Link href="https://github.com/Phineas/lanyard" className='text-[10px]' color="primary">
                                Lanyard
                            </Link>
                        </p>
                    </div>
                </div>

            </div>
        </motion.div>
    )
}

export default LanyardCard;