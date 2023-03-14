import { Route, Routes } from "react-router-dom";
import Register from "./pages/auth/Register";
import Home from "./pages/Home/Home";
import ShardLayOut from "./pages/Shared/ShardLayOut";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ShardLayOut />}>
        <Route index element={<Home />} />
        <Route />
        <Route />
        <Route />
        <Route />
        <Route />

        <Route path="*" />
      </Route>
      <Route element={<Register />} path="register" />
    </Routes>
  );
}

export default App;
