import { AppConfigs } from "@/configs/constants/Configs";
import { useTranslation } from "@/configs/providers/TranslationProvider";
import { useAppDispatch, useAppSelector } from "@/configs/redux/hooks";
import useRedirect from "@/hooks/useRedirect";
import { addUserLogs, selectorUserLogs } from "@/states/userActivities/logStates";
import { useMutation } from "@tanstack/react-query";
import { App } from "antd";
import { fakeLoginApi, fakeRegisterApi, loginApi } from "./auth.services";

export const useLogin = () => {
    const { t } = useTranslation();
    const { navigateToHome } = useRedirect();
    const { message } = App.useApp();
    const q = useMutation({
        mutationFn: loginApi,
        onSuccess(_data) {
            message.success(t('userSuccessLogin'))
            setTimeout(() => navigateToHome(), AppConfigs.navigationDelay)
        },
        onError(_error) {
        },
    });

    return {
        loginApi: q.mutate,
        loginApiAsync: q.mutateAsync,
        waitingForAuthorize: q.isPending,
    }
}

export const useFakeLogin = () => {

    const dispatch = useAppDispatch();
    const { t } = useTranslation();
    const { navigateToHome, navigateToRegister } = useRedirect();
    const { message } = App.useApp();
    const q = useMutation({
        mutationFn: fakeLoginApi,
        onSuccess(data, variables) {
            dispatch(addUserLogs("succes login"))
            message.success(t('userSuccessLogin'))
            setTimeout(() => navigateToHome(), AppConfigs.navigationDelay)
        },
        onError(error) {
            message.error(t(error.message))
            dispatch(addUserLogs("failed login"))
        },
    });

    return {
        ...q,
        navigateToRegister,
        t,
        loginApi: q.mutate,
        loginApiAsync: q.mutateAsync,
        waitingForAuthorize: q.isPending,
    }
}

export const useFakeRegister = () => {

    const { t } = useTranslation();
    const { navigateToLogin } = useRedirect();
    const { message } = App.useApp();
    const q = useMutation({
        mutationFn: fakeRegisterApi,
        onSuccess(_data) {
            message.success(t('userSuccessCreate'))
            setTimeout(() => navigateToLogin(), AppConfigs.navigationDelay)
        },
        onError(error) {
            message.error(t(error.message))
        },
    });

    return {
        ...q,
        t,
        navigateToLogin,
        registerApi: q.mutate,
        registerApiAsync: q.mutateAsync,
        waitingForRegister: q.isPending,
    }
}