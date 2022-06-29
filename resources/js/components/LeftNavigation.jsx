import { Link, useRouteMatch } from "react-router-dom";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';
import styled from '@mui/material/styles/styled';
import nav from './Navigation';

const getURL = (params) => {
  let url;

  if (params.url === undefined)
    // url = (new URLSearchParams(params.label.toLowerCase())).toString();
    url = "/" + params.label.toLowerCase();
  else
    // url = params.url === "/" ? params.url : "/" + params.url;
    url = params.url;

  return url;
}

const MyLink = styled(Link)({
  textDecoration: "inherit",

  "&: focus, &: hover, &: visited, &: link, &:active": {
    textDecoration: "inherit"
  },

  color: "inherit"
});

function NavigationLinkItem(props) {
  let match = useRouteMatch({
    path: getURL(props),
    exact: props.exact
  });

  return (
    <ListItem disablePadding sx={{ display: 'block' }}
      title={"navigate to " + props.label}
      component={MyLink} to={getURL(props)}
      sx={{
        backgroundColor: match ? "#282929" : "inherit"
      }}
    >
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: open ? 'initial' : 'center',
          px: 2.5,
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : 'auto',
            justifyContent: 'center',
          }}
        >
          {props.icon}
        </ListItemIcon>
        <ListItemText primary={props.label} sx={{ opacity: open ? 1 : 0 }} />
      </ListItemButton>
    </ListItem>
  )
}

export default function LeftNavigation() {
  // const nav = [];

  return <List>
    {nav.map((menuItem, index) => {      
      let navlink = <NavigationLinkItem key={"left-nav-" + index} {...menuItem} />;
      return navlink;
    })}
  </List>
}