import { StyleSheet } from "react-native";

const joinStyle = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
    color: "#333",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 8,
  },
  linkText: {
    fontSize: 14,
    color: "#2563EB",
    fontWeight: "600",
  },
});

export default joinStyle;
