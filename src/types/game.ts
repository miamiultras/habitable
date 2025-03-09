export type TerraformationPhase = 1 | 2 | 3 | 4;

export type ResourceType = 'metal' | 'crystal' | 'energy';

export type Resources = Record<ResourceType, number | undefined>;

export type Cost = Record<ResourceType, number>;


export interface Storage {
    crystal?: number;
    metal?: number;
    energy?: number;
}

export interface Building {
    id: string;
    name: string;
    image: string;
    level: number;
    cost: Cost;
    production?: Resources;
    storage?: Storage;
    upgradesToId?: string;
    isUpgrade?: boolean;
}

export interface Vehicle {
    id: string;
    name: string;
    image: string;
    type: 'space' | 'ground';
    cost: Cost;
    stats: {
        speed?: number;
        capacity?: number;
        power?: number;
        range?: number;
    };
}

export interface Planet {
    id: string;
    name: string;
    image: string;
    terraformationPhase: TerraformationPhase;
    resources: Resources;
    buildings: Building[];
    availableBuildings: Building[];
    vehicles?: Vehicle[];
}
