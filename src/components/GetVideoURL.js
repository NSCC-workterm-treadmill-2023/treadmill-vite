export default function getVideoUrl(itemId) {
  const itemsData = [
    {
      itemId: "ACCRA - GHANA - AFRICA",
      videoUrl: "/videos/Africa/ACCRA -  GHANA.mp4",
    },
    {
      itemId: "BLOUBERSTRAND BEACH -  AFRICA",
      videoUrl: "/videos/Africa/BLOUBERSTRAND BEACH - SOUTH AFRICA.mp4",
    },
    {
      itemId: "DAKAR - EMBASSIES DISCTRICT - AFRICA",
      videoUrl: "/videos/Africa/DAKAR - EMBASSIES DISCTRICT.mp4",
    },
    {
      itemId: "SEASHORE - CAPE TOWN - AFRICA",
      videoUrl: "/videos/Africa/SEASHORE - CAPE TOWN.mp4",
    },
    {
      itemId: "GIZA PYRAMIDS - EGYPT - AFRICA",
      videoUrl: "/videos/Africa/GIZA PYRAMIDS CAIRO - EGYPT - AFRICA.mp4",
    },
    {
      itemId: "HARAJUKU YOYOGI PARK -  JAPAN - ASIA",
      videoUrl: "/videos/Asia/HARAJUKU YOYOGI PARK -  JAPAN.mp4",
    },
    {
      itemId: "SHINJUKU TOKYO - JAPAN - ASIA",
      videoUrl: "/videos/Asia/SHINJUKU TOKYO - JAPAN.mp4",
    },
    {
      itemId: "NEW DELHI - INDIA - ASIA",
      videoUrl: "/videos/Asia/NEW DELHI - INDIA.mp4",
    },
    {
      itemId: "NEW DELHI - SUDEWALK - INDIA - ASIA",
      videoUrl: "/videos/Asia/NEW DELHI - SIDEWALKS, INDIA.mp4",
    },
    {
      itemId: "SEOUL - SOUTH KOREA - ASIA",
      videoUrl: "/videos/Asia/SEOUL - SOUTH KOREA - ASIA.mp4",
    },
    {
      itemId: "XI'AN WALLS - CHINA - ASIA",
      videoUrl: "/videos/Asia/Xi'an City Walls - China - Asia.mp4",
    },
    {
      itemId: "LIMA - PERU - SOUTH AMERICA",
      videoUrl: "/videos/South America/LIMA - PERU - SOUTH AMERICA.mp4",
    },
    {
      itemId: "BUENOS AIRES - ARGENTINA - SOUTH AMERICA",
      videoUrl: "/videos/South America/Buenos Aires - Argentina - South America.mp4",
    },
    {
      itemId: "BOGOTÁ -  COLOMBIA - SOUTH AMERICA",
      videoUrl: "/videos/South America/BOGOTA - CHAPINERO District, COLOMBIA.mp4",
    },
    {
      itemId: "BOGOTÁ - COLOMBIA - SOUTH AMERICA",
      videoUrl: "/videos/South America/BOGOTA - SIMON BOLIVAR PARK, COLOMBIA.mp4",
    },
    {
      itemId: "FORTALEZA - BRAZIL - SOUTH AMERICA",
      videoUrl: "/videos/South America/FORTALEZA - Downtown,  BRAZIL.mp4",
    },
    {
      itemId: "SAO PAULO - BRAZIL - SOUTH AMERICA",
      videoUrl: "/videos/South America/SAO PAULO - Parque IBIRAPUERA.mp4",
    },
    { videoUrl: "/videos/Europe/DEAUVILLE - FRANCE.mp4", itemId: "DEAUVILLE - FRANCE - EUROPE" },
    { videoUrl: "/videos/Europe/des Champs Elyseees - PARIS - FRANCE.mp4", itemId: "des Champs Elysées - FRANCE - EUROPE" },
    { videoUrl: "/videos/Europe/Stockholm - DJURGAARDEN.mp4", itemId: "Stockholm - DJURGÅRDEN - EUROPE" },
    { videoUrl: "/videos/Europe/Stockholm - Gamla Stan_Skeppsholmen.mp4", itemId: "Stockholm - Gamla Stan - EUROPE" },
    { videoUrl: "/videos/Europe/VIENNA - AUSTRIA - EUROPE.mp4", itemId: "VIENNA - AUSTRIA - EUROPE" },
    { videoUrl: "/videos/Europe/Barcelona Beach - Spain - Europe.mp4", itemId: "BARCELONA BEACH - SPAIN - EUROPE" },
    { videoUrl: "/videos/Mix/Earth.mp4", itemId: "EARTH - NATURAL WONDERS" },
    { videoUrl: "/videos/Mix/Forest Nature.mp4", itemId: "NATURE - NATURAL WONDERS" },
    { videoUrl: "/videos/Mix/Safari.mp4", itemId: "SAFARI - NATURAL WONDERS" },
    { videoUrl: "/videos/Mix/Autumn Fields.mp4", itemId: "AUTUMN FIELDS - NATURAL WONDERS" },
    { videoUrl: "/videos/North America/CENTRAL PARK -  NewYork City.mp4", itemId: "CENTRAL PARK -  NewYork City - NORTH AMERICA" },
    { videoUrl: "/videos/North America/LAS VEGAS - THE STRIP-  U.S.A.mp4", itemId: "LAS VEGAS - NORTH AMERICA" },
    { videoUrl: "/videos/North America/MONTREAL - Mt Royal to The Port of Montreal.mp4", itemId: "MONTREAL - NORTH AMERICA" },
    { videoUrl: "/videos/North America/VANCOUVER -  STANLEY PARK.mp4", itemId: "VANCOUVER -  STANLEY PARK - NORTH AMERICA" },
    { videoUrl: "/videos/North America/OTTAWA - RIDEAU's CANAL, Canada.mp4", itemId: "OTTAWA -  RIDEAU'S CANAL - NORTH AMERICA"}

  ];

  const item = itemsData.find((item) => item.itemId === itemId);

  return item ? item.videoUrl : null;
}