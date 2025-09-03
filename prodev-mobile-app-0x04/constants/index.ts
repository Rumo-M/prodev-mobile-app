// constants/index.ts

export const APP_NAME = "ALX Listing App";

export const COLORS = {
  primary: "#2563EB",   // Tailwind blue-600
  secondary: "#9333EA", // Tailwind purple-600
  background: "#F9FAFB", // Tailwind gray-50
  text: "#111827",      // Tailwind gray-900
};

export const MOCK_PROPERTIES = [
  {
    id: 1,
    title: "Modern Apartment in Cape Town",
    location: "Cape Town, South Africa",
    price: "R 1200/night",
    image: require("../assets/images/logo.png"), // Replace with real image later
  },
  {
    id: 2,
    title: "Luxury Villa in Johannesburg",
    location: "Johannesburg, South Africa",
    price: "R 3500/night",
    image: require("../assets/images/splash.png"),
  },
];
