"use client";
import { MantineProvider, Flex, Title } from "@mantine/core";
import TheGlobalStyle from "../components/global_style";

const HomeContent = () => {
  return (
    <MantineProvider>
      <Flex
        justify={"center"}
        align={"center"}
        direction={"column"}
        style={{ padding: "1rem" }}
      >
        <Title>Welcome To Sensei Notes Dev OP!</Title>
      </Flex>
    </MantineProvider>
  );
};

export default HomeContent;
