import config from "../config/config";
import { Client, Account, ID} from "appwrite";


export class AuthService {
    Client = new Client()
    account;
    constructor() {
        this.Client
            .setEndpoint(config.appwriteUrl) 
            // Your Appwrite Endpoint
            .setProject(config.appwriteProjectId); 
            // Your Appwrite Project ID
            
            this.account = new Account(this.Client);
    }

    // Create a new user
    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(
                ID.unique(), // Unique user ID  
                email, // User email
                password, // User password
                name // User name)
            )
            if (userAccount) {
                // call another method to handle user creation success
                return this.login({email, password});
            } else {
                return userAccount;
            }
            
        } catch (error) {
            console.log("Error creating account:", error);
            throw error
        }
    }

    // Login user
    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.log("Error logging in:", error);
            throw error;
        }
    }

    // create a session
    async getCurrentUser() {
        try {
            await this.account.get();
        } catch (error) {
            log("Error getting current user:", error);
            throw error;
        }
        return null;
    }

    // Logout user
    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("Error logging out:", error);
            throw error;
        }
    }


}

const authService = new AuthService();

export default authService

