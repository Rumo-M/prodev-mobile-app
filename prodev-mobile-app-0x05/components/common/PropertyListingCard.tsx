import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import propertyCardStyle from "../../styles/_propertyCardStyle";

interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  image: any; // require() or remote URI
}

export default function PropertyListingCard({ property }: { property: Property }) {
  return (
    <TouchableOpacity style={propertyCardStyle.card}>
      <Image
        source={property.image}
        style={propertyCardStyle.image}
        resizeMode="cover"
      />
      <View>
        <Text style={propertyCardStyle.title}>{property.title}</Text>
        <Text style={propertyCardStyle.location}>{property.location}</Text>
        <Text style={propertyCardStyle.price}>{property.price}</Text>
      </View>
    </TouchableOpacity>
  );
}
