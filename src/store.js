import { create } from "zustand";

const useDashboardStore = create((set) => ({
  isRunning: false,
  
  activeComponent: "BigStartPage",
  itemId: null,
  videoUrl: null,
  closeStartMenu: false,
  filteredImages : [],
  selectedRegion: "NORTH AMERICA",
  videoVisible: false,
  speed: 0,
  incline: 0,
  setIncline: (incline) => set({incline}),
  setSpeed: (speed) => set({speed}),
  setVideoVisible:(videoVisible) => set({videoVisible}),
  setSelectedRegion: (region) => set(() => ({ selectedRegion: region })),
  setFilteredImages:(filteredImages) => set({filteredImages}),
  setIsRunning: (isRunning) => set({ isRunning }),
  setActiveComponent: (activeComponent) => set({ activeComponent }),
  setCloseStartMenu: (closeStartMenu) => set({ closeStartMenu }),
  setItemId: (itemId) => set({ itemId }),
  setVideoUrl: (url) => set({ videoUrl: url }),
}));

export default useDashboardStore;
