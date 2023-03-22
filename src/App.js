import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Register from "./pages/auth/Register";
import DashBoard from "./pages/Dashboard/DashBoard";

import SharedLayOut from "./pages/Shared/ShardLayOut";
import { setCurrentUser } from "./redux-store/user/user.action";
import { currentUser } from "./redux-store/user/user.selector";
function App() {
  const dispatch = useDispatch();
  const user = useSelector(currentUser);
  useEffect(() => {
    const user = localStorage.getItem("user");
    dispatch(setCurrentUser(JSON.parse(user)));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<SharedLayOut />}>
        <Route
          index
          element={user ? <DashBoard /> : <Navigate to="register" />}
        />
        <Route path="/clients" element={<h1>Clients</h1>} />
        <Route path="/stylists" element={<h1>Stylists</h1>} />
        <Route path="*" element={<h1>No found</h1>} />
      </Route>
      <Route
        element={!user ? <Register /> : <Navigate to="/" />}
        path="register"
      />
    </Routes>
  );
}

export default App;
