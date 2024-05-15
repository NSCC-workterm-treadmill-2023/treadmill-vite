import React, { useEffect, useState } from "react";
import { LuClock } from "react-icons/lu";
import { FaFire } from "react-icons/fa6";
import { BsSpeedometer } from "react-icons/bs";
import { MdOutlineTimer } from "react-icons/md";
import { GiPathDistance } from "react-icons/gi";
import styles from "../styles/TopBar.module.css";
import useDashboardStore from "../store";
 
export default function TopBar() {
  const isRunning = useDashboardStore((state) => state.isRunning);
  const speedSetting = useDashboardStore((state) => state.speed);
  const incline = useDashboardStore((state) => state.incline);
  const [averageSpeed, setAverageSpeed] = useState(0);
  const [caloriesBurned, setCaloriesBurned] = useState(0);
  const [distance, setDistance] = useState(0);
  const [totalDistance, setTotalDistance] = useState(0);
  const [localTime, setLocalTime] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [startTime, setStartTime] = useState(Date.now()); // Track the start time
  const [initialDistance, setInitialDistance] = useState(0); // Store the initial distance

  
  //PLEASE NOTE: The calculations and functions for distance, caloriesBurned, averageSpeed, timeElapsed is not working properly  //<----Issue #1
  //So you need to create a new functions or fix the existing ones
 
  // const inclinePercent = incline / 10; // Convert incline from treadmill units to percentage //<----Issue #2 Conversion required
 
  // const weight = 70; // Average weight in kilograms    // <------Issue #3 Calculate average weight in kilograms
 
  //this is used to set and the speed of the treadmill
 
  function get_speed(speedSetting){
    const minSpeed = 5;
    const maxSpeed = 12; 
    const numIntervals = 15 - 1;
    const totalRange = maxSpeed - minSpeed;
    const increament = totalRange / numIntervals;
    const calculatedSpeed = minSpeed + increament *(speedSetting -1);
 
    return calculatedSpeed.toFixed(2);
 
  };
 
  // Function to calculate distance
function calculateDistance(speed, timeElapsed) {
  return (speed / 3600) * timeElapsed; // Convert speed to meters per second
};
  useEffect(() => {
    const getTime = () => {
      const date = new Date();
      const localTimeString = date.toLocaleTimeString();
      setLocalTime(localTimeString);
    };
 
    const timer = setInterval(() => {
      getTime();
    }, 1000);
 
    // Clear the interval on component unmount
    return () => clearInterval(timer);
  }, []);
 
  
// This effect updates the time elapsed every second
useEffect(() => {
  let intervalId;
 
  // Define a function to update time elapsed
  const updateTimeElapsed = () => {
      const currentTime = Date.now();
      const elapsedTime = Math.floor((currentTime - startTime) / 1000); // Calculate elapsed time in seconds
      setTimeElapsed(elapsedTime);
  };
 
  // Update the time elapsed every second if the workout is running and speed is not zero
  if (isRunning && speedSetting !== 0) {
      updateTimeElapsed(); // Call updateTimeElapsed immediately to set the initial time
      intervalId = setInterval(updateTimeElapsed, 1000);
      const calculatedSpeed = get_speed(speedSetting);
      setSpeed(calculatedSpeed)
  } else {
      // If the workout is not running or speed is zero, clear the interval and reset the time elapsed to 0
      clearInterval(intervalId);
      //setTimeElapsed(0);
  }
 
  // Clear the interval on component unmount
  return () => {
      clearInterval(intervalId);
  };
}, [isRunning, speedSetting, startTime]); // Listen to changes in isRunning, speed, and startTime
 
// This effect resets the start time whenever the workout starts
 
useEffect(()=>{
  if(isRunning){
    setStartTime(Date.now()); // Reset the start time to the current time    
  }
}, [isRunning]);
 
 
  // This function takes in a time in seconds and returns a string in the format 'mm:ss'
  function formatTime(time) {
    // Calculate the number of minutes by dividing the time in seconds by 60 and rounding down
    const minutes = Math.floor(time / 60);
    // Calculate the number of seconds by taking the remainder of the time divided by 60 and rounding down
    const seconds = Math.floor(time % 60);
    // Return the time in the format 'mm:ss', with a leading '0' for the seconds if they are less than 10
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
 
  useEffect(() => {
    const calculatedDistance = calculateDistance(parseFloat(speed), timeElapsed);
    setDistance(calculatedDistance);
  }, [timeElapsed, speed]);
 
  return (
<div className={styles.container}>
    <div className={styles.subContainer}>
    <span className={styles.label}>
      <span className={styles.icon}><LuClock /></span>
      <span>LOCAL TIME: {localTime}</span>
    </span>
    <span className={styles.label}>
      <span className={styles.icon}><FaFire /></span>
      <span>CALORIES BURNED: {caloriesBurned}</span>
    </span>
    <span className={styles.label}>
      <span className={styles.icon}><GiPathDistance /></span>
      <span>DISTANCE: {distance.toFixed(2)}</span>
    </span>
    <span className={styles.label}>
      <span className={styles.icon}><MdOutlineTimer /></span>
      <span>TIME ELAPSED: {formatTime(timeElapsed)}</span>
    </span>
    <span className={styles.label}>
      <span className={styles.icon}><BsSpeedometer /></span>
      <span>AVERAGE SPEED: {speed}mph</span>
    </span>

    </div>
</div>
  );
}


