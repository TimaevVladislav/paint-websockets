import Tool from "./Tool"

export default class Rect extends Tool {

  private mouseDown: boolean = false

  constructor(canvas: HTMLCanvasElement) {
    super(canvas)
    this.listen()
  }

  listen() {
    this.canvas.onmousemove = this.mouseMoveHandler.bind(this) as (e: MouseEvent) => void
    this.canvas.onmousedown = this.mouseDownHandler.bind(this) as (e: MouseEvent) => void
    this.canvas.onmouseup = this.mouseUpHandler.bind(this) as (e: MouseEvent) => void
  }

  mouseUpHandler(e: MouseEvent): void  {
    this.mouseDown = false
  }

  mouseDownHandler<T extends HTMLElement>(e: MouseEvent & { target: T }): void {
    this.mouseDown = true
    this.ctx?.beginPath()
  }

  mouseMoveHandler<T extends HTMLElement>(e: MouseEvent & { target: T }): void  {
    let width = e.pageX - e.target.offsetLeft - e.pageX - e.target.offsetLeft
    let height = e.pageY - e.target.offsetTop - e.pageY - e.target.offsetTop
    this.draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop, width, height)
  }

  draw(x: number, y: number, w: number, h: number): void  {

  }
}