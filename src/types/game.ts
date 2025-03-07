export type TerraformationPhase = 1 | 2 | 3 | 4;

export interface Resources {
    crystal: number;
    metal: number;
    energy: number;
}

export interface Cost {
    crystal?: number;
    metal?: number;
    energy?: number;
}

export interface Production {
    crystal?: number;
    metal?: number;
    energy?: number;
}

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
