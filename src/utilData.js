<<<<<<< HEAD
import { BiSquareRounded, BiSearch } from "react-icons/bi";
=======
mport { BiSquareRounded, BiSearch } from "react-icons/bi";
>>>>>>> 400e81e092ef313b01c02e8ce92a5991d5231a68
import { RiCustomerService2Fill } from "react-icons/ri";
import { FiUserPlus } from "react-icons/fi";
import { AiOutlineLogout, AiOutlineLogin } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";

export const navitemsPublic = [
  {
    path: "/",
    icon: <BiSquareRounded />,
    title: "home",
  },
  {
    path: "/contact",
    icon: <RiCustomerService2Fill />,
    title: "contact",
  },

  {
    path: "/search",
    icon: <BiSearch />,
    title: "search",
  },
  {
    path: "/login",
    icon: <AiOutlineLogin />,
    title: "login",
  },
];
export const navitemsForAdmin = [
  {
    path: "/",
    icon: <BiSquareRounded />,
    title: "home",
  },
  {
    path: "/register",
    icon: <FiUserPlus />,
    title: "register",
  },

  {
    path: "/profile",
    icon: <FaUserCircle />,
    title: "profile",
  },
  {
    path: "/search",
    icon: <BiSearch />,
    title: "search",
  },
  {
    path: "/",
    icon: <AiOutlineLogout />,
    title: "logout",
  },
];

export const navitemsForUser = [
  {
    path: "/",
    icon: <BiSquareRounded />,
    title: "home",
  },
  {
    path: "/contact",
    icon: <RiCustomerService2Fill />,
    title: "contact",
  },

  {
    path: "/search",
    icon: <BiSearch />,
    title: "search",
  },
  {
    path: "/profile",

    icon: <FaUserCircle />,
    title: "profile",
  },
  {
    path: "/",
    icon: <AiOutlineLogout />,
    title: "logout",
  },
];
export const welcomePageBg = {
  image:
    "https://images.unsplash.com/photo-1560317620-1ba88ae56e7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
};
