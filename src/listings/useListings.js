import { useContext } from "react";
import { ListingsContext } from "./listings-context";

export function useListings() {
  const value = useContext(ListingsContext);
  if (!value) {
    throw new Error("useListings must be used within ListingsProvider");
  }
  return value;
}
