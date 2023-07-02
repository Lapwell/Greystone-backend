"use client";
import { Text, Flex } from "@mantine/core";
import { useState, useEffect } from "react";
import { getAPIData } from "./database_api";

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function DisplayAPIData({ ninjaName }: any) {
  const [data, setData] = useState<any>(""); //Stores the note data.

  useEffect(() => {
    const handleAsync = async () => {
      const freshData = await getAPIData(ninjaName); //Calls a function to acquire the Ninja's data
      setData(freshData); //Update the useState() with the ninja data
    };
    handleAsync(); //Keep it alive.
  }, []);

  //This is to keep the bloody website from skipping the async function in useEffect() and trying to handle an empty string.
  delay(4000);
  if (data === "Loading...") {
    return <Flex>{data}</Flex>;
  } else if (data === "Error: Failed to Load") {
    return <Flex>{data}</Flex>;
  } else {
    return <Flex>{data.name}</Flex>;
  }
}

