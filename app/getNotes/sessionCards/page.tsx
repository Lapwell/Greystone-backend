"use client";
import { MantineProvider, Flex, Group, Space, Text, Image } from "@mantine/core";
import TheNavbar from "@/app/components/navbar";
import { useSearchParams } from "next/navigation";
import { WhiteBeltCard } from "@/app/components/sessionCards";
import DisplayAPIData from "@/app/components/display_api_data";

export default function Page() {
  const searchParams: any = useSearchParams();
  let ninjaName = searchParams.get("ninjaName");
  ninjaName = ninjaName.toLowerCase();
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
        <WhiteBeltCard />
      </Group>
    </MantineProvider>
  );
}
