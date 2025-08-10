import { useMutation } from "@tanstack/react-query";
import { fakeLoginApi, loginApi } from "./auth.services";
import { App } from "antd";
import useRedirect from "@/hooks/useRedirect";
import { AppConfigs } from "@/configs/constants/Configs";
import { useTranslation } from "@/configs/providers/translations";

export const useLogin = () => {
    const { t } = useTranslation();
    const { navigateToHome } = useRedirect();
    const { message } = App.useApp();
    const q = useMutation({
        mutationFn: loginApi,
        onSuccess(data, variables) {
            message.success(t('userSuccessLogin'))
            setTimeout(() => navigateToHome(), AppConfigs.navigationDelay)
        },
    });

    return {
        loginApi: q.mutate,
        loginApiAsync: q.mutateAsync,
        waitingForAuthorize: q.isPending,
    }
}

export const useFakeLogin = () => {

    const { t } = useTranslation();
    const { navigateToHome } = useRedirect();
    const { message } = App.useApp();
    const q = useMutation({
        mutationFn: fakeLoginApi,
        onSuccess(data, variables) {
            message.success(t('userSuccessLogin'))
            setTimeout(() => navigateToHome(), AppConfigs.navigationDelay)
        },
        onError(error) {
            message.error(t(error.message))
        },
    });

    return {
        loginApi: q.mutate,
        loginApiAsync: q.mutateAsync,
        waitingForAuthorize: q.isPending,
    }
}