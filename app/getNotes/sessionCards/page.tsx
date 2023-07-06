"use client";
import { MantineProvider, Flex, Group, Space, Text, Image } from "@mantine/core";
import TheNavbar from "@/app/components/navbar";
import { useSearchParams } from "next/navigation";
import { WhiteBeltCard } from "@/app/components/session_cards";
import { getDBData } from "@/app/components/database_api";

export default async function Page() {
  //Get the ninja name from URL
  const searchParams: any = useSearchParams();
  let ninjaName = searchParams.get("ninjaName");
  ninjaName = ninjaName.toLowerCase();

  //Get ninja data from database. The data is already parsed by getAPIData()
  const ninjaData = await getDBData(ninjaName);

  // console.log("cyka", ninjaData.whiteBeltData);
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
      <Group>
        <WhiteBeltCard
          name={ninjaName}
          all_levels={ninjaData.whiteBeltData}
        />
      </Group>
    </MantineProvider>
  );
}
