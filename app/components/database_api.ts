import { createClient } from "@supabase/supabase-js";
const DB_URL: string = process.env.NEXT_PUBLIC_URL!;
const DB_ANON_KEY: string = process.env.NEXT_PUBLIC_ANON_KEY!;
const supabase = createClient(DB_URL, DB_ANON_KEY);

type DatabaseData = {
  ninjaID: number;
  currentActivityID: number;
  currentBeltID: number;
  activityID: number;
};

async function getDatabaseData(name: string, activityName: string) {
  name.toLowerCase;
  //These two awaits get the relevant ninja data and activity id from the name
  const data0 = await supabase.from("Ninjas").select("*").eq("name", name);
  const data1 = await supabase.from("Activities").select("activity_id").eq("activityName", activityName);
  //Convert the data from JSON into usable string data.
  const parsedData0 = JSON.parse(JSON.stringify(data0));
  const parsedData1 = JSON.parse(JSON.stringify(data1));

  let finalData: DatabaseData = {
    ninjaID: parsedData0.ninjaID,
    currentActivityID: parsedData0.currentActivityID,
    currentBeltID: parsedData0.currentBeltID,
    activityID: parsedData1.activity_id,
  };
  return finalData;
}

//This ytpe-alias is used when parsing the relevant data for the Ninja from the returned API data.
type NinjaData = {
  name: string;
  current_belt: any;
  currentActivityID: any;
  whiteBeltData: Array<string> | null | undefined;
  yellowBeltData: Array<string> | null | undefined;
  orangeBeltData: Array<string> | null | undefined;
};

//This Function is used for requesting and digesting data from the database. It returns an object with the relevant data.
export async function getNinjaData(ninjaName: string): Promise<any> {
  //Get all the relevant data on a given ninja
  //Select works like sql's join. Gets the needed data.
  //Order() orders the tables by a given column.
  // let finishedData: NinjaData;
  await supabase
    .from("Ninjas")
    .select("*, Belts(belt_name, Levels(Activities(activity_id, activityName, Notes(note))))")
    .order("activity_id", { foreignTable: "Belts.Levels.Activities", ascending: true })
    .eq("name", ninjaName)
    .then((data) => {
      //Convert the fetched JSON into usable string data for the webpage.
      const parsedData = JSON.parse(JSON.stringify(data.data));
      //Checks to see if the packet actually has something in it.
      if (Object.keys(data).length > 0) {
        //This object stores all the ninja's data and returns it.
        let finishedData: NinjaData = {
          name: parsedData[0].name,
          current_belt: parsedData[0].Belts.belt_name,
          currentActivityID: parsedData[0].currentActivityID,
          whiteBeltData: parsedData[0].Belts.Levels,
          yellowBeltData: null,
          orangeBeltData: null,
        };
        console.log("finished data", finishedData);
        return finishedData;
      }
    })
    //This catches any errors that might happen. A common one would be wrong spelling or the user not existing in the DB.
    .then(undefined || null, (err) => console.log("Something went wrong! Does the user exist?", err));
}

export async function submitNote(ninjaName: string, note: string, activityName: string) {
  const ninjaData = await getDatabaseData(ninjaName, activityName);
  await supabase.from("Notes").insert({ activity_id: activityName, note: note });
}
