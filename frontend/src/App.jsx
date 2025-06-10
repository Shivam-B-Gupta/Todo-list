import React from "react";
import Header from "./MyComponents/Headers";
import { TodoItem } from "./MyComponents/TodoItem";
import { Footer } from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";
import Auth from "./pages/Auth";
import Signin from "./pages/Signin";

function App() {
  return (
    <div>
      <Header title="My Todo List" searchBar={true} />
      {/* <Todos /> */}
      <Auth />
      <Signin />
      {/* <Routes>
        <Route path="/auth" element={<Auth />} />
      </Routes> */}
    </div>
  );
}

export default App;
