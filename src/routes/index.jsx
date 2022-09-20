import { Route } from "react-router-dom";
import { lazy } from "react";

const routes = [
  {
    path: "",
    element: lazy(() => import("../pages/HomePage/index")),
  },
];

const renderRoutes = () => {
  return routes.map((item, index) => {
    if (item.nested) {
      return (
        <Route key={index} path={item.path} element={<item.element />}>
          {item.nested.map((route, index) => (
            <Route key={index} path={route.path} element={<route.element />} />
          ))}
        </Route>
      );
    } else {
      return <Route key={index} path={item.path} element={<item.element />} />;
    }
  });
};

export { renderRoutes };
