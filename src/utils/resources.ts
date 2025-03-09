import type { Production, ResourceType, Resources } from '@/types/game';

export const RESOURCE_TYPES: readonly ResourceType[] = ['metal', 'crystal', 'energy'] as const;

export function getResourceImage(resource: ResourceType): string {
    return `/images/resources/${resource}.webp`;
}

export function createEmptyResources(): Resources {
    return {
        metal: 0,
        crystal: 0,
        energy: 0
    };
}

export function createResources(partial: Partial<Resources>): Resources {
    return {
        ...createEmptyResources(),
        ...partial
    };
}

// Returns a type-safe tuple array without any type assertions
export function getResourceEntries(resources?: Resources | Production): readonly (readonly [ResourceType, number])[] {
    if(!resources) return [];
    
    return RESOURCE_TYPES.map(key => [key, resources[key] ?? 0] as const);
}
