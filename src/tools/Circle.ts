import Tool from "./Tool"

export default class Circle extends Tool {

  private mouseDown: boolean = false
  private startX: number = 0
  private startY: number = 0
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
    this.startX = e.pageX - e.target.offsetLeft
    this.startY = e.pageY - e.target.offsetTop
    this.saved = this.canvas.toDataURL()
  }

  mouseMoveHandler<T extends HTMLElement>(e: MouseEvent & { target: T }): void  {
    let currentX = e.pageX - e.target.offsetLeft
    let currentY = e.pageY - e.target.offsetTop
    let width = currentX - this.startX
    let height = currentY - this.startY
    let radius = Math.sqrt(width**2 + height**2)
    this.draw(this.startX, this.startY, radius)
  }

  draw(x: number, y: number, radius: number): void  {
    const img: HTMLImageElement = new Image()
    img.src = this.saved as string
    img.onload = async (): Promise<void> => {
      this.ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.ctx?.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
      this.ctx?.beginPath()
      this.ctx?.arc(x, y, radius, 0, 2*Math.PI);
      this.ctx?.fill()
      this.ctx?.stroke()
    }
  }
}