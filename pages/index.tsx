import { PageLayout } from './components/layouts/pagelayout'
import ScrollElement from 'rc-scroll-anim/lib/ScrollElement';
// import GitHubButton from 'react-github-button';
// import Icon from '@ant-design/icons';
import { Carousel } from 'antd'
import QueueAnim from 'rc-queue-anim';
import { ReactElement } from 'react';

const carousel_info = [
  {
      url: 'static/images/cases/project-',
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

const App = () => {
  return (
    <>
      <section className="page banner-wrapper">
        <ScrollElement
          className="page"
          id="banner"
          playScale={0.9}
        >
          <div className="banner-text-wrapper" key="banner">
            <h2 key="h2">D<p>evysion</p></h2>
            <p key="content">From William</p>
            <span className="line" key="line" />
            <div key="button1" className="start-button clearfix">
              <a>
                Get started
              </a>
              <a>
                Download
              </a>
            </div>
          </div>
        </ScrollElement>
      </section>
    </>
  )
};


App.getLayout = (component: ReactElement) => {
  return (
    <PageLayout selectedKey='1'>
      {component}
    </PageLayout>
  )
}


export default App;