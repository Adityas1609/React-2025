const config = {
  appwriteUrl: import.meta.env.VITE_APPWRITE_URL || "https://nyc.cloud.appwrite.io/v1",

  appwriteProjectId: String( import.meta.env.VITE_APPWRITE_PROJECT_ID),

  appwriteDatabaseId:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    // Ensure these IDs are strings, as they might be used in string contexts
  appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    
  appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID)   

}

export default config;