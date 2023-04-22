import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import AuthVerify from "./common/AuthVerify";
import useLogOut from "./hooks/user.logout";

import { setCurrentUser } from "./actions/user.action";
import DashBoard from "./pages/Dashboard/DashBoard";
import SharedLayOut from "./pages/Shared/ShardLayOut";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
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

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<SharedLayOut />}>
          <Route
            index
            element={currentUserValue ? <DashBoard /> : <Navigate to="login" />}
          />
          <Route path="/clients" element={<h1>Clients</h1>} />
          <Route path="/stylists" element={<h1>Clients</h1>} />
          <Route path="/message" element={<h1>message</h1>} />
          <Route path="/reviews" element={<h1>reviews</h1>} />
          <Route path="/finances" element={<h1>finances</h1>} />
          <Route path="/settings" element={<h1>settings</h1>} />
          <Route path="*" element={<h1>No found</h1>} />
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
