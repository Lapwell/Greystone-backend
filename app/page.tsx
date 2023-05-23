"use client";
import { MantineProvider, createStyles, Stack, getStylesRef, Image } from '@mantine/core';
import TheNavbar from './components/navbar';

const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
    display: 'flex',
    height: '100vh',
    width: '100vw',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default function Home() {
  const { classes } = useStyles()
  return (
    <MantineProvider>
      <TheNavbar/>
    </MantineProvider>
)}
