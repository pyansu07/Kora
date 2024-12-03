import { FOOTER_LINKS } from "@/constants";
import Link from "next/link";
import Container from "../global/container";
import Icons from "../global/icons";
import Wrapper from "../global/wrapper";
import { Button } from "../ui/button";
import { Particles } from "../ui/particles";

const Footer = () => {
    return (
        <footer className="w-full bg-gradient-to-b from-background via-background/50 to-background border-t border-white/[0.05]">
            <Container>
                <Wrapper className="relative flex flex-col md:flex-row justify-between py-16 md:py-20">
                    <div className="absolute inset-0 -z-10">
                        <Particles
                            className="absolute inset-0 w-full h-full"
                            quantity={40}
                            ease={10}
                            color="#d4d4d8"
                            refresh
                        />
                    </div>

                    {/* Logo Section */}
                    <div className="flex flex-col items-start max-w-xs">
                        <div className="flex items-center gap-2.5">
                            <Icons.icon className="w-6 h-6" />
                            <span className="text-xl font-semibold">
                                Kora
                            </span>
                        </div>
                        <p className="text-base text-neutral-400 mt-4">
                            Empower your business with our AI tools.
                        </p>
                        <Button className="mt-8" variant="secondary">
                            <Link href="/app">
                                Start for free
                            </Link>
                        </Button>
                    </div>

                    {/* Links Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-10 w-full max-w-2xl mt-12 md:mt-0">
                        {FOOTER_LINKS?.map((section, index) => (
                            <div key={index} className="flex flex-col gap-4">
                                <h4 className="text-sm font-semibold text-white">
                                    {section.title}
                                </h4>
                                <ul className="flex flex-col gap-3">
                                    {section.links.map((link, index) => (
                                        <li key={index}>
                                            <Link 
                                                href={link.href} 
                                                className="text-sm text-neutral-400 hover:text-white transition-colors inline-block"
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </Wrapper>
            </Container>

        </footer>
    );
};

export default Footer;
