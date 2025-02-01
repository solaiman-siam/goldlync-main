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
import Balance from "@/pages/private/profile/Balance";
import ProfileMyJobLayout from "@/layouts/ProfileMyJobLayout";
import CompleteJobs from "@/pages/private/profile/my-jobs/CompleteJobs";
import PendingJobs from "@/pages/private/profile/my-jobs/PendingJobs";
import CancelJobs from "@/pages/private/profile/my-jobs/CancelJobs";
import Service from "@/pages/public/Services/Services";
import ServiceCategories from "@/pages/public/ServiceCategories/ServiceCategories";

import ServiceQuestionnaries from "@/pages/public/ServiceQuestionnaries/ServiceQuestionnaries";

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
        path: '/services',
        element: (
          <PageTitle title="Service">
            <Service/>
          </PageTitle>
        ),
      },
      {
        path: '/service-questionnaries',
        element: (
          <PageTitle title="Questionnaries">
            <ServiceQuestionnaries/>
          </PageTitle>
        ),
      },
      {
        path: '/service-categories',
        element: (
          <PageTitle title="Service Categories">
            <ServiceCategories/>
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
          {
            path: "balance",
            element: (
              <PageTitle title="Balance">
                <Balance />
              </PageTitle>
            ),
          },
          {
            path: "my-jobs",
            element: <ProfileMyJobLayout />,
            children: [
              {
                index: true,
                element: (
                  <PageTitle title="My complete jobs">
                    <CompleteJobs />
                  </PageTitle>
                ),
              },
              {
                path: "complete",
                element: (
                  <PageTitle title="My complete jobs">
                    <CompleteJobs />
                  </PageTitle>
                ),
              },
              {
                path: "pending",
                element: (
                  <PageTitle title="My complete jobs">
                    <PendingJobs />
                  </PageTitle>
                ),
              },
              {
                path: "cancel",
                element: (
                  <PageTitle title="My complete jobs">
                    <CancelJobs />
                  </PageTitle>
                ),
              },
            ],
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
