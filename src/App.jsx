import React from "react";
import AppRoutes from "./routes/AppRoutes";
import SideBar from "./shared/SideBar";

function App() {
  return (
    <div className="container">
      <div className="flex w-full h-full items-center justify-center">
        <div className="h-[600px] w-full">
          <SideBar />
          <div className="w-[80%]">
            <AppRoutes />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
