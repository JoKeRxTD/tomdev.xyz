/* eslint-disable @next/next/no-img-element */
'use client';
import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { SiDiscord, SiEgghead } from "react-icons/si";
import clsx from "clsx";
import { siteConfig } from "@../../../config/site";
import { link as linkStyles } from "@nextui-org/theme";
import { ThemeSwitch } from "@/src/components/theme-switch";
import { User, Skeleton, Divider, Link, Tooltip, Code, Image } from "@nextui-org/react";
import { ProfileIcon, AnalyticsIcon, LinesIcon, PartnerIcon, DiscordIcon, GithubIcon, BookIcon } from "@/src/components/Icons";
import { Avatar, AvatarImage, AvatarFallback } from "@/src/components/ui/avatar";
import { useSession } from "next-auth/react"
import { SignIn, SignOut } from "@/src/components/SignInOut";
import { Button } from "@/src/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuCheckboxItem,
	DropdownMenuRadioItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuGroup,
	DropdownMenuPortal,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuRadioGroup,
} from "@/src/components/ui/dropdown-menu"
import DiscordWidgetApp from "@/src/components/DiscordWidget";


export default function Navbar() {
	const {data: session} = useSession()

	const userData = session?.user;
	
	// (removed duplicate declarations)
	
	let userBanner = userData?.banner;
  if (userBanner?.includes("a_")) userBanner = `https://cdn.discordapp.com/banners/${userData?.discordId}/${userBanner}.gif?size=512` || `https://cdn.discordapp.com/banners/${userData?.discordId}/${userBanner}.png?size=512`;

  let userAvatar = userData?.avatar;
  if (userAvatar?.includes("a_")) userAvatar = `https://cdn.discordapp.com/avatars/${userData?.discordId}/${userAvatar}.gif?size=512` || `https://cdn.discordapp.com/avatars/${userData?.discordId}/${userAvatar}.png?size=512`;


	const UserBar = () => {
		// convert userDrown label to lowercase for icon matching
		const userDropdownLabels = userDropdown.map((item) => item.label.toLowerCase());
		if (userData) {
			return (
				<div className="flex items-center justify-center gap-2">
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Avatar>
								<AvatarImage className="rounded-full" src={`${userAvatar}`} />
								<AvatarFallback>{userData?.username}</AvatarFallback>
							</Avatar>
						</DropdownMenuTrigger>
						<DropdownMenuContent
							aria-label="User Options"
							className="text-base text-bold ring-1 ring-inset bg-zinc-900/25 text-zinc-800 ring-zinc-400/25 dark:bg-zinc-900/25 dark:text-zinc-400 dark:ring-zinc-400/25 hover:text-zinc-400 dark:hover:text-zinc-400"
						>
							<DropdownMenuSeparator />
							{userDropdown.map((item, index) => (
								<DropdownMenuItem
									key={`${item.label}-${index}`}
									className="items-center justify-center text-center cursor-pointer text-bold hover:bg-zinc-700/25 dark:hover:bg-zinc-700/25"
									onClick={() => {
										window.location.href = item.href;
									}
									}>
									{/* icons | label */}
									{icons[userDropdownLabels[index]]}&nbsp;{item.label}
								</DropdownMenuItem>
							))}
							<DropdownMenuSeparator />
							<DropdownMenuItem className="items-center justify-center text-center">
								<SignOut />
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			);
		}
		return <SignIn />;
	}
	


	interface DropdownItem {
		label: string;
		href: string;
	}

	const navDropdown: DropdownItem[] = [
		{ label: "Profile", href: userData?.discordId ? `/user/${userData.discordId}` : '/error' },
		{ label: "Analytics", href: "/analytics" },
		{ label: "Partners", href: "/partners" },
		{ label: "Guestbook", href: "/guestbook" },
	];

	const userDropdown: DropdownItem[] = [
		{ label: "Profile", href: userData?.discordId ? `/user/${userData.discordId}` : '/error' },
		// { label: "Settings", href: "/settings" },
	];

	const icons: Record<string, React.ReactNode> = {
		profile: <ProfileIcon className="text-primary" fill="currentColor" size={18} />,
		analytics: <AnalyticsIcon className="text-warning" fill="currentColor" size={18} />,
		dropdown: <LinesIcon className="text-primary" fill="currentColor" size={18} />,
		github: <GithubIcon className="text-slate-800 dark:text-white" fill="currentColor" size={18} />,
		discord: <DiscordIcon className="text-[#7289da]" fill="currentColor" size={18} />,
		egghead: <SiEgghead className="text-primary" fill="currentColor" size={18} />,
		partners: <PartnerIcon className="text-primary text-bold" fill="currentColor" size={18} />,
		guestbook: <BookIcon className="text-orange-800 dark:text-orange-400 text-bold" fill="currentColor" size={18} />,
	};

	const navDropdownLabels: string[] = navDropdown.map((item: DropdownItem) => item.label.toLowerCase());
	return (
		<NextUINavbar maxWidth="lg" position="sticky" className="z-50 gap-2 bg-transparent border-t border-zinc-800 dark:border-zinc-800/30 text-zinc-200 dark:text-zinc-800 dark:bg-zinc-900/25">
			<NavbarContent className="items-center justify-center gap-4 ml-2 text-base basis-1/5 sm:basis-full text-bold">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<Link className="flex items-center justify-start gap-1" href="/">
						<h1 className="text-2xl font-bold text-primary-300">JoKeR</h1>
					</Link>
				</NavbarBrand>
				<div className="justify-start hidden gap-4 ml-2 text-xl lg:flex text-bold">
					{siteConfig.navItems.map((item: { label: string; href: string }) => (
						<NavbarItem key={item.href}>
							<Link
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-primary data-[active=true]:font-medium data-[active=true]:border-white data-[active=true]:border-b-2"
								)}
								color="foreground"
								href={item.href}
							>
								{item.label}
							</Link>
						</NavbarItem>
					))}
				</div>
				<div className="hidden gap-4 text-xl lg:flex text-bold">
					<DropdownMenu>
						<NavbarItem className="hidden lg:flex">
							<DropdownMenuTrigger asChild>
								<span className="flex items-center content-center gap-2 text-zinc-800 dark:text-zinc-400">
									Other {icons.dropdown}
								</span>
							</DropdownMenuTrigger>
						</NavbarItem>
						<DropdownMenuContent
							aria-label="Other Options"
							className="object-top text-base text-bold ring-1 ring-inset bg-zinc-900/90 text-zinc-800 ring-zinc-400/25 dark:bg-zinc-600/85 dark:text-zinc-400 dark:ring-zinc-400/25 "
						>
							<DropdownMenuSeparator />
							{navDropdown.map((item: DropdownItem, index: number) => (
								<DropdownMenuItem
									key={`${item.label}-${index}`}
									className="items-center justify-center text-center cursor-pointer text-bold hover:bg-zinc-700/25 dark:hover:bg-zinc-700/25"
									onClick={() => {
										window.location.href = item.href;
									}
									}>
									{icons[navDropdownLabels[index]]}&nbsp;{item.label}
								</DropdownMenuItem>
							))}
						</DropdownMenuContent>
					</DropdownMenu>
				</div>

			</NavbarContent>
			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end">
				<NavbarItem className="justify-center hidden gap-2 sm:flex">
					<Skeleton className="hidden sm:flex" isLoaded={false} />
					<DiscordWidgetApp/>
					<Link isExternal href={siteConfig.links.github} aria-label="Github">
						{icons.github}
					</Link>
					<ThemeSwitch />
					<UserBar />
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="justify-center pl-2 sm:hidden basis-2" justify="end">
				<Skeleton className="hidden sm:flex" isLoaded={false} />
				<Link isExternal href={siteConfig.links.discord} aria-label="Discord">
					{icons.discord}
				</Link>
				<Link isExternal href={siteConfig.links.github} aria-label="Github">
					{icons.github}
				</Link>
				<ThemeSwitch />
				<NavbarMenuToggle />
				<UserBar />
			</NavbarContent>

			<NavbarMenu>
				<code className="p-4 font-bold text-center text-primary-200">Main Menu</code>
				<Divider />
				<div className="flex flex-col gap-2 mx-6 mt-4">
					{siteConfig.navMenuItems.map((item: { label: string; href: string }, index: number) => (
						<NavbarMenuItem key={`${item}-${index}`} className="justify-center text-center">
							<Link
								color="foreground"
								href={item.href}
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-primary data-[active=true]:font-medium"
								)}
							>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
}
