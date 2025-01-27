export interface Company {
    name: string;
    startDate: Date;
    endDate: Date | null;
    positions: Position[];
}

export interface Position {
    name: string;
    startDate: Date;
    endDate: Date | null;
    summary: string[];
}