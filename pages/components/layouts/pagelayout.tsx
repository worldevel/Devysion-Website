import { ReactNode } from 'react';
import React from 'react';
import { Layout, Menu, Row, Col } from 'antd';

const { Header, Content, Footer } = Layout;

const items = [
    {
        key: '1',
        label: (
            <a href="/">HOME</a>
        ),
    },
    {
        key: '2',
        label: (<a href="/capabilities">CAPABILITIES</a>)
    },
    {
        key: '3',
        label: (<a href="/work">WORK</a>)
    },
    {
        key: '4',
        label: (<a href="/events">EVENTS</a>)
    },
    // {
    //     key: '5',
    //     label: (<a href="/blog">BLOG</a>)
    // },
    {
        key: '6',
        label: (<a href="/project">PROJECT</a>)
    },
    {
        key: '7',
        label: (<a href="/aboutus">TEAM</a>)
    },

]

type Props = {
    selectedKey: String,
    children: ReactNode
}
export const PageLayout = ({ selectedKey, children }: Props) => {
    return (
        <>
            <Layout>
                <Header
                    style={{
                        position: 'fixed',
                        zIndex: 1,
                        width: '100%'
                    }}
                    id="header"
                >
                    <div className="logo">
                        <a id="logo">
                            <img alt="logo" src="https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg" />
                            <span>Devysion</span>
                        </a>
                    </div>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[`${selectedKey}`]} items={items}>

                    </Menu>
                </Header>
                <Content>
                    {children}
                </Content>
                <Footer>
                    <Row gutter={[16, 16]} style={{paddingTop:'50px'}}>
                        <Col xs={24} sm={8} md={8} lg={8} xl={8} className="footer-logo">
                            <div>
                                <img src="static/images/mark.png" alt="mark-footer" />
                            </div>
                        </Col>
                        <Col xs={24} sm={8} md={8} lg={8} xl={8}>
                            <h1 style={{ color: 'gray', paddingBottom: '20px' }}>Quick Link</h1>
                            <p style={{ color: 'gray' }}>Capabilities</p>
                            <p style={{ color: 'gray' }}>Work</p>
                            <p style={{ color: 'gray' }}>Events</p>
                            <p style={{ color: 'gray' }}>Blog</p>
                            <p style={{ color: 'gray' }}>Project</p>
                        </Col>
                        <Col xs={24} sm={8} md={8} lg={8} xl={8}>
                            <h1 style={{ color: 'gray', paddingBottom: '20px' }}>Contact Us</h1>
                            <p style={{ color: 'gray' }}>E-mail : devysion1997123@gmail.com</p>
                            <p style={{ color: 'gray' }}>Phone : +1 (530) 430 7888</p>
                            <p style={{ color: 'gray' }}>Address : Linden Street 23 London</p>
                        </Col>
                    </Row>
                    <Row style={{paddingTop:'50px'}}>
                        <Col  xs={24} sm={24} md={24} lg={24} xl={24} style={{textAlign:'center'}}>
                            <p style={{ color: 'gray' }}>© 2022. All rights reserved by William Jackson .</p>
                        </Col>
                    </Row>
                </Footer>
            </Layout>
        </>
    )
}