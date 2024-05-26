import { MainLayout } from "../layout/MainLayout";
import { About } from "../pages/About";
import { Home } from "../pages/Home";
import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/Login";
import { ErrorPage } from "../pages/ErrorPage";
import { DashboardLayout } from "../layout/DashboardLayout";
import { Dashboard } from "../pages/Dashboard";
import { Register } from "../pages/Register";
import { PrivateRoute } from "./private/PrivateRoute";
import { ProductDetails } from "../pages/ProductDetails";
import { AllProduct } from "../pages/AllProduct";
import { AddProduct } from "../pages/AddProduct";
import { EditProduct } from "../pages/EditProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch("http://localhost:3000/movies"),
      },
      {
        path: 'movie/:id',
        element: <ProductDetails />,
        loader: ({ params }) => fetch(`http://localhost:3000/movies/${params.id}`),
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      }
    ]
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "all-products",
        element: (
          <PrivateRoute>
            <AllProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "add-products",
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "movie/edit/:id",
        element: (
          <PrivateRoute>
            <EditProduct />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/movies/${params.id}`)
      },
    ]
  }
]);
