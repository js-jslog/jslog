import React from 'react';
//import ReactDOM from 'react-dom';
class Article extends React.Component {
    render() {
        let imgSrc = "/images/hero/" + this.props.data.imgSrc;
        let href = "/articles/" + this.props.data.href;
        let articleTitle = this.props.data.articleTitle;
        let blurb = this.props.data.blurb;
        return <div className="col s12 m4">
          <a className="articles-link-box" href={href}>
            <img src={imgSrc} alt="this needs defining" style={{width: "100%"}} />
            <h5 className="center">{articleTitle}</h5>
            <p className="light">{blurb}</p>
          </a>
      </div>
    };
}
export default Article;
