import React, { useState } from "react";
import { Roboto } from "next/font/google";
import BottomSideBar from "@/components/BottomSideBar";
import BigStartPage from "@/components/BigStartPage";
import StartComponent from "@/components/StartComponent";
import Head from "next/head";
import FilterCards from "@/components/FilterCards";
import DashboardAnalytics from "./DashboardAnalytics";


const roboto = Roboto({
  subsets: ["latin"],
  weight: "100",
});

export default function Home() {
  return (
    <div>
      <Head>
        
        <title>Smart TreadMill</title>
      </Head>
      <BigStartPage />
      {/* <TopBar/> */}
      <StartComponent />
      {/* <DashboardAnalytics/> */}
      {/* <BottomSideBar/>  */}
    </div>
  );
}
