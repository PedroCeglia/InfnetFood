import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(initialValue);

  useEffect(() => {
    const loadStoredValue = async () => {
      try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
          setStoredValue(value);
        }
      } catch (error) {
        console.error("Erro ao carregar do AsyncStorage:", error);
      }
    };
    loadStoredValue();
  }, [key]);

  const setValue = async (value) => {
    try {
      setStoredValue(value);
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.error("Erro ao salvar no AsyncStorage:", error);
    }
  };

  return [storedValue, setValue];
}

