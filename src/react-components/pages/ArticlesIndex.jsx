import React from 'react';
import {Link} from 'react-router-dom';

import MaterialNavBar from '../MaterialNavBar.jsx';
import HeroBanner from '../HeroBanner.jsx';
import Footer from '../Footer.jsx';

import GridList, {GridListTile, GridListTileBar} from 'material-ui/GridList';

import * as articles from './articles/articles.js';

const articles_list = Object.keys(articles).map((key) => articles[key]);

const ArticlesGridList = () => (
    <div>
        <GridList
            cellHeight={180}
        >
            {articles_list.map((tile) => (
                <GridListTile
                    key={tile.image}
                >
                    <Link to={"/articles/" + tile.link} >
                        <img style={{"width": "100%"}} src={"images/hero/" + tile.image} />
                        <GridListTileBar
                            title={tile.title}
                            subtitle={tile.blurb}
                            subtitleStyle={{
                                whiteSpace: "pre-line",
                            }}
                        >
                        </GridListTileBar>
                    </Link>
                </GridListTile>
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
