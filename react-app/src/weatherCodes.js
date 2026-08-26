// weatherCodes.js
// Harta codurilor de vreme WMO (cele trimise de Open-Meteo) -> emoji + descriere în română.
// Îl pui în folderul src/ și îl imporți: import { getWeather } from "./weatherCodes";

export const weatherCodes = {
  0:  { emoji: "☀️",  descriere: "Cer senin" },
  1:  { emoji: "🌤️", descriere: "Predominant senin" },
  2:  { emoji: "⛅",  descriere: "Parțial noros" },
  3:  { emoji: "☁️",  descriere: "Înnorat" },

  45: { emoji: "🌫️", descriere: "Ceață" },
  48: { emoji: "🌫️", descriere: "Ceață cu depunere de chiciură" },

  51: { emoji: "🌦️", descriere: "Burniță ușoară" },
  53: { emoji: "🌦️", descriere: "Burniță moderată" },
  55: { emoji: "🌧️", descriere: "Burniță deasă" },
  56: { emoji: "🌧️", descriere: "Burniță înghețată ușoară" },
  57: { emoji: "🌧️", descriere: "Burniță înghețată deasă" },

  61: { emoji: "🌦️", descriere: "Ploaie ușoară" },
  63: { emoji: "🌧️", descriere: "Ploaie moderată" },
  65: { emoji: "🌧️", descriere: "Ploaie puternică" },
  66: { emoji: "🌧️", descriere: "Ploaie înghețată ușoară" },
  67: { emoji: "🌧️", descriere: "Ploaie înghețată puternică" },

  71: { emoji: "🌨️", descriere: "Ninsoare ușoară" },
  73: { emoji: "❄️",  descriere: "Ninsoare moderată" },
  75: { emoji: "❄️",  descriere: "Ninsoare puternică" },
  77: { emoji: "❄️",  descriere: "Fulgi de zăpadă" },

  80: { emoji: "🌦️", descriere: "Averse ușoare" },
  81: { emoji: "🌧️", descriere: "Averse moderate" },
  82: { emoji: "⛈️",  descriere: "Averse violente" },

  85: { emoji: "🌨️", descriere: "Averse de zăpadă ușoare" },
  86: { emoji: "🌨️", descriere: "Averse de zăpadă puternice" },

  95: { emoji: "⛈️",  descriere: "Furtună" },
  96: { emoji: "⛈️",  descriere: "Furtună cu grindină ușoară" },
  99: { emoji: "⛈️",  descriere: "Furtună cu grindină puternică" },
};

// Funcție ajutătoare: îi dai un cod, îți dă {emoji, descriere}.
// Dacă codul nu există în hartă, întoarce ceva neutru (nu crapă).
export function getWeather(code) {
  return weatherCodes[code] || { emoji: "❓", descriere: "Necunoscut" };
}
