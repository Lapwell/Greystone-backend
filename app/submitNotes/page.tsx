"use client";
import { Flex, Text, Textarea, Group, Button, MantineProvider, Space } from "@mantine/core";
import { useForm } from "@mantine/form";
import { DateInput } from "@mantine/dates";
import TheNavbar from "../components/navbar";

const SubmitNotes = () => {
  const submitNoteForm = useForm({
    initialValues: {
      name: "",
      note: "",
      date: "",
    },
    validate: {
      name: (value) => (value.length <= 0 || !value.includes(".") ? "Name Required" : null),
      note: (value) => (value.length <= 0 ? "Note Required" : null),
      date: (value) => (value.length <= 0 ? "Date Required" : null),
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
        <form onSubmit={submitNoteForm.onSubmit((values) => submitNoteForm.validate())}>
          <Textarea
            label="Ninja's Name"
            placeholder="Example: Byron.C"
            withAsterisk
            {...submitNoteForm.getInputProps("name")}
          />
          <Textarea
            label="Note"
            placeholder=""
            withAsterisk
            {...submitNoteForm.getInputProps("note")}
          />
          <DateInput
            valueFormat="YYYY, MMM, DD"
            label="Input Date"
            withAsterisk
            {...submitNoteForm.getInputProps("date")}
          />
          <Group position="center">
            <Button
              type="submit"
              variant="outline"
            >
              Submit
            </Button>
          </Group>
        </form>
      </Flex>
    </MantineProvider>
  );
};

export default SubmitNotes;
