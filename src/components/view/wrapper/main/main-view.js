import View from "../../view";
import ElemenetCreator from "../../../utils/ElementCreator";

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
    const creatorOutput = new ElemenetCreator(textAreaParams);
    this.viewElementCreator.addInnerElement(creatorOutput);
    const creatorKeyboard = new ElemenetCreator(keyboardParams);
    this.viewElementCreator.addInnerElement(creatorKeyboard);
  }

}