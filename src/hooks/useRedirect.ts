import { Routes } from "@/configs/constants/Routes";
import { useRouter } from "next/navigation";

const useRedirect = () => {

    const navigate = useRouter();

    const navigateToLogs = () => navigate.push(Routes.logs)
    const navigateToUsers = () => navigate.push(Routes.users)
    const navigateToHome = () => navigate.push(Routes.home)
    const navigateToLogin = () => navigate.push(Routes.login)
    const navigateToRegister = () => navigate.push(Routes.register)
    const navigateTo = (path: string) => navigate.push(path)

    return {
        navigateToHome,
        navigateToLogin,
        navigateToRegister,
        navigateToLogs,
        navigateToUsers,
        navigateTo
    };
}

export default useRedirect;