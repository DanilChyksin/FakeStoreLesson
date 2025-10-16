import React from "react";
import AppRoutes from "./routes/AppRoutes";
import SideBar from "./shared/SideBar";

function App() {
  return (
    <div className="container">
      <div className="flex w-full h-full items-center justify-center">
        <div className="h-[600px] flex gap-5 w-full">
          <SideBar />
          <div className="w-[80%] h-full bg-black rounded-2xl max-h-[4000px] overflow-y-scroll">
            <AppRoutes />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
