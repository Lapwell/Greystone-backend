import { createClient } from "@supabase/supabase-js";

const DB_URL: string = process.env.NEXT_PUBLIC_URL!;
const DB_ANON_KEY: string = process.env.NEXT_PUBLIC_ANON_KEY!;
const supabase = createClient(DB_URL, DB_ANON_KEY);

//This interface is used when parsing the relevant data for the Ninja from the returned API data.
interface NinjaData {
  name: string;
  current_belt: any;
  current_activity_id: any;
  whiteBelt: Array<string> | null | undefined;
  yellowBelt: Array<string> | null | undefined;
  orangeBelt: Array<string> | null | undefined;
}

export async function getAPIData(ninjaName: string) {
  //Get all the relevant data on a given ninja
  const { data, error } = await supabase
    //Select works like sql's join. Gets the needed data.
    //Order() orders the tables by a given column.
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
    console.log("Parsed", parsedData);
    const ninjaData: NinjaData = {
      name: parsedData[0].name,
      current_belt: parsedData[0].Belts.belt_name,
      current_activity_id: parsedData[0].current_activity_id,
      whiteBelt: parsedData[0].Belts.Levels,
      yellowBelt: undefined,
      orangeBelt: undefined,
    };
    return ninjaData;
  }
}
