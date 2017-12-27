import React from 'react';
import ReactDOM from 'react-dom';
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


class PageContentFactory extends React.Component {
    render() {
        const tag_mapper = {
            ArticlesPage: ArticlesPage,
            IndexPage: IndexPage,
            BooleanFunctionPage: BooleanFunctionPage,
            UltimatePseudoClassicalInheritancePage: UltimatePseudoClassicalInheritancePage,
            TheTwoPillarsOfJavascriptPage: TheTwoPillarsOfJavascriptPage,
            TheObjectObjectPage: TheObjectObjectPage,
            PrefixVsPostfixIncrementUnaryOperatorsPage: PrefixVsPostfixIncrementUnaryOperatorsPage,
            NumberConversionPage: NumberConversionPage,
            ModularisationWithoutObstructionPage: ModularisationWithoutObstructionPage,
            LoopsOrArrayMethodsPage: LoopsOrArrayMethodsPage,
            KeywordsAndReservedWordsInJavascriptPage: KeywordsAndReservedWordsInJavascriptPage,
            IterativeArrayMethodsPage: IterativeArrayMethodsPage,
            FunctionsAreObjectsTooPage: FunctionsAreObjectsTooPage,
            FloatingPointVisualisationPage: FloatingPointVisualisationPage,
            BuildAGameWithTddPage: BuildAGameWithTddPage,
        };
        const PageComponent = tag_mapper[this.props.component_name];
        return <PageComponent page_library={this.props.page_library} />
    };
}

export default PageContentFactory;
