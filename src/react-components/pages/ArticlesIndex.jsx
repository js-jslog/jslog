import React from 'react';
import {Link} from 'react-router-dom';

import {withStyles} from 'material-ui/styles';
import MaterialNavBar from '../MaterialNavBar.jsx';
import BannerNav from '../nav/BannerNav.jsx';
import Footer from '../Footer.jsx';

import GridList, {GridListTile, GridListTileBar} from 'material-ui/GridList';

import articles_list from './articles/articles.js';

const styles = {
    grid_image: {
        width: "100%",
    },
};

class ArticlesGridList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cols: 4,
        };
    };
    render () {
        return (
            <GridList
                cellHeight={180}
                cols={this.state.cols}
            >
                {articles_list.map((tile) => (
                    <GridListTile
                        key={tile.image}
                    >
                        <Link to={"/articles/" + tile.link} >
                            <img className={this.props.classes.grid_image} src={"images/hero/" + tile.image} href={"articles/" + tile.link} />
                            <GridListTileBar
                                title={tile.title}
                                subtitle={tile.blurb}
                            >
                            </GridListTileBar>
                        </Link>
                    </GridListTile>
                ))}
            </GridList>
        );
    };
};

const ArticlesIndex = (props) => (
    <div>
        <BannerNav title='Articles' image="articles.jpg" background_colour='#fff' />
        <ArticlesGridList {...props} />
        <Footer />
    </div>
);

export default withStyles(styles)(ArticlesIndex);
