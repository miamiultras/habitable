import { Planet, Building, Vehicle } from '@/types/game';

const mockBuildings: Building[] = [
    // Level 1 buildings
    {
        id: 'crystal-mine-1',
        name: 'Crystal Mine Level 1',
        level: 1,
        production: { crystal: 10 },
        cost: { crystal: 100, metal: 50, energy: 5 },
        image: '/images/mine_level1.webp'
    },
    {
        id: 'metal-refinery-1',
        name: 'Metal Refinery Level 1',
        level: 1,
        production: { metal: 10 },
        cost: { crystal: 50, metal: 100, energy: 5 },
        image: '/images/factory_level1.webp'
    },
    {
        id: 'power-plant-1',
        name: 'Power Plant Level 1',
        level: 1,
        production: { energy: 20 },
        cost: { crystal: 150, metal: 150, energy: 0 },
        image: '/images/power_plant_level1.webp'
    },
    {
        id: 'research-lab-1',
        name: 'Research Lab Level 1',
        level: 1,
        production: { energy: -5 },
        cost: { crystal: 200, metal: 400, energy: 20 },
        image: '/images/lab_level1.webp'
    },
    {
        id: 'base-1',
        name: 'Command Center Level 1',
        level: 1,
        production: { crystal: 2, metal: 2, energy: 5 },
        cost: { crystal: 500, metal: 500, energy: 50 },
        image: '/images/base_level1.webp'
    },

    // Level 2 buildings
    {
        id: 'crystal-mine-2',
        name: 'Crystal Mine Level 2',
        level: 2,
        production: { crystal: 25 },
        cost: { crystal: 250, metal: 125, energy: 15 },
        image: '/images/mine_level2.webp'
    },
    {
        id: 'metal-refinery-2',
        name: 'Metal Refinery Level 2',
        level: 2,
        production: { metal: 25 },
        cost: { crystal: 125, metal: 250, energy: 15 },
        image: '/images/factory_level2.webp'
    },
    {
        id: 'power-plant-2',
        name: 'Power Plant Level 2',
        level: 2,
        production: { energy: 50 },
        cost: { crystal: 400, metal: 400, energy: 0 },
        image: '/images/power_plant_level2.webp'
    },
    {
        id: 'research-lab-2',
        name: 'Research Lab Level 2',
        level: 2,
        production: { energy: -12 },
        cost: { crystal: 500, metal: 1000, energy: 50 },
        image: '/images/lab_level2.webp'
    },
    {
        id: 'base-2',
        name: 'Command Center Level 2',
        level: 2,
        production: { crystal: 5, metal: 5, energy: 12 },
        cost: { crystal: 1250, metal: 1250, energy: 125 },
        image: '/images/base_level2.webp'
    },

    // Level 3 buildings
    {
        id: 'crystal-mine-3',
        name: 'Crystal Mine Level 3',
        level: 3,
        production: { crystal: 60 },
        cost: { crystal: 625, metal: 315, energy: 40 },
        image: '/images/mine_level3.webp'
    },
    {
        id: 'metal-refinery-3',
        name: 'Metal Refinery Level 3',
        level: 3,
        production: { metal: 60 },
        cost: { crystal: 315, metal: 625, energy: 40 },
        image: '/images/factory_level3.webp'
    },
    {
        id: 'power-plant-3',
        name: 'Power Plant Level 3',
        level: 3,
        production: { energy: 120 },
        cost: { crystal: 1000, metal: 1000, energy: 0 },
        image: '/images/power_plant_level3.webp'
    },
    {
        id: 'research-lab-3',
        name: 'Research Lab Level 3',
        level: 3,
        production: { energy: -30 },
        cost: { crystal: 1250, metal: 2500, energy: 125 },
        image: '/images/lab_level3.webp'
    },
    {
        id: 'base-3',
        name: 'Command Center Level 3',
        level: 3,
        production: { crystal: 12, metal: 12, energy: 30 },
        cost: { crystal: 3125, metal: 3125, energy: 315 },
        image: '/images/base_level3.webp'
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

const mockPlanets: Planet[] = [
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

export { mockBuildings, mockPlanets, mockVehicles };
