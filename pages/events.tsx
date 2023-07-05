import { PageLayout } from './components/layouts/pagelayout'
import { Button, Row, Card, Col, Avatar } from 'antd';
import { ReactElement } from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined, WhatsAppOutlined } from '@ant-design/icons';

import { Carousel } from 'antd';

const { Meta } = Card;


const gridStyle: React.CSSProperties = {
    width: '25%',
    textAlign: 'center',
};



const contentStyle: React.CSSProperties = {
    // height: '100vh',
    width: '100%',
    color: '#fff',
    lineHeight: '60px',
    textAlign: 'center',
    background: `url("http://rainbowit.net/themes/trydo/wp-content/uploads/2020/08/dp-big-portfolio-03-1536x1024.jpg") no-repeat center/cover`,
};

const carousel_info = [
    {
        url: 'http://rainbowit.net/themes/trydo/wp-content/uploads/2020/04/trydo-blog-new-8-1020x430.jpg',
    },
    {
        url: 'http://rainbowit.net/themes/trydo/wp-content/uploads/2020/04/trydo-blog-new-7-1020x430.jpg',
    },
    {
        url: 'http://rainbowit.net/themes/trydo/wp-content/uploads/2020/04/trydo-blog-new-10-1020x430.jpg',
    },
    {
        url: 'http://rainbowit.net/themes/trydo/wp-content/uploads/2020/04/trydo-blog-new-5-1020x430.jpg',
    },
]

const data = carousel_info.map((item, i) => {
    let cStyle: React.CSSProperties = {
        // height: '90vh',
        color: '#fff',
        lineHeight: '60px',
        textAlign: 'center',
    }
    return (
        <div key={i}>
            <div style={cStyle}>
                <img src={item.url} alt="alt" style={{ width: "100%", borderRadius: '30px' }} />
            </div>
        </div>
    )
})
const Events = () => {
    return (
        <>
            <section className="banner capabilities-wrapper">
                <div className="banner-text-all-wrapper" key="banner">
                    <h1 key="h1" className='banner-title'>EVENTS</h1>
                    <p key="content">WORKSHOPS, TALKS AND GET TOGETHERS</p>
                </div>
            </section>
            <section className='event-carousel-section'>
                <Row>
                    <Col xs={1} sm={1} md={3} lg={3} xl={3}></Col>
                    <Col xs={22} sm={22} md={18} lg={18} xl={18}>
                        <Carousel autoplay>
                            {data}
                        </Carousel>
                    </Col>
                    <Col xs={1} sm={1} md={3} lg={3} xl={3}></Col>
                </Row>
            </section>
            <section className='event-card-section'>
                <Row gutter={[32, 16]}>
                    <Col xs={24} sm={12} md={12} lg={8} xl={8}>
                        <Card
                            bordered={false}
                            hoverable
                        >
                            <Meta
                                avatar={<h1><WhatsAppOutlined /></h1>}
                                title="11/21"
                                description={<div>
                                    <p>Join us tomorrow on FB Live as we interview Nike Sportswear designer, Jennet Liaw for our podcast.</p>
                                    <p>From williamjackson0123@outlook.com</p>
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
                                avatar={<h1><WhatsAppOutlined /></h1>}
                                title="11/21"
                                description={<div>
                                    <p>Join us tomorrow on FB Live as we interview Nike Sportswear designer, Jennet Liaw for our podcast.</p>
                                    <p>From williamjackson0123@outlook.com</p>
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
                                avatar={<h1><WhatsAppOutlined /></h1>}
                                title="11/21"
                                description={<div>
                                    <p>Join us tomorrow on FB Live as we interview Nike Sportswear designer, Jennet Liaw for our podcast.</p>
                                    <p>From williamjackson0123@outlook.com</p>
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
                                avatar={<h1><WhatsAppOutlined /></h1>}
                                title="11/21"
                                description={<div>
                                    <p>Join us tomorrow on FB Live as we interview Nike Sportswear designer, Jennet Liaw for our podcast.</p>
                                    <p>From williamjackson0123@outlook.com</p>
                                </div>
                                }
                            />
                        </Card>
                    </Col>
                </Row>
                <Row gutter={[16, 16]} style={{ paddingTop: '150px', paddingBottom:"50px" }}>
                    <Col xs={6} sm={6} md={8} lg={8} xl={8}></Col>
                    <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                        <Button type="primary" shape="round" icon={<WhatsAppOutlined />} style={{ width: '100%', height: '60px' }} size="large" >
                            Plan an Event
                        </Button>
                    </Col>
                    <Col xs={6} sm={6} md={8} lg={8} xl={8}></Col>
                </Row>
            </section>
        </>
    )
};


Events.getLayout = (component: ReactElement) => {
    return (
        <PageLayout selectedKey="4">
            {component}
        </PageLayout>
    )
}


export default Events;