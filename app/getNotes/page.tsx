"use client";
import { Flex, Textarea, Group, Button, MantineProvider, Space } from "@mantine/core";
import { useForm } from "@mantine/form";
import TheNavbar from "../components/navbar";
import { useRouter } from "next/navigation";

//GetNotes stores the form's information that the user will input. It will end up being passed to the session card page.
export default function GetNotes() {
  // const [formStateData, setFormStateData] = useState<any>("");
  const router = useRouter();
  const formValues = useForm({
    initialValues: {
      name: "",
      // date: "",
    },
    validate: {
      name: (value): any => {
        value.length <= 0 ? "Name Required" : null;
      },
    },
  });

  //This guy, when called, will send the user to the sessian card page
  const handleClick = (formValues: any, href: any) => {
    console.log(formValues, href);
    if (formValues.name !== "") {
      router.push(href);
    }
  };

  return (
    <MantineProvider>
      <TheNavbar />
      <Space h={"20vh"} />
      <Flex
        justify={"flex-start"}
        align={"center"}
        direction={"column"}
        gap={"xl"}
      >
        {/* {getNoteForm.onSubmit((values) => getNoteForm.validate())} */}
        <form onSubmit={formValues.onSubmit((values) => (formValues.setValues(values), formValues.validate()))}>
          <Textarea
            label="Ninja's Name"
            placeholder="Example: Byron.Corbett"
            withAsterisk
            {...formValues.getInputProps("name")}
          />
          <Space h={"8vh"} />
          <Group position="center">
            <Button
              className="submitButton"
              type="submit"
              variant="outline"
              onClick={() => handleClick(formValues.values, `getNotes/sessionCards?ninjaName=${formValues.values.name}`)}
            >
              Submit
            </Button>
          </Group>
        </form>
      </Flex>
    </MantineProvider>
  );
}
