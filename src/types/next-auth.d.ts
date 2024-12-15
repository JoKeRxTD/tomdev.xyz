// import NextAuth, { DefaultSession } from 'next-auth';

// declare module 'next-auth' {
//   type UserSession = DefaultSession['user'];
//   interface Session {
//     user: UserSession;
//   }

//   interface CredentialsInputs {
//     email: string;
//     password: string;
//   }
// }

import 'next-auth';
import { DiscordProfile } from 'next-auth/providers/discord';
// Read more at: https://next-auth.js.org/getting-started/typescript#module-augmentation
// import type { DefaultUser } from 'next-auth';


declare module 'next-auth' {
	export interface Session {
		user: {
			accent_color: null | number;
			avatar: null | string;
			avatar_decoration: null | string;
			banner: null | string;
			banner_color: null | string;
			bot: boolean;
			discriminator: string;
			display_name: null | string;
			email: null | string;
			flags: number;
			global_name: null | string;
			email_verified: boolean | null;
			id: string;
			image_url: string;
			locale: string;
			mfa_enabled: boolean;
			premium_type: number;
			public_flags: number;
			system: boolean;
			username: string;
			discordId: string;
			verified: boolean;
			role: string | "user";

		};
		profile: {
			accent_color: null | number;
			avatar: null | string;
			avatar_decoration: null | string;
			banner: null | string;
			banner_color: null | string;
			bot: boolean;
			discriminator: string;
			display_name: null | string;
			email: null | string;
			flags: number;
			global_name: null | string;
			email_verified: boolean | null;
			id: string;
			discordId: string;
			image_url: string;
			locale: string;
			mfa_enabled: boolean;
			premium_type: number;
			public_flags: number;
			system: boolean;
			username: string;
			verified: boolean;
			role: string | "user";
		} | DiscordProfile;

		secrets: {
			accessToken: string;
			refreshToken: string;
			tokenType: string;
			expires_at?: number;
		};
	}
	interface JWT {
		secrets: string;
	}

	export interface Secrets {
		accessToken: string;
		refreshToken: string;
		tokenType: string;
		expires_at?: number;
	}

	interface DiscordProfile {
		accent_color: null | number;
		avatar: null | string;
		avatar_decoration: null | string;
		banner: null | string;
		banner_color: null | string;
		bot: boolean;
		discriminator: string;
		display_name: null | string;
		email: null | string;
		flags: number;
		global_name: null | string;
		email_verified: boolean | null;
		id: string;
		discordId: string;
		image_url: string;
		locale: string;
		mfa_enabled: boolean;
		premium_type: number;
		public_flags: number;
		system: boolean;
		username: string;
		verified: boolean;
		role: string | "user";
	}

	interface User {
		accent_color: null | number;
		avatar: null | string;
		avatar_decoration: null | string;
		banner: null | string;
		banner_color: null | string;
		bot: boolean;
		discriminator: string;
		display_name: null | string;
		email: null | string;
		flags: number;
		global_name: null | string;
		email_verified: boolean | null;
		id: string;
		discordId: string;
		image_url: string;
		locale: string;
		mfa_enabled: boolean;
		premium_type: number;
		public_flags: number;
		system: boolean;
		username: string;
		verified: boolean;
		role: string | "user";
	}


}

interface APIKeys {
	accessToken: string;
	refreshToken: string;
	tokenType: string;
	expires_at?: number;
}

interface Posts {
	id: string;
	title: string;
	body: string;
	createdAt: number;
	username: string;
	discordId: string;
}