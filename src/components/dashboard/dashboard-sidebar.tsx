"use client";

import { SIDEBAR_LINKS } from "@/constants/links";
import { LogOutIcon, SearchIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "../global/container";
import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/functions";
import { useClerk } from "@clerk/nextjs";

const DashboardSidebar = () => {
    const { signOut } = useClerk();
    const pathname = usePathname();

    const handleLogout = async () => {
        await signOut();
    };

    return (
        <div
            id="sidebar"
            className="flex-col hidden lg:flex fixed left-0 top-14 bottom-0 z-40 bg-background/50 backdrop-blur-xl border-r border-border/40 w-64"
        >
            <div className={cn(
                "flex flex-col size-full p-2"
            )}>
                <Container delay={0.2} className="h-max px-1">
                    <Button
                        variant="outline"
                        className="w-full justify-between px-2.5 h-9 text-sm"
                    >
                        <span className="flex items-center gap-x-1.5 text-muted-foreground">
                            <SearchIcon className="size-3.5" />
                            <span>
                                Quick search...
                            </span>
                        </span>
                        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 text-[10px] font-medium text-muted-foreground opacity-100">
                            <span className="text-xs">⌘</span>K
                        </kbd>
                    </Button>
                </Container>
                <ul className="w-full space-y-1 py-3">
                    {SIDEBAR_LINKS.map((link, index) => {
                        const isActive = pathname === link.href;

                        return (
                            <li key={index} className="w-full px-1">
                                <Container delay={0.1 + index / 10}>
                                    <Link
                                        href={link.href}
                                        className={buttonVariants({
                                            variant: "ghost",
                                            className: cn(
                                                "w-full !justify-start h-9 text-sm",
                                                isActive ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:text-foreground"
                                            ),
                                        })}
                                    >
                                        <link.icon strokeWidth={1.5} className="size-4 mr-2" />
                                        {link.label}
                                    </Link>
                                </Container>
                            </li>
                        )
                    })}
                </ul>
                <div className="mt-auto flex flex-col gap-2 w-full px-1">
                    <Container delay={0.3}>
                        <Button
                            variant="ghost"
                            onClick={handleLogout}
                            className="w-full justify-start h-9 text-sm text-muted-foreground hover:text-foreground"
                        >
                            <LogOutIcon className="size-4 mr-2" strokeWidth={1.5} />
                            Sign out
                        </Button>
                    </Container>
                </div>
            </div>
        </div>
    )
};

export default DashboardSidebar
