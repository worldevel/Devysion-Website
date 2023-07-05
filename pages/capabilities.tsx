import { PageLayout } from './components/layouts/pagelayout'
import ScrollElement from 'rc-scroll-anim/lib/ScrollElement';
import { Button, Row, Col, Card, Divider } from 'antd';
import TweenOne from 'rc-tween-one';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import { ReactElement } from 'react';
import { MailOutlined, WhatsAppOutlined, EnvironmentOutlined, UserOutlined, SafetyOutlined, PhoneOutlined } from '@ant-design/icons';

const { Meta } = Card

const Capabilities = () => {
    return (
        <>
            <section className="banner capabilities-wrapper">
                <div className="banner-text-all-wrapper" key="banner">
                    <h1 key="h1" className='banner-title'>What We Can Do For You</h1>
                </div>
            </section>
            <section className='project-contact-wrapper'>
                <div style={{ textAlign: 'center' }}>
                    <p style={{ color: "#1da57a", fontSize: '30px' }}>What We Do</p>
                    <p className='project-contact-logo'>We create effective strategies, powerful identities, seamless interactions, and memorable experiences to connect people to brands and organizations.</p>
                </div>
                {/* <Row gutter={[32, 16]}>
                    <Col xs={24} sm={12} md={12} lg={8} xl={8}>
                        <rdCa
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
                </Row> */}
            </section>
            <section className="capabilities-content-wrapper">
                <Row className='content-row'>
                    <Col xs={24} sm={8} md={8} lg={8} xl={8}>
                        <div>
                            <p style={{ color: 'white', fontSize: '35px' }}>Strategy</p>
                            <p style={{ color: 'white', fontSize: '17px' }}>Whether a company is envolving or new to the industry, we work with businesses and organizations of all sizes to clarify their purposes, find their voice, understand their customers, and define their goals</p>
                            <p><a href="">Learn more about strategy</a></p>
                        </div>
                    </Col>
                    <Col xs={24} sm={16} md={16} lg={16} xl={16}>
                        <img src="static/images/download-1.jpg" alt="alt" />
                    </Col>
                </Row>
                <Row className='content-row'>
                    <Col xs={24} sm={16} md={16} lg={16} xl={16}>
                        <img src="static/images/download-2.jpg" alt="alt" />
                    </Col>
                    <Col xs={24} sm={8} md={8} lg={8} xl={8}>
                        <div>
                            <p style={{ color: 'white', fontSize: '35px' }}>Branding</p>
                            <p style={{ color: 'white', fontSize: '17px' }}>We build brands that inspire. Branding is about expressing a company's personality and values, building a comprehensive and consistent experience that resonates with customers and nutures lasting relationships.</p>
                            <p><a href="">Learn more about branding</a></p>
                        </div>
                    </Col>
                </Row>
                <Row className='content-row'>
                    <Col xs={24} sm={8} md={8} lg={8} xl={8}>
                        <div>
                            <p style={{ color: 'white', fontSize: '35px' }}>Digital</p>
                            <p style={{ color: 'white', fontSize: '17px' }}>Navigating the connected the world can be complicated. We help mediate the space between users and the information they need by building intuitive, user-centric interfaces that engage, delight and communicate clearly on all devices.</p>
                            <p><a href="">Learn more about digital</a></p>
                        </div>
                    </Col>
                    <Col xs={24} sm={16} md={16} lg={16} xl={16}>
                        <img src="static/images/download-3.jpg" alt="alt" />
                    </Col>
                </Row>
                <Row className='content-row'>
                    <Col xs={24} sm={16} md={16} lg={16} xl={16}>
                        <img src="static/images/download-4.jpg" alt="alt" />
                    </Col>
                    <Col xs={24} sm={8} md={8} lg={8} xl={8}>
                        <div>
                            <p style={{ color: 'white', fontSize: '35px' }}>Motion</p>
                            <p style={{ color: 'white', fontSize: '17px' }}>We know motion. For over 20 years we've created award-winning videos that combine design, animations, live action and visual effects for businesses of all sizes.</p>
                            <p><a href="">Learn more about motion</a></p>
                        </div>
                    </Col>
                </Row>
                <p style={{fontSize:'40px', textAlign:'center', color:'gray', paddingTop:'50px'}}>Clients</p>
                <Row gutter={[96,16]} justify="center" style={{alignItems:"center"}}>
                    <Col><img src="http://rainbowit.net/themes/trydo/wp-content/uploads/2020/04/brand-01.png" alt="alt" style={{width:'75%',filter: "invert(1)"}} /></Col>
                    <Col><img src="http://rainbowit.net/themes/trydo/wp-content/uploads/2020/04/brand-02.png" alt="alt" style={{width:'75%',filter: "invert(1)"}} /></Col>
                    <Col><img src="http://rainbowit.net/themes/trydo/wp-content/uploads/2020/04/brand-03.png" alt="alt" style={{width:'75%',filter: "invert(1)"}} /></Col>
                    <Col><img src="http://rainbowit.net/themes/trydo/wp-content/uploads/2020/04/brand-04.png" alt="alt" style={{width:'75%',filter: "invert(1)"}} /></Col>
                    <Col><img src="http://rainbowit.net/themes/trydo/wp-content/uploads/2020/04/brand-05.png" alt="alt" style={{width:'75%',filter: "invert(1)"}} /></Col>
                </Row>
                <Row gutter={[96,16]} justify="center" className='content-row' style={{alignItems:"center"}}>
                    <Col><img src="http://rainbowit.net/themes/trydo/wp-content/uploads/2020/04/brand-06.png" alt="alt" style={{width:'75%',filter: "invert(1)"}} /></Col>
                    <Col><img src="http://rainbowit.net/themes/trydo/wp-content/uploads/2020/04/brand-01.png" alt="alt" style={{width:'75%',filter: "invert(1)"}} /></Col>
                    <Col><img src="http://rainbowit.net/themes/trydo/wp-content/uploads/2020/04/brand-02.png" alt="alt" style={{width:'75%',filter: "invert(1)"}} /></Col>
                    <Col><img src="http://rainbowit.net/themes/trydo/wp-content/uploads/2020/04/brand-03.png" alt="alt" style={{width:'75%',filter: "invert(1)"}} /></Col>
                </Row>
            </section>
        </>
    )
};


Capabilities.getLayout = (component: ReactElement) => {
    return (
        <PageLayout selectedKey="2">
            {component}
        </PageLayout>
    )
}


export default Capabilities;