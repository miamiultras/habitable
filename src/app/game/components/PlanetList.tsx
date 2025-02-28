import { Planet } from '@/types/game';
import PlanetCard from './PlanetCard';

interface PlanetListProps {
    planets: Planet[];
}

export default function PlanetList({ planets }: PlanetListProps) {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {planets.map((planet) => (
                <PlanetCard key={planet.id} planet={planet} />
            ))}
        </div>
    );
}
