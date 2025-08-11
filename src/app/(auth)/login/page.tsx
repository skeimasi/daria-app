"use client"

import { useInputRules } from "@/hooks/useFormUtils";
import { ILoginBody } from "@/services/auth/auth.types";
import { useFakeLogin } from "@/services/auth/useAuthQueries";
import { Button, Card, Form, Input, Space, Typography } from "antd";
import { useForm } from "antd/es/form/Form";

export default function Login() {

  const [form] = useForm<ILoginBody>();
  const {
    t,
    navigateToRegister,
    loginApi,
    waitingForAuthorize
  } = useFakeLogin();
  const { passwordRules } = useInputRules();

  const onSubmit = (values: ILoginBody) => {
    loginApi(values)
  }

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
