import {
  Button,
  Menu,
  MenuTrigger,
  MenuList,
  MenuItem,
  MenuPopover,
  FluentProvider,
  webLightTheme,
} from "@fluentui/react-components";

export default function Home() {
  return (
    <FluentProvider theme={webLightTheme}>
      <Menu>
        <MenuTrigger>
          <Button>Toggle menu</Button>
        </MenuTrigger>
        <MenuPopover>
          <MenuList>
            <MenuItem name="font" value="segoe">
              Segoe
            </MenuItem>
            <MenuItem name="font" value="calibri">
              Calibri
            </MenuItem>
            <MenuItem name="font" value="arial">
              Arial
            </MenuItem>
          </MenuList>
        </MenuPopover>
      </Menu>
    </FluentProvider>
  );
}
