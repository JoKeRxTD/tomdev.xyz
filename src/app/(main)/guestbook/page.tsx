import AccessDenied from '@/src/components/AccessDenied'
import NotSignedIn from "@/src/components/NotSignedIn";
import SignGuestBook from '@/src/components/SignGuestBook'
import PostsList from '@/src/components/GuestBook'
import { Suspense } from "react";
import {Skeleton} from "@nextui-org/skeleton";
import { Divider } from "@nextui-org/react";
import { auth } from '@/src/lib/auth';
// import { GuestBook } from '@/src/actions/guestPost';
import { siteConfig } from '@/config/site';

export default async function GuestBookPage() {
  // const session = await auth();
  // if (!session) {
  //   return <NotSignedIn />;
  // }
  // const isAdmin = session?.user?.role === `${siteConfig.userRoles}`
  // if (!isAdmin) {
  //   return <AccessDenied />;
  // }

 
  
  return (
    <div className="w-full p-4 flex flex-col gap-4">
      <div className="text-5xl font-extrabold text-center items-center justify-center text-primary-300">Guestbook</div>
      <div className="text-center p-4">
        Here you can find all the guestbook posts from the community. Feel free to sign the guestbook and leave a message!
      </div>
      <Divider />
      <div className="flex flex-col gap-4 ">
        <div className="flex flex-wrap justify-center items-center gap-2 text-[#161616] dark:text-[#fafafa]">
          <SignGuestBook />
        </div>
        <Divider/>
        <span className="text-4xl md:text-2xl font-bold mb-5">All Guestbook Posts</span>
        <Suspense fallback={
          <>
            <Skeleton className='w-[100%] h-16' />
            <PostsList/>
            <Skeleton className='w-[100%] h-16' />
          </>
        }>
          <PostsList/>
        </Suspense>
      </div>
      <Divider />
    </div>
  )
}