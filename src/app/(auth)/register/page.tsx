"use client"

import { useInputRules } from "@/hooks/useFormUtils";
import useRedirect from "@/hooks/useRedirect";
import { ILoginBody } from "@/services/auth/auth.types";
import { Button, Card, Flex, Form, Input, Space, Typography } from "antd";
import { useForm } from "antd/es/form/Form";
import { useTranslation } from "@/configs/providers/translations";

export default function Register() {

  const [form] = useForm<ILoginBody>();

  const onSubmit = (values: ILoginBody) => {
    console.log('values :>> ', values);
  }

  const { t } = useTranslation();
  const { navigateToLogin } = useRedirect();
  const { passwordRules, confirmPasswordRules } = useInputRules();

  return (
    <Card className="w-96">
      <Form form={form} clearOnDestroy onFinish={onSubmit} className="text-end">
        <Space direction="vertical">

          <Form.Item<ILoginBody> name={"username"} label={t("username")} rules={passwordRules}>
            <Input />
          </Form.Item>

          <Form.Item<ILoginBody> name={"password"} label={t("password")} rules={passwordRules}>
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
              {t("login")}
            </Button>
          </Form.Item>

        </Space>
      </Form>
    </Card>
  );
}
