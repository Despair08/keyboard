import View from "../../view";
import ElementCreator from "../../../utils/ElementCreator";
import keyboardView from "./keyboard/keyboard-view";

const CssClasses = {
    MAIN: 'main',
    OUTPUT: 'main__output',
    INPUT: 'main__keyboard',
};

export default class MainView extends View{
  constructor(mainComponent){
    const params ={
      tag: 'main',
      classNames : [CssClasses.MAIN],
    }
    super(params);
    this.configureView(mainComponent);
  }

  configureView(){
    const textAreaParams = {
      tag: 'textarea',
      classNames: [CssClasses.OUTPUT],
      cllback: null,
    };
    const keyboardParams = {
      tag: 'div',
      classNames: [CssClasses.INPUT],
      callback: null,
    };
    const creatorOutput = new ElementCreator(textAreaParams);
    this.viewElementCreator.addInnerElement(creatorOutput);
    const creatorKeyboard = new keyboardView(keyboardParams);
    this.viewElementCreator.addInnerElement(creatorKeyboard.getHtmlElement());
  }

}