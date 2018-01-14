import React from 'react';

import NavigationBar from '../NavigationBar.jsx';
import HeroBanner from '../HeroBanner.jsx';
import Footer from '../Footer.jsx';

import ArticleBox from '../ArticleBox.jsx';

import * as BooleanFunctionPage from '../pages/BooleanFunctionPage.jsx';
import * as FloatingPointVisualisation from '../pages/FloatingPointVisualisationPage.jsx';
import * as IterativeArrayMethods from '../pages/IterativeArrayMethodsPage.jsx';
import * as LoopsOrArrayMethods from '../pages/LoopsOrArrayMethodsPage.jsx';
import * as TheObjectObject from '../pages/TheObjectObjectPage.jsx';
import * as TheTwoPillarsOfJavascript from '../pages/TheTwoPillarsOfJavascriptPage.jsx';
import * as UltimatePseudoClassicalInheritance from '../pages/UltimatePseudoClassicalInheritancePage.jsx';

const articles_list = [
    BooleanFunctionPage,
    FloatingPointVisualisation,
    IterativeArrayMethods,
    LoopsOrArrayMethods,
    TheObjectObject,
    TheTwoPillarsOfJavascript,
    UltimatePseudoClassicalInheritance,
];

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
            <NavigationBar />
            <HeroBanner image="articles.jpg" />
            <ArticleBoxArray />
            <Footer />
        </div>
    };
};

export default ArticlesPage;
