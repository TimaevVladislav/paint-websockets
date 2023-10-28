import Tool from "./Tool"

export default class Brush extends Tool {

  private mouseDown: boolean = false

  constructor(canvas: HTMLCanvasElement, socket: WebSocket, id: string) {
    super(canvas, socket, id)
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
    this.ctx?.moveTo(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop);
  }

  mouseMoveHandler<T extends HTMLElement>(e: MouseEvent & { target: T }): void  {
    // this.draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
    this.socket?.send(JSON.stringify({
        type: "draw",
        id: this.sessionId,
        figure: {type: "brush", x: e.pageX - e.target.offsetLeft, y: e.pageY - e.target.offsetTop, color: this.ctx?.strokeStyle, width: this.ctx?.lineWidth}
    }))
  }

  static draw(ctx: any, x: number, y: number): void  {
    ctx?.lineTo(x, y)
    ctx?.stroke()
  }
}