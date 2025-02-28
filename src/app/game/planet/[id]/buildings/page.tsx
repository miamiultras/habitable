import { mockPlanets } from '@/lib/mockData';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { use } from 'react';

export default function PlanetBuildingsPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);
    const planet = mockPlanets.find(p => p.id === resolvedParams.id);
    if (!planet) notFound();

    const getResourceImage = (resource: string) => {
        if (resource === 'energy') return '/images/energy.webp';
        return `/images/${resource}.webp`;
    };

    return (
        <div className="h-full overflow-y-auto">
            <div>
                <section>
                    <div className="sticky top-0 bg-gray-900/95 border-b border-purple-500/20 z-10">
                        <h2 className="font-pixel text-purple-300 p-4">EXISTING BUILDINGS</h2>
                    </div>
                    <div className="p-4">
                        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                            {planet.buildings.map(building => (
                                <div key={building.id} className="bg-gray-800/50 p-4 rounded border border-purple-500/20">
                                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                                        <div className="w-full sm:w-48 h-48 relative">
                                            <Image 
                                                src={building.image} 
                                                alt={building.name} 
                                                fill
                                                className="object-contain" 
                                            />
                                        </div>
                                        <div className="flex flex-col flex-1">
                                            <div>
                                                <div className="font-pixel text-purple-300">{building.name}</div>
                                                <div className="font-pixel text-[10px] text-gray-400">LEVEL {building.level}</div>
                                                <div className="font-pixel text-[10px] text-green-400 mt-1">
                                                    {Object.entries(building.production).map(([resource, amount]) => (
                                                        <div key={resource} className="flex items-center gap-1">
                                                            <Image 
                                                                src={getResourceImage(resource)} 
                                                                alt={resource} 
                                                                width={12} 
                                                                height={12} 
                                                            />
                                                            <span>{amount > 0 ? '+' : ''}{amount} /h</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <button className="mt-auto w-full px-4 py-2 bg-purple-500/20 rounded text-purple-300 font-pixel text-xs hover:bg-purple-500/30">
                                                UPGRADE
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section>
                    <div className="sticky top-0 bg-gray-900/95 border-b border-purple-500/20 z-10">
                        <h2 className="font-pixel text-purple-300 p-4">AVAILABLE BUILDINGS</h2>
                    </div>
                    <div className="p-4 grid gap-4 md:grid-cols-2">
                        {planet.availableBuildings.map(building => (
                            <div key={building.id} className="bg-gray-800/50 p-4 rounded border border-purple-500/20">
                                <div className="flex gap-6">
                                    <div className="w-48 h-48 relative shrink-0">
                                        <Image 
                                            src={building.image} 
                                            alt={building.name} 
                                            fill
                                            className="object-contain" 
                                        />
                                    </div>
                                    <div className="flex flex-col justify-between flex-1">
                                        <div className="space-y-2">
                                            <div className="font-pixel text-purple-300">{building.name}</div>
                                            <div className="font-pixel text-[10px] text-gray-400">
                                                <div className="mb-2">COSTS:</div>
                                                <div className="space-y-1">
                                                    {Object.entries(building.cost).map(([resource, amount]) => (
                                                        <div key={resource} className="flex items-center gap-2">
                                                            <Image 
                                                                src={getResourceImage(resource)} 
                                                                alt={resource} 
                                                                width={16} 
                                                                height={16} 
                                                            />
                                                            <span>{amount} {resource.toUpperCase()}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <button className="w-full mt-4 px-4 py-2 bg-purple-500/20 rounded text-purple-300 font-pixel text-xs hover:bg-purple-500/30">
                                            BUILD
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
