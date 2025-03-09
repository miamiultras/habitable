import type { Planet, Building, Vehicle } from '@/types/game';
import { createResources } from '@/utils/resources';

const mockBuildings: Building[] = [
    // Command Center (Base) progression
    {
        id: 'base-1',
        name: 'Command Center Level 1',
        level: 1,
        production: { crystal: 2, metal: 2, energy: 5 },
        cost: { crystal: 500, metal: 500, energy: 50 },
        image: '/images/buildings/base_level1.webp',
        upgradesToId: 'base-2'
    },
    {
        id: 'base-2',
        name: 'Command Center Level 2',
        level: 2,
        production: { crystal: 5, metal: 5, energy: 12 },
        cost: { crystal: 1500, metal: 1500, energy: 150 },
        image: '/images/buildings/base_level2.webp',
        upgradesToId: 'base-3',
        isUpgrade: true
    },
    {
        id: 'base-3',
        name: 'Command Center Level 3',
        level: 3,
        production: { crystal: 12, metal: 12, energy: 30 },
        cost: { crystal: 4500, metal: 4500, energy: 450 },
        image: '/images/buildings/base_level3.webp',
        isUpgrade: true
    },
    // Mine progression
    {
        id: 'mine-1',
        name: 'Mine Level 1',
        level: 1,
        production: { crystal: 10 },
        cost: { crystal: 100, metal: 50, energy: 5 },
        image: '/images/buildings/mine_level1.webp',
        upgradesToId: 'mine-2'
    },
    {
        id: 'mine-2',
        name: 'Mine Level 2',
        level: 2,
        production: { crystal: 25 },
        cost: { crystal: 250, metal: 125, energy: 15 },
        image: '/images/buildings/mine_level2.webp',
        upgradesToId: 'mine-3',
        isUpgrade: true
    },
    {
        id: 'mine-3',
        name: 'Mine Level 3',
        level: 3,
        production: { crystal: 60 },
        cost: { crystal: 625, metal: 315, energy: 40 },
        image: '/images/buildings/mine_level3.webp',
        isUpgrade: true
    },
    // Power Plant progression
    {
        id: 'power-plant-1',
        name: 'Power Plant Level 1',
        level: 1,
        production: { energy: 20 },
        cost: { crystal: 150, metal: 150, energy: 0 },
        image: '/images/buildings/power_plant_level1.webp',
        upgradesToId: 'power-plant-2'
    },
    {
        id: 'power-plant-2',
        name: 'Power Plant Level 2',
        level: 2,
        production: { energy: 50 },
        cost: { crystal: 400, metal: 400, energy: 0 },
        image: '/images/buildings/power_plant_level2.webp',
        upgradesToId: 'power-plant-3',
        isUpgrade: true
    },
    {
        id: 'power-plant-3',
        name: 'Power Plant Level 3',
        level: 3,
        production: { energy: 120 },
        cost: { crystal: 1000, metal: 1000, energy: 0 },
        image: '/images/buildings/power_plant_level3.webp',
        isUpgrade: true
    },
    // Factory progression
    {
        id: 'factory-1',
        name: 'Factory Level 1',
        level: 1,
        production: { metal: 15 },
        cost: { crystal: 200, metal: 400, energy: 20 },
        image: '/images/buildings/factory_level1.webp',
        upgradesToId: 'factory-2'
    },
    {
        id: 'factory-2',
        name: 'Factory Level 2',
        level: 2,
        production: { metal: 40 },
        cost: { crystal: 600, metal: 1200, energy: 50 },
        image: '/images/buildings/factory_level2.webp',
        upgradesToId: 'factory-3',
        isUpgrade: true
    },
    {
        id: 'factory-3',
        name: 'Factory Level 3',
        level: 3,
        production: { metal: 100 },
        cost: { crystal: 1800, metal: 3600, energy: 150 },
        image: '/images/buildings/factory_level3.webp',
        isUpgrade: true
    },
    // Hydroponic Farm progression
    {
        id: 'hydroponic-farm-1',
        name: 'Hydroponic Farm Level 1',
        level: 1,
        production: { crystal: 10, energy: -5 },
        cost: { crystal: 150, metal: 300, energy: 25 },
        image: '/images/buildings/hydroponic_farm_level1.webp',
        upgradesToId: 'hydroponic-farm-2'
    },
    {
        id: 'hydroponic-farm-2',
        name: 'Hydroponic Farm Level 2',
        level: 2,
        production: { crystal: 25, energy: -12 },
        cost: { crystal: 450, metal: 900, energy: 75 },
        image: '/images/buildings/hydroponic_farm_level2.webp',
        upgradesToId: 'hydroponic-farm-3',
        isUpgrade: true
    },
    {
        id: 'hydroponic-farm-3',
        name: 'Hydroponic Farm Level 3',
        level: 3,
        production: { crystal: 60, energy: -30 },
        cost: { crystal: 1350, metal: 2700, energy: 225 },
        image: '/images/buildings/hydroponic_farm_level3.webp',
        isUpgrade: true
    },
    // Oxygen Generator progression
    {
        id: 'oxygen-generator-1',
        name: 'Oxygen Generator Level 1',
        level: 1,
        production: { energy: -10 },
        cost: { crystal: 300, metal: 200, energy: 15 },
        image: '/images/buildings/oxygen_generator_level1.webp',
        upgradesToId: 'oxygen-generator-2'
    },
    {
        id: 'oxygen-generator-2',
        name: 'Oxygen Generator Level 2',
        level: 2,
        production: { energy: -25 },
        cost: { crystal: 900, metal: 600, energy: 45 },
        image: '/images/buildings/oxygen_generator_level2.webp',
        upgradesToId: 'oxygen-generator-3',
        isUpgrade: true
    },
    {
        id: 'oxygen-generator-3',
        name: 'Oxygen Generator Level 3',
        level: 3,
        production: { energy: -60 },
        cost: { crystal: 2700, metal: 1800, energy: 135 },
        image: '/images/buildings/oxygen_generator_level3.webp',
        isUpgrade: true
    },
    // Research Lab progression
    {
        id: 'lab-1',
        name: 'Research Lab Level 1',
        level: 1,
        production: { energy: -15 },
        cost: { crystal: 400, metal: 800, energy: 40 },
        image: '/images/buildings/lab_level1.webp',
        upgradesToId: 'lab-2'
    },
    {
        id: 'lab-2',
        name: 'Research Lab Level 2',
        level: 2,
        production: { energy: -35 },
        cost: { crystal: 1200, metal: 2400, energy: 120 },
        image: '/images/buildings/lab_level2.webp',
        upgradesToId: 'lab-3',
        isUpgrade: true
    },
    {
        id: 'lab-3',
        name: 'Research Lab Level 3',
        level: 3,
        production: { energy: -80 },
        cost: { crystal: 3600, metal: 7200, energy: 360 },
        image: '/images/buildings/lab_level3.webp',
        isUpgrade: true
    },
    // Shipyard progression
    {
        id: 'shipyard-1',
        name: 'Shipyard Level 1',
        level: 1,
        production: { energy: -20 },
        cost: { crystal: 600, metal: 1200, energy: 60 },
        image: '/images/buildings/shipyard_level1.webp',
        upgradesToId: 'shipyard-2'
    },
    {
        id: 'shipyard-2',
        name: 'Shipyard Level 2',
        level: 2,
        production: { energy: -50 },
        cost: { crystal: 1800, metal: 3600, energy: 180 },
        image: '/images/buildings/shipyard_level2.webp',
        upgradesToId: 'shipyard-3',
        isUpgrade: true
    },
    {
        id: 'shipyard-3',
        name: 'Shipyard Level 3',
        level: 3,
        production: { energy: -120 },
        cost: { crystal: 5400, metal: 10800, energy: 540 },
        image: '/images/buildings/shipyard_level3.webp',
        isUpgrade: true
    },
    // Storage progression
    {
        id: 'storage-1',
        name: 'Storage Level 1',
        level: 1,
        storage: { crystal: 5000, metal: 5000 },
        cost: { crystal: 200, metal: 400, energy: 10 },
        image: '/images/buildings/storage_level1.webp',
        upgradesToId: 'storage-2'
    },
    {
        id: 'storage-2',
        name: 'Storage Level 2',
        level: 2,
        storage: { crystal: 15000, metal: 15000 },
        cost: { crystal: 600, metal: 1200, energy: 30 },
        image: '/images/buildings/storage_level2.webp',
        upgradesToId: 'storage-3',
        isUpgrade: true
    },
    {
        id: 'storage-3',
        name: 'Storage Level 3',
        level: 3,
        storage: { crystal: 45000, metal: 45000 },
        cost: { crystal: 1800, metal: 3600, energy: 90 },
        image: '/images/buildings/storage_level3.webp',
        isUpgrade: true
    },
    // Refinery progression
    {
        id: 'refinery-1',
        name: 'Metal Refinery Level 1',
        level: 1,
        production: { metal: 15, energy: -5 },
        cost: { crystal: 100, metal: 200, energy: 10 },
        image: '/images/buildings/refinery_level1.webp',
        upgradesToId: 'refinery-2'
    },
    {
        id: 'refinery-2',
        name: 'Metal Refinery Level 2',
        level: 2,
        production: { metal: 40, energy: -12 },
        cost: { crystal: 300, metal: 600, energy: 30 },
        image: '/images/buildings/refinery_level2.webp',
        upgradesToId: 'refinery-3',
        isUpgrade: true
    },
    {
        id: 'refinery-3',
        name: 'Metal Refinery Level 3',
        level: 3,
        production: { metal: 100, energy: -30 },
        cost: { crystal: 900, metal: 1800, energy: 90 },
        image: '/images/buildings/refinery_level3.webp',
        isUpgrade: true
    },
];

const mockVehicles: Vehicle[] = [
    {
        id: 'battle_ship_1',
        name: 'BATTLE SHIP',
        image: '/images/fleet/battle_ship.webp',
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
        image: '/images/fleet/scout_ship.webp',
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
        image: '/images/fleet/transport_ship.webp',
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
        image: '/images/fleet/exploration_rover.webp',
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
        resources: createResources({ crystal: 1000, metal: 500, energy: 200 }),
        buildings: [mockBuildings[0]!],
        availableBuildings: mockBuildings.filter(b => b.level === 1),
        image: '/images/planets/unterraformed_planet.webp',
        vehicles: mockVehicles
    },
    {
        id: 'caladan',
        name: 'Caladan',
        terraformationPhase: 2,
        resources: createResources({ crystal: 2000, metal: 1000, energy: 400 }),
        buildings: mockBuildings,
        availableBuildings: mockBuildings,
        image: '/images/planets/partially_terraformed.webp',
        vehicles: mockVehicles
    },
    {
        id: 'giedi-prime',
        name: 'Giedi Prime',
        terraformationPhase: 3,
        resources: createResources({ crystal: 3000, metal: 1500, energy: 600 }),
        buildings: mockBuildings,
        availableBuildings: mockBuildings,
        image: '/images/planets/terraformed_planet.webp',
        vehicles: mockVehicles
    },
    {
        id: 'ix',
        name: 'Ix',
        terraformationPhase: 4,
        resources: createResources({ crystal: 4000, metal: 2000, energy: 800 }),
        buildings: mockBuildings,
        availableBuildings: mockBuildings,
        image: '/images/planets/advanced_terraformed.webp',
        vehicles: mockVehicles
    }
];


const resourceImages = {
    metal: '/images/resources/metal.webp',
    crystal: '/images/resources/crystal.webp',
    energy: '/images/resources/energy.webp'
};

export { mockBuildings, mockPlanets, mockVehicles, resourceImages };


