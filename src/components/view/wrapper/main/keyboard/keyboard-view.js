import './_keyboard.scss';

import View from "../../../view";
import { keyCodes } from '../../../../keyCodes/keyCodes';
import KeyView from "./keys/key-view";
import KeyViewWide from './keys/key--wide-view';
import KeyViewUltraWide from './keys/key--ultra-wide';

const CssClasses = {
  KEYBOARD: 'main__keyboard',
}

export default class keyboardView extends View{
constructor(mainComponent){
    const params ={
      tag: 'div',
      classNames : [CssClasses.KEYBOARD],
      textContent: '',
      callback: null,
    }
    super(params);
    this.configureView(mainComponent);
  }

  configureView(){
    keyCodes.firstRow.forEach((key, index) => {

        switch (key) {
      case 'Backspace':
        const creatorBackspace = new KeyViewWide();
        this.viewElementCreator.addInnerElement(creatorBackspace.getHtmlElement());
        break;
      case 'Caps Lock':
        const creatorCaps = new KeyViewWide();
        this.viewElementCreator.addInnerElement(creatorCaps.getHtmlElement());
        break;
      case ' ':
        const creatorSpace = new KeyViewUltraWide();
        this.viewElementCreator.addInnerElement(creatorSpace.getHtmlElement());
        break;
      case 'Shift':
        const creatorShift = new KeyViewWide();
        this.viewElementCreator.addInnerElement(creatorShift.getHtmlElement());
        break;
      case 'Tab':
        const creatorTab = new KeyViewWide();
        this.viewElementCreator.addInnerElement(creatorTab.getHtmlElement());
        break;
      case 'Enter':
        const creatorEnter = new KeyViewWide();
        this.viewElementCreator.addInnerElement(creatorEnter.getHtmlElement());
        break;
      default:
          const creatorKey = new KeyView();
          this.viewElementCreator.addInnerElement(creatorKey.getHtmlElement());
        break;
    }
    })
  }
}