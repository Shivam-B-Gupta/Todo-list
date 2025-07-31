import React from "react";
import SideBar from "./MyComponents/SideBar";
import Header from "./MyComponents/Headers";
import Todos from "./MyComponents/Todos";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Addtodo from "./MyComponents/Addtodo";
import Oops from "./pages/Ooops";
import PopUpModal from "./MyComponents/PopUpModal";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

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
      <div className="grid grid-cols-7 min-h-screen">
        {/* Sidebar (20%) */}
        <div className="col-span-0  hidden md:col-span-1 md:block">
          <SideBar />
        </div>
        <div className="col-span-7 md:col-span-6 ">
          <Header title="My Todo List" searchBar={true} />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
