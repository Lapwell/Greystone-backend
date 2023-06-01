"use client";
import { Flex, Textarea, Group, Button, MantineProvider, Space } from "@mantine/core";
import { useForm } from "@mantine/form";
import { DateInput } from "@mantine/dates";
import { useState, useEffect } from "react";
import TheNavbar from "../components/navbar";
import DisplayAPIData from "../components/display_api_data";
import { loadAPIData } from "../components/database_api";

const GetNotes = () => {
  const [noteData, setNoteData] = useState<any>();
  const getNoteForm = useForm({
    initialValues: {
      name: "",
      date: "",
    },
    validate: {
      name: (value) => (value.length <= 0 ? "Name Required" : null),
    },
  });

  useEffect(() => {
    async function handleAsync() {
      setNoteData(loadAPIData(noteData));
    }
    handleAsync();
  }, [noteData]);

  return (
    <MantineProvider>
      <TheNavbar />
      <Space h={"4vh"} />
      <Flex
        justify={"flex-start"}
        align={"center"}
        direction={"column"}
        gap={"xl"}
      >
        {/* {getNoteForm.onSubmit((values) => getNoteForm.validate())} */}
        <form onSubmit={getNoteForm.onSubmit((values) => getNoteForm.validate())}>
          <Textarea
            label="Ninja's Name"
            placeholder="Example: Byron.C"
            withAsterisk
            {...getNoteForm.getInputProps("name")}
          />
          <DateInput
            valueFormat="YYYY, MMM, DD"
            label="Date"
            placeholder="Optional"
            {...getNoteForm.getInputProps("date")}
          />
          <Group position="center">
            <Button
              className="submitButton"
              type="submit"
              variant="outline"
            >
              Submit
            </Button>
          </Group>
          <Flex
            id="APIElement"
            justify="center"
            align="center"
            style={{ color: "black", backgroundColor: "red" }}
          >
            <DisplayAPIData />
          </Flex>
        </form>
      </Flex>
    </MantineProvider>
  );
};

export default GetNotes;
