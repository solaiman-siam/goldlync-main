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
import ConstructorProfile from "@/pages/private/ConstructorProfile/ConstructorProfile";
import ConstructorProfileLayout from "@/layouts/ConstructorProfileLayout";
import Service from "@/pages/public/Services/Services";
import ServiceCategories from "@/pages/public/ServiceCategories/ServiceCategories";

import ServiceQuestionnaries from "@/pages/public/ServiceQuestionnaries/ServiceQuestionnaries";
import Reviews from "@/pages/private/ConstructorProfile/Reviews";
import Portfolio from "@/pages/private/ConstructorProfile/Portfolio";
import ManageAccount from "@/pages/private/ConstructorProfile/ManageAccount";
import SavedJobs from "@/pages/private/ConstructorProfile/SavedJobs";
import NotificationSettings from "@/pages/private/ConstructorProfile/NotificationSettings";
import ConstructorBalance from "@/pages/private/ConstructorProfile/ConstructorBalance";
import Jobs from "@/pages/private/ConstructorProfile/Jobs";
import RegistrationComplete from "@/pages/private/ConstructorProfile/RegistrationComplete";
import ProRegister from "@/pages/auth/ProRegister";
import Blog from "@/pages/public/Blog/Blog";
import BlogDetails from "@/pages/public/Blog/BlogDetails";
import ConstructorProfileDetails from "@/pages/private/ConstructorProfile/ConstructorProfileDetails";
import Pros from "@/pages/public/Pros";
import SafetyGuideline from "@/pages/public/SafetyGuideline";
import SubmissionComplete from "@/pages/private/ConstructorProfile/SubmissionComplete";
import ExploreProjects from "@/pages/public/ExploreProjects";
import AssignmentDetails from "@/pages/private/ConstructorProfile/AssignmentDetails";
import Message from "@/pages/Message";
import UpdateProfileDetails from "@/pages/private/profile/UpdateProfileDetails";
import CoinPurchase from "@/pages/public/CoinPurchase";
import AddServicesByConstructor from "@/pages/public/Services/AddServicesByConstructor";
import About from "@/pages/public/About";
import Contact from "@/pages/public/Contact";
import OnlineHelpdesk from "@/pages/OnlineHelpdesk";
import WorkArea from "@/pages/WorkArea";
import ConstructorForm from "@/pages/ConstructorForm";
import AddProjects from "@/pages/AddProjects";

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
        path: "/pros",
        element: (
          <PageTitle title="Pros">
            <Pros />
          </PageTitle>
        ),
      },
      {
        path: "/constructor-form",
        element: (
          <PageTitle title="Constructor Form">
            <ConstructorForm />
          </PageTitle>
        ),
      },
      {
        path: "/about-us",
        element: (
          <PageTitle title="About Us">
            <About />
          </PageTitle>
        ),
      },
      {
        path: "/online-help-desk",
        element: (
          <PageTitle title="/Online Help Desk">
            <OnlineHelpdesk />
          </PageTitle>
        ),
      },
      {
        path: "/contact",
        element: (
          <PageTitle title="Contact">
            <Contact />
          </PageTitle>
        ),
      },
      {
        path: "/coin-purchase",
        element: (
          <PageTitle title="Coin Purchase">
            <CoinPurchase />
          </PageTitle>
        ),
      },
      {
        path: "/safety-guideline",
        element: (
          <PageTitle title="Pros">
            <SafetyGuideline />
          </PageTitle>
        ),
      },
      {
        path: "/constructor",
        element: (
          <PageTitle title="Constructor">
            <ConstructorProfileDetails />
          </PageTitle>
        ),
      },
      {
        path: "/services",
        element: (
          <PageTitle title="Service">
            <Service />
          </PageTitle>
        ),
      },
      {
        path: "/service-questionnaries",
        element: (
          <PageTitle title="Questionnaries">
            <ServiceQuestionnaries />
          </PageTitle>
        ),
      },
      {
        path: "/project-details",
        element: (
          <PageTitle title="Project-Details">
            <ExploreProjects />
          </PageTitle>
        ),
      },
      {
        path: "/service-categories",
        element: (
          <PageTitle title="Service Categories">
            <ServiceCategories />
          </PageTitle>
        ),
      },
      {
        path: "/assignment-details",
        element: (
          <PageTitle title="Assignment Details">
            <AssignmentDetails />
          </PageTitle>
        ),
      },
      {
        path: "/message",
        element: (
          <PageTitle title="Message">
            <Message />
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
            path: "update-profile-details",
            element: (
              <PageTitle title="Profile details">
                <UpdateProfileDetails />
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
            path: "notifications",
            element: (
              <PageTitle title="Notifications">
                <NotificationSettings />
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
      {
        path: "blogs",
        element: (
          <PageTitle title="Blogs">
            <Blog />
          </PageTitle>
        ),
      },
      {
        path: "blog-details",
        element: (
          <PageTitle title="Blog Details">
            <BlogDetails />
          </PageTitle>
        ),
      },
      {
        path: "/constructor-profile",
        element: <ConstructorProfileLayout />,
        children: [
          {
            index: true,
            element: (
              <PageTitle title="Constructor Profile details">
                <ConstructorProfile />
              </PageTitle>
            ),
          },
          {
            path: "profile-details",
            element: (
              <PageTitle title="Company details">
                <ConstructorProfile />
              </PageTitle>
            ),
          },
          {
            path: "add-project",
            element: (
              <PageTitle title="Add Projects">
                <AddProjects/>
              </PageTitle>
            ),
          },
          {
            path: "working-area",
            element: (
              <PageTitle title="Working Area">
                <WorkArea/>
              </PageTitle>
            ),
          },
          {
            path: "add-services",
            element: (
              <PageTitle title="Add Services">
                <AddServicesByConstructor />
              </PageTitle>
            ),
          },
          {
            path: "reviews",
            element: (
              <PageTitle title="Reviews">
                <Reviews />
              </PageTitle>
            ),
          },
          {
            path: "portfolio",
            element: (
              <PageTitle title="Portfolio">
                <Portfolio />
              </PageTitle>
            ),
          },
          {
            path: "manage-account",
            element: (
              <PageTitle title="Manage Account">
                <ManageAccount />
              </PageTitle>
            ),
          },
          {
            path: "saved-commands",
            element: (
              <PageTitle title="Saved commands">
                <SavedJobs />
              </PageTitle>
            ),
          },
          {
            path: "notification-settings",
            element: (
              <PageTitle title="Notification Settings">
                <NotificationSettings />
              </PageTitle>
            ),
          },
          {
            path: "balance",
            element: (
              <PageTitle title="Constructor Balance">
                <ConstructorBalance />
              </PageTitle>
            ),
          },
          {
            path: "jobs",
            element: (
              <PageTitle title="Jobs">
                <Jobs />
              </PageTitle>
            ),
          },
        ],
      },
      {
        path: "/registration-complete",
        element: <RegistrationComplete />,
      },
      {
        path: "/submission-complete",
        element: <SubmissionComplete />,
      },
    ],
  },
  // {
  //   path: "/choose",
  //   errorElement: <ErrorPage />,
  //   element: (
  //     <PageTitle title="Choose Role">
  //       <RoleChoose />
  //     </PageTitle>
  //   ),
  // },
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
    path: "/pro-register",
    errorElement: <ErrorPage />,
    element: (
      <PageTitle title="Register">
        <ProRegister />
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
