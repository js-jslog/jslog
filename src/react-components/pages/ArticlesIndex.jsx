import React from 'react';
import {Link} from 'react-router-dom';

import {withStyles} from 'material-ui/styles';
import BannerNav from '../layout/nav/BannerNav.jsx';
import Footer from '../layout/nav/Footer.jsx';

import GridList, {GridListTile, GridListTileBar} from 'material-ui/GridList';

import ContentList from '../layout/nav/ContentList.jsx';
import articles_list from './articles/articles.js';

const styles = theme => ({
    grid_image: {
        width: "100%",
    },
    page_content: theme.layout.responsive_page_column,
});

class ArticlesGridList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cols: 2,
        };
    };
    render () {
        const { classes } = this.props
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
                            <img className={classes.grid_image} src={"images/hero/" + tile.image} href={"articles/" + tile.link} />
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
        <BannerNav title='Articles' image="articles.jpg" text_colour='#fff' background_colour='#94BBE2' />
        <ContentList />
        <Footer />
    </div>
);

export default withStyles(styles)(ArticlesIndex);
