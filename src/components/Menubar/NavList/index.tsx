import Box from "@suid/material/Box";
import HouseIcon from "@suid/icons-material/House";
import SettingsIcon from "@suid/icons-material/Settings";
import List from "@suid/material/List";
import ListItem from "@suid/material/ListItem";
import ListItemButton from "@suid/material/ListItemButton";
import ListItemIcon from "@suid/material/ListItemIcon";
import ListItemText from "@suid/material/ListItemText";
import Divider from "@suid/material/Divider";
import { mapArray } from "solid-js";

const primaryNavItems = [
  {
    icon: <HouseIcon />,
    text: "Home",
  },
  {
    icon: <SettingsIcon />,
    text: "Settings",
  },
];

const secondaryNavItems = [
  {
    icon: <HouseIcon />,
    text: "Home",
  },
  {
    icon: <SettingsIcon />,
    text: "Settings",
  },
];

const NavList = () => (
  <Box sx={{ width: "auto" }}>
    <List>
      {mapArray(
        () => primaryNavItems,
        navItem => (
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>{navItem.icon}</ListItemIcon>
              <ListItemText primary={navItem.text} />
            </ListItemButton>
          </ListItem>
        )
      )}
    </List>
    <Divider />
    <List>
      {mapArray(
        () => secondaryNavItems,
        navItem => (
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>{navItem.icon}</ListItemIcon>
              <ListItemText primary={navItem.text} />
            </ListItemButton>
          </ListItem>
        )
      )}
    </List>
  </Box>
);

export default NavList;
