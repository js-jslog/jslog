import React from 'react';

import MaterialNavBar from '../MaterialNavBar.jsx';
import HeroBanner from '../HeroBanner.jsx';
import Footer from '../Footer.jsx';

import * as articles from './articles/articles.js';

let articles_keyed_list = {};
Object.keys(articles).forEach((init_key) => {
    const article_info = articles[init_key];
    articles_keyed_list[article_info.link] = article_info;
});

const ArticleContainer = function ({match}) {
    const article_contents = articles_keyed_list[match.params.article_id];
    console.log(article_contents);
    return <div>
        <MaterialNavBar title={article_contents.title} />
        <HeroBanner image={article_contents.image} />
        {article_contents.PageContents()}
        <Footer />
    </div>
};

export default ArticleContainer;
