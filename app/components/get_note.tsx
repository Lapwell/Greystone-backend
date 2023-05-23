import { Container, Text, TextInput, Group, Button, Modal } from "@mantine/core";
import { useForm } from "@mantine/form";
import { DateInput } from "@mantine/dates";
import { useDisclosure } from "@mantine/hooks";

export default function GetNote() {
  const [opened, { open, close }] = useDisclosure(false);
  const getNoteForm = useForm({
    initialValues: {
      name: "",
      date: ""
    },
    validate: {
      name: (value) => (value.length <= 0 ? "Name Required" : null),
    }
  });

  return (
    <Container>
      <Modal opened={opened} onClose={close} title="Get Note">
        <Text align="center">Get Ninja Note</Text>
        <form onSubmit={getNoteForm.onSubmit((values) => getNoteForm.validate())}>
          <TextInput
            label = "Ninja's Name"
            placeholder="Example: Byron.C"
            withAsterisk
            {...getNoteForm.getInputProps("name")}
          />
          <DateInput
            valueFormat = "YYYY, MMM, DD"
            label = "Date"
            placeholder = "Optional"
            {...getNoteForm.getInputProps("date")}
          />
          <Group position="center">
            <Button type="submit" variant="outline">Submit</Button>
          </Group>
        </form>
      </Modal>
      <Button onClick={open} variant="outline">Get Note</Button>
    </Container>
  )
}
