import React from "react";
import Header from "./MyComponents/Headers";
import Todos from "./MyComponents/Todos";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Addtodo from "./MyComponents/Addtodo";
import Oops from "./pages/Ooops";
import PopUpModal from "./MyComponents/PopUpModal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/todoiest" element={<Layout />}>
          <Route index element={<Todos />} />{" "}
          {/* Default route for /todoiest */}
          <Route path="todos" element={<Todos />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="addtodo" element={<Addtodo />} />
          <Route path="popupmodal" element={<PopUpModal />} />
        </Route>
        <Route path="*" element={<Oops />} />
      </Routes>
    </BrowserRouter>
  );
}

// Layout component with header and footer
function Layout() {
  return (
    <>
      <Header title="My Todo List" searchBar={true} />
      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>
    </>
  );
}

export default App;
