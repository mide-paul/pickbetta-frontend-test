import { UserDataStruct } from "./struct";

interface AuthResponse{
    status: boolean,
    message: string,
    data?: UserDataStruct,
}

export type { AuthResponse }