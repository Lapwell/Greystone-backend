"use client";
import { Flex } from "@mantine/core";
import { createClient } from "@supabase/supabase-js";

const DB_URL: string = process.env.NEXT_PUBLIC_URL!;
const DB_ANON_KEY: string = process.env.NEXT_PUBLIC_ANON_KEY!;
const supabase = createClient(DB_URL, DB_ANON_KEY);

export async function GetSenseiNote() {
  const { data, error } = await supabase.from("SenseiNotes").select("*");
  if (error)
    return (
      <Flex
        justify={"center"}
        align={"center"}
        style={{ color: "black" }}
      >
        Failed to Load
      </Flex>
    );
  if (!data)
    return (
      <Flex
        justify={"center"}
        align={"center"}
        style={{ color: "black" }}
      >
        Loading...
      </Flex>
    );
  console.log("DATA LOG: ", data);
}

export async function submitSenseiNote(date: Date, note: any) {}
