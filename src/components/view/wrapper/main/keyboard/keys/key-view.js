import './_key.scss'
import View from "../../../../view";
import ElementCreator from "../../../../../utils/ElementCreator";
import { keyCodes } from '../../../../../keyCodes/keyCodes';

const CssClasses = {
  KEY: 'key',
}

export default class KeyView extends View{
  constructor(){
    const params = {
      tag: 'div',
      classNames: [CssClasses.KEY],
    }
    super(params);
  }

  configureView(){
      const keyParams = {
        tag: 'div',
        classNames: [CssClasses.KEY],
        textContent: `a`,
      }
      const keyCreator = new ElementCreator(keyParams);
      this.viewElementCreator.addInnerElement(keyCreator)
  }
}