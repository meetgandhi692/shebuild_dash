import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "./App.css";
import Navibar from "./components/Navibar";
import BasicTable from "./components/BasicTable";
import Slidebar from "./components/Slidebar";
import { ProSidebarProvider } from "react-pro-sidebar";

function App() {
  return (
    <div className="App">
      <ProSidebarProvider>
        <Slidebar />
      </ProSidebarProvider>
      <BasicTable/>
    </div>
  );
}

export default App;
