"use client";

import { MantineProvider, Flex, Group, Space, Text, Image } from "@mantine/core";
import TheNavbar from "@/app/components/navbar";
import { useSearchParams } from "next/navigation";
import DisplayAPIData from "@/app/components/display_api_data";

export default function Page() {
  const searchParams: any = useSearchParams();
  const ninjaName = searchParams.get("ninjaName");
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
        <p>{ninjaName}</p>
        <DisplayAPIData ninjaName={ninjaName} />
      </Group>
    </MantineProvider>
  );
}
