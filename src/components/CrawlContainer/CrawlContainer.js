import React from 'react';
import Crawl from 'react-star-wars-crawl';
import 'react-star-wars-crawl/lib/index.css';
import './CrawlContainer.scss';

const CrawlContainer = ({ title, subTitle, text }) => (
  <Crawl
    title={title}
    subTitle={subTitle}
    text={text}
  />
)

export default CrawlContainer;