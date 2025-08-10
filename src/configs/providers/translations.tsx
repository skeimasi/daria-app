"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { translations, Locale } from "@/configs/locales";

type TranslationContextType = {
    t: (key: string) => string;
    locale: Locale;
    setLocale: (locale: Locale) => void;
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
    const [locale, setLocale] = useState<Locale>("fa");

    const t = (key: string) => {
        return translations[locale][key] || key;
    };

    return (
        <TranslationContext.Provider value={{ t, locale, setLocale }}>
            {children}
        </TranslationContext.Provider>
    );
};

export const useTranslation = () => {
    const context = useContext(TranslationContext);
    if (!context) {
        throw new Error("useTranslation must be used within a TranslationProvider");
    }
    return context;
};
