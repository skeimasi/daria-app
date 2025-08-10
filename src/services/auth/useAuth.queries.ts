import { useMutation } from "@tanstack/react-query";
import { loginApi } from "./auth.services";
import { App } from "antd";
import useRedirect from "@/hooks/useRedirect";
import { AppConfigs } from "@/configs/constants/Configs";

export const useLogin = () => {

    const { navigateToHome } = useRedirect();
    const { message } = App.useApp();
    const q = useMutation({
        mutationFn: loginApi,
        onSuccess(data, variables) {
            message.success('user authorized successfully')
            setTimeout(() => navigateToHome(), AppConfigs.navigationDelay)
        },
    });

    return {
        loginApi: q.mutate,
        loginApiAsync: q.mutateAsync,
        waitingForAuthorize: q.isPending,
    }
}