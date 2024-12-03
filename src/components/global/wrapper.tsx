import React from "react";
import { cn } from "@/functions";

interface Props {
    className?: string;
    children: React.ReactNode;
}

const Wrapper = ({ children, className }: Props) => {
    return (
        <div
            className={cn(
                "size-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                "relative isolate",
                className
            )}
        >
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-purple-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
            </div>
            
            {children}
        </div>
    )
};

export default Wrapper
