import { mockPlanets } from '@/lib/mockData';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { use } from 'react';
import { getResourceImage, getResourceEntries } from '@/utils/resources';

export default function PlanetVehiclesPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);
    const planet = mockPlanets.find(p => p.id === resolvedParams.id);
    if (!planet) notFound();

    return (
        <div className="h-full overflow-y-auto">
            <div>
                <section>
                    <div className="sticky top-0 bg-gray-900/95 border-b border-purple-500/20 z-10">
                        <h2 className="font-pixel text-purple-300 p-4">AVAILABLE FLEET</h2>
                    </div>
                    <div className="p-4">
                        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                            {planet.vehicles?.map(vehicle => (
                                <div key={vehicle.id} className="bg-gray-800/50 p-4 rounded border border-purple-500/20">
                                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                                        <div className="w-full sm:w-48 h-48 relative">
                                            <Image 
                                                src={vehicle.image} 
                                                alt={vehicle.name} 
                                                fill
                                                className="object-contain" 
                                            />
                                        </div>
                                        <div className="flex flex-col flex-1">
                                            <div className="space-y-2">
                                                <div className="font-pixel text-purple-300">{vehicle.name}</div>
                                                <div className="font-pixel text-[10px] text-gray-400">
                                                    <div className="mb-2">COSTS:</div>
                                                    <div className="space-y-1">
                                                        {getResourceEntries(vehicle.cost).map(([resource, amount]) => (
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
                    </div>
                </section>
            </div>
        </div>
    );
}
