import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar, HeaderWrapper } from "../components";
import { useDispatch } from "react-redux";

export const PanelLayout = () => {
  // ----------hooks----------
  let dispatch = useDispatch();

  // ---------- state ----------
  const [isShowSidebar, setIsShowSidebar] = useState(true);

  // ---------- functions ----------
  const toggleSidebar = () => setIsShowSidebar((currState) => !currState);

  // ---------- render jsx ----------
  return (
    <section className="h-screen flex flex-col overflow-hidden dark:bg-dark_custom-average-black">
      <HeaderWrapper
        toggleSidebar={toggleSidebar}
        isShowSidebar={isShowSidebar}
      />

      <section
        className={`relative w-full h-screen flex gap-y-12 overflow-y-auto`}
      >
        <Sidebar isShow={isShowSidebar} />
        <div
          className={`relative p-6 duration-500 ease-in-out overflow-x-hidden dark:bg-[#343a40] ${
            !isShowSidebar ? "left-0 w-full" : "left-265 w-[calc(100%-265px)]"
          }`}
        >
          <Outlet />
        </div>
      </section>
    </section>
  );
};
