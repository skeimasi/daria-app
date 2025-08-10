import { useTranslation } from "@/configs/providers/translations";
import { Rule } from "antd/es/form";

export const useInputRules = () => {

    const { t } = useTranslation();

    const passwordRules: Rule[] = [{ required: true, message: t("completeForm") }];

    const confirmPasswordRules: Rule[] = [
        {
            required: true,
        },
        ({ getFieldValue }) => ({
            validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                }
                return Promise.reject(new Error('The new password that you entered do not match!'));
            },
        }),
    ];

    const anotherRules: Rule[] = [{}];


    return {
        passwordRules,
        confirmPasswordRules,
        anotherRules
    };
}