import React, { useState, useEffect } from "react";
import styles from "../styles/BottomSideBar.module.css";
import useDashboardStore from "../store";
import dataService from "./dataService";

function BottomSideBar() {
  const setIsRunning = useDashboardStore((state) => state.setIsRunning);
  const isRunning = useDashboardStore((state) => state.isRunning);
  const speed = useDashboardStore((state) => state.speed);
  const setSpeed = useDashboardStore((state) => state.setSpeed);
  const incline = useDashboardStore((state) => state.incline);
  const setIncline = useDashboardStore((state) => state.setIncline);
  const setCloseStartMenu = useDashboardStore(
    (state) => state.setCloseStartMenu
  );
  const closeStartMenu = useDashboardStore((state) => state.closeStartMenu);
  const setActiveComponent = useDashboardStore(
    (state) => state.setActiveComponent
  );
  const setItemId = useDashboardStore((state) => state.setItemId);
  const setSelectedRegion = useDashboardStore((state) => state.setSelectedRegion);

  const[cooldownInProgress, setCooldownInProgress] = useState(false);  //Added useState hook for the cooldown button

  let inactivityTimeout;

  const handleToggle = () => {
    if (isRunning) {
      setIsRunning(false);
      setSpeed(0);
      setIncline(0);
      console.log("Stop");
      setItemId(null);
      setActiveComponent("DisplayImages");
      setSelectedRegion("NORTH AMERICA"); // Reset selectedRegion to "NORTH AMERICA"
    } else {
      setIsRunning(true);
      setSpeed(1);
      console.log("Start");
    }
  };

  const handleUpArrow = () => {
    console.log("Up Arrow");
    const newSpeed = Math.min(speed + 0.5, 15);
    setSpeed(newSpeed);
    if (newSpeed === 0.0) {
      setIsRunning(false);
    } else if (!isRunning && newSpeed > 0) {
      setIsRunning(true);
    }
  };

  const handleDownArrow = () => {
    console.log("Down Arrow");
    const newSpeed = Math.max(speed - 0.5, 0);
    setSpeed(newSpeed);
    if (newSpeed === 0.0) {
      setIsRunning(false);
    } else if (!isRunning && newSpeed > 0.0) {
      setIsRunning(true);
    }
  };
  
  const handleCooldown = () => {     //This function initiates the cooldown process
    if(isRunning && !cooldownInProgress){
      setCooldownInProgress(true);
    }
  }
  const startCoolDown =() => {  
    console.log ("Cool Down Initiated");

    const cooldownDuration = 10000; //Cooldown duration has been set to 10 seconds with an interval of one second 
    const interval = 1000;

    const initialSpeed = speed;

    let currentStep = 0;

    const reduceSpeedStep = () =>{
      const newSpeed = Math.max(initialSpeed - (0.5 * currentStep), 0).toFixed(1);
      setSpeed(parseFloat(newSpeed)); // update the speed

        if(newSpeed === "0.0"){
          setIsRunning(false); //stop the treadmill if the speed reaches 0
          console.log("Cooldown Finished");
          setCooldownInProgress(false);
        }
        else{
          currentStep++;
          setTimeout(reduceSpeedStep, interval)
        }
      };
    reduceSpeedStep();
  };

  useEffect(() => {    //Allows the cooldown function render more than once 
    if(cooldownInProgress && isRunning) {
      startCoolDown();
    }
  },[cooldownInProgress,isRunning,setSpeed,setIsRunning,speed])


  const handleDownIncline = () => {
    console.log("Down Incline");
    const newIncline = Math.max(incline - 0.5, 0);
    setIncline(newIncline);
    changeIncline(newIncline)
  };

  const handleUpIncline = () => {
    console.log("Up Incline");
    const newIncline = Math.min(incline + 0.5, 15);
    setIncline(newIncline);
  };

  const changeIncline = async (currentInc) => {
     await dataService.postData('http://localhost:5000/publish_elevation?elevation', currentInc);
  };

  const changeSpeed = async (currentSpd) => {
    await dataService.postData('http://localhost:5000/publish_speed?speed', currentSpd);
 };

  

  useEffect(() => {
    changeIncline(incline);
    changeSpeed(speed);
  }, [incline, speed]);
  

  // Monitor the speed and inactivity to set the active component
  useEffect(() => {
    const inactivityDuration = 600000; // 10 minutes in milliseconds

    if (speed === 0.0 && !isRunning) {
      inactivityTimeout = setTimeout(() => {
        setCloseStartMenu(false); // Set active component to BigStartPage
      }, inactivityDuration);
    } else {
      clearTimeout(inactivityTimeout);
    }

    return () => {
      clearTimeout(inactivityTimeout);
    };
  }, [speed, isRunning, closeStartMenu]);

  return (
    <div className={styles.container}>
      {/* Incline Controls */}
      <div className={styles.inclineContainer}>
        <label className={styles.inclineLabel}>Incline</label>
        <div className={styles.inclineFlx}>
          <button
            className={styles.buttons}
            onTouchStart={handleDownIncline}
            touch-action="none"
            onClick={handleDownIncline}
            
          >
            <span className={styles.downArrow}>&gt;</span>
          </button>
          <span className={styles.arrowCount}>{incline}</span>
          <button
            className={styles.buttons2}
            onTouchStart={handleUpIncline}
            touch-action="none"
            onClick={handleUpIncline}
          >
            <span className={styles.upArrow}>&gt;</span>
          </button>
        </div>
      </div>

      {/* Start/Stop with Cooldown */}
      <div className={styles.mainBtnsContainer}>
        <button
          touch-action="none"
          className={`${isRunning ? "bg-red-600" : "bg-green-600"} ${
            styles.startStopBtns
          }`}
          onTouchStart={handleToggle}
          onClick={handleToggle}
        >
          {isRunning ? "STOP" : "START"}
        </button>
        {isRunning && (
          <button
            touch-action="none"
            className={styles.cooldownBtn}
            onTouchStart={handleCooldown}
            onClick={handleCooldown}
            disabled={!isRunning || cooldownInProgress}
          >
            COOLDOWN
          </button>
        )}
      </div>

      {/* Speed Controls */}
      <div className={styles.speedContainer}>
        <label className={styles.speedLabel}>Speed</label>
        <div className={styles.btnsAlign}>
          <button
            className={styles.buttons}
            onTouchStart={handleDownArrow}
            touch-action="none"
            onClick={handleDownArrow}
          >
            <span className={styles.downArrow}>&gt;</span>
          </button>
          <span className={styles.arrowCount}>{speed}</span>
          <button
            className={styles.buttons2}
            onTouchStart={handleUpArrow}
            touch-action="none"
            onClick={handleUpArrow}
          >
            <span className={styles.upArrow}>&gt;</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BottomSideBar;