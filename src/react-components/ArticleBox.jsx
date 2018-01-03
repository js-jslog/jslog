import React from 'react';

class ArticleBox extends React.Component {
    render() {
        let imgSrc = "/images/hero/" + this.props.data.hero_img;
        let href = "/articles/" + this.props.data.href;
        let title = this.props.data.title;
        let blurb = this.props.data.blurb;
        return <div className="col s12 m4">
          <a className="articles-link-box" href={href}>
            <img src={imgSrc} alt="this needs defining" style={{width: "100%"}} />
            <h5 className="center">{title}</h5>
            <p className="light">{blurb}</p>
          </a>
      </div>
    };
}
export default ArticleBox;
