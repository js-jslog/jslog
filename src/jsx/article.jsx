import React from 'react';
//import ReactDOM from 'react-dom';
class Article extends React.Component {
    render() {
        return <div className="col s12 m4">
          <a className="articles-link-box" href={this.props.data.href}>
            <img src={this.props.data.imgSrc} alt="this needs defining" style={{width: "100%"}} />
            <h5 className="center">{this.props.data.articleTitle}</h5>
            <p className="light">{this.props.data.blurb}</p>
          </a>
      </div>
    };
}
export default Article;
