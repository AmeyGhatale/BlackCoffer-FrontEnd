import { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import DataUsageIcon from '@mui/icons-material/DataUsage';
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Collapse from "@mui/material/Collapse";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Home from "../pages/Home";
import EndYearFilter from "../Filters/EndYearFilter";
import CityFilter from "../Filters/CityFilter";
import CountryFilter from "../Filters/CountryFilter";
import PestleFilter from "../Filters/PestleFilter";
import RegionFilter from "../Filters/RegionFilter";
import SectorFilter from "../Filters/SectorFilter";
import SourceFilter from "../Filters/SourceFilter";
import SwotFilter from "../Filters/SwotFilter";
import TopicFilter from "../Filters/TopicFilter";
import SourceIcon from '@mui/icons-material/Source';




import { Link } from "react-router-dom";

import './Navbar.css';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

export default function Sidenav() {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [menudata, setMenudata] = useState("Home");
    const [isCollapse, setIsCollapse] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleCollapse = () => {
        setIsCollapse(!isCollapse);
    };

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: "none" }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Visualization Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === "rtl" ? (
                            <ChevronRightIcon />
                        ) : (
                            <ChevronLeftIcon />
                        )}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {/* {["Home", "Starred", "Send email", "Drafts"].map((text, index) => (
                        <ListItem key={text} disablePadding sx={{ display: "block" }}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? "initial" : "center",
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : "auto",
                                        justifyContent: "center",
                                    }}
                                >
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    ))} */}

                    <ListItem disablePadding sx={{ display: "block" }} onClick={() => setMenudata("DashBoard")}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? "initial" : "center",
                                px: 2.5,
                            }}

                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : "auto",
                                    justifyContent: "center",
                                }}
                            >
                                {<HomeIcon fontSize="large" />}
                            </ListItemIcon>
                            <ListItemText primary="DashBoard" sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding sx={{ display: "block" }} onClick={() => setMenudata("All Data")}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? "initial" : "center",
                                px: 2.5,
                            }}

                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : "auto",
                                    justifyContent: "center",
                                }}
                            >
                                {<SourceIcon fontSize="large" />}
                            </ListItemIcon>
                            <ListItemText primary="All Data" sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>

                    {/* <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <InfoIcon />
                            </ListItemIcon>
                            <ListItemText primary={"About"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <PermContactCalendarIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Contact"} />
                        </ListItemButton>
                    </ListItem> */}
                </List>
                <Divider />
                <List>
                    <ListItem
                        disablePadding
                        sx={{ display: "block" }}
                        onClick={handleCollapse}
                    >
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? "initial" : "center",
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : "auto",
                                    justifyContent: "center",
                                }}
                            >
                                <FilterAltIcon fontSize="large" />
                            </ListItemIcon>
                            <ListItemText primary="Filters" sx={{ opacity: open ? 1 : 0 }} />
                            {isCollapse ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </ListItemButton>
                    </ListItem>
                    <Collapse in={isCollapse} timeout="auto" unmountOnExit>


                        {/* {["End Year Filter", "Trash", "Spam"].map((text, index) => (
                            <ListItem key={text} disablePadding sx={{ display: "block" }}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? "initial" : "center",
                                        px: 2.5,
                                    }}
                                    onClick={() => setMenudata("EndYearFilter")}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : "auto",
                                            justifyContent: "center",
                                        }}
                                    >
                                        { }
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))} */}



                        <ListItem disablePadding sx={{ display: "block" }} onClick={() => setMenudata("End Year Filter")}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? "initial" : "center",
                                    px: 2.5,
                                }}

                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : "auto",
                                        justifyContent: "center",
                                    }}
                                >
                                    {<FilterAltIcon fontSize="small" sx={{ opacity: open ? 1 : 0 }} />}
                                </ListItemIcon>
                                <ListItemText primary="End Year Filter" sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>


                        <ListItem disablePadding sx={{ display: "block" }} onClick={() => setMenudata("Topic Filter")}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? "initial" : "center",
                                    px: 2.5,
                                }}

                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : "auto",
                                        justifyContent: "center",
                                    }}
                                >
                                    {<FilterAltIcon fontSize="small" sx={{ opacity: open ? 1 : 0 }} />}
                                </ListItemIcon>
                                <ListItemText primary="Topic Filter" sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding sx={{ display: "block" }} onClick={() => setMenudata("Sector Filter")}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? "initial" : "center",
                                    px: 2.5,
                                }}

                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : "auto",
                                        justifyContent: "center",
                                    }}
                                >
                                    {<FilterAltIcon fontSize="small" sx={{ opacity: open ? 1 : 0 }} />}
                                </ListItemIcon>
                                <ListItemText primary="Sector Filter" sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding sx={{ display: "block" }} onClick={() => setMenudata("City Filter")}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? "initial" : "center",
                                    px: 2.5,
                                }}

                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : "auto",
                                        justifyContent: "center",
                                    }}
                                >
                                    {<FilterAltIcon fontSize="small" sx={{ opacity: open ? 1 : 0 }} />}
                                </ListItemIcon>
                                <ListItemText primary="City Filter" sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding sx={{ display: "block" }} onClick={() => setMenudata("Country Filter")}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? "initial" : "center",
                                    px: 2.5,
                                }}

                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : "auto",
                                        justifyContent: "center",
                                    }}
                                >
                                    {<FilterAltIcon fontSize="small" sx={{ opacity: open ? 1 : 0 }} />}
                                </ListItemIcon>
                                <ListItemText primary="Country Filter" sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding sx={{ display: "block" }} onClick={() => setMenudata("Pestle Filter")}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? "initial" : "center",
                                    px: 2.5,
                                }}

                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : "auto",
                                        justifyContent: "center",
                                    }}
                                >
                                    {<FilterAltIcon fontSize="small" sx={{ opacity: open ? 1 : 0 }} />}
                                </ListItemIcon>
                                <ListItemText primary="Pestle Filter" sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding sx={{ display: "block" }} onClick={() => setMenudata("Region Filter")}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? "initial" : "center",
                                    px: 2.5,
                                }}

                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : "auto",
                                        justifyContent: "center",
                                    }}
                                >
                                    {<FilterAltIcon fontSize="small" sx={{ opacity: open ? 1 : 0 }} />}
                                </ListItemIcon>
                                <ListItemText primary="Region Filter" sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding sx={{ display: "block" }} onClick={() => setMenudata("Source Filter")}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? "initial" : "center",
                                    px: 2.5,
                                }}

                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : "auto",
                                        justifyContent: "center",
                                    }}
                                >
                                    {<FilterAltIcon fontSize="small" sx={{ opacity: open ? 1 : 0 }} />}
                                </ListItemIcon>
                                <ListItemText primary="Source Filter" sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding sx={{ display: "block" }} onClick={() => setMenudata("SWOT Filter")}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? "initial" : "center",
                                    px: 2.5,
                                }}

                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : "auto",
                                        justifyContent: "center",
                                    }}
                                >
                                    {<FilterAltIcon fontSize="small" sx={{ opacity: open ? 1 : 0 }} />}
                                </ListItemIcon>
                                <ListItemText primary="SWOT Filter" sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>



                    </Collapse>
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                {menudata == "All Data" && <Home />}
                {menudata == "End Year Filter" && <EndYearFilter />}
                {menudata == "Topic Filter" && <TopicFilter />}
                {menudata == "Sector Filter" && <SectorFilter />}
                {menudata == "City Filter" && <CityFilter />}
                {menudata == "Country Filter" && <CountryFilter />}
                {menudata == "Region Filter" && <RegionFilter />}
                {menudata == "Pestle Filter" && <PestleFilter />}
                {menudata == "Source Filter" && <SourceFilter />}
                {menudata == "SWOT Filter" && <SwotFilter />}
                {menudata == "Pestle Filter" && <PestleFilter />}
            </Box>
        </Box >
    );
}