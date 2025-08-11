"use client"

import { Routes } from '@/configs/constants/Routes';
import { useTranslation } from "@/configs/providers/translations";
import useRedirect from '@/hooks/useRedirect';
import {
    DesktopOutlined,
    PieChartOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('مدیریت کاربران', Routes.users, <PieChartOutlined />),
    getItem('فعالیت کاربر', Routes.logs, <DesktopOutlined />),
];

const AppLayout: React.FC<Readonly<{
    children: React.ReactNode;
}>> = ({
    children,
}) => {
        const { navigateTo } = useRedirect();
        const [collapsed, setCollapsed] = useState(false);
        const {
            token: { colorBgContainer, borderRadiusLG },
        } = theme.useToken();

        const { t } = useTranslation();

        return (
            <Layout className='h-screen'>
                <Sider collapsible collapsed={collapsed} className='mt-[1px]' onCollapse={(value) => setCollapsed(value)}>
                    <Menu theme="dark" defaultSelectedKeys={[Routes.users]} mode="inline" items={items}
                        onClick={(k) => {
                            navigateTo(k.key)
                        }}
                    />
                </Sider>
                <Layout>
                    <Header style={{ padding: 0, background: colorBgContainer }} />
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }} items={[{ title: t("panel") }, { title: t("user") }]} />
                        {children}
                    </Content>
                </Layout>
            </Layout>
        );
    };

export default AppLayout;