// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://rpfddznuudyijryxxysc.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwZmRkem51dWR5aWpyeXh4eXNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkwMDA2MDMsImV4cCI6MjA1NDU3NjYwM30.k3IU8miLu2g7DSYqj8fltPWKYM48FxI63CgkYxtEMEM";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);