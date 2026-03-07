/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState, type JSX } from "react";
import { Navigate, Outlet, Route, Routes, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { login, selectCurrentUser } from "../pages/auth/authSlice";
import { useAppDispatch } from "../app/hooks";
import Layout from "@/layout/Layout";
import Login from "@/pages/auth/Login";
import Dashboard from "@/pages/dashboard/Dashboard";
import Cohorts from "@/pages/cohorts/Cohorts";
import SingleCohort from "@/pages/cohorts/SingleCohort";
import Session from "@/pages/cohorts/Session";
import Participants from "@/pages/participants/Participants";

type ProtectedRouteProps = {
  user: any;
  allowedRoles: string[];
  children: JSX.Element;
};

const ProtectedRoute = ({
  user,
  allowedRoles,
  children,
}: ProtectedRouteProps) => {
  if (!user) {
    return <Navigate to="/" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

const NoNav = () => (
  <>
    <Outlet />
  </>
);

const Router = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectCurrentUser);
  const [isAuthLoaded, setIsAuthLoaded] = useState(false); // <-- hydration state

  // let currentUserRole = null;
  // if (user) {
  //   currentUserRole = user.role;
  // }

  useEffect(() => {
    //log the user back in with local storage data
    const userString = localStorage.getItem("user");
    const access_tokenString = localStorage.getItem("access_token");
    // const refresh_tokenString = localStorage.getItem("refresh_token");

    if (userString && access_tokenString && !user) {
      const user = JSON.parse(userString) as any;
      const access_token = JSON.parse(access_tokenString) as string;
      // const refresh_token = JSON.parse(refresh_tokenString) as string;

      dispatch(login({ user, access_token }));
    }
    setIsAuthLoaded(true); // <-- set loaded after checking localStorage
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    //route the user to dashboard, if a logged in user tries to access signin page
    if (
      !!user &&
      (location.pathname === "/" || location.pathname === "/signup")
    ) {
      navigate("/dashboard");
    }
  }, [navigate, user]);

  if (!isAuthLoaded) {
    // Optionally, show a spinner or nothing while loading
    return null;
  }

  return (
    <Routes>
      <Route element={<NoNav />}>
        {/* public routes that dont have the sidebar nav */}
        <Route path="/" element={<Login />} />
        <Route path="*" element={<h1>Url does not match</h1>} />
      </Route>
      {/* Admin routes */}
      {/* {currentUserRole === "admin" ? ( */}
      <Route
        //protected pages
        element={
          <ProtectedRoute user={user} allowedRoles={["admin"]}>
            <Layout />
          </ProtectedRoute>
        }
      >
        {/* <Route path="/dashboard" element={<AdminDashboard />} /> */}
        {/* <Route path="/applications">
          <Route index element={<Applications />} />
          <Route path=":applicant_id" element={<ApplicationsOverview />} />
        </Route> */}
      </Route>
      <Route
        //protected pages
        element={
          <ProtectedRoute user={user} allowedRoles={["user"]}>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cohorts">
          <Route index element={<Cohorts />} />
          <Route path=":cohort_id">
            <Route index element={<SingleCohort />} />
            <Route path="session" element={<Session />} />
          </Route>
        </Route>
        <Route path="/participants/1" element={<Participants />} />
      </Route>
      <Route path="*" element={<h1>404, page not found</h1>} />
    </Routes>
  );
};

export default Router;
