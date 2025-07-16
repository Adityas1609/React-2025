import config from "../config/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";


export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        this.database = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    // Create a new document in the database
    async createPost({ title, content,slug, featuredImage, status ,userId }) {
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    userId,
                    status
                }
            )

        } catch (error) {
            console.log("Error creating document:", error);
            throw error;
        }
    }

    // update a document in the database
    async updatePost(slug, { title, content, featuredImage , status }) {
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )

            
        } catch (error) {
            console.log("Error updating document:", error);
            throw error;
            
        }
    }   
    
    // delete a document in the database
    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            );

            return { success: true, message: "Document deleted successfully" };
            
        } catch (error) {
            console.log("Error deleting document:", error);
            throw error;
            return { success: false, message: "Failed to delete document" };
        }
    }

    // Get one documents from the database
    async getPost(slug) {
        try {
           return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            );
        } catch (error) {
            console.log("Error getting document:", error);
            throw error;
            return false
        }
    }

    // Get all documents from the database
    async getAllPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries
            );
            
        } catch (error) {
            console.log("Error getting documents:", error);
            throw error;
            return false;
        }
    }

    // Upload a file to the bucket
    async uploadFile (file) {
        try {
            return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(), // Unique file ID
                file // File to upload
            )
           
            
        } catch (error) {
            console.log("Error uploading file:", error);
            throw error;
            return false;
        }
    }

    // Delete a file from the bucket
    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileId // File ID to delete
            );
            return { success: true, message: "File deleted successfully" };
            
        } catch (error) {
            console.log("Error deleting file:", error);
            throw error;
            return { success: false, message: "Failed to delete file" };
        }
    } 

    // Get a file preview
    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            config.appwriteBucketId,
            fileId, // File ID to get preview
        );
    }


}



const service = new Service()

export default Service