"use client"
import { Container, Image, MantineProvider } from "@mantine/core"

const loading = () => {
    return (
        <MantineProvider>
            <Container style={{alignItems:'centrer', alignContent:'center'}}>
                <Image></Image>
            </Container>
        </MantineProvider>
    )
}

export default loading;