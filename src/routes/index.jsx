import { Route } from "react-router-dom";
import { Fragment, lazy } from "react";
import { BrowserRouter, Routes } from "react-router-dom";

import { Suspense } from "react";

const MainLayout = lazy(() => import("../layouts"));

const routes = [
  {
    path: "",
    layout: MainLayout,
    element: lazy(() => import("../pages/HomePage/index")),
  },
  {
    path: "/detail/:id",
    layout: MainLayout,
    element: lazy(() => import("../pages/DetailPage/index")),
  },
  {
    path: "/register",
    layout: MainLayout,
    element: lazy(() => import("../pages/RegisterPage/index")),
  },
  {
    path: "/men",
    layout: MainLayout,
    element: lazy(() => import("../pages/HomePage/index")),
  },
  {
    path: "/woman",
    layout: MainLayout,
    element: lazy(() => import("../pages/HomePage/index")),
  },
  {
    path: "/kid",
    layout: MainLayout,
    element: lazy(() => import("../pages/HomePage/index")),
  },
  {
    path: "/sport",
    layout: MainLayout,
    element: lazy(() => import("../pages/HomePage/index")),
  },
  {
    path: "/logic",
    layout: MainLayout,
    element: lazy(() => import("../pages/Logic/index")),
  },
];

function RouteMain() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map((routeItem, index) => {
            let { path, element, layout } = routeItem;
            const Component = element;
            const Layout = layout || Fragment;
            return (
              <Route
                key={index}
                path={path}
                element={
                  <Layout>
                    <Component />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export { RouteMain };
