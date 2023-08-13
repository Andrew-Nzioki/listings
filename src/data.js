const countiesData = {
  counties: {
    Baringo: [
      "Baringo Central",
      "Baringo North",
      "East Pokot",
      "Koibatek",
      "Marigat",
      "Mogotio",
      "Tiaty East",
    ],
    Bomet: ["Bomet East", "Chepalungu", "Konoin", "Sotik", "Bomet Central"],
    Bungoma: [
      "Bumula",
      "Bungoma Central",
      "Bungoma East",
      "Bungoma North",
      "Bungoma South",
      "Bungoma West",
      "Cheptais",
      "Kimilili Bungoma",
      "Mt Elgon",
      "Tongaren",
      "Webuye West",
      "Mt Elgon Forest",
      "Bunyala",
    ],
    // ... and so on for other counties ...
    Turkana: [],
    "Uasin Gishu": [],
    Vihiga: [],
    Wajir: [],
    "West Pokot": [],
  },
};

const getCounties = () => {
  return Object.keys(countiesData.counties);
};

const getCountySubcounties = (county) => {
  return countiesData.counties[county] || [];
};

export { getCounties, getCountySubcounties };
