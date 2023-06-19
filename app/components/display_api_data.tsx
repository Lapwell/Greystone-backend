"use client";
import { Text, Flex } from "@mantine/core";
import { useState, useEffect } from "react";
import { loadAPIData } from "./database_api";

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function DisplayAPIData({ ninjaName }: any) {
  const [noteData, setNoteData] = useState<any>(""); //Stores the note data.

  useEffect(() => {
    const handleAsync = async () => {
      const freshData = await loadAPIData(ninjaName); //Calls a function to acquire the Ninja's data
      setNoteData(freshData); //Update the useState()
    };
    handleAsync(); //Keep it alive.
  }, []);

  //This is to keep the bloody website from skipping the async function in useEffect() and trying to handle an empty string.
  delay(1000);
  if (!noteData) {
    return <Text>Loading...</Text>;
  } else {
    return noteData;
  }
}

export default DisplayAPIData;
