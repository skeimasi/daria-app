"use client"

import { useTranslation } from "@/configs/providers/translations";
import { useInputRules } from "@/hooks/useFormUtils";
import useRedirect from "@/hooks/useRedirect";
import { ILoginBody } from "@/services/auth/auth.types";
import { useFakeLogin } from "@/services/auth/useAuth.queries";
import { Button, Card, Form, Input, Space, Typography } from "antd";
import { useForm } from "antd/es/form/Form";

export default function Login() {

  const [form] = useForm<ILoginBody>();


  const onSubmit = (values: ILoginBody) => {
    loginApi(values)
  }


  const { loginApi, waitingForAuthorize } = useFakeLogin();
  const { t } = useTranslation();
  const { navigateToRegister } = useRedirect();
  const { passwordRules } = useInputRules();

  return (
    <Card className="w-96">
      <Form form={form} clearOnDestroy onFinish={onSubmit} className="text-end" disabled={waitingForAuthorize}>
        <Space direction="vertical">

          <Form.Item<ILoginBody> name={"username"} label={t("username")} rules={passwordRules}>
            <Input />
          </Form.Item>

          <Form.Item<ILoginBody> name={"password"} label={t("password")} rules={passwordRules}>
            <Input />
          </Form.Item>

          <Typography.Link onClick={navigateToRegister}>
            {t("createNewAccount")}
          </Typography.Link>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              {t("login")}
            </Button>
          </Form.Item>

        </Space>
      </Form>
    </Card>
  );
}
