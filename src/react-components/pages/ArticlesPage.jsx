import React from 'react';
import {Link} from 'react-router-dom';

import NavigationBar from '../NavigationBar.jsx';
import MaterialNavBar from '../MaterialNavBar.jsx';
import HeroBanner from '../HeroBanner.jsx';
import Footer from '../Footer.jsx';

import {GridList, GridTile} from 'material-ui/GridList';

import * as articles from './articles/articles.js';

const articles_list = Object.keys(articles).map((key) => articles[key]);

const ArticlesGridList = () => (
    <div>
        <GridList
            cellHeight={180}
        >
            {articles_list.map((tile) => (
                <GridTile
                    key={tile.image}
                    title={tile.title}
                    containerElement={<Link to={"/articles/" + tile.link} />}
                >
                    <img src={"images/hero/" + tile.image} />
                </GridTile>
            ))}
        </GridList>
    </div>
);

const getArticlesBoxArray = () => {
    return articles_list.map(function (component) {
        if (component.published) {
            const page_info = {
                title: component.title,
                image: component.image,
                link: component.link,
                blurb: component.blurb,
            };
            return <ArticleBox page_info={page_info} />
        }
    }).filter(function (array_position) {
        return (array_position !== undefined);
    });
};

const generateArticleBoxRows = function () {
    const columns = 3; // this can be changed with a Router option if the screen is small
    const articles_box_array = getArticlesBoxArray();
    const articles_box_rows = articles_box_array.map((component, index, array) => {
        const row_start = index * columns;
        const row_end = row_start + columns;
        return array.slice(row_start, row_end);
    })
    .filter(row => row.length>0)
    .map((article_boxes, index) => {
        const key = "article_row_" + index;
        return <div className="row">
            {article_boxes}
        </div>
    });
    return articles_box_rows;
};

const ArticleBoxArray = () => {
    return generateArticleBoxRows();
}

class ArticlesPage extends React.Component {
    render () {
        return <div>
            <MaterialNavBar />
            <HeroBanner image="articles.jpg" />
            <ArticlesGridList />
            <Footer />
        </div>
    };
};

export default ArticlesPage;
