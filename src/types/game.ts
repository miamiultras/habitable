export type TerraformationPhase = 1 | 2 | 3 | 4;

export type ResourceType = 'metal' | 'crystal' | 'energy';

export type Resources = {
    [key in ResourceType]: number;
};

export type Production = {
    [key in ResourceType]?: number;
};

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
    production?: Production;
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
