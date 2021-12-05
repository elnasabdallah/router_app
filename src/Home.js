import React from "react";
import { Outlet, useRoutes } from "react-router-dom";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Header from "./components/Header";
import Body from "./components/Body";

let routes = [
  {
    path: "/",
    element: <Body />,
  },
  {
    path: "/page1",
    element: <Page1 />,
  },
  {
    path: "/page2",
    element: <Page2 />,
  },
];
const Home = () => {
  let element = useRoutes(routes);
  return (
    <div>
      <Header />
      {element}
      <Outlet />
    </div>
  );
};

export default Home;
