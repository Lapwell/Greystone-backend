"use client";
import { Flex, Textarea, Group, Button, MantineProvider, Space } from "@mantine/core";
import { useForm } from "@mantine/form";
import { DateInput } from "@mantine/dates";
import { GetSenseiNote } from "../components/database_interface";
import { useState, useEffect } from "react";
import TheNavbar from "../components/navbar";

const GetNotes = () => {
  const [note, setNote] = useState("");
  const getNoteForm = useForm({
    initialValues: {
      name: "",
      date: "",
    },
    validate: {
      name: (value) => (value.length <= 0 ? "Name Required" : null),
    },
  });

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
              type="submit"
              variant="outline"
              onClick={GetSenseiNote}
            >
              Submit
            </Button>
          </Group>
        </form>
      </Flex>
    </MantineProvider>
  );
};

export default GetNotes;
