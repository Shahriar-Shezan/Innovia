import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Devhome from "./components/Database/Devhome";
import WriteMotherboard from "./components/Database/WriteMotherboard";
import WriteProcessor from "./components/Database/WriteProcessor";
import WriteGpu from "./components/Database/WriteGpu";
import WriteRam from "./components/Database/WriteRam";
import WriteStorage from "./components/Database/WriteStorage"
import WritePsu from "./components/Database/WritePsu"
import WriteCasing from "./components/Database/WriteCasing";
import BuildPC from "./components/home/home element/build_pc";

import Home from "./components/home";

import { AuthProvider } from "./contexts/authContext";
import { useRoutes } from "react-router-dom";
import WriteCooler from "./components/Database/WriteCooler";
import DevWrite from "./components/Database/DevWrite";
import DevRead from "./components/Database/DevRead";


function App() {
  const routesArray = [
    {
      path: "*",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/BuildPC",
      element: <BuildPC />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/writeprocessor",
      element: <WriteProcessor/>,
    },
    {
      path: "/devhome",
      element: <Devhome/>,
    },
    {
      path: "/writemotherboard",
      element: <WriteMotherboard/>,
    },
    {
      path: "/writegpu",
      element: <WriteGpu/>,
    },
    {
      path: "/writeram",
      element: <WriteRam/>,
    },
    {
      path: "/writestorage",
      element: <WriteStorage/>,
    },
    {
      path: "/writepsu",
      element: <WritePsu/>,
    },
    {
      path: "/writecasing",
      element: <WriteCasing/>,
    },
    {
      path: "/writecooler",
      element: <WriteCooler/>,
    },
    {
      path: "/devwrite",
      element: <DevWrite/>,
    },
    {
      path: "/devread",
      element: <DevRead/>,
    }

  ];
  let routesElement = useRoutes(routesArray);
  return (
    <AuthProvider>
      <div className="w-full h-screen flex flex-col">{routesElement}</div>
    </AuthProvider>
  );
}

export default App;
