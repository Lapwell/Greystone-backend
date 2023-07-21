import { createClient } from "@supabase/supabase-js";
import { resolve } from "path";

const DB_URL: string = process.env.NEXT_PUBLIC_URL!;
const DB_ANON_KEY: string = process.env.NEXT_PUBLIC_ANON_KEY!;
const supabase = createClient(DB_URL, DB_ANON_KEY);

//This interface is used when parsing the relevant data for the Ninja from the returned API data.
interface NinjaData {
  name: string;
  current_belt: any;
  current_activity_id: any;
  whiteBeltData: Array<string> | null | undefined;
  yellowBeltData: Array<string> | null | undefined;
  orangeBeltData: Array<string> | null | undefined;
}

export async function getDBData(ninjaName: string): Promise<any> {
  //Get all the relevant data on a given ninja
  //Select works like sql's join. Gets the needed data.
  //Order() orders the tables by a given column.
  const { data, error } = await supabase
    .from("Ninjas")
    .select("*, Belts(Levels(Activities(activity_id, activity_name, Notes(note))))")
    .order("activity_id", { foreignTable: "Belts.Levels.Activities", ascending: true })
    .eq("name", ninjaName);

  if (error) {
    return "Error: Failed to Load";
  } else if (!data || data.length <= 0) {
    return "Loading...";
  }

  if (data.length > 0) {
    //Convert the fetched JSON into usable string data for the webpage.
    const parsedData = JSON.parse(JSON.stringify(data));
    //This object stores all the ninja's data
    const ninjaData: NinjaData = {
      name: parsedData[0].name,
      current_belt: parsedData[0].Belts.belt_name,
      current_activity_id: parsedData[0].current_activity_id,
      whiteBeltData: parsedData[0].Belts.Levels,
      yellowBeltData: undefined,
      orangeBeltData: undefined,
    };
    // console.log("ninjadata", ninjaData);
    return ninjaData;
  }
}

export async function submitData(ninjaName: string, note: string, date: any) {}
