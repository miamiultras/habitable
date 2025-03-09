import Image from 'next/image';
import Link from 'next/link';
import { Planet } from '@/types/game';
import { resourceImages } from '~/lib/mockData';

interface PlanetCardProps {
    planet: Planet;
}

export default function PlanetCard({ planet }: PlanetCardProps) {
    return (
        <Link 
            href={`/game/planet/${planet.id}`}
            className="block bg-gray-800/50 rounded-lg border border-purple-500/20 hover:bg-gray-800/70 transition-colors"
        >
            <div className="p-4 space-y-4">
                <div className="aspect-square relative rounded-lg overflow-hidden">
                    <Image
                        src={planet.image}
                        alt={planet.name}
                        fill
                        className="object-cover"
                    />
                </div>
                
                <div>
                    <h2 className="font-pixel text-purple-300">{planet.name}</h2>
                    <p className="text-[10px] text-gray-400 font-pixel">TERRAFORMATION PHASE {planet.terraformationPhase}</p>
                </div>

                <div className="grid grid-cols-3 gap-2">
                    <div className="flex items-center gap-2 font-pixel text-xs">
                        <Image src={resourceImages.crystal} alt="Crystal" width={16} height={16} />
                        <span>{planet.resources.crystal}</span>
                    </div>
                    <div className="flex items-center gap-2 font-pixel text-xs">
                        <Image src={resourceImages.metal} alt="Metal" width={16} height={16} />
                        <span>{planet.resources.metal}</span>
                    </div>
                    <div className="flex items-center gap-2 font-pixel text-xs">
                        <Image src={resourceImages.energy} alt="Energy" width={16} height={16} />
                        <span>{planet.resources.energy}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
