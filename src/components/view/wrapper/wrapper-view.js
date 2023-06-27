import './_wrapper.scss';
import './header/_header.scss';
import './main/_main.scss';
import './footer/_footer.scss';
import View from '../view.js';
import ElemenetCreator from '../../utils/ElementCreator.js';
import MainView from './main/main-view';

const CssClasses = {
  WRAPPER : 'wrapper',
  HEADER: 'header',
  MAIN: 'main',
  FOOTER: 'footer',
}

export default class WrapperView extends View{
  constructor(mainComponent){
    const params = {
      tag: 'div',
      classNames: [CssClasses.WRAPPER],
    }
    super(params);
    this.configureView(mainComponent);
  }

  configureView(){
    const headerParams = {
      tag: 'header',
      classNames: [CssClasses.HEADER],
      textContent: 'Virtual keyboard',
      callback: null,
    }
    const mainParams = {
      tag: 'div',
      classNames: [CssClasses.MAIN],
      textContent: '',
      callback: null,
    }
    const footerParams = {
      tag: 'footer',
      classNames: [CssClasses.FOOTER],
      textContent: 'It is a footer',
      callback: null,
    }

    const creatorHeader = new ElemenetCreator(headerParams);
    this.viewElementCreator.addInnerElement(creatorHeader);

    const creatorMain = new MainView();
    this.viewElementCreator.addInnerElement(creatorMain.getHtmlElement());

    const creatorFooter = new ElemenetCreator(footerParams);
    this.viewElementCreator.addInnerElement(creatorFooter);
  }
}
