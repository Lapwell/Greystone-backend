import { Flex, SimpleGrid, Group, Space, Center, Button } from "@mantine/core";
import * as iconButtons from "./icon_buttons";
import { getAPIData } from "./database_api";

function createLevels(activities: any) {}

export function WhiteBeltCard() {
  const data = getAPIData("byron.corbett");
  data.then((value) => {
    //@ts-ignore
    // console.log(value.whiteBelt[0]);
    //@ts-ignore
    // createLevels(value.whiteBelt[0]);
  });
  return (
    <Flex>
      <Group>{iconButtons.getToolIcon("red", 20, "W", "chillin")}</Group>
    </Flex>
  );
}

export function YellowBeltCard() {
  return (
    <Flex>
      <Center>
        <SimpleGrid></SimpleGrid>
      </Center>
    </Flex>
  );
}
