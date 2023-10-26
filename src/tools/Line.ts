import Tool from "./Tool"

export default class Line extends Tool {

  private mouseDown: boolean = false
  private currentX: number = 0
  private currentY: number = 0
  private saved: string | undefined

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
    this.ctx?.moveTo(this.currentX, this.currentY )
    let currentX = e.pageX - e.target.offsetLeft
    let currentY = e.pageY - e.target.offsetTop
    this.saved = this.canvas.toDataURL()
  }

  mouseMoveHandler<T extends HTMLElement>(e: MouseEvent & { target: T }): void  {
    this.draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
  }

  draw(x: number, y: number): void  {
    const img: HTMLImageElement = new Image()
    img.src = this.saved as string
    img.onload = async (): Promise<void> => {
      this.ctx?.clearRect(0,0, this.canvas.width, this.canvas.height)
      this.ctx?.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
      this.ctx?.beginPath()
      this.ctx?.moveTo(this.currentX, this.currentY)
      this.ctx?.lineTo(x, y)
      this.ctx?.stroke()
    }
  }
}