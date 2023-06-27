import './abstract/_normalize.scss';
import './abstract/_varaibles.scss';
import './_common.scss';

import WrapperView from './view/wrapper/wrapper-view';
import MainView from './view/wrapper/main/main-view';

export default class App{
  constructor(){
    this.createView();
  }

  createView(){
    const wrapper = new WrapperView();


    document.body.append(wrapper.getHtmlElement());
  }
}