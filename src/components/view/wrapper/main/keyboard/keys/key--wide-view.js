import './_key.scss'
import View from '../../../../view';
import ElementCreator from '../../../../../utils/ElementCreator';

const CssClasses = {
  KEY: 'key',
  KEY_WIDE: 'key--wide',
}

export default class KeyViewWide extends View{
  constructor(){
    const params = {
      tag: 'div',
      classNames: [CssClasses.KEY, CssClasses.KEY_WIDE],
    }
    super(params);
  }

  configureView(){
      const keyParams = {
        tag: 'div',
        classNames: [CssClasses.KEY, CssClasses.KEY_WIDE],
      }
      const keyCreator = new ElementCreator(keyParams);
      this.viewElementCreator.addInnerElement(keyCreator)
  }
}