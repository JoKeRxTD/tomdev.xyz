import { Link } from "@nextui-org/link";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { Image } from "@nextui-org/image"
import { Button } from "@/src/components/ui/button";
import { useState } from "react";
import { Code } from "@nextui-org/react";
import { ButtonHTMLAttributes, ReactElement } from "react";
import {Badge} from "@/src/components/ui/badge";

interface LinkButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    iconRight?: ReactElement;
}

interface PartnerCard {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    links: {
        title: string;
        link: string;
    }[];
}
    

const PartnerCards: PartnerCard[] = [
    {
        id: "zaphosting",
        title: "Zap-Hosting",
        description: "Zap-Hosting is a hosting company that offers a wide range of products.",
        image: "/zap-hosting.png",
        tags: ["Servers", "Domains", "VPS"],
        links: [
            {
                title: "Discord",
                link: "https://discord.gg/zaphosting",
            },
            {
                title: "Website",
                link: "https://zap-hosting.com/joker",
            },
        ]
    },
    {
        id: "wolfshield",
        title: "WolfSheild [AC]",
        description: "Wolfshield is an Anti-Cheat made for FiveM Servers and is made by Xtelfou.",
        image: "/wolf_shield.png",
        tags: ["LUA", "FiveM", "QBCore", "ESX"],
        links: [
            {
                title: "Discord",
                link: "https://discord.gg/Zqr4nHkQZf"
            },
            {
                title: "Website",
                link: "https://wolf-shieldv2.tebex.io"
            },
        ]
    },
    {
        id: "jokerdev",
        title: "Partnership/Sponsor",
        description: "If you want to partner with me or sponsor me, feel free to contact me.",
        image: "/joker.jpg",
        tags: ["Hosting", "Discord"],
        links: [
            {
                title: "Discord",
                link: "https://discord.gg/UnTTbM7ySS"
            },
            {
                title: "Website",
                link: "https://tomdev.xyz"
            },
        ]
    },
]

const BadgeTags: { [key: string]: { variant: string } } = {
    // add all const Projects: Project[] tags here
    "NextJS": { variant: "NextJS" },
    "TailwindCSS": { variant: "TailwindCSS" },
    "NextUI": { variant: "NextUI" },
    "LUA": { variant: "Lua" },
    "FiveM": { variant: "FiveM" },
    "DiscordJS": { variant: "DiscordJS" },
    "NodeJS": { variant: "NodeJS" },
    "Typescript": { variant: "Typescript" },
    "ShadCn": { variant: "ShadCn" },
    "HTML": { variant: "HTML" },
    "CSS": { variant: "CSS" },
    "Javascript": { variant: "Javascript" },
    "ReactJS": { variant: "ReactJS" },
    "VPS": { variant: "VPS" },
    "Domains": { variant: "Domains" },
    "Servers": { variant: "Servers" },
    "QBCore": { variant: "QBCore" },
    "ESX": { variant: "ESX" },
    "Hosting": { variant: "Hosting" },
    "Discord": { variant: "Discord" },
};

const ButtonStyles: { [key: string]: { variant: string } } = {
    // add all const Projects: Project[] tags here
    "Discord": { variant: "Discord" },
    "Website": { variant: "Website" },
};

const TagBadge = ({ tags }: { tags: string }) => {
    return (
        <Badge variant={BadgeTags[tags]?.variant as any}>
            {tags}
        </Badge>
    );
};

const buttonStyle = ({ buttons }: { buttons: string }) => {
    return  (
        <Button size="default" rounded="md" variant={ButtonStyles[buttons]?.variant as any}>
            {buttons}
        </Button>
    )
};

export default function PartnerCard() {
    const [show, setShow] = useState(false);
    const [border, setBorder] = useState(false);

    // set border based on id
    const borderStyle = (id: string) => {
        if (id === "zaphosting") {
            return "ring-1 ring-inset bg-zinc-900/25 text-zinc-800 ring-zinc-400/25 dark:bg-zinc-900/25 dark:text-zinc-400 dark:ring-zinc-400/25 hover:text-zinc-400 dark:hover:text-zinc-400";
        } else if (id === "wolfshield") {
            return "ring-1 ring-inset bg-zinc-900/25 text-zinc-800 ring-zinc-400/25 dark:bg-zinc-900/25 dark:text-zinc-400 dark:ring-zinc-400/25 hover:text-zinc-400 dark:hover:text-zinc-400";
        } else if (id === "jokerdev") {
            return "ring-1 ring-inset bg-zinc-900/25 text-blue-800 ring-blue-400/25 dark:bg-zinc-900/25 dark:text-blue-400 dark:ring-blue-400/25 hover:text-blue-400 dark:hover:text-blue-400";
        } else {
            return "border-gray-300";
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 flex-wrap w-full gap-4 p-4 justify-center">
            {PartnerCards.map((partner) => (
                <Card
                key={partner.title}
                shadow="md"
                className={`flex flex-col gap-2 p-2 rounded-md ${borderStyle(partner.id)}`}
            >
                    <CardHeader className="text-center justify-center items-center text-2xl text-primary-300 font-bold">
                        <h2>{partner.title}</h2>
                    </CardHeader>
                    <CardBody className="items-center text-center space-y-2 p-1 justify-between">
                        <Image
                            isBlurred
                            src={partner.image}
                            alt={partner.title}
                            width={150}
                            height={150}
                            className="p-1 rounded-md ring-1 ring-inset bg-zinc-900/25 text-zinc-800 ring-zinc-400/25 dark:bg-zinc-900/25 dark:text-zinc-400 dark:ring-zinc-400/25"
                        />
                        <span>{partner.description}</span>
                        <span className="text-xs gap-1 justify-around items-center flex flex-row">
                            Tags:{" "}
                            {partner.tags.map((tag, index) => (
                                <TagBadge key={index} tags={tag} />
                            ))}
                        </span>
                    </CardBody>
                    <CardFooter className="flex flex-row justify-center gap-2 ">
                        {partner.links.map((link) => (
                            <>
                            <Link
                                href={link.link}
                                isExternal>
                                {/* buttonStyle buttons here */}
                                    <div key={link.title}>
                                        {buttonStyle({ buttons: link.title })}
                                    </div>
                                
                            </Link>
                            </>
                        ))}
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}
