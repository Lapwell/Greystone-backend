"use client";
import { MantineProvider, createStyles, Space, Container } from "@mantine/core";
import TheNavbar from "./components/navbar";
import HomeContent from "./components/home_content";


const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor: "",
    color: "black",
    display: "flex",
    height: "100vh",
    width: "80vw",
    alignItems: "flex-start",
    justifyContent: "center",
  },
}));

export default function Home() {
  const { classes } = useStyles();
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colors: {
          pacificBlue: [
            "#75c5f0",
            "#5ebbed",
            "#47b1eb",
            "#30a8e8",
            "#199ee6",
            "#1790d0",
            "#147eb8",
            "#126fa1",
            "#0f5f8a",
            "#0d4f73",
          ],
        },
      }}
    >
      <TheNavbar />
      <Space h={"4vh"} />
      <Container className={classes.wrapper}>
        <HomeContent />
      </Container>
    </MantineProvider>
  );
}

