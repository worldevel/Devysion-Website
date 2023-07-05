import { PageLayout } from './components/layouts/pagelayout'
import ScrollElement from 'rc-scroll-anim/lib/ScrollElement';
import { Button, Row, Col, Statistic, Card } from 'antd';
import TweenOne from 'rc-tween-one';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import { ReactElement } from 'react';
import { EnvironmentOutlined, WhatsAppOutlined, UserOutlined } from '@ant-design/icons';

const { Meta } = Card;

const Aboutus = () => {
    return (
        <>
            <section className="banner capabilities-wrapper">
                <div className="banner-text-all-wrapper" key="banner">
                    <h1 key="h1" className='banner-title'>TEAM</h1>
                </div>
            </section>
            {/* <section className='aboutus-recommend-wrapper'>
                <Row gutter={[48, 16]}>
                    <Col xs={24} sm={24} md={10} lg={10} xl={10}>
                        <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_500/http://rainbowit.net/themes/trydo/wp-content/uploads/2020/08/about-3.jpg" alt="abous-logo" style={{ width: '100%', borderRadius: '10px' }} />
                    </Col>
                    <Col xs={24} sm={24} md={14} lg={14} xl={14} style={{ paddingTop: '75px' }}>
                        <p style={{ fontSize: '20px', color: '#1da57a', fontWeight: 'normal' }}>ABOUT US</p>
                        <p style={{ fontSize: '45px', color: '#fff', fontWeight: 'bold' }} className="aboutus-intro">Save your time by using Devysion and present yours.</p>
                        <p style={{ fontSize: '20px', color: 'gray', fontWeight: 'lighter' }}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form. have suffered alteration in some form majority.</p>
                        <Row gutter={[16, 16]} style={{ paddingTop: '30px' }}>
                            <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                                <Statistic title="AWARDS" value={'800+'} />
                            </Col>
                            <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                                <Statistic title="HAPPY CLIENT" value={'1200+'} />
                            </Col>
                            <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                                <Statistic title="DEVELOPERS" value={'12+'} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </section> */}

            <section className='aboutus-team-wrapper'>
                <p style={{ fontSize: '45px', color: '#fff', fontWeight: 'bold' }} className="aboutus-team-intro">Skilled Team</p>
                <p style={{ fontSize: '20px', color: 'lightgray', fontWeight: 'lighter' }}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                <Row gutter={[48,16]} style={{paddingTop:'50px'}}>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                        <Card
                            bordered={false}
                            hoverable
                            cover={<img src="http://rainbowit.net/themes/trydo/wp-content/uploads/2020/04/team-01.jpg" alt="alt"></img>}
                        >
                            <Meta
                                avatar={<h1><UserOutlined /></h1>}
                                // title="William"
                                description={<div>
                                    <p>William Jackson</p>
                                    <p>Logo Designer</p>
                                </div>
                                }
                            />
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                    <Card
                            bordered={false}
                            hoverable
                            cover={<img src="http://rainbowit.net/themes/trydo/wp-content/uploads/2020/04/team-02.jpg" alt="alt"></img>}
                        >
                            <Meta
                                avatar={<h1><UserOutlined /></h1>}
                                // title="William"
                                description={<div>
                                    <p>William Jackson</p>
                                    <p>Mark Designer</p>
                                </div>
                                }
                            />
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                    <Card
                            bordered={false}
                            hoverable
                            cover={<img src="http://rainbowit.net/themes/trydo/wp-content/uploads/2020/04/team-03.jpg" alt="alt"></img>}
                        >
                            <Meta
                                avatar={<h1><UserOutlined /></h1>}
                                // title="William"
                                description={<div>
                                    <p>William Jackson</p>
                                    <p>Web Developer</p>
                                </div>
                                }
                            />
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                    <Card
                            bordered={false}
                            hoverable
                            cover={<img src="http://rainbowit.net/themes/trydo/wp-content/uploads/2020/04/team-12.jpg" alt="alt"></img>}
                        >
                            <Meta
                                avatar={<h1><UserOutlined /></h1>}
                                description={<div>
                                    <p>William Jackson</p>
                                    <p>Senior Designer</p>
                                </div>
                                }
                            />
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                    <Card
                            bordered={false}
                            hoverable
                            cover={<img src="http://rainbowit.net/themes/trydo/wp-content/uploads/2020/04/team-05.jpg" alt="alt"></img>}
                        >
                            <Meta
                                avatar={<h1><UserOutlined /></h1>}
                                // title="William"
                                description={<div>
                                    <p>William Jackson</p>
                                    <p>Mucis Writer</p>
                                </div>
                                }
                            />
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                    <Card
                            bordered={false}
                            hoverable
                            cover={<img src="http://rainbowit.net/themes/trydo/wp-content/uploads/2020/04/team-06.jpg" alt="alt"></img>}
                        >
                            <Meta
                                avatar={<h1><UserOutlined /></h1>}
                                // title="William"
                                description={<div>
                                    <p>William Jackson</p>
                                    <p>Full Stack Developer</p>
                                </div>
                                }
                            />
                        </Card>
                    </Col>
                </Row>
            </section>
            <section className='aboutus-mark-wrapper'>
                <Row gutter={[96,16]} justify="center" style={{alignItems:"center"}}>
                    <Col><img src="http://rainbowit.net/themes/trydo/wp-content/uploads/2020/04/brand-01.png" alt="alt" style={{width:'75%',filter: "invert(1)"}} /></Col>
                    <Col><img src="http://rainbowit.net/themes/trydo/wp-content/uploads/2020/04/brand-02.png" alt="alt" style={{width:'75%',filter: "invert(1)"}} /></Col>
                    <Col><img src="http://rainbowit.net/themes/trydo/wp-content/uploads/2020/04/brand-03.png" alt="alt" style={{width:'75%',filter: "invert(1)"}} /></Col>
                    <Col><img src="http://rainbowit.net/themes/trydo/wp-content/uploads/2020/04/brand-04.png" alt="alt" style={{width:'75%',filter: "invert(1)"}} /></Col>
                    <Col><img src="http://rainbowit.net/themes/trydo/wp-content/uploads/2020/04/brand-05.png" alt="alt" style={{width:'75%',filter: "invert(1)"}} /></Col>
                </Row>
                <Row gutter={[96,16]} justify="center" style={{paddingTop:'75px',alignItems:"center"}}>
                    <Col><img src="http://rainbowit.net/themes/trydo/wp-content/uploads/2020/04/brand-06.png" alt="alt" style={{width:'75%',filter: "invert(1)"}} /></Col>
                    <Col><img src="http://rainbowit.net/themes/trydo/wp-content/uploads/2020/04/brand-01.png" alt="alt" style={{width:'75%',filter: "invert(1)"}} /></Col>
                    <Col><img src="http://rainbowit.net/themes/trydo/wp-content/uploads/2020/04/brand-02.png" alt="alt" style={{width:'75%',filter: "invert(1)"}} /></Col>
                    <Col><img src="http://rainbowit.net/themes/trydo/wp-content/uploads/2020/04/brand-03.png" alt="alt" style={{width:'75%',filter: "invert(1)"}} /></Col>
                </Row>
            </section>
        </>
    )
};


Aboutus.getLayout = (component: ReactElement) => {
    return (
        <PageLayout selectedKey="7">
            {component}
        </PageLayout>
    )
}


export default Aboutus;