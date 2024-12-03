"use client";

import MobileSidebar from "@/components/dashboard/mobile-sidebar";
import Icons from "@/components/global/icons";
import { HelpCircleIcon, ZapIcon } from "lucide-react";
import Link from "next/link";
import Container from "../global/container";
import { Button } from "../ui/button";

const DashboardNavbar = () => {
    return (
        <header id="dashboard-navbar" className="fixed top-0 inset-x-0 w-full h-14 bg-background/95 backdrop-blur-xl border-b border-border/40 px-3 z-50">
            <Container className="flex items-center justify-between size-full">
                <div className="flex items-center">
                    <Link href="/app" className="flex items-center gap-x-2 hover:opacity-80 transition">
                        <Icons.icon className="w-5" />
                        <span className="text-base font-bold tracking-tight">
                            kora
                        </span>
                    </Link>
                </div>
                <div className="flex items-center gap-x-1.5">
                    <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 text-sm"
                    >
                        <ZapIcon className="size-3.5 mr-1 text-orange-500 fill-orange-500/20" />
                        Upgrade
                    </Button>
                    <Button
                        asChild
                        size="icon"
                        variant="ghost"
                        className="hidden lg:flex h-8 w-8"
                    >
                        <Link href="/help" target="_blank">
                            <HelpCircleIcon className="size-4" />
                        </Link>
                    </Button>
                    <MobileSidebar />
                </div>
            </Container>
        </header>
    )
};

export default DashboardNavbar
