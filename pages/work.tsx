import { PageLayout } from './components/layouts/pagelayout'
import ScrollElement from 'rc-scroll-anim/lib/ScrollElement';
import { Button, Row, Col } from 'antd';
import TweenOne from 'rc-tween-one';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import { ReactElement } from 'react';
import { useRouter } from 'next/router';

const data = [
    {
        image: 'static/images/cases/project-24.png',
    },
    {
        image: 'static/images/cases/project-25.png',
    },
    {
        image: 'static/images/cases/project-26.png',
    },
    {
        image: 'static/images/cases/project-27.png',
    },
    {
        image: 'static/images/cases/project-28.png',
    },
    {
        image: 'static/images/cases/project-29.png',
    },
    {
        image: 'static/images/cases/project-30.png',
    },
    {
        image: 'static/images/cases/project-31.png',
    },
    {
        image: 'static/images/cases/project-32.png',
    },
    {
        image: 'static/images/cases/project-1.jpg',
    },
    {
        image: 'static/images/cases/project-2.jpg',
    },
    {
        image: 'static/images/cases/project-3.jpg',
    },
    {
        image: 'static/images/cases/project-4.jpg',
    },
    {
        image: 'static/images/cases/project-5.jpg',
    },
    {
        image: 'static/images/cases/project-6.jpg',
    },
    {
        image: 'static/images/cases/project-7.jpg',
    },
    {
        image: 'static/images/cases/project-8.jpg',
    },
    {
        image: 'static/images/cases/project-9.jpg',
    },
    {
        image: 'static/images/cases/project-10.jpg',
    },
    {
        image: 'static/images/cases/project-11.jpg',
    },
    {
        image: 'static/images/cases/project-12.jpg',
    },
    {
        image: 'static/images/cases/project-13.jpg',
    },
    {
        image: 'static/images/cases/project-14.jpg',
    },
    {
        image: 'static/images/cases/project-15.jpg',
    },
    {
        image: 'static/images/cases/project-16.jpg',
    },
    {
        image: 'static/images/cases/project-17.jpg',
    },
    {
        image: 'static/images/cases/project-18.jpg',
    },
    {
        image: 'static/images/cases/project-19.jpg',
    },
    {
        image: 'static/images/cases/project-20.jpg',
    }, 
    {
        image: 'static/images/cases/project-21.jpg',
    },
    {
        image: 'static/images/cases/project-22.jpg',
    },
    {
        image: 'static/images/cases/project-23.jpg',
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

const onChange = (key: string) => {
    console.log(key);
};


const Work = () => {
    const router = useRouter();
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
                    <Col><Button type='text' style={{ color: '#1da57a', fontSize: '40px' }} onClick={() => { router.push('/work') }}>Featured</Button></Col>
                    <Col><Button type='text' style={{ color: 'white', fontSize: '40px' }} onClick={() => { router.push('/case') }}>Case Studies</Button></Col>
                    <Col><Button type='text' style={{ color: 'white', fontSize: '40px' }} onClick={() => { router.push('/all') }}>All Projects</Button></Col>
                    <Col xs={24} sm={3} md={3} lg={3} xl={3}></Col>
                </Row>
            </section>
            <section className='work-content-wrapper'>
                <Row gutter={[48, 48]}>
                    {imagedata}
                </Row>
            </section>
        </>
    )
};


Work.getLayout = (component: ReactElement) => {
    return (
        <PageLayout selectedKey="3">
            {component}
        </PageLayout>
    )
}


export default Work;