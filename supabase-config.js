// Supabase Configuration
const supabaseUrl = "https://ljwioieetzzfhpmnveyt.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxqd2lvaWVldHp6ZmhwbW52ZXl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ4MTkyODksImV4cCI6MjA4MDM5NTI4OX0.Ir7IiGP8gTw0K10j8NKR4rGdeysO2du53omiJEVnZvI";

// Create Supabase client correctly (CDN version)
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

// Authentication helper functions
async function checkAuth() {
    const { data: { session }, error } = await supabaseClient.auth.getSession();
    if (error) {
        console.error("Error checking auth:", error);
        return null;
    }
    return session;
}

async function getCurrentUser() {
    const { data: { user }, error } = await supabaseClient.auth.getUser();
    if (error) {
        console.error("Error getting user:", error);
        return null;
    }
    return user;
}

async function signOut() {
    const { error } = await supabaseClient.auth.signOut();
    if (error) {
        console.error("Error signing out:", error);
        return false;
    }
    return true;
}
