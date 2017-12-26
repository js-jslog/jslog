import NavigationBar from './NavigationBar.jsx';
import Footer from './Footer.jsx';
import HeroBanner from './HeroBanner.jsx';
import PageContentFactory from './PageContentFactory.jsx';

const page_mapper = {
    Articles: {
        content_component_name: "ArticlesPage",
        hero_img: "articles.jpg",
        title: "Articles",
        href: "articles",
        blurb: "Overview of the article. Probably the same text which should appear in the hero image under the title when I get round to that",
        exclude_from_articles: true,
    },
    Index: {
        content_component_name: "IndexPage",
        hero_img: "index.jpg",
        title: "Joseph Sinfield",
        href: "index",
        blurb: "Overview of the article. Probably the same text which should appear in the hero image under the title when I get round to that",
        exclude_from_articles: true,
    },
    ModularisationWithoutObstruction: {
        content_component_name: "ModularisationWithoutObstructionPage",
        hero_img: "modularisation-without-obstruction.jpg",
        title: "Modularisation without obstruction",
        href: "modularisation-without-obstruction",
        blurb: "Overview of the article. Probably the same text which should appear in the hero image under the title when I get round to that",
    },
    UltimatePseudoClassicalInheritance: {
        content_component_name: "UltimatePseudoClassicalInheritancePage",
        hero_img: "ultimate-pseudo-classical-inheritance.jpg",
        title: "The ultimate pseudo-classical inheritance pattern",
        href: "ultimate-pseudo-classical-inheritance",
        blurb: "Overview of the article. Probably the same text which should appear in the hero image under the title when I get round to that",
    },
    LoopsOrArrayMethods: {
        content_component_name: "LoopsOrArrayMethodsPage",
        hero_img: "loops-or-array-methods.jpg",
        title: "Loops or array-methods",
        href: "loops-or-array-methods",
        blurb: "Overview of the article. Probably the same text which should appear in the hero image under the title when I get round to that",
    },
    IterativeArrayMethods: {
        content_component_name: "IterativeArrayMethodsPage",
        hero_img: "iterative-array-methods.jpg",
        title: "Iterative array methods",
        href: "iterative-array-methods",
        blurb: "Overview of the article. Probably the same text which should appear in the hero image under the title when I get round to that",
    },
    BooleanFunction: {
        content_component_name: "BooleanFunctionPage",
        hero_img: "boolean-function.png",
        title: "The boolean function",
        href: "boolean-function",
        blurb: "Overview of the article. Probably the same text which should appear in the hero image under the title when I get round to that",
    },
    TheObjectObject: {
        content_component_name: "TheObjectObjectPage",
        hero_img: "the-object-object.jpg",
        title: "The Object object",
        href: "the-object-object",
        blurb: "Overview of the article. Probably the same text which should appear in the hero image under the title when I get round to that",
    },
    FunctionsAreObjectsToo: {
        content_component_name: "FunctionsAreObjectsTooPage",
        hero_img: "functions-are-objects-too.jpeg",
        title: "Functions are objects too",
        href: "functions-are-objects-too",
        blurb: "Overview of the article. Probably the same text which should appear in the hero image under the title when I get round to that",
    },
    TheTwoPillarsOfJavascript: {
        content_component_name: "TheTwoPillarsOfJavascriptPage",
        hero_img: "the-two-pillars-of-javascript.jpg",
        title: "The two pillars of Javascript",
        href: "the-two-pillars-of-javascript",
        blurb: "Overview of the article. Probably the same text which should appear in the hero image under the title when I get round to that",
    },
    PrefixVsPostfixIncrementUnaryOperators: {
        content_component_name: "PrefixVsPostfixIncrementUnaryOperatorsPage",
        hero_img: "prefix-vs-postfix-increment-unary-operators.jpg",
        title: "Prefix vs postfix increment unary operators",
        href: "prefix-vs-postfix-increment-unary-operators",
        blurb: "Overview of the article. Probably the same text which should appear in the hero image under the title when I get round to that",
    },
    NumberConversion: {
        content_component_name: "NumberConversionPage",
        hero_img: "number-conversion.jpg",
        title: "Number conversion",
        href: "number-conversion",
        blurb: "Overview of the article. Probably the same text which should appear in the hero image under the title when I get round to that",
    },
    BuildAGameWithTdd: {
        content_component_name: "BuildAGameWithTddPage",
        hero_img: "build-a-game-with-tdd.jpg",
        title: "Build a game with TDD",
        href: "build-a-game-with-tdd",
        blurb: "Overview of the article. Probably the same text which should appear in the hero image under the title when I get round to that",
    },
    FloatingPointVisualisation: {
        content_component_name: "FloatingPointVisualisationPage",
        hero_img: "floating-point-visualisation.jpg",
        title: "Floating point visualisation",
        href: "floating-point-visualisation",
        blurb: "Overview of the article. Probably the same text which should appear in the hero image under the title when I get round to that",
    },
    KeywordsAndReservedWordsInJavascript: {
        content_component_name: "KeywordsAndReservedWordsInJavascriptPage",
        hero_img: "keywords-and-reserved-words-in-javascript.jpg",
        title: "Keywords & reserved words in Javascript",
        href: "keywords-and-reserved-words-in-javascript",
        blurb: "Overview of the article. Probably the same text which should appear in the hero image under the title when I get round to that",
    },
}

class PageBody extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            page_component: "",
        };
    };
    componentWillMount () {
        const pathname = window.location.pathname;
        const pagename = pathname.substr(pathname.lastIndexOf("/") + 1);
        const reg_pattern = /-\w/;
        const replacer = function (match) {
            return match.substr(1).toUpperCase();
        }   
        let page_component = pagename.charAt(0).toUpperCase() + pagename.slice(1);
        while (page_component.search(reg_pattern) >= 0) {
            page_component = page_component.replace(reg_pattern, replacer);
        }
        this.setState({page_component, page_component});
    };
    render() {
        const pathname = window.location.pathname;
        const mapped_page = page_mapper[this.state.page_component];
        return <div>
            <NavigationBar page_title={mapped_page.title} />
            <HeroBanner hero_img={mapped_page.hero_img} />
            <PageContentFactory component_name={mapped_page.content_component_name} page_info={page_mapper}/>
            <Footer />
        </div>
    };
}

ReactDOM.render(
  <PageBody />,
  document.getElementById('pageBody')
);
