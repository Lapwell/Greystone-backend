"use client"
import { Navbar, Center, Image } from "@mantine/core";
import SubmitNote from "./submit_note";
import GetNote from "./get_note";

export default function TheNavbar() {
    return (
        <Navbar height={200} width={{base: '100%'}}>
            <Center>
                <Navbar.Section><Image maw="auto" mx="auto" src="/code-ninjas-logo.png" alt="Codeninjas Logo" withPlaceholder/></Navbar.Section>
                <Navbar.Section><SubmitNote/></Navbar.Section>
                <Navbar.Section><GetNote/></Navbar.Section>
            </Center>
        </Navbar>
    )
}
