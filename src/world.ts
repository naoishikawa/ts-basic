export default class World {
  messeage: string

  constructor(message: string) {
    this.messeage = message
  }

  public sayHello(elem: HTMLElement | null) {
    if (elem) {
      elem.innerText = this.messeage
    }
  }




}
