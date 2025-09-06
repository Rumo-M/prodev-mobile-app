import React from "react";
import { ScrollView } from "react-native";
import PropertyListingCard from "../common/PropertyListingCard";
import { properties } from "../../constants/data";

export default function PropertyListing() {
  return (
    <ScrollView className="p-4 bg-white">
      {properties.map((property) => (
        <PropertyListingCard key={property.id} property={property} />
      ))}
    </ScrollView>
  );
}
