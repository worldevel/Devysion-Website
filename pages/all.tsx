import { PageLayout } from './components/layouts/pagelayout'
import ScrollElement from 'rc-scroll-anim/lib/ScrollElement';
import { Button, Row, Col, Radio } from 'antd';
import TweenOne from 'rc-tween-one';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import { ReactElement, useState } from 'react';
import { useRouter } from 'next/router';

const data = [
    {
        image: 'static/images/cases/project-24.png',
        category: 'brand'
    },
    {
        image: 'static/images/cases/project-25.png',
        category: 'brand'
    },
    {
        image: 'static/images/cases/project-26.png',
        category: 'brand'
    },
    {
        image: 'static/images/cases/project-27.png',
        category: 'brand'
    },
    {
        image: 'static/images/cases/project-28.png',
        category: 'brand'
    },
    {
        image: 'static/images/cases/project-29.png',
        category: 'brand'
    },
    {
        image: 'static/images/cases/project-30.png',
        category: 'brand'
    },
    {
        image: 'static/images/cases/project-31.png',
        category: 'brand'
    },
    {
        image: 'static/images/cases/project-32.png',
        category: 'brand'
    },
    {
        image: 'static/images/cases/project-1.jpg',
        category: 'brand'
    },
    {
        image: 'static/images/cases/project-2.jpg',
        category: 'brand'
    },
    {
        image: 'static/images/cases/project-3.jpg',
        category: 'brand'
    },
    {
        image: 'static/images/cases/project-4.jpg',
        category: 'digital',
    },
    {
        image: 'static/images/cases/project-5.jpg',
        category: 'digital',
    },
    {
        image: 'static/images/cases/project-6.jpg',
        category: 'digital',
    },
    {
        image: 'static/images/cases/project-7.jpg',
        category: 'digital',
    },
    {
        image: 'static/images/cases/project-8.jpg',
        category: 'digital',
    },
    {
        image: 'static/images/cases/project-9.jpg',
        category: 'digital',
    },
    {
        image: 'static/images/cases/project-10.jpg',
        category: 'digital',
    },
    {
        image: 'static/images/cases/project-11.jpg',
        category: 'digital',
    },
    {
        image: 'static/images/cases/project-12.jpg',
        category: 'digital',
    },
    {
        image: 'static/images/cases/project-13.jpg',
        category: 'strategy',
    },
    {
        image: 'static/images/cases/project-14.jpg',
        category: 'strategy',
    },
    {
        image: 'static/images/cases/project-15.jpg',
        category: 'strategy',
    },
    {
        image: 'static/images/cases/project-16.jpg',
        category: 'strategy',
    },
    {
        image: 'static/images/cases/project-17.jpg',
        category: 'strategy',
    },
    {
        image: 'static/images/cases/project-18.jpg',
        category: 'strategy',
    },
    {
        image: 'static/images/cases/project-19.jpg',
        category: 'strategy',
    },
    {
        image: 'static/images/cases/project-20.jpg',
        category: 'strategy',
    },
    {
        image: 'static/images/cases/project-21.jpg',
        category: 'strategy',
    },
    {
        image: 'static/images/cases/project-22.jpg',
        category: 'motion',
    },
    {
        image: 'static/images/cases/project-23.jpg',
        category: 'motion',
    },
]

const imagedata = data.map((item, i) => {
    return (
        <Col xs={24} sm={12} md={12} lg={8} xl={8} key={i}>
            <div className='fluid-container' >
                <img src={item.image} alt="Avatar" className="fluid-image" />
                <div className="fluid-overlay">
                    <div className='fluid-title'>
                        Web Design
                    </div>
                </div>
            </div>
        </Col>
    )
})

const All = () => {
    const [contentdata, setContentdata] = useState(imagedata);
    const [currentValue, setCurrentValue] = useState();
    const router = useRouter();
    const radioChange = (e: any) => {
        let tmp = data.map((item, i) => {
            if(e.target.value == 'all'){
                return (
                    <Col xs={24} sm={12} md={12} lg={8} xl={8} key={i}>
                        <div className='fluid-container' >
                            <img src={item.image} alt="Avatar" className="fluid-image" />
                            <div className="fluid-overlay">
                                <div className='fluid-title'>
                                    Web Design
                                </div>
                            </div>
                        </div>
                    </Col>
                )
            }
            if (item.category == e.target.value) {
                return (
                    <Col xs={24} sm={12} md={12} lg={8} xl={8} key={i}>
                        <div className='fluid-container' >
                            <img src={item.image} alt="Avatar" className="fluid-image" />
                            <div className="fluid-overlay">
                                <div className='fluid-title'>
                                    Web Design
                                </div>
                            </div>
                        </div>
                    </Col>
                )
            }
        })
        setContentdata(tmp)
    }
    return (
        <>
            <section className="banner capabilities-wrapper">
                <div className="banner-text-all-wrapper" key="banner">
                    <h1 key="h1" className='banner-title'>WORK</h1>
                </div>
            </section>
            <section className='work-content-wrapper'>
                <Row gutter={[32, 32]} style={{ textAlign: 'center' }} justify="center">
                    <Col xs={24} sm={3} md={3} lg={3} xl={3}></Col>
                    <Col><Button type='text' style={{ color: 'white', fontSize: '40px' }} onClick={() => { router.push('/work') }}>Featured</Button></Col>
                    <Col><Button type='text' style={{ color: 'white', fontSize: '40px' }} onClick={() => { router.push('/case') }}>Case Studies</Button></Col>
                    <Col><Button type='text' style={{ color: '#1da57a', fontSize: '40px' }} onClick={() => { router.push('/al') }}>All Projects</Button></Col>
                    <Col xs={24} sm={3} md={3} lg={3} xl={3}></Col>
                </Row>
            </section>
            <section className='work-content-wrapper' style={{ textAlign: 'center' }}>
                <Radio.Group defaultValue="all" buttonStyle="solid" style={{ paddingBottom: '75px' }} onChange={(e) => radioChange(e)}>
                    <Radio.Button value="all" style={{ fontSize: '20px' }}>All Categories</Radio.Button>
                    <Radio.Button value="digital" style={{ fontSize: '20px' }}>Digital</Radio.Button>
                    <Radio.Button value="brand" style={{ fontSize: '20px' }}>Branding</Radio.Button>
                    <Radio.Button value="strategy" style={{ fontSize: '20px' }}>Strategy</Radio.Button>
                    <Radio.Button value="motion" style={{ fontSize: '20px' }}>Motion</Radio.Button>
                </Radio.Group>
                <Row gutter={[48, 48]}>
                    {contentdata}
                </Row>
            </section>
        </>
    )
};


All.getLayout = (component: ReactElement) => {
    return (
        <PageLayout selectedKey="3">
            {component}
        </PageLayout>
    )
}


export default All;