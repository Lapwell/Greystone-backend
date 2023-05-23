import { Container, Text, TextInput, Group, Button, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { DateInput } from "@mantine/dates";

export default function SubmitNote() {
  const [opened, { open, close }] = useDisclosure(false);
  const submitNoteForm = useForm({
    initialValues: {
      name: "",
      note: "",
      date: ""
    },
    validate: {
      name: (value) => (value.length <= 0 || !value.includes('.') ? "Name Required" : null),
      note: (value) => (value.length <= 0 ? "Note Required" : null),
      date: (value) => (value.length <= 0 ? "Date Required" : null)
    }
  });

  return (
    <Container>
      <Modal opened={opened} onClose={close} title="Submit Note">
        <Text align="center">Input Ninja Note</Text>
        <form onSubmit={submitNoteForm.onSubmit((values) => submitNoteForm.validate())}>
          <TextInput
            label = "Ninja's Name"
            placeholder = "Example: Byron.C"
            withAsterisk
            {...submitNoteForm.getInputProps("name")}
          />
          <TextInput
            label = "Note"
            placeholder = ""
            withAsterisk
            {...submitNoteForm.getInputProps("note")}
          />
          <DateInput
            valueFormat = "YYYY, MMM, DD"
            label = "Input Date"
            withAsterisk
            {...submitNoteForm.getInputProps("date")}
          />
          <Group position="center">
            <Button type="submit" variant="outline">Submit</Button>
          </Group>
        </form>
      </Modal>
      <Button onClick={open} variant="outline">Submit Note</Button>
    </Container>
    )
}