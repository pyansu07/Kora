"use client";

import React from "react"
import { ClerkProvider } from "@clerk/nextjs"
import { AnimatePresence } from "framer-motion";

interface Props {
    children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
    return (
        <ClerkProvider>
            <AnimatePresence mode="wait">
                {children}
            </AnimatePresence>
        </ClerkProvider>
    );
};

export default Providers