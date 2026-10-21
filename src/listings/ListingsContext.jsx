import { useMemo, useState } from "react";
import { propertyListings } from "../data/propertyListings";
import { ListingsContext } from "./listings-context";
import { loadUserListings, saveUserListings } from "./storage";

export function ListingsProvider({ children }) {
  const [userListings, setUserListings] = useState(() => loadUserListings());

  const value = useMemo(() => {
    const addListing = (listing) => {
      setUserListings((current) => {
        const next = [listing, ...current.filter((item) => item.id !== listing.id)];
        saveUserListings(next);
        return next;
      });
    };

    const removeListing = (id) => {
      setUserListings((current) => {
        const next = current.filter((item) => item.id !== id);
        saveUserListings(next);
        return next;
      });
    };

    return {
      userListings,
      listings: [...userListings, ...propertyListings],
      addListing,
      removeListing,
    };
  }, [userListings]);

  return (
    <ListingsContext.Provider value={value}>{children}</ListingsContext.Provider>
  );
}
