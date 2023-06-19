import { createClient } from "@supabase/supabase-js";

const DB_URL: string = process.env.NEXT_PUBLIC_URL!;
const DB_ANON_KEY: string = process.env.NEXT_PUBLIC_ANON_KEY!;
const supabase = createClient(DB_URL, DB_ANON_KEY);

export async function loadAPIData(ninjaName: string): Promise<Object> {
  //Get all the relevant data on a given ninja
  const { data, error } = await supabase
    .from(`Ninjas`)
    .select(`*, Belts(Levels(Activities(activity_id, level_name, activity_name)))`) //Select works like sql join. Gets the needed data
    .textSearch(`name`, ninjaName); //Return ONLY the row with the ninja's name
  console.log(data);

  if (error) {
    return "Failed to Load";
  }
  if (!data || data.length <= 0) {
    return "Loading...";
  }

  //Convert the fetched JSON into usable string data
  const parsedData = JSON.parse(JSON.stringify(data));
  //This object is to make it easier to fucking usssseee the data
  // const finishedData: { name: string; date: string; notes: Array<string> } = {
  //   name: parsedData.name,
  //   date: parsedData.notes.date,
  //   notes: Array.from(parsedData.notes.note),
  // };
  // return finishedData;
}

export async function submitSenseiNote(name: string, date: string, note: string) {}
