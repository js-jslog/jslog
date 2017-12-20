import ArticleBox from './article.jsx';
//import ReactDOM from 'react-dom';

const dataArray = [
    {
        className: "articles-link-box",
        href: "/articles/modularisation-without-obstruction",
        imgSrc: "/images/hero/modularisation-without-obstruction.jpg",
    },
];

ReactDOM.render(
  <ArticleBox data={dataArray} />,
  document.getElementById('article1')
);
