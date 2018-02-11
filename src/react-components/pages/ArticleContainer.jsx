import React from 'react';

import BannerNav from '../nav/BannerNav.jsx';
import Footer from '../Footer.jsx';
import {withStyles} from 'material-ui/styles';

import articles from './articles/articles.js';

const styles = theme => ({});

let link_keyed_article_components = {};
articles.forEach((article_components) => {
    const link = article_components.link;
    link_keyed_article_components[link] = article_components;
});

const ArticleContainer = function (props) {
    const {classes, match} = props;
    const {StyledPageContents, title, image} = link_keyed_article_components[match.params.article_id];
    return <div>
        <BannerNav title={title} image={image} />
        <StyledPageContents />
        <Footer />
    </div>
};

export default withStyles(styles)(ArticleContainer);
