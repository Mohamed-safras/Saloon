import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import AuthVerify from "./common/AuthVerify";
import useLogOut from "./hooks/user.logout";

import { setCurrentUser } from "./actions/user.action";
import { pathSpliter } from "./common/path.split";
import NotFound from "./components/NotFound/NotFound";
import ServiceDetails from "./components/Services/ServiceDetails";
import DashBoard from "./pages/Dashboard/DashBoard";
import Service from "./pages/Service/Service";
import SharedLayOut from "./pages/Shared/ShardLayOut";
import Staff from "./pages/Staff/Staff";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Clients from "./pages/clients/Clients";
import { currentUser } from "./selectors/user.selector";

function App() {
  const dispatch = useDispatch();
  const currentUserValue = useSelector(currentUser);
  const { pathname } = useLocation();
  const { LogOut } = useLogOut();
  useEffect(() => {
    const user = localStorage.getItem("user");
    dispatch(setCurrentUser(JSON.parse(user)));
    dispatch({
      type: "SET_CURRENT_PAGE",
      payload: pathname === "/" ? "dashboard" : pathname.split("/")[1],
    });
    // dispatch never updates so we can ingore it in useEffect dependency array
  }, [pathname, dispatch]);

  console.log();

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<SharedLayOut />}>
          <Route
            index
            element={currentUserValue ? <DashBoard /> : <Navigate to="login" />}
          />
          <Route path="/appoinments" element={<h1>appoinments</h1>} />
          <Route path="/services" element={<Service />} />
          <Route
            path={`/services/${pathSpliter(pathname)}`}
            element={<ServiceDetails />}
          />
          <Route path="/clients" element={<Clients />} />
          <Route path="/staffs" element={<Staff />} />
          <Route path="/message" element={<h1>message</h1>} />
          <Route path="/reviews" element={<h1>reviews</h1>} />
          <Route path="/finances" element={<h1>finances</h1>} />
          <Route path="/settings" element={<h1>settings</h1>} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route
          element={!currentUserValue ? <Login /> : <Navigate to="/" />}
          path="login"
        />
        <Route
          element={!currentUserValue ? <Register /> : <Navigate to="/" />}
          path="register"
        />
      </Routes>
      <AuthVerify LogOut={LogOut} />
    </React.Fragment>
  );
}

export default App;
