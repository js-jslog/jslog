import ArticleBox from './article.jsx';
//import ReactDOM from 'react-dom';

const dataArray1 = 
    {
        href: "/articles/modularisation-without-obstruction",
        imgSrc: "/images/hero/modularisation-without-obstruction.jpg",
        articleTitle: "Modularisation without obstruction",
        blurb: "Overview of the article. Probably the same text which should appear in the hero image under the title when I get round to that",
    }
;
const dataArray2 = 
    {
        href: "/articles/ultimate-pseudo-classical-inheritance",
        imgSrc: "/images/hero/ultimate-pseudo-classical-inheritance.jpg",
        articleTitle: "The ultimate pseudo classical inheritance pattern",
        blurb: "Overview of the article. Probably the same text which should appear in the hero image under the title when I get round to that",
    }
;
const dataArray3 = 
    {
        href: "/articles/loops-or-array-methods",
        imgSrc: "images/hero/loops-or-array-methods.jpg",
        articleTitle: "Loops or array methods",
        blurb: "Overview of the article. Probably the same text which should appear in the hero image under the title when I get round to that",
    }
;

ReactDOM.render(
  <div className="row">
    <ArticleBox data={dataArray1} />
    <ArticleBox data={dataArray2} />
    <ArticleBox data={dataArray3} />
  </div>,
  document.getElementById('row1')
);
