"use client"

import { useInputRules } from "@/hooks/useFormUtils";
import { IRegisterBody } from "@/services/auth/auth.types";
import { useFakeRegister } from "@/services/auth/useAuthQueries";
import { Button, Card, Form, Input, Space, Typography } from "antd";
import { useForm } from "antd/es/form/Form";

export default function Register() {

  const [form] = useForm<IRegisterBody>();

  const onSubmit = (values: IRegisterBody) => {
    registerApi(values)
  }

  const { 
    t, 
    registerApi, 
    navigateToLogin,
    waitingForRegister,
   } = useFakeRegister();
   
  const { passwordRules, confirmPasswordRules } = useInputRules();

  return (
    <Card className="w-96">
      <Form form={form} clearOnDestroy onFinish={onSubmit} className="text-end" disabled={waitingForRegister}>
        <Space direction="vertical">

          <Form.Item<IRegisterBody> name={"username"} label={t("username")} rules={passwordRules}>
            <Input />
          </Form.Item>

          <Form.Item<IRegisterBody> name={"password"} label={t("password")} rules={passwordRules}>
            <Input />
          </Form.Item>

          <Form.Item
            label={t("confirmPassword")}
            name="password2"
            dependencies={['password']}
            rules={confirmPasswordRules}
          >
            <Input />
          </Form.Item>

          <Typography.Link onClick={navigateToLogin}>
            {t("haveAccountQuestion")}
          </Typography.Link>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              {t("register")}
            </Button>
          </Form.Item>

        </Space>
      </Form>
    </Card>
  );
}
