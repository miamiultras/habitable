import { mockPlanets } from '@/lib/mockData';
import PlanetList from './components/PlanetList';

export default function GamePage() {
    return (
        <div className="flex-1 overflow-auto p-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="font-pixel text-xl text-purple-300 mb-4">Your Colonies</h1>
                <PlanetList planets={mockPlanets} />
            </div>
        </div>
    );
}