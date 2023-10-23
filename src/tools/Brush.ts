import Tool from "./Tool"

export default class Brush extends Tool {

  private mouseDown: boolean = false

  constructor(canvas: HTMLCanvasElement) {
    super(canvas)
    this.listen()
  }

  listen() {
    this.canvas.onmousemove = this.mouseMoveHandler.bind(this)
    this.canvas.onmousedown = this.mouseDownHandler.bind(this) as (e: MouseEvent) => void
    this.canvas.onmouseup = this.mouseUpHandler.bind(this)
  }

  mouseUpHandler(e: MouseEvent): void  {
    this.mouseDown = false
  }

  mouseDownHandler<T extends HTMLElement>(e: MouseEvent & { target: T }): void {
    this.mouseDown = true
    this.ctx?.beginPath()
    this.ctx?.moveTo(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop);
  }

  mouseMoveHandler(e: MouseEvent): void  {
     if (this.mouseDown && e.target instanceof HTMLElement) {
       this.draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
     }
  }

  draw(x: number, y: number): void  {
    this.ctx?.lineTo(x, y)
    this.ctx?.stroke()
  }
}