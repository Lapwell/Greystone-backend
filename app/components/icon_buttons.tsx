import { UnstyledButton, Popover, Text } from "@mantine/core";
import { IconTool, IconTrophy, IconPlanet, IconSchool, IconBug } from "@tabler/icons-react";

export function getToolIcon(color: string, size: number, status: string, note: string) {
  return (
    <Popover
      width={100}
      position="top"
      shadow="md"
    >
      <Popover.Target>
        <UnstyledButton>
          <IconTool
            color={color}
            size={size}
          />
          <Text>anda</Text>
        </UnstyledButton>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="sm">{note}</Text>
      </Popover.Dropdown>
    </Popover>
  );
}
export function getSchoolIcon(color: string, size: number) {
  return (
    <UnstyledButton>
      <IconSchool
        color={color}
        size={size}
      />
    </UnstyledButton>
  );
}
export function getBugIcon(color: string, size: number) {
  return (
    <UnstyledButton>
      <IconBug
        color={color}
        size={size}
      />
    </UnstyledButton>
  );
}
export function getTrophyIcon(color: string, size: number) {
  return (
    <UnstyledButton>
      <IconTrophy
        color={color}
        size={size}
      />
    </UnstyledButton>
  );
}
export function getPlanetIcon(color: string, size: number) {
  return (
    <UnstyledButton>
      <IconPlanet
        color={color}
        size={size}
      />
    </UnstyledButton>
  );
}
