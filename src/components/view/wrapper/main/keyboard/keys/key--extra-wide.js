import './_key.scss'
import View from '../../../../view';
import ElementCreator from '../../../../../utils/ElementCreator';

const CssClasses = {
  KEY: 'key',
  KEY_EXTRA_WIDE: 'key--extra-wide',
}

export default class KeyViewExtraWide extends View{
  constructor(){
    const params = {
      tag: 'div',
      classNames: [CssClasses.KEY, CssClasses.KEY_EXTRA_WIDE],
    }
    super(params);
  }

  configureView(){
      const keyParams = {
        tag: 'div',
        classNames: [CssClasses.KEY, CssClasses.KEY_EXTRA_WIDE],
      }
      const keyCreator = new ElementCreator(keyParams);
      this.viewElementCreator.addInnerElement(keyCreator)
  }
}