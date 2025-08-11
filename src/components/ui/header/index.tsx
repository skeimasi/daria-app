"use client"

import { useTranslation } from "@/configs/providers/translations";
import { useAppDispatch } from "@/configs/redux/hooks";
import useRedirect from "@/hooks/useRedirect";
import { addUserLogs } from "@/states/userActivities/logStates";
import {
    LogoutOutlined
} from '@ant-design/icons';
import { Flex, Tooltip, Typography } from "antd";
import { Header } from "antd/es/layout/layout";

const AppHeader = () => {

    const dispatch = useAppDispatch();
    const { navigateToLogin } = useRedirect();

    const onLanguageChanged = () => {
        setLocale(locale === "fa" ? "en" : "fa");
        dispatch(addUserLogs("changed language"))
    }

    const handleLogout = () => {
        /* 
            1. logout from server
            2. clear cache storages in client side
            3. redirect to login
        */
        dispatch(addUserLogs("logout"))
        navigateToLogin();
    }

    const { t, setLocale, locale } = useTranslation();
    return (
        <Header>
            <Flex className="h-full" align="center" justify="end" gap={"1rem"}>
                <Typography className="!text-white hover:scale-105 cursor-pointer"
                    onClick={onLanguageChanged}>
                    {locale === "fa" ? t("switchToEnglish") : t("switchToPersian")}
                </Typography>
                <Tooltip title={t("logout")}>
                    <LogoutOutlined className='text-xl !text-red-500 cursor-pointer' onClick={handleLogout} />
                </Tooltip>
            </Flex>
        </Header>
    );
}

export default AppHeader;