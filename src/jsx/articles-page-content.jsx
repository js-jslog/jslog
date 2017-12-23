import ArticleBoxRow from './article-box-row.jsx';


    
class ArticlesPageContent extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            article_box_data: [
                {
                    href: "modularisation-without-obstruction",
                    imgSrc: "modularisation-without-obstruction.jpg",
                    articleTitle: "Modularisation without obstruction",
                    blurb: "Overview of the article. Probably the same text which should appear in the hero image under the title when I get round to that",
                },
                {
                    href: "ultimate-pseudo-classical-inheritance",
                    imgSrc: "ultimate-pseudo-classical-inheritance.jpg",
                    articleTitle: "The ultimate pseudo classical inheritance pattern",
                    blurb: "Overview of the article. Probably the same text which should appear in the hero image under the title when I get round to that",
                },
                {
                    href: "loops-or-array-methods",
                    imgSrc: "loops-or-array-methods.jpg",
                    articleTitle: "Loops or array methods",
                    blurb: "Overview of the article. Probably the same text which should appear in the hero image under the title when I get round to that",
                },
                {
                    href: "iterative-array-methods",
                    imgSrc: "iterative-array-methods.jpg",
                    articleTitle: "Iterative array methods",
                    blurb: "Overview of the article. Probably the same text which should appear in the hero image under the title when I get round to that",
                },
                {
                    href: "boolean-function",
                    imgSrc: "boolean-function.png",
                    articleTitle: "The boolean function",
                    blurb: "Overview of the article. Probably the same text which should appear in the hero image under the title when I get round to that",
                },
                {
                    href: "the-object-object",
                    imgSrc: "the-object-object.jpg",
                    articleTitle: "The object object",
                    blurb: "Overview of the article. Probably the same text which should appear in the hero image under the title when I get round to that",
                },
                {
                    href: "functions-are-objects-too",
                    imgSrc: "functions-are-objects-too.jpeg",
                    articleTitle: "Functions are objects too",
                    blurb: "Functions are first class citizens in javascript. But in the end how different are they from objects.",
                },
                {
                    href: "the-two-pillars-of-javascript",
                    imgSrc: "the-two-pillars-of-javascript.jpg",
                    articleTitle: "The two pillars of Javascript",
                    blurb: "Overview of the article. Probably the same text which should appear in the hero image under the title when I get round to that",
                },
                {
                    href: "prefix-vs-postfix-increment-unary-operators",
                    imgSrc: "prefix-vs-postfix-increment-unary-operators.jpg",
                    articleTitle: "Prefix vs postfix increment unary operators",
                    blurb: "Overview of the article. Probably the same text which should appear in the hero image under the title when I get round to that",
                },
                {
                    href: "number-conversion",
                    imgSrc: "number-conversion.jpg",
                    articleTitle: "Number conversion",
                    blurb: "Overview of the article. Probably the same text which should appear in the hero image under the title when I get round to that",
                },
                {
                    href: "build-a-game-with-tdd",
                    imgSrc: "build-a-game-with-tdd.jpg",
                    articleTitle: "Build a game with TDD",
                    blurb: "Overview of the article. Probably the same text which should appear in the hero image under the title when I get round to that",
                },
                {
                    href: "floating-point-visualisation",
                    imgSrc: "floating-point-visualisation.jpg",
                    articleTitle: "Floating point visualisation",
                    blurb: "Overview of the article. Probably the same text which should appear in the hero image under the title when I get round to that",
                },
                {
                    href: "keywords-and-reserved-words-in-javascript",
                    imgSrc: "keywords-and-reserved-words-in-javascript.jpg",
                    articleTitle: "Keywords & reserved words in Javascript",
                    blurb: "Overview of the article. Probably the same text which should appear in the hero image under the title when I get round to that",
                },
            ]
        }
    };
    render () {
      const article_rows = this.state.article_box_data.map(function (val, index, arr) {
          const columns = 3;
          const marker = index * columns;
          return arr.slice(marker, marker + columns);
      }).filter(a => a.length>0)
        .map(function (row_data, index2) {
          let key = "row" + index2;
          return <ArticleBoxRow key={key} row_data={row_data} />;
      });
      return <div className="section">
        {article_rows}
      </div>
    }
};

export default ArticlesPageContent;
