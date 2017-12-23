const getHeroSrc = function () {
    let pathname = window.location.pathname;
    let hero_src = pathname.substr(pathname.lastIndexOf("/") + 1) + ".jpg";
    return hero_src;
};
const getHeroAlt = function () {
    return "until we have all the page data in one place, I can't be arsed mapping all of these from the page templates";
};

class HeroBanner extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            hero_src: undefined,
            hero_alt: undefined,
        };
    };
    componentDidMount () {
        this.setState({hero_src: getHeroSrc()});
        this.setState({hero_alt: getHeroAlt()});
    };
    render() {
        let img_src = "/images/hero/" + this.state.hero_src;
        return <div id="index-banner" className="parallax-container">
            <div className="parallax"><img src={img_src} alt={this.state.hero_alt}></img></div>
        </div>
    };
}

ReactDOM.render(
  <HeroBanner />,
  document.getElementById('heroBanner')
);
