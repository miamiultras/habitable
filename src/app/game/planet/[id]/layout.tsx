import { mockPlanets } from "@/lib/mockData";
import { use } from 'react';
import PlanetNav from './PlanetNav';

export default function PlanetLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ id: string }>;
}) {
    const resolvedParams = use(params);
    const planet = mockPlanets.find(p => p.id === resolvedParams.id);
    if (!planet) return null;

    return (
        <div className="h-full flex flex-col">
            <PlanetNav planet={planet} />
            {children}
        </div>
    );
}
