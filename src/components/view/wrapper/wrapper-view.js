import './_wrapper.scss';
import './header/_header.scss';
import './main/_main.scss';
import './footer/_footer.scss';
import View from '../view.js';
import ElemenetCreator from '../../utils/ElementCreator.js';

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
      classNames: [CssClasses.wrapper],
    }
    super(params);
    this.configureView(mainComponent);
  }

  configureView(){
    const headerParams = {
      tag: 'header',
      classNames: [CssClasses.header],
      textContent: 'It is a header',
      callback: null,
    }
    const mainParams = {
      tag: 'div',
      classNames: [CssClasses.header],
      textContent: 'It is a main',
      callback: null,
    }
    const footerParams = {
      tag: 'footer',
      classNames: [CssClasses.header],
      textContent: 'It is a footer',
      callback: null,
    }

    const creatorHeader = new ElemenetCreator(headerParams);
    this.viewElementCreator.addInnerElement(creatorHeader);

    const creatorMain = new ElemenetCreator(mainParams);
    this.viewElementCreator.addInnerElement(creatorMain);

    const creatorFooter = new ElemenetCreator(footerParams);
    this.viewElementCreator.addInnerElement(creatorFooter);
  }
}
