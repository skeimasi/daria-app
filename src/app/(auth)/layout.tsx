"use client"

import { Col, Flex, Image, Layout, Row } from "antd";
import '@ant-design/v5-patch-for-react-19';
import React from "react";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="relative h-screen overflow-hidden">
            <div className="absolute w-64 h-64 left-1/2 -translate-y-1/2 top-1/2">
                {children}
            </div>
        </div>
    );
}
