import { Property } from "../interfaces";

// Sample property data
export const properties: Property[] = [
  {
    id: "1",
    title: "Modern Apartment in Cape Town",
    location: "Cape Town, South Africa",
    price: "R1200/night",
    image: require("../assets/images/splash.png"),
    bedrooms: 2,
    bathrooms: 1,
    area: 85,
    description: "A cozy modern apartment with stunning city views.",
  },
  {
    id: "2",
    title: "Luxury Villa in Johannesburg",
    location: "Johannesburg, South Africa",
    price: "R4500/night",
    image: require("../assets/images/logo.png"),
    bedrooms: 4,
    bathrooms: 3,
    area: 250,
    description: "Spacious luxury villa with private pool and garden.",
  },
  {
    id: "3",
    title: "Beachfront Condo in Durban",
    location: "Durban, South Africa",
    price: "R2200/night",
    image: require("../assets/images/google.png"),
    bedrooms: 3,
    bathrooms: 2,
    area: 120,
    description: "Enjoy the beach right outside your balcony.",
  },
  {
    id: "4",
    title: "Cozy Studio in Pretoria",
    location: "Pretoria, South Africa",
    price: "R800/night",
    image: require("../assets/images/facebook.png"),
    bedrooms: 1,
    bathrooms: 1,
    area: 45,
    description: "Perfect for short stays, fully furnished studio.",
  },
];
