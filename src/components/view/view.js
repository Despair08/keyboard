import ElemenetCreator from "../utils/ElementCreator.js";

export default class View{
constructor(params = { tag: 'section', classNames: []}){
this.viewElementCreator =this.createView(params)
}

getHtmlElement(){
  return this.viewElementCreator.getElement();
}

createView(params){
    const elementParams = {
      tag: params.tag,
      classNames: params.classNames,
      textContent: '',
      callback: null
    };

    this.viewElementCreator = new ElemenetCreator(elementParams);
    retun this.viewElementCreator;
  }
}