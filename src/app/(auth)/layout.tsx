"use client"

import { Col, Flex, Layout, Row } from "antd";
import '@ant-design/v5-patch-for-react-19';

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Row>
            <Col span={18} className="bg-red-100 h-screen">AAAAA</Col>
            <Col>
                {children}
            </Col>
        </Row>
    );
}
