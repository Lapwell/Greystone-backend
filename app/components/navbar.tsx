"use client"
import { Navbar, Flex, Button, BackgroundImage } from "@mantine/core";
import Link from "next/link";
import Image from "next/image";
import navbarBottom from "../../public/bottom-nav-shape.svg";

export default function TheNavbar() {
  return (
    <Navbar
      height={80}
      width={{ base: "100%" }}
      style={{ alignContent: "center", paddingTop: "2vh" }}
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
            For Parents
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
            For Senseis
          </Button>
        </Navbar.Section>
      </Flex>
      <Image
        priority
        style={{ width: "100%", top: "55px", left: 0, position: "absolute" }}
        src={navbarBottom}
        alt="Bottom of the Navbar"
      />
    </Navbar>
  );
}
