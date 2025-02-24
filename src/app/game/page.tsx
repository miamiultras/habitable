"use client";
import { useState } from "react";
import Image from "next/image";

export default function GamePage() {
    const [activeTab, setActiveTab] = useState("overview");

    return (
        <main className="h-screen bg-gray-900 text-white flex flex-col">
            {/* Top navigation */}
            <header className="bg-gray-800/95 px-4 py-3">
                <div className="flex items-center justify-between">
                    <h1 className="font-pixel text-sm text-purple-300">HABITABLE</h1>
                </div>
            </header>

            {/* Resources bar */}
            <div className="bg-gray-800/95 p-2">
                <div className="flex justify-around">
                    <div className="font-pixel text-xs">
                        <div className="text-purple-300">ENERGY</div>
                        <div>1000</div>
                    </div>
                    <div className="font-pixel text-xs">
                        <div className="text-purple-300">MINERALS</div>
                        <div>500</div>
                    </div>
                    <div className="font-pixel text-xs">
                        <div className="text-purple-300">POPULATION</div>
                        <div>100</div>
                    </div>
                </div>
            </div>

            {/* Main content */}
            <div className="flex-1 p-4">
                {activeTab === "overview" && (
                    <section className="h-full flex flex-col">
                        <h2 className="font-pixel text-sm text-purple-300 mb-4">
                            PLANET OVERVIEW
                        </h2>
                        <div className="flex-1 rounded-lg bg-gray-800/50 p-4">
                            <div className="h-3/4 relative">
                                <Image
                                    src="/images/terraformed_planet.webp"
                                    alt="Terraformed Planet"
                                    fill
                                    className="object-contain rounded-lg"
                                />
                            </div>
                            <div className="mt-4 space-y-2">
                                <p className="font-pixel text-xs">Temperature: 20°C</p>
                                <p className="font-pixel text-xs">Atmosphere: Stable</p>
                                <p className="font-pixel text-xs">Water: Abundant</p>
                            </div>
                        </div>
                    </section>
                )}

                {activeTab === "buildings" && (
                    <section className="flex flex-col">
                        <h2 className="font-pixel text-sm text-purple-300 mb-4">
                            BUILDINGS
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col items-center rounded-lg bg-gray-800/50 p-4">
                                <div className="aspect-square w-full relative mb-2">
                                    <Image
                                        src="/images/oxygen_generator.webp"
                                        alt="Solar Plant"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <p className="font-pixel text-sm text-purple-300">Solar Plant</p>
                                <p className="font-pixel text-xs text-gray-400">Level 1</p>
                            </div>
                            <div className="flex flex-col items-center rounded-lg bg-gray-800/50 p-4">
                                <div className="aspect-square w-full relative mb-2">
                                    <Image
                                        src="/images/mine.webp"
                                        alt="Mine"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <p className="font-pixel text-sm text-purple-300">Mine</p>
                                <p className="font-pixel text-xs text-gray-400">Level 1</p>
                            </div>
                        </div>
                    </section>
                )}
            </div>

            {/* Bottom navigation */}
            <nav className="bg-gray-800/95 border-t border-purple-500/20">
                <div className="flex justify-around p-2">
                    <button
                        className={`flex flex-col items-center gap-1 ${activeTab === "overview" ? "text-purple-300" : "text-gray-400"
                            }`}
                        onClick={() => setActiveTab("overview")}
                    >
                        <Image src="/images/base.webp" alt="Overview" width={32} height={32} />
                        <span className="font-pixel text-xs">OVERVIEW</span>
                    </button>
                    <button
                        className={`flex flex-col items-center gap-1 ${activeTab === "buildings" ? "text-purple-300" : "text-gray-400"
                            }`}
                        onClick={() => setActiveTab("buildings")}
                    >
                        <Image src="/images/mine.webp" alt="Buildings" width={32} height={32} />
                        <span className="font-pixel text-xs">BUILDINGS</span>
                    </button>
                </div>
            </nav>
        </main>
    );
}