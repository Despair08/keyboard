import './_key.scss'
import KeyView from "./key-view";
import ElementCreator from '../../../../../utils/ElementCreator';

const CssClasses = {
  KEY: 'key',
  KEY_ULTRA_WIDE: 'key--ultra-wide',
}

export default class KeyViewUltraWide extends KeyView{
  constructor(mainComponent){
    const params = {
      tag: 'div',
      classNames: [CssClasses.KEY, CssClasses.KEY_ULTRA_WIDE],
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