"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Planet } from "@/types/game";

interface PlanetNavProps {
    planet: Planet;
}

export default function PlanetNav({ planet }: PlanetNavProps) {
    const pathname = usePathname();
    
    const isActive = (path: string) => {
        if (path === 'overview') {
            return pathname === `/game/planet/${planet.id}`;
        }
        return pathname.includes(`/${path}`);
    };

    return (
        <div className="bg-gray-800/50 border-b border-purple-500/20">
            <div className="p-4">
                {/* Header section with image and title */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 relative shrink-0">
                            <Image 
                                src={planet.image} 
                                alt={planet.name} 
                                fill 
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <div className="text-center sm:text-left">
                            <h1 className="font-pixel text-purple-300 text-lg sm:text-xl md:text-2xl">{planet.name}</h1>
                            <div className="font-pixel text-xs sm:text-sm text-gray-400">PHASE {planet.terraformationPhase}</div>
                        </div>
                    </div>
                    <Link 
                        href="/game" 
                        className="font-pixel text-xs sm:text-sm text-purple-300 hover:text-purple-400 self-center sm:self-start"
                    >
                        ← BACK TO COLONIES
                    </Link>
                </div>
            </div>

            {/* Navigation tabs */}
            <div className="flex justify-center sm:justify-start px-4 gap-4 sm:gap-6 font-pixel text-xs sm:text-sm overflow-x-auto">
                <Link 
                    href={`/game/planet/${planet.id}`}
                    className={`pb-3 border-b-2 whitespace-nowrap ${isActive('overview') 
                        ? 'border-purple-500 text-purple-300' 
                        : 'border-transparent text-gray-400'}`}
                >
                    OVERVIEW
                </Link>
                <Link 
                    href={`/game/planet/${planet.id}/buildings`}
                    className={`pb-3 border-b-2 whitespace-nowrap ${isActive('buildings') 
                        ? 'border-purple-500 text-purple-300' 
                        : 'border-transparent text-gray-400'}`}
                >
                    BUILDINGS
                </Link>
                <Link 
                    href={`/game/planet/${planet.id}/vehicles`}
                    className={`pb-3 border-b-2 whitespace-nowrap ${isActive('vehicles') 
                        ? 'border-purple-500 text-purple-300' 
                        : 'border-transparent text-gray-400'}`}
                >
                    FLEET
                </Link>
            </div>
        </div>
    );
}
