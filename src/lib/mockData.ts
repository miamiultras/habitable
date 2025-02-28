import { Planet, Building, Vehicle } from '@/types/game';

const mockBuildings: Building[] = [
    {
        id: 'crystal-mine',
        name: 'Crystal Mine',
        level: 1,
        production: { crystal: 10 },
        cost: { crystal: 100, metal: 50, energy: 5 },
        image: '/images/mine.webp'
    },
    {
        id: 'metal-refinery',
        name: 'Metal Refinery',
        level: 1,
        production: { metal: 10 },
        cost: { crystal: 50, metal: 100, energy: 5 },
        image: '/images/refinery.webp'
    },
    {
        id: 'power-plant',
        name: 'Power Plant',
        level: 1,
        production: { energy: 20 },
        cost: { crystal: 150, metal: 150, energy: 0 },
        image: '/images/power_plant.webp'
    },
    {
        id: 'hydroponic-farm',
        name: 'Hydroponic Farm',
        level: 1,
        production: { crystal: 5, energy: -2 },
        cost: { crystal: 80, metal: 120, energy: 10 },
        image: '/images/hydroponic_farm.webp'
    },
    {
        id: 'research-lab',
        name: 'Research Lab',
        level: 1,
        production: { energy: -5 },
        cost: { crystal: 200, metal: 400, energy: 20 },
        image: '/images/lab.webp'
    },
    {
        id: 'research-center',
        name: 'Research Center',
        level: 1,
        production: { energy: -10 },
        cost: { crystal: 400, metal: 800, energy: 40 },
        image: '/images/research_center.webp'
    },
    {
        id: 'oxygen-generator',
        name: 'Oxygen Generator',
        level: 1,
        production: { energy: -8 },
        cost: { crystal: 300, metal: 200, energy: 15 },
        image: '/images/oxygen_generator.webp'
    },
    {
        id: 'base',
        name: 'Command Center',
        level: 1,
        production: { crystal: 2, metal: 2, energy: 5 },
        cost: { crystal: 500, metal: 500, energy: 50 },
        image: '/images/base.webp'
    }
];

const mockVehicles: Vehicle[] = [
    {
        id: 'battle_ship_1',
        name: 'BATTLE SHIP',
        image: '/images/battle_ship.webp',
        type: 'space',
        cost: {
            metal: 1000,
            crystal: 500,
            energy: 200
        },
        stats: {
            power: 500,
            speed: 100,
            range: 1000
        }
    },
    {
        id: 'scout_ship_1',
        name: 'SCOUT SHIP',
        image: '/images/scout_ship.webp',
        type: 'space',
        cost: {
            metal: 300,
            crystal: 100,
            energy: 50
        },
        stats: {
            speed: 200,
            range: 2000
        }
    },
    {
        id: 'transport_ship_1',
        name: 'TRANSPORT SHIP',
        image: '/images/transport_ship.webp',
        type: 'space',
        cost: {
            metal: 800,
            crystal: 400,
            energy: 100
        },
        stats: {
            capacity: 5000,
            speed: 50,
            range: 1500
        }
    },
    {
        id: 'exploration_rover_1',
        name: 'EXPLORATION ROVER',
        image: '/images/exploration_rover.webp',
        type: 'ground',
        cost: {
            metal: 200,
            crystal: 100,
            energy: 50
        },
        stats: {
            speed: 30,
            range: 500
        }
    }
] 

export const mockPlanets: Planet[] = [
    {
        id: 'arrakis',
        name: 'Arrakis',
        terraformationPhase: 1,
        resources: { crystal: 1000, metal: 500, energy: 200 },
        buildings: [mockBuildings[7]!, mockBuildings[0]!], // Base + Crystal Mine
        availableBuildings: mockBuildings,
        image: '/images/unterraformed_planet.webp',
        vehicles: mockVehicles
    },
    {
        id: 'caladan',
        name: 'Caladan',
        terraformationPhase: 2,
        resources: { crystal: 2000, metal: 1000, energy: 400 },
        buildings: mockBuildings,
        availableBuildings: mockBuildings,
        image: '/images/partially_terraformed.webp',
        vehicles: mockVehicles
    },
    {
        id: 'giedi-prime',
        name: 'Giedi Prime',
        terraformationPhase: 3,
        resources: { crystal: 3000, metal: 1500, energy: 600 },
        buildings: mockBuildings,
        availableBuildings: mockBuildings,
        image: '/images/terraformed_planet.webp',
        vehicles: mockVehicles
    },
    {
        id: 'ix',
        name: 'Ix',
        terraformationPhase: 4,
        resources: { crystal: 4000, metal: 2000, energy: 800 },
        buildings: mockBuildings,
        availableBuildings: mockBuildings,
        image: '/images/advanced_terraformed.webp',
        vehicles: mockVehicles
    }
];

export { mockBuildings };
