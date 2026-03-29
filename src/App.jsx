import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayOut from "./components/LayOut";
import Contacts from "./components/Pages/contacts/Contacts";
import Home from "./components/Pages/Home/Home";
import Main from "./components/Pages/main/Main";
import Resume from "./components/Pages/Resume/Resume";

function App() {
  let routers = createBrowserRouter([
    {
      path: "",
      element: <LayOut />,
      children: [
        { index: true, element: <Home /> },
        { path: "contact", element: <Contacts /> },
        { path: "Projects", element: <Main /> },
        { path: "Resume", element: <Resume /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  );
}

export default App;
