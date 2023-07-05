import { PageLayout } from './components/layouts/pagelayout'
import ScrollElement from 'rc-scroll-anim/lib/ScrollElement';
import { Button, Row } from 'antd';
import TweenOne from 'rc-tween-one';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import { ReactElement } from 'react';

const Blog = () => {
    return (
        <>
            <section className="banner capabilities-wrapper">
                <div className="banner-text-all-wrapper" key="banner">
                    <h1 key="h1" className='banner-title'>BLOG</h1>
                </div>
            </section>
        </>
    )
};


Blog.getLayout = (component: ReactElement) => {
    return (
        <PageLayout selectedKey="5">
            {component}
        </PageLayout>
    )
}


export default Blog;