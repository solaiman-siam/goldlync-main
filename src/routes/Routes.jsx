import { createBrowserRouter } from "react-router";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/public/Home/Home";
import RoleChoose from "@/pages/auth/RoleChoose";
import PageTitle from "@/components/PageTitle";
import ErrorPage from "@/pages/Error/ErrorPage";
import NotFoundError from "@/pages/Error/NotFoundError";
import Register from "@/pages/auth/Register";
import Login from "@/pages/auth/Login";
import ForgetPassword from "@/pages/auth/ForgetPassword";
import ProfileLayout from "@/layouts/ProfileLayout";
import ProfileDetails from "@/pages/private/profile/ProfileDetails";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <PageTitle title="Home">
            <Home />
          </PageTitle>
        ),
      },
      {
        path: "/profile",
        element: <ProfileLayout />,
        children: [
          {
            index: true,
            element: (
              <PageTitle title="Profile details">
                <ProfileDetails />
              </PageTitle>
            ),
          },
          {
            path: "profile-details",
            element: (
              <PageTitle title="Profile details">
                <ProfileDetails />
              </PageTitle>
            ),
          },
        ],
      },
    ],
  },
  {
    path: "/choose",
    errorElement: <ErrorPage />,
    element: (
      <PageTitle title="Choose Role">
        <RoleChoose />
      </PageTitle>
    ),
  },
  {
    path: "/register",
    errorElement: <ErrorPage />,
    element: (
      <PageTitle title="Register">
        <Register />
      </PageTitle>
    ),
  },
  {
    path: "/login",
    errorElement: <ErrorPage />,
    element: (
      <PageTitle title="Login">
        <Login />
      </PageTitle>
    ),
  },
  {
    path: "/forget-password",
    errorElement: <ErrorPage />,
    element: (
      <PageTitle title="Forget Password">
        <ForgetPassword />
      </PageTitle>
    ),
  },
  {
    path: "*",
    element: <NotFoundError />,
  },
]);
