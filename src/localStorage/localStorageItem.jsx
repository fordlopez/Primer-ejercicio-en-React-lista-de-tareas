import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue)


  const [loading, setLoadig] = React.useState(true)


  const [error, setError] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      let parsedItem;
      const localStorageItem = localStorage.getItem(itemName);

      if (!localStorageItem) {
        localStorage.setItem(
          itemName,
          JSON.stringify(initialValue)
        );
        parsedItem = initialValue;
      } else {
        parsedItem = JSON.parse(localStorageItem);
        setItem(parsedItem);
      }

      setLoadig(false);
    }, 1000); // 1 segundo
  }, []);

  const saveItem = (newItem) => {
    setItem(newItem)
    localStorage.setItem(itemName, JSON.stringify(newItem))
  }

  return { item, saveItem, loading, error }
}

export { useLocalStorage }