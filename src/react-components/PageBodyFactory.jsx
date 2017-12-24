import ArticlesPage from './pages/ArticlesPage.jsx';
import IndexPage from './pages/IndexPage.jsx';
import BooleanFunctionPage from './pages/BooleanFunctionPage.jsx';
import UltimatePseudoClassicalInheritancePage from './pages/UltimatePseudoClassicalInheritancePage.jsx';
import TheTwoPillarsOfJavascriptPage from './pages/TheTwoPillarsOfJavascriptPage.jsx';
import TheObjectObjectPage from './pages/TheObjectObjectPage.jsx';
import PrefixVsPostfixIncrementUnaryOperatorsPage from './pages/PrefixVsPostfixIncrementUnaryOperatorsPage.jsx';
import NumberConversionPage from './pages/NumberConversionPage.jsx';
import ModularisationWithoutObstructionPage from './pages/ModularisationWithoutObstructionPage.jsx';
import LoopsOrArrayMethodsPage from './pages/LoopsOrArrayMethodsPage.jsx';
import KeywordsAndReservedWordsInJavascriptPage from './pages/KeywordsAndReservedWordsInJavascriptPage.jsx';
import IterativeArrayMethodsPage from './pages/IterativeArrayMethodsPage.jsx';
import FunctionsAreObjectsTooPage from './pages/FunctionsAreObjectsTooPage.jsx';
import FloatingPointVisualisationPage from './pages/FloatingPointVisualisationPage.jsx';
import BuildAGameWithTddPage from './pages/BuildAGameWithTddPage.jsx';
import HeroBanner from './HeroBanner.jsx';

const page_mapper = {
    Articles: {
        content_tag: ArticlesPage,
        hero_img: "articles.jpg",
    },
    Index: {
        content_tag: IndexPage,
        hero_img: "index.jpg",
    },
    BooleanFunction: {
        content_tag: BooleanFunctionPage,
        hero_img: "boolean-function.png",
    },
    UltimatePseudoClassicalInheritance: {
        content_tag: UltimatePseudoClassicalInheritancePage,
        hero_img: "ultimate-pseudo-classical-inheritance.jpg",
    },
    TheTwoPillarsOfJavascript: {
        content_tag: TheTwoPillarsOfJavascriptPage,
        hero_img: "the-two-pillars-of-javascript.jpg",
    },
    TheObjectObject: {
        content_tag: TheObjectObjectPage,
        hero_img: "the-object-object.jpg",
    },
    PrefixVsPostfixIncrementUnaryOperators: {
        content_tag: PrefixVsPostfixIncrementUnaryOperatorsPage,
        hero_img: "prefix-vs-postfix-increment-unary-operators.jpg",
    },
    NumberConversion: {
        content_tag: NumberConversionPage,
        hero_img: "number-conversion.jpg",
    },
    ModularisationWithoutObstruction: {
        content_tag: ModularisationWithoutObstructionPage,
        hero_img: "modularisation-without-obstruction.jpg",
    },
    LoopsOrArrayMethods: {
        content_tag: LoopsOrArrayMethodsPage,
        hero_img: "loops-or-array-methods.jpg",
    },
    KeywordsAndReservedWordsInJavascript: {
        content_tag: KeywordsAndReservedWordsInJavascriptPage,
        hero_img: "keywords-and-reserved-words-in-javascript.jpg",
    },
    IterativeArrayMethods: {
        content_tag: IterativeArrayMethodsPage,
        hero_img: "iterative-array-methods.jpg",
    },
    FunctionsAreObjectsToo: {
        content_tag: FunctionsAreObjectsTooPage,
        hero_img: "functions-are-objects-too.jpeg",
    },
    FloatingPointVisualisation: {
        content_tag: FloatingPointVisualisationPage,
        hero_img: "floating-point-visualisation.jpg",
    },
    BuildAGameWithTdd: {
        content_tag: BuildAGameWithTddPage,
        hero_img: "build-a-game-with-tdd.jpg",
    },
}

class PageBodyFactory extends React.Component {
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
        const ContentTag = mapped_page.content_tag;
        return <div>
            <HeroBanner hero_img={mapped_page.hero_img} />
            <ContentTag />
            </div>
    };
}

export default PageBodyFactory;
