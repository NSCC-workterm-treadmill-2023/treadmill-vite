import useDashboardStore from "../store";
import { useEffect } from "react";



const DashboardAnalytics = () => { 
  // Access state variables from the store
  const isRunning = useDashboardStore((state) => state.isRunning); 
  const caloriesBurned = useDashboardStore((state) => state.caloriesBurned); 
  const distance = useDashboardStore((state) => state.distance); 
  const timeElapsed = useDashboardStore((state) => state.timeElapsed); 
  const averageSpeed = useDashboardStore((state) => state.averageSpeed); 

  //Logic to start tracking metrics when treadmill starts 
  useEffect (() => {
    if(isRunning){

    }else {

    }
  }, [isRunning]); 

  // Reset metrics when treadmill starts again after stopping 
  useEffect (() => { 
    if(isRunning){

    }
  }, [isRunning]); 

  // display the retrived data 
  return (
    <div>
      <h2>Calories Burned: {caloriesBurned}</h2>
      <h2>Distance: {distance}</h2>
      <h2>Time Elapsed: {timeElapsed}</h2>
      <h2>Average Speed: {averageSpeed}</h2>
    </div>
  );
}; 

export default DashboardAnalytics; 