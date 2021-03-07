export interface FindMilkshakesResponse {
    findMilkshakes?: Array<{
        id: number;
        name: string;
        description: string;
        iconColorA: string;
        iconColorB: string;
    }>;
}
