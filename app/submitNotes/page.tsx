"use client";
import { MantineProvider, Flex, Textarea, Group, Button, Space } from "@mantine/core";
import { useForm } from "@mantine/form";
import TheNavbar from "../components/navbar";
import { useRouter } from "next/navigation";
import { submitNote } from "../components/database_api";

const SubmitNotes = () => {
  const submitNoteForm = useForm({
    initialValues: {
      name: "",
      note: "",
      activityName: "",
    },
    validate: {
      name: (value) => (value.length <= 0 || !value.includes(".") ? "Name Required" : null),
      note: (value) => (value.length <= 0 ? "Note Required" : null),
      activityName: (value) => (value.length <= 0 ? "Date Required" : null),
    },
  });

  const router = useRouter();

  const handleClick = (formValues: any, href: any) => {
    console.log(formValues, href);
    if (formValues.name !== "") {
      router.push(href);
    }
  };

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
            placeholder="Note"
            withAsterisk
            {...submitNoteForm.getInputProps("note")}
          />
          <Textarea
            label="Activity Name"
            placeholder="Activity Name"
            withAsterisk
            {...submitNoteForm.getInputProps("activityName")}
          />
          <Group position="center">
            <Button
              className="submitButton"
              type="submit"
              variant="outline"
              onClick={() =>
                submitNote(submitNoteForm.values.name, submitNoteForm.values.note, submitNoteForm.values.activityName)
              }
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
