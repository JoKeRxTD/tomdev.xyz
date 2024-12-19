/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { notFound } from "next/navigation";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { auth } from "@/src/lib/auth";
import DeleteUserButton from "@/src/components/DeleteUserButton";
// import EditUser from "@/src/components/EditUser";
import { Image } from "@nextui-org/image";
import { processFlags } from '@/src/utils/flags';
import { Tooltip, Code } from "@nextui-org/react";
import UserData from "@/src/components/UserData";


// User Interface
type User = {
  discordId: string;
  global_name: string | null;
  username: string;
  avatar: string | null;
  banner: string | null;
  banner_color: string | null;
  email: string;
  verified: boolean | null;
  accent_color: number | null;
  flags: number;
  premium_type: number;
  public_flags: number;
  locale: string;
  mfa_enabled: boolean;
  role: string;
  id: string;
  emailVerified: boolean | null;
};

// export const DiscordBadges = (flag: number): string[] => {
//   let flags: string[] = [];

//   // In the order they appear on profiles
//   if (flag & 1) flags.push("Discord_Employee"); // 1 << 0
//   if (flag & 262144) flags.push("Discord_Certified_Moderator"); // 1 << 18
//   if (flag & 2) flags.push("Partnered_Server_Owner"); // 1 << 1
//   if (flag & 4) flags.push("hypesquad"); // 1 << 2
//   if (flag & 64) flags.push("House_Bravery"); // 1 << 6
//   if (flag & 128) flags.push("House_Brilliance"); // 1 << 7
//   if (flag & 256) flags.push("House_Balance"); // 1 << 8
//   if (flag & 8) flags.push("Bug_Hunter_Level_1"); // 1 << 3
//   if (flag & 16384) flags.push("Bug_Hunter_Level_2"); // 1 << 14
//   if (flag & 4194304) flags.push("Active_Developer"); // 1 << 22
//   if (flag & 131072) flags.push("Early_Verified_Bot_Developer"); // 1 << 17
//   if (flag & 512) flags.push("Early_Supporter"); // 1 << 9
//   if (flag & 1024) flags.push("Team_User"); // 1 << 10
//   if (flag & 2048) flags.push("System"); // 1 << 11
//   if (flag & 4096) flags.push("Bug_Hunter_Level_3"); // 1 << 12
//   if (flag & 8192) flags.push("Verified_Bot"); // 1 << 13
//   if (flag & 65536) flags.push("Verified_Bot_Developer"); // 1 << 16
//   if (flag & 524288) flags.push("Early_Supporter"); // 1 << 19

//   return flags;
// };



// User Profile
export default async function MeProfilePage({ params }: { params: { id: string } }) {
  // get the post from the database
  const session = await auth();

  if (!session) {
    return notFound();
  }

  const user = session.user;
  const profile = session.profile;

  if (!user) {
    return notFound();
  }

  // check if user has nitro return true or false
  // let nitroType = user.premium_type === 1 || user.premium_type === 2;
  // if (user.premium_type === 2) {
  //   nitroType = true && user.premium_type === 2;
  // } else {
  //   nitroType = false && user.premium_type === 0;
  // }

  // let flags: string[] = DiscordBadges(user.public_flags);
  // if (user.avatar && user.avatar.includes("a_")) flags.push("Nitro");

  let userBanner = user.banner;
  if (userBanner?.includes("a_")) userBanner = `https://cdn.discordapp.com/banners/${user.discordId}/${userBanner}.gif?size=512` || `https://cdn.discordapp.com/banners/${user.discordId}/${userBanner}.png?size=512`;

  let userAvatar = user.avatar;
  if (userAvatar?.includes("a_")) userAvatar = `https://cdn.discordapp.com/avatars/${user.discordId}/${userAvatar}.gif?size=512` || `https://cdn.discordapp.com/avatars/${user.discordId}/${userAvatar}.png?size=512`;



  return (
    <div className="text-center items-center justify-center content-center">
      <Card className="w-full max-w-md ring-1 ring-inset ring-zinc-400/25 dark:ring-zinc-400/25 bg-zinc-900/25 dark:bg-zinc-900/25 text-zinc-800 dark:text-zinc-400">
        <div className="w-full h-12 rounded-t-md bg-zinc-900/25 dark:bg-zinc-900/25 ring-1 ring-inset ring-zinc-400/25 dark:ring-zinc-400/25">
          <div>
            <Image
              src={`${userBanner}`}
              alt="Banner"
              width={512}
              className="pl-0.5 pr-0.5 pt-0.5 rounded-t-md ring-1 ring-inset ring-zinc-400/25 dark:ring-zinc-400/25 w-full h-38"
            />
          </div>
          <div>
            <Image
              src={`${userAvatar}`}
              alt="Avatar"
              width={75}
              height={75}
              className="rounded-full ml-2 object-cover ring-2 ring-zinc-400/25 dark:ring-zinc-400/25"
            />
          </div>
        </div>
        <CardHeader className="flex flex-col items-center justify-center gap-2 mt-4">
          <CardTitle className="flex flex-row items-center justify-center">{user.username}</CardTitle>
          <CardDescription className="flex flex-row items-center justify-center">
          {/* <Code className="flex flex-row gap-2 justify-end z-11 ring-1 ring-inset ring-zinc-400/25 dark:ring-zinc-400/25">
            {DiscordBadges(user.public_flags).map((v) => (
              <Tooltip
                key={v}
                content={v.split("_").join(" ")}
                color='default'
                className='z-11 rounded-md ring-1 ring-inset text-zinc-800 ring-zinc-400/25 dark:text-zinc-400 dark:ring-zinc-400/25 hover:text-zinc-400 dark:hover:text-zinc-400'
              >
                <Image src={`/badges/${v}.png`} alt={v} width={24} height={24} />
              </Tooltip>
            ))}
          </Code> */}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center gap-4">
            <div className="flex flex-row items-center justify-center gap-2">
              <p>Discord ID: {user.discordId}</p>
              <p>Global Name: {user.global_name}</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <p>Email: {user.email}</p>
              <p>Flags: {user.flags}</p>
              <p>Public Flags: {user.public_flags}</p>
              <p>Locale: {user.locale}</p>
              <p>
                Role: {user.role === "admin" ? "Site Admin" : "User"}
              </p>
              {/* if premium_type = 0 "Not Nitro" ,premium_type = 1 "Basic Nitro", premium_type = 2 "Nitro" */}
              <p>
                Nitro: {user.premium_type === 0 ? "Not Nitro" : user.premium_type === 1 ? "Basic Nitro" : "Nitro"}
              </p>
            </div>
        </CardContent>
        <CardFooter>
          <div className="flex flex-row items-center justify-center">
            <DeleteUserButton id={user.discordId} className="w-20" />
          </div>
        </CardFooter>
      </Card>
      <section className="mt-4">
        <h2>Your Data</h2>
        <p className="text-xs">This is the data we used to generate your user profile.</p>
        <div className="flex flex-row items-center justify-center gap-2">
          <Code className="text-xs bg-zinc-900/25 dark:bg-zinc-900/25 rounded-md ring-1 ring-inset ring-zinc-400/25 dark:ring-zinc-400/25">
            <UserData json={JSON.stringify(user)} indentation={2} />
          </Code>
        </div>
      </section>
    </div>
  );
}