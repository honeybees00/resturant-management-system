import { createClient} from"@supabase/supabase-js";
const  supabase url= import.meta.env.VITE_SUPABASE_URL;
const supabase key = import.meta.env._VITE_SUPABASE_ANON_KEY
const supabase= createClient(supabase_url,supabase_key);
export default supabase;
