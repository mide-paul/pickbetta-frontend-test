import axios from "axios";
import { AuthResponse } from "../core/interface";
import { UserDataStruct } from "../core/struct";

class UserProvider{
    apiUrl: string;
    options: object;

    constructor(){
        this.apiUrl = "https://pickbetta-user-service-mmkpr.ondigitalocean.app/api/auth";
        this.options = {
            headers: {
                "Content-Type": "application/json"
            }
        }
    }

    async login(user: UserDataStruct) : Promise<AuthResponse>{
        try {
            const res = await axios.post(`${this.apiUrl}/login`, {
                email: user.email,
                password: user.password,
            }, this.options);
            
            // check if the response code is 200 OK
            if(res.status == 200){
                const firstname = "";
                return {
                    status: true,
                    message: `Welcome back ${firstname}`,
                    // data: res.data
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

    async register({ firstName, lastName, email, password }: UserDataStruct) : Promise<AuthResponse>{
        try {
            const res = await axios.post(`${this.apiUrl}/user/auth/register`, {
                firstName,
                lastName,
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