import MenuIcon from "@suid/icons-material/Menu";
import AppBar from "@suid/material/AppBar";
import Box from "@suid/material/Box";
import IconButton from "@suid/material/IconButton";
import Toolbar from "@suid/material/Toolbar";
import Typography from "@suid/material/Typography";
import { createSignal, Show } from "solid-js";
import Drawer from "@suid/material/Drawer";
import NavList from "./NavList";

const Menubar = () => {
  const [drawerVisible, setDrawerVisible] = createSignal(false);
  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible());
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Show when={drawerVisible()}>
        <Drawer onClose={toggleDrawer} open={drawerVisible()}>
          <NavList />
        </Drawer>
      </Show>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Myosotis
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Menubar;
