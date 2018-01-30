import React from 'react';
import {Link} from 'react-router-dom';

import {withStyles} from 'material-ui/styles';
import MaterialNavBar from '../MaterialNavBar.jsx';
import HeroBanner from '../HeroBanner.jsx';
import Footer from '../Footer.jsx';

import GridList, {GridListTile, GridListTileBar} from 'material-ui/GridList';

import articles_list from './articles/articles.js';

const styles = {
    grid_image: {
        width: "100%",
    },
};

const ArticlesGridList = (props) => (
    <div>
        <GridList
            cellHeight={180}
        >
            {articles_list.map((tile) => (
                <GridListTile
                    key={tile.image}
                >
                    <Link to={"/articles/" + tile.link} >
                        <img className={props.classes.grid_image} src={"images/hero/" + tile.image} href={"articles/" + tile.link} />
                        <GridListTileBar
                            title={tile.title}
                            subtitle={tile.blurb}
                        >
                        </GridListTileBar>
                    </Link>
                </GridListTile>
            ))}
        </GridList>
    </div>
);

const ArticlesIndex = (props) => (
    <div>
        <MaterialNavBar title="Articles" />
        <HeroBanner image="articles.jpg" />
        <ArticlesGridList {...props} />
        <Footer />
    </div>
);

export default withStyles(styles)(ArticlesIndex);
