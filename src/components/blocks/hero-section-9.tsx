"use client"
import * as React from "react"
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const HeroSection = () => {
    return (
        <main>
            <div
                aria-hidden
                className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block">
                <div className="w-[35rem] h-[80rem] -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                <div className="h-[80rem] -translate-y-87.5 absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
            </div>

            <section className="overflow-hidden bg-white dark:bg-transparent">
                <div className="relative mx-auto max-w-5xl px-6 py-28 lg:py-24">
                    <div className="relative z-10 mx-auto max-w-2xl text-center">
                        <h1 className="text-balance text-4xl font-semibold md:text-5xl lg:text-6xl">One Pass. Every Experience</h1>
                        <p className="mx-auto my-8 max-w-2xl text-xl">Getset is your all-in-one travel companion. No more hopping across multiple apps and agencies — we bundle your entire trip into one Adventure Pass.</p>

                        <Button
                            asChild
                            size="lg">
                            <Link href="/dashboard">
                                <span className="btn-label">Start Planning</span>
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className="mx-auto -mt-16 max-w-7xl [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]">
                    <div className="[perspective:1200px] [mask-image:linear-gradient(to_right,black_50%,transparent_100%)] -mr-16 pl-16 lg:-mr-56 lg:pl-56">
                        <div className="[transform:rotateX(20deg);]">
                            <div className="lg:h-[44rem] relative skew-x-[.36rad]">
                                <img
                                    className="rounded-[--radius] z-[2] relative border dark:hidden"
                                    src="https://tailark.com/_next/image?url=%2Fcard.png&w=3840&q=75"
                                    alt="Getset Adventure Pass"
                                    width={2880}
                                    height={2074}
                                />
                                <img
                                    className="rounded-[--radius] z-[2] relative hidden border dark:block"
                                    src="https://tailark.com/_next/image?url=%2Fdark-card.webp&w=3840&q=75"
                                    alt="Getset Adventure Pass"
                                    width={2880}
                                    height={2074}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-background relative z-10 py-16">
                <div className="m-auto max-w-5xl px-6">
                    <h2 className="text-center text-lg font-medium">Your favorite companies are our partners.</h2>
                    <div className="mx-auto mt-20 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12">
                        <img
                            className="h-21 w-fit dark:invert object-cover"
                            src="vr.png"
                            alt="Visit Rwanda"
                            height="60"
                            width="auto"
                        />
                        <img
                            className="h-8 w-fit object-cover"
                            src="https://www.itu.int/en/ITU-D/Cybersecurity/PublishingImages/RDB_logo.png"
                            alt="RDB"
                            height="16"
                            width="auto"
                        />
                        <img
                            className="h-18 w-fit dark:invert object-cover"
                            src="/volkswaggen.png"
                            alt="Volkswagen"
                            height="16"
                            width="auto"
                        />
                        <img
                            className="h-8 w-fit dark:invert"
                            src="https://ligabar.ru/wp-content/uploads/2019/09/29.png"
                            alt="Nike Logo"
                            height="20"
                            width="auto"
                        />
                        <img
                            className="h-22 w-fit object-cover"
                            src="/mtn.png"
                            alt="MTN"
                            height="16"
                            width="auto"
                        />
                    </div>
                </div>
            </section>
        </main>
    )
}