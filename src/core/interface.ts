interface Nfl {
    TeamID: number;
    PlayerID: number;
    City: string;
    FullName: string;
}

interface AuthResponse {
    status: boolean;
    message: string;
}

export type { Nfl, AuthResponse };