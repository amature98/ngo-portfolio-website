import CottageIcon from "@mui/icons-material/Cottage";
import MoreIcon from "@mui/icons-material/More";
import PeopleIcon from "@mui/icons-material/People";
import PhoneIcon from "@mui/icons-material/Phone";
import PhotoIcon from "@mui/icons-material/Photo";
import ChromeReaderModeIcon from "@mui/icons-material/ChromeReaderMode";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
export const navLinks = [
  { title: "Home", path: "/home", icon: <CottageIcon /> },
  { title: "About", path: "/about", icon: <MoreIcon /> },
  { title: "Projects", path: "/projects", icon: <PhotoIcon /> },
  { title: "Team", path: "/team", icon: <PeopleIcon /> },
  {
    title: "Get Involved",
    path: "/get-involved",
    icon: <VolunteerActivismIcon />,
  },
  { title: "Blogs", path: "/blogs", icon: <ChromeReaderModeIcon /> },
  { title: "Contact", path: "/contacts", icon: <PhoneIcon /> },
];
