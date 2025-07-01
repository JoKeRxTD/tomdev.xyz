import { Menu } from "lucide-react";
import { ThemeSwitch } from "@/src/components/theme-switch";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";
import { Button } from "@/src/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/src/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/src/components/ui/sheet";
import { siteConfig } from "@/config/site";
import React from "react";
import Image from "next/image";

// Dummy user/session logic for illustration
type Session = { user?: any } | null;
const useSession = (): { data: Session } => ({ data: null }); // Replace with your actual session hook

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: {
      title: string;
      url: string;
    };
    signup: {
      title: string;
      url: string;
    };
  };
}
const Navbar1 = () => {
  const { data: session } = useSession();
  const userData = session?.user;

  // UserBar logic (simplified, adjust as needed)
  const UserBar = () => {
    if (userData) {
      return (
        <div className="flex items-center gap-2">
          {/* Avatar and dropdown */}
          {/* ... */}
        </div>
      );
    }
    return (
      <Button
        asChild
        variant="outline"
        size="sm"
        className="px-4 py-2 font-bold rounded-full"
      >
        <a href="#">Login</a>
      </Button>
    );
  };

  // "Other" dropdown logic (placeholder)
  const OtherDropdown = () => (
    <div className="items-center hidden lg:flex">
      <Button
        variant="ghost"
        size="sm"
        className="flex items-center gap-2 font-bold"
      >
        Other
      </Button>
    </div>
  );

  // Desktop menu rendering
  function renderMenuItem(item: { label: string; href: string }) {
    return (
      <NavigationMenuItem key={item.href}>
        <NavigationMenuLink
          asChild
          className="flex items-center gap-2 px-3 py-2 transition-colors rounded hover:bg-muted"
        >
          <a href={item.href}>{item.label}</a>
        </NavigationMenuLink>
      </NavigationMenuItem>
    );
  }

  // Mobile menu rendering
  function renderMobileMenuItem(item: { label: string; href: string }) {
    return (
      <AccordionItem key={item.href} value={item.label}>
        <AccordionTrigger asChild>
          <a
            href={item.href}
            className="flex items-center w-full gap-2 text-left"
          >
            {item.label}
          </a>
        </AccordionTrigger>
      </AccordionItem>
    );
  }

  return (
    <section className="py-4">
      <div className="container">
        {/* Desktop Menu */}
        <nav className="items-center justify-between hidden lg:flex">
          <div className="flex items-center gap-2">
            {/* Logo */}
              <Image src={siteConfig.logo} className="max-h-8" alt="logo" width={32} height={32} />
              <span className="text-2xl font-bold text-primary-300">
                {siteConfig.name}
              </span>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {siteConfig.navItems.map(renderMenuItem)}
                </NavigationMenuList>
              </NavigationMenu>
              {/* {OtherDropdown()} */}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <ThemeSwitch />
            <UserBar />
            <Button
              asChild
              size="sm"
              className="px-4 py-2 font-bold text-white rounded-full bg-primary hover:bg-primary/90"
            >
              <a href="#">Sign up</a>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              <img src={siteConfig.logo} className="max-h-8" alt="logo" />
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <a href="/" className="flex items-center gap-2">
                      <img src={siteConfig.logo} className="max-h-8" alt="logo" />
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex flex-col w-full gap-4"
                  >
                    {siteConfig.navMenuItems.map(renderMobileMenuItem)}
                  </Accordion>
                  <div className="flex flex-col gap-3">
                    <UserBar />
                    <Button
                      asChild
                      size="sm"
                      className="px-4 py-2 font-bold text-white rounded-full bg-primary hover:bg-primary/90"
                    >
                      <a href="#">Sign up</a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Navbar1 };
