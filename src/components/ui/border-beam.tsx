import { cn } from "@/functions";

interface BorderBeamProps {
    className?: string;
    size?: number;
    duration?: number;
    borderWidth?: number;
    colorFrom?: string;
    colorTo?: string;
    blur?: number;
    delay?: number;
    opacity?: number;
}

export const BorderBeam = ({
    className,
    size = 150,
    duration = 10,
    borderWidth = 1,
    colorFrom = "hsl(var(--primary))",
    colorTo = "hsl(var(--primary-foreground))",
    blur = 10,
    opacity = 0.5,
    delay = 0,
}: BorderBeamProps) => {
    return (
        <div
            className={cn(
                "absolute inset-0 rounded-[inherit]",
                "before:absolute before:inset-0 before:rounded-[inherit] before:p-[1px]",
                "after:absolute after:inset-0 after:rounded-[inherit] after:p-[1px]",
                "overflow-hidden",
                className
            )}
            style={{
                "--beam-size": `${size}px`,
                "--beam-duration": `${duration}s`,
                "--beam-delay": `${delay}s`,
                "--beam-blur": `${blur}px`,
                "--beam-opacity": opacity,
                "--beam-border-width": `${borderWidth}px`,
                "--beam-color-from": colorFrom,
                "--beam-color-to": colorTo,
            } as React.CSSProperties}
        >
            <div className="absolute inset-[--beam-border-width] rounded-[inherit] bg-background" />
            <div 
                className={cn(
                    "absolute inset-0",
                    "animate-border-beam [animation-delay:var(--beam-delay)]",
                    "before:absolute before:inset-0",
                    "before:bg-[linear-gradient(90deg,transparent_0%,var(--beam-color-from)_50%,var(--beam-color-to)_100%)]",
                    "before:blur-[var(--beam-blur)]",
                    "before:opacity-[var(--beam-opacity)]",
                    "[--center-offset:calc((var(--beam-size)*1.41)-var(--beam-size))]",
                    "[--gradient-size:calc(var(--beam-size)*2)]",
                    "[mask:linear-gradient(white,white),linear-gradient(white,white)]",
                    "[mask-clip:padding-box,border-box]",
                    "[mask-composite:intersect]"
                )}
            />
        </div>
    );
};
