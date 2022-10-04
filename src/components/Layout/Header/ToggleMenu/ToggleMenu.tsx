import { useState, useEffect } from "react";
import Link from "next/link";

import {
  Box,
  Drawer,
  Grow,
  List,
  ListItemButton,
  ListItemText,

} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchBar from "../SearchBar/SearchBar";
import { useTheme } from "@emotion/react";
import { getCategories } from "../../../../../services/getCategories";

const closeButtonStyles = {
  position: "absolute",
  right: "3px",
  top: "3px",
  color: "white",
  cursor: "pointer",
  borderRadius: "50%",
  padding: "0.2rem",
  margin: "0.5rem",
};

const navMenu = [
  { name: "Home", url: "/" },
  { name: "Store", url: "/store" },
  { name: "About", url: "/#about" },
];

const ToggleMenu = () => {
  const [toggle, setToggle] = useState(false);
  const [categories, setCategories] = useState([] as string[] | []);
  const [isOpen, setIsOpen] = useState(false);
  const theme: any = useTheme();

  const searchStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem 1rem 2rem 1rem",
    color: "white",
    backgroundColor: theme.palette.primary.main,
  };

  useEffect(() => {
    const getCategory = async () => setCategories(await getCategories())
    getCategory();
  }, []);

  const handleToggle = (boolean: boolean) => setToggle(boolean);

  const list = () => (
    <Box 
      sx={{
        width: "auto",
        height: "auto",
        display: "flex",
        flexDirection: "column",
      }}
      role="presentation">
        
      <CloseIcon
        sx={closeButtonStyles}
        onClick={() => {handleToggle(false); setIsOpen(false)}}
      />

      <Box sx={searchStyle}     onClick={()=> setIsOpen(false)}>
        <SearchBar />
      </Box>

      <Box
        sx={{
          width: "auto",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <List
          sx={{ display: "flex", flexDirection: "row" }}
          component="nav"
          aria-label="pages">
          {navMenu.map((category) => (
            <ListItemButton key={category.name}>
              <Link href={category.url}>
                <a>
                  <ListItemText
                    primary={category.name}
                    sx={{ color: theme.palette.primary.main }}
                  />
                </a>
              </Link>
            </ListItemButton>
          ))}
          <ListItemButton
            onClick={() => setIsOpen(true)}>
            <ListItemText
              primary={"Categories"}
              sx={{ color: theme.palette.primary.main }}
            />
          </ListItemButton>
        </List>
      </Box>

      {isOpen && (
        <Grow in={isOpen}>
          <List
            onClick={() => setIsOpen(true)}
            sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
            component="nav"
            aria-label="categories">
            {categories.map((category) => (
              <ListItemButton key={category}>
                <Link href={`/categories/${category}`}>
                  <a>
                    <ListItemText
                      sx={{ textTransform: "capitalize", color: theme.palette.secondary.main  }}
                      primary={category}
                    />
                  </a>
                </Link>
              </ListItemButton>
            ))}
          </List>
        </Grow>
      )}
    </Box>
  );

  return (
    <div>
      <MenuIcon
        sx={{
          fontSize: "30px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
        }}
        onClick={() => handleToggle(true)}
      />
      <Drawer
        anchor="top"
        open={toggle}
        onClose={() => {handleToggle(false); setIsOpen(false)}}>
        {list()}
      </Drawer>
    </div>
  );
};

export default ToggleMenu;
