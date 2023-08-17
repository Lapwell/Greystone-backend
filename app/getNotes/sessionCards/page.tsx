"use client";
import { MantineProvider, Flex, Group, Space, Text, Image, Stack } from "@mantine/core";
import TheNavbar from "@/app/components/navbar";
import { useSearchParams } from "next/navigation";
import { WhiteBeltCard } from "@/app/components/session_cards";
import { getNinjaDatabase } from "@/app/components/database_api";
import { useEffect, useState } from "react";

export default function Page() {
  // const [levelData, setLevelData] = useState(Object);

  //Get the ninja name from URL
  const searchParams: any = useSearchParams();
  let ninjaName = searchParams.get("ninjaName");
  ninjaName = ninjaName.toLowerCase();
  //Get ninja data from database. The data is already parsed by getAPIData()
  // let ninjaData = getDBData(ninjaName);
  // console.log("SHIBAL", ninjaData);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await getNinjaData(ninjaName).then((data) => {
  //       setLevelData(data);
  //       console.log(levelData);
  //     });
  //   };
  //   fetchData();
  // }, []);

  let ninjaData = getNinjaDatabase(ninjaName).then((data) => {
    return data;
  });
  console.log(typeof ninjaData, ninjaData);

  return (
    <MantineProvider
      theme={{
        globalStyles: (theme) => ({
          body: {
            color: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          },
        }),
      }}
    >
      <TheNavbar />
      <Space h="8vh" />
      <Stack>
        <Text color="black">{ninjaName}</Text>
        {/* <Text>{ninjaData}</Text> */}
      </Stack>
    </MantineProvider>
  );
}
