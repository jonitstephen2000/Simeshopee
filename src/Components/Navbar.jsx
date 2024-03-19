import React, { useState} from "react";
import Logo from "../Components/Assets/logo1.8.png";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
// import { AiOutlineSearch } from "react-icons/ai";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import InputIcon from '@mui/icons-material/Input';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { totalQuantity } = useSelector((state) => state.allCart);

  

  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
    {
      text: "Products",
      icon: <SearchIcon />,
    },
    {
      text: "Login",
      icon: <LoginIcon />,
    },
    {
      text: "SignUp",
      icon: <InputIcon />,
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />,
    },
  ];

  const HandleLogout=()=>{
    sessionStorage.user=""
  }

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <Link to={"/"}>
          <a>Home</a>
        </Link>
        <Link to={"/about"}>
          <a>About</a>
        </Link>
        <Link to={"/contact"}>
          <a>Contact</a>
        </Link>
        <Link to={"/products"}>
          <a>Products</a>
        </Link>

        {sessionStorage.user ? "" : (
          <Link to={"/login"}>
            <a>Login </a>
          </Link>
        )}
        {sessionStorage.user ? "" : (
          <Link to={"/signup"}>
            <a>SignUp </a>
          </Link>
        )}

        {sessionStorage.user &&
          <a onClick={HandleLogout} >Logout </a>
        }
        <Link to="/cart">
          <a>
            <BsCart2 className="navbar-cart-icon" /> Cart({totalQuantity})
          </a>
        </Link>

      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
