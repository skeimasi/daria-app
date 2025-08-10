"use client"

import { useTranslation } from "@/configs/providers/translations";
import { Flex, Typography } from "antd";
import { Header } from "antd/es/layout/layout";

const AppHeader = () => {

    const onLanguageChanged = () => {
        setLocale(locale === "fa" ? "en" : "fa")
    }
    const { t, setLocale, locale } = useTranslation();
    return (
        <Header>
            <Flex className="h-full" align="center" justify="end">
                <Typography className="!text-white hover:scale-105 cursor-pointer"
                    onClick={onLanguageChanged}>
                    {locale === "fa" ? t("switchToEnglish") : t("switchToPersian")}
                </Typography>
            </Flex>
        </Header>
    );
}

export default AppHeader;