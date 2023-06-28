import '_keyboard.scss';

import View from "../../../view";
import { keyCodes } from '../../../../keyCodes/keyCodes';
import KeyView from "./keys/key-view";
import KeyViewWide from './keys/key--wide-view';
import KeyViewExtraWide from './keys/key--extra-wide';
import KeyViewUltraWide from './keys/key--ultre-wide';

const CssClasses = {
  KEYBOARD: 'main__keyboard',
}

export default class keyboardView extends View{
constructor(mainComponent){
    const params ={
      tag: 'div',
      classNames : [CssClasses.KEYBOARD],
    }
    super(params);
    this.configureView(mainComponent);
  }

  configureView(){
    keyCodes.forEach((key, index) => {
        switch (key) {
      case 'Backspace':
        break;
          const creatorBackspace = new KeyViewWide(index);
          this.viewElementCreator.addInnerElement(creatorBackspace.getHtmlElement());
      case 'Caps Lock':
        break;
          const creatorCaps = new KeyViewWide(index);
          this.viewElementCreator.addInnerElement(creatorCaps.getHtmlElement());
      case ' ':
        break;
          const creatorSpace = new KeyViewUltraWide(index);
          this.viewElementCreator.addInnerElement(creatorSpace.getHtmlElement());
      case 'Shift':
        break;
          const creatorShift = new KeyViewExtraWide(index);
          this.viewElementCreator.addInnerElement(creatorShift.getHtmlElement());
      case 'Tab':
        break;
          const creatorTab = new KeyViewWide(index);
          this.viewElementCreator.addInnerElement(creatorTab.getHtmlElement());
      case 'Enter':
        break;
          const creatorEnter = new KeyViewWide(index);
          this.viewElementCreator.addInnerElement(creatorEnter.getHtmlElement());
      default:
          const creatorKey = new KeyView(index);
          this.viewElementCreator.addInnerElement(creatorKey.getHtmlElement());
        break;
    }
    })
  }
}