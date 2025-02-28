import { mockPlanets } from '@/lib/mockData';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { use } from 'react';

export default function PlanetPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);
    const planet = mockPlanets.find(p => p.id === resolvedParams.id);
    if (!planet) notFound();

    return (
        <div className="h-full overflow-y-auto">
            <div className="p-4">
                <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2">
                    {/* Stats Card */}
                    <div className="bg-gray-800/50 p-4 md:p-6 rounded-lg border border-purple-500/20">
                        <h2 className="font-pixel text-purple-300 mb-4">PLANET STATISTICS</h2>
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 xs:grid-cols-2 gap-4">
                                <div>
                                    <div className="font-pixel text-[10px] text-gray-400 mb-1">SURFACE TEMPERATURE</div>
                                    <div className="font-pixel text-purple-300 text-sm">-50°C</div>
                                </div>
                                <div>
                                    <div className="font-pixel text-[10px] text-gray-400 mb-1">ATMOSPHERE</div>
                                    <div className="font-pixel text-purple-300 text-sm">THIN</div>
                                </div>
                                <div>
                                    <div className="font-pixel text-[10px] text-gray-400 mb-1">WATER COVERAGE</div>
                                    <div className="font-pixel text-purple-300 text-sm">15%</div>
                                </div>
                                <div>
                                    <div className="font-pixel text-[10px] text-gray-400 mb-1">HABITABILITY</div>
                                    <div className="font-pixel text-green-400 text-sm">43%</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Resources Card */}
                    <div className="bg-gray-800/50 p-4 md:p-6 rounded-lg border border-purple-500/20">
                        <h2 className="font-pixel text-purple-300 mb-4">RESOURCES</h2>
                        <div className="space-y-4">
                            {Object.entries(planet.resources).map(([resource, amount]) => (
                                <div key={resource} className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <Image 
                                            src={`/images/${resource}.webp`}
                                            alt={resource}
                                            width={24}
                                            height={24}
                                        />
                                        <span className="font-pixel text-[10px] text-gray-400">{resource.toUpperCase()}</span>
                                    </div>
                                    <div className="font-pixel text-sm text-purple-300">{amount}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Activity Log */}
                    <div className="md:col-span-2 bg-gray-800/50 p-4 md:p-6 rounded-lg border border-purple-500/20">
                        <h2 className="font-pixel text-purple-300 mb-4">RECENT ACTIVITY</h2>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="font-pixel text-[10px] text-gray-400">2H AGO</div>
                                <div className="font-pixel text-[10px] text-green-400">SOLAR PANEL LEVEL 2 CONSTRUCTION COMPLETED</div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="font-pixel text-[10px] text-gray-400">5H AGO</div>
                                <div className="font-pixel text-[10px] text-purple-300">CRYSTAL MINE PRODUCTION INCREASED BY 10%</div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="font-pixel text-[10px] text-gray-400">1D AGO</div>
                                <div className="font-pixel text-[10px] text-purple-300">ATMOSPHERE PROCESSING STARTED</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
