import React from 'react';

import MaterialNavBar from '../MaterialNavBar.jsx';
import HeroBanner from '../HeroBanner.jsx';
import Footer from '../Footer.jsx';
import {withStyles} from 'material-ui/styles';
import PageContents, {title, image} from './articles/BooleanFunction.jsx';

import * as articles from './articles/articles.js';

const styles = theme => ({
    page_contents: {
        marginTop: '3em',
        marginBottom: '3em',
    },
});
//
//let articles_keyed_list = {};
//Object.keys(articles).forEach((init_key) => {
//    const article_info = articles[init_key];
//    articles_keyed_list[article_info.link] = article_info;
//});

const ArticleContainer = function (props) {
    const {classes, match} = props;
    //const {title, image, PageContents} = articles_keyed_list[match.params.article_id];
    return <div>
        <MaterialNavBar title={title} />
        <HeroBanner image={image} />
        <div className={classes.page_contents} >
            <PageContents />
        </div>
        <Footer />
    </div>
};

export default withStyles(styles)(ArticleContainer);
