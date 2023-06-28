import './_key.scss'
import View from "../../../../view";
import ElementCreator from "../../../../../utils/ElementCreator";
import { keyCodes } from '../../../../../keyCodes/keyCodes';

const CssClasses = {
  KEY: 'key',
}

export default class KeyView extends View{
  constructor(mainComponent){
    const params = {
      tag: 'div',
      classNames: [CssClasses.KEY],
    }
    super(params);
    this.configureView(mainComponent);
  }

  configureView(){
      const keyParams = {
        tag: 'div',
        classNames: [CssClasses.KEY],
      }
      const keyCreator = new ElementCreator(keyParams);
      this.viewElementCreator.addInnerElement(keyCreator)
  }
}