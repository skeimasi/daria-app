import fa from "./fa";
import en from "./en";
export type Locale = "fa" | "en";

export const translations: Record<Locale, Record<string, string>> = {
  fa,
  en,
};
