import { Routes } from "@/configs/constants/Routes";
import { useRouter } from "next/navigation";

const useRedirect = () => {

    const navigate = useRouter();

    const navigateToHome = () => navigate.push(Routes.home)
    const navigateToLogin = () => navigate.push(Routes.login)
    const navigateToRegister = () => navigate.push(Routes.register)

    return {
        navigateToHome,
        navigateToLogin,
        navigateToRegister
    };
}

export default useRedirect;