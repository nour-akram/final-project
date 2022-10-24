import { useEffect, useState } from "react";
import { db } from "./firebase";

import React from "react";

export const useFirestore = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .collection("phones")
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let fetched = snap.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          };
        });

        setItems(fetched);
      });

    return unsubscribe;
  }, []);

  return { items };
};
