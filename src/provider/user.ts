import axios from "axios";
import { AuthResponse } from "../core/interface";
import { UserDataStruct } from "../core/struct";

class UserProvider{
    apiUrl: string;
    options: object;

    constructor(){
        this.apiUrl = import.meta.env.VITE_API_URL;
        this.options = {
            headers: {
                "Content-Type": "application/json"
            }
        }
    }

    async login(user: UserDataStruct) : Promise<AuthResponse>{
        try {
            const res = await axios.post(`${this.apiUrl}/user/auth`, {
                email: user.email,
                password: user.password,
            }, this.options);
            
            // check if the response code is 200 OK
            if(res.status == 200){
                const username = "";
                return {
                    status: true,
                    message: `Welcome back ${username}`,
                    data: res.data
                }
            }

            return {
                status: false,
                message: res.data.message
            }
        } catch (error) {
            return {
                status: false,
                message: `${error}`,
            }
        }
    }

    async register({ userName, email, password }: UserDataStruct) : Promise<AuthResponse>{
        try {
            const res = await axios.post(`${this.apiUrl}/user/auth/register`, {
                userName,
                email,
                password
            }, this.options);
            
            // check if the response code is 200 OK
            if(res.status == 200){
                return {
                    status: true,
                    message: `${res.data.message}`,
                }
            }

            return {
                status: false,
                message: res.data.message
            }
        } catch (error) {
            return {
                status: false,
                message: `${error}`,
            }
        }
    }
}

export default UserProvider;