"use client";
import { Text, Flex } from "@mantine/core";

function DisplayAPIData({ ninjaName, ninjaNote }: any) {
  return (
    <Flex>
      <Text>{ninjaName}</Text>
      <Text>{ninjaNote}</Text>
    </Flex>
  );
}

export default DisplayAPIData;
