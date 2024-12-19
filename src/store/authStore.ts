import { create } from "zustand";
import axios from "axios";

const API_URL = "https://pickbetta-user-service-mmkpr.ondigitalocean.app/api/auth";

//axios.defaults.withCredentials = true;

interface User {
	// Define the properties of the user object based on your API response
	id: string;
	email: string;
	firstname: string;
}

interface IAuth {
	user: User | null;
	error: string | null;
	isLoading: boolean;
	isAuthenticated: boolean;
	signup: (email: string, password: string, firstname: string, lastname: string, phone: string) => Promise<void>;
	login: (email: string, password: string) => Promise<void>;
	verifyEmail: (email: string) => Promise<void>;
	verifyOtp: (otp: any, email: any) => Promise<void>;
	isCheckingAuth: boolean;
	//checkAuth: () => Promise<void>;
	firstname: string | null;
}

export const useAuthStore = create<IAuth>((set) => ({
	user: null,
	isAuthenticated: false,
	error: null,
	isLoading: false,
	isCheckingAuth: true,
	message: null,
	firstname: null,

	signup: async (email: any, password: any, firstname: any, lastname: any, phone: any) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/register`, { email, password, firstname, lastname, phone });
			set({ user: response.data.user, isAuthenticated: true, isLoading: false });
		} catch (error: any) {
			set({ error: error.response.data.message || "Error signing up", isLoading: false });
			throw error;
		}
	},
	login: async (email: any, password: any) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/login`, { email, password });
			set({
				isAuthenticated: true,
				user: response.data.user,
				error: null,
				isLoading: false,
			});
			console.log(response.data.user)
		} catch (error: any) {
			set({ error: error.response?.data?.message || "Error logging in", isLoading: false });
			throw error;
		}
	},

	// logout: async () => {
	// 	set({ isLoading: true, error: null });
	// 	try {
	// 		await axios.post(`${API_URL}/logout`);
	// 		set({ user: null, isAuthenticated: false, error: null, isLoading: false });
	// 	} catch (error) {
	// 		set({ error: "Error logging out", isLoading: false });
	// 		throw error;
	// 	}
	// },
	verifyEmail: async (email: any) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/api/verify/email`, { email });
			set({ user: response.data.user, isAuthenticated: true, isLoading: false });
			return response.data;
		} catch (error: any) {
			set({ error: error.response.data.message || "Error verifying email", isLoading: false });
			throw error;
		}
	},
	verifyOtp: async (otp: any, email:any) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/api/verify/otp`, { otp, email });
			set({ user: response.data.user, isAuthenticated: true, isLoading: false });
			return response.data;
		} catch (error: any) {
			set({ error: error.response.data.message || "Error verifying otp", isLoading: false })
		}
	},
	// checkAuth: async () => {
	// 	set({ isCheckingAuth: true, error: null });
	// 	try {
	// 		const response = await axios.get(`${API_URL}/check-auth`);
	// 		set({ user: response.data.user, isAuthenticated: true, isCheckingAuth: false });
	// 	} catch (error) {
	// 		set({ error: null, isCheckingAuth: false, isAuthenticated: false });
	// 	}
	// },
	// forgotPassword: async (email: any) => {
	// 	set({ isLoading: true, error: null });
	// 	try {
	// 		const response = await axios.post(`${API_URL}/forgot-password`, { email });
	// 		set({ message: response.data.message, isLoading: false });
	// 	} catch (error: any) {
	// 		set({
	// 			isLoading: false,
	// 			error: error.response.data.message || "Error sending reset password email",
	// 		});
	// 		throw error;
	// 	}
	// },
	// resetPassword: async (token: any, password: any) => {
	// 	set({ isLoading: true, error: null });
	// 	try {
	// 		const response = await axios.post(`${API_URL}/reset-password/${token}`, { password });
	// 		set({ message: response.data.message, isLoading: false });
	// 	} catch (error: any) {
	// 		set({
	// 			isLoading: false,
	// 			error: error.response.data.message || "Error resetting password",
	// 		});
	// 		throw error;
	// 	}
	// },
}));