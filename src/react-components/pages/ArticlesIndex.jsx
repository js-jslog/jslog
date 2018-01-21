import React from 'react';
import {Link} from 'react-router-dom';

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
                    subtitle={tile.blurb}
                    subtitleStyle={{
                        "white-space": "pre-line",
                    }}
                    containerElement={<Link to={"/articles/" + tile.link} />}
                >
                    <img src={"images/hero/" + tile.image} />
                </GridTile>
            ))}
        </GridList>
    </div>
);

const ArticlesIndex = () => (
    <div>
        <MaterialNavBar title="Articles" />
        <HeroBanner image="articles.jpg" />
        <ArticlesGridList />
        <Footer />
    </div>
);

export default ArticlesIndex;
