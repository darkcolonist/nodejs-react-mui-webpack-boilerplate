import React from 'react';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HomeIcon from '@mui/icons-material/Home';
import loadable from '@loadable/component';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import SettingsIcon from '@mui/icons-material/Settings';
import { loadableParams } from './MyLoadable';

export default [
  {
    label: "Home",
    scope: ["all"],
    icon: <HomeIcon />,
    url: "/",
    section: loadable(() => import("../sections/HomeSection"), loadableParams),
    exact: true
  },
  {
    label: "Section 1",
    scope: ["loggedIn"],
    icon: <BookmarkIcon />,
    url: "/section-1",
    section: loadable(() => import("../sections/UnderConstructionSection"), loadableParams),
    exact: false
  },
  {
    label: "Section 2",
    scope: ["loggedIn"],
    icon: <SettingsIcon />,
    url: "/section-2",
    section: loadable(() => import("../sections/UnderConstructionSection"), loadableParams),
    exact: false
  },
  {
    label: "Section 3",
    scope: [],
    icon: <LoginIcon />,
    url: "/section-3",
    section: loadable(() => import("../sections/UnderConstructionSection"), loadableParams),
    exact: false
  },
  {
    label: "Section-4",
    scope: ["loggedIn"],
    icon: <LogoutIcon />,
    url: "/section-4",
    section: loadable(() => import("../sections/UnderConstructionSection"), loadableParams),
    exact: false
  },
];