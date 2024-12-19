export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: 'Tom "JoKeR"',
	description: 'This is the official website of Tom "JoKeR". Here you can find all the information about me, my projects, partners and my journey.',
	lang: "en",
	locale: "en_GB",
	url: "https://tomdev.xyz",
	ogImg: "https://cdn.tomdev.xyz/img/dev_f0q2rhbn.jpeg",
	twitterImg: "https://cdn.tomdev.xyz/img/dev_f0q2rhbn.jpeg",
	logo: "https://cdn.tomdev.xyz/img/dev_ojch2mvy.png",
	color: 3447003,
	userRoles: [
		{
			name: "admin",
			displayName: "Admin",
			color: "red",
		},
		{
			name: "moderator",
			displayName: "Moderator",
			color: "blue",
		},
		{
			name: "member",
			displayName: "Member",
			color: "green",
		},
		{
			name: "banned",
			displayName: "Banned",
			color: "black",
		}
	],
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "About",
			href: "/about",
		},
		
		{
			label: "Contact",
			href: "/contact",
		},
		// {
		// 	label: "Analytics",
		// 	href: "/analytics",
		// },
		// {
		// 	label: "Profile",
		// 	href: "/user-profile",
		// },
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Partners",
			href: "/partners",
		},
		{
			label: "About Me",
			href: "/about",
		},
		{
			label: "Contact",
			href: "/contact",
		},
		{
			label: "Analytics",
			href: "/analytics",
		},
		// {
		// 	label: "Dashboard",
		// 	href: "/user-profile",
		// },
	],
	sideBarItems: [
	// 	label: string;
    // name: string;
    // icon: React.ReactNode;
    // submenu?: Submenu[];
    // href: string;
		{
			label: "Home",
			name: "Home",
			icon: "home",
			href: "/",
		},
		{
			label: "Projects",
			name: "Projects",
			icon: "code",
			href: "/projects",
		},
		{
			label: "Partners",
			name: "Partners",
			icon: "users",
			href: "/partners",
		},
		{
			label: "About Me",
			name: "About Me",
			icon: "user",
			href: "/about",
		},
		{
			label: "Contact",
			name: "Contact",
			icon: "mail",
			href: "/contact",
		},
		{
			label: "Analytics",
			name: "Analytics",
			icon: "chart",
			href: "/analytics",
		},
		{
			label: "Dashboard",
			name: "Dashboard",
			icon: "dashboard",
			href: "/user-profile",
		},
	],
	links: {
		github: "https://github.com/JoKeRxTD",
		twitter: "https://twitter.com/JoKeRxTD",
		docs: "https://jk-scripts.gitbook.io",
		discord: "https://discord.gg/Q6ZSW63Fpw",
    	sponsor: "https://www.paypal.com/paypalme/VisionG?country.x=GB&locale.x=en_GB"
	},
	usernames: {
		github: "JoKeRxTD",
		twitter: "JoKeRxTD",
		discord: "JoKeRxTD",
	},
	embedConfig: {
		title: "Tom \"JoKeR\"",
		description: "This is the official website of Tom \"JoKeR\". Here you can find all the information about me, my projects, partners and my journey.",
		thumbnail: "https://cdn.tomdev.xyz/img/dev_f0q2rhbn.jpeg",
		url: "https://tomdev.xyz",
		color: 3447003,
		fields: [
			{
				name: "About",
				value: "I am a passionate self taught Fullstack Web Developer & Discord App Developer from EU/UK.",
			},
			{
				name: "Projects",
				value: "I have a few projects that I am working on, some are private and some are public.",
			},
			{
				name: "Partners",
				value: "I have a few partners that I work with, some are companies and some are individuals.",
			},
			{
				name: "Contact",
				value: "You can contact me via Discord, Twitter or Email.",
			},
			{
				name: "Analytics",
				value: "I have a few analytics that I use to track my website and social media.",
			},
			{
				name: "Dashboard",
				value: "I have a dashboard that I use to track my website and social media.",
			},
		],
		timestamp: new Date(),
		footer: {
			text: "Tom \"JoKeR\"",
			icon_url: "https://cdn.tomdev.xyz/img/dev_f0q2rhbn.jpeg",
		},
	},
	guildId: "325761816426971137",
};
