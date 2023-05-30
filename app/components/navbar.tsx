"use client"
import { Navbar, Flex, Button, BackgroundImage } from "@mantine/core";
import Link from "next/link";

export default function TheNavbar() {
    return (
      <Navbar
        height={80}
        width={{ base: "100%" }}
        style={{ alignContent: "center", paddingTop: "2vh", backgroundColor: "blue" }}
      >
        <Flex
          justify={"center"}
          align={"flex-start"}
          direction={"row"}
          gap={"md"}
        >
          <Navbar.Section>
            <Button
              variant="outline"
              component={Link}
              href="/getNotes"
            >
              Get Notes
            </Button>
          </Navbar.Section>
          <BackgroundImage
            component={Link}
            href="/"
            src="/code-ninjas-logo.png/"
            style={{ width: 180, height: "100%" }}
          />
          <Navbar.Section>
            <Button
              variant="outline"
              component={Link}
              href="/submitNotes"
            >
              Submit Notes
            </Button>
          </Navbar.Section>
        </Flex>
      </Navbar>
    );
}
