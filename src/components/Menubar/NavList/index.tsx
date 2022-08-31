import Box from "@suid/material/Box";
import AssignmentIcon from "@suid/icons-material/Assignment";
import HourglassButtomIcon from "@suid/icons-material/HourglassBottom";
import HouseIcon from "@suid/icons-material/House";
import SettingsIcon from "@suid/icons-material/Settings";
import SwapVertIcon from "@suid/icons-material/SwapVert";
import List from "@suid/material/List";
import ListItem from "@suid/material/ListItem";
import ListItemButton from "@suid/material/ListItemButton";
import ListItemIcon from "@suid/material/ListItemIcon";
import ListItemText from "@suid/material/ListItemText";
import Divider from "@suid/material/Divider";
import { Component, For, JSXElement, Show } from "solid-js";

type NavItem = {
  icon: JSXElement;
  text: string;
};

const navItems: NavItem[][] = [
  [
    {
      icon: <AssignmentIcon />,
      text: "My ToDos",
    },
    {
      icon: <HourglassButtomIcon />,
      text: "Deadlines",
    },
  ],
  [
    {
      icon: <HouseIcon />,
      text: "Manage Household",
    },
    {
      icon: <SwapVertIcon />,
      text: "Switch Household",
    },
  ],
  [
    {
      icon: <SettingsIcon />,
      text: "Settings",
    },
  ],
];

const NavListItem: Component<NavItem> = props => (
  <ListItem disablePadding>
    <ListItemButton>
      <ListItemIcon>{props.icon}</ListItemIcon>
      <ListItemText primary={props.text} />
    </ListItemButton>
  </ListItem>
);

const NavList = () => (
  <Box sx={{ width: "auto" }}>
    <List>
      <For each={navItems}>
        {(subList, index) => (
          <>
            <For each={subList}>
              {navItem => <NavListItem icon={navItem.icon} text={navItem.text} />}
            </For>
            <Show when={index() < navItems.length - 1}>
              <Divider />
            </Show>
          </>
        )}
      </For>
    </List>
  </Box>
);

export default NavList;
