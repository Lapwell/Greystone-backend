import { createClient } from "@supabase/supabase-js";

const DB_URL: string = process.env.NEXT_PUBLIC_URL!;
const DB_ANON_KEY: string = process.env.NEXT_PUBLIC_ANON_KEY!;
const supabase = createClient(DB_URL, DB_ANON_KEY);

export async function getSenseiNote() {
  const { data, error } = await supabase.from("SenseiNotes").select("name, notes");
  return { data, error };
}

export async function loadAPIData(ninjaName: string) {
  const { data, error } = await getSenseiNote();
  if (error) {
    return "Failed to Load";
  }
  if (!data) {
    return "Loading...";
  }
  const parsedData = JSON.parse(JSON.stringify(data[0]));
  return parsedData.name;
}

export async function submitSenseiNote(date: Date, note: any) {}
