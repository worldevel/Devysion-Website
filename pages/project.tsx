import { PageLayout } from './components/layouts/pagelayout'
import ScrollElement from 'rc-scroll-anim/lib/ScrollElement';
import { Button, Row, Col, Card, Input } from 'antd';
import TweenOne from 'rc-tween-one';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import { ReactElement } from 'react';
import { MailOutlined, WhatsAppOutlined, EnvironmentOutlined, UserOutlined, SafetyOutlined, PhoneOutlined } from '@ant-design/icons';

const { Meta } = Card;

const { TextArea } = Input;

const Project = () => {
    return (
        <>
            <section className="banner capabilities-wrapper">
                <div className="banner-text-all-wrapper" key="banner">
                    <h1 key="h1" className='banner-title'>START A PROJECT</h1>
                </div>
            </section>
            <section className='project-contact-wrapper'>
                <div style={{ textAlign: 'center' }}>
                    <p style={{ color: "#1da57a", fontSize: '30px' }}>CONTACT US TODAY</p>
                    <p className='project-contact-logo'>Build wonderful projects today!</p>
                </div>
                <Row gutter={[32, 16]}>
                    <Col xs={24} sm={12} md={12} lg={8} xl={8}>
                        <Card
                            bordered={false}
                            hoverable
                        >
                            <Meta
                                avatar={<h1><WhatsAppOutlined /></h1>}
                                title="Call us Today"
                                description={<div>
                                    <p>PS: +1 254 3657 456</p>
                                    <p>HO: +1 739 0740 223</p>
                                </div>
                                }
                            />
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={8} xl={8}>
                        <Card
                            bordered={false}
                            hoverable
                        >
                            <Meta
                                avatar={<h1><MailOutlined /></h1>}
                                title="Send us Mail"
                                description={<div>
                                    <p>MR: admin@william.com</p>
                                    <p>HR: hello@william.com</p>
                                </div>
                                }
                            />
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={8} xl={8}>
                        <Card
                            bordered={false}
                            hoverable
                        >
                            <Meta
                                avatar={<h1><EnvironmentOutlined /></h1>}
                                title="Location"
                                description={<div>
                                    <p>123 Main Street, lion, France</p>
                                    <p>10030 is an example.</p>
                                </div>
                                }
                            />
                        </Card>
                    </Col>
                </Row>
            </section>
            <section className='project-book-wrapper'>
                <Row gutter={[48, 16]} style={{textAlign:'center'}}>
                    <Col xs={24} sm={24} md={14} lg={14} xl={14}>
                        <p style={{ fontSize: '35px', color: '#1da57a', fontWeight: 'normal' }}>Start a Project</p>
                        <Input size="large" placeholder="Full name" prefix={<UserOutlined />} />
                        <Input size="large" placeholder="Company or Organization" prefix={<SafetyOutlined />} />
                        <Input size="large" placeholder="E-mail address" prefix={<MailOutlined />} />
                        <Input size="large" placeholder="Phone number" prefix={<PhoneOutlined />} />
                        <Input size="large" placeholder="Location" prefix={<EnvironmentOutlined />} />
                        <TextArea rows={4} placeholder="Tell us a bit about the project." />
                        <Button type="primary" size="large" style={{marginTop:'35px', width:'300px', height:'60px'}}>Submit</Button>
                    </Col>
                    <Col xs={24} sm={24} md={10} lg={10} xl={10}>
                        <img src="http://rainbowit.net/themes/trydo/wp-content/uploads/2020/08/about-6.jpg" alt="abous-logo" style={{ width: '100%', borderRadius: '10px' }} />
                    </Col>
                </Row>
            </section>
        </>
    )
};

Project.getLayout = (component: ReactElement) => {
    return (
        <PageLayout selectedKey="6">
            {component}
        </PageLayout>
    )
}


export default Project;