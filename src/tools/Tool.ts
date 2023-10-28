
export default class Tool {
    canvas: HTMLCanvasElement
    ctx: CanvasRenderingContext2D | null
    socket: WebSocket | null = null
    sessionId: string | null = null

    constructor(canvas: HTMLCanvasElement, socket: WebSocket, id: string) {
        this.canvas = canvas
        this.socket = socket
        this.sessionId = id
        this.ctx = canvas.getContext("2d")
        this.destroyEvents()
    }

    set fillColor(color: string) {
        this.ctx!.fillStyle = color
    }

    set strokeColor(color: string) {
       this.ctx!.strokeStyle = color
    }

    set lineWidth(width: number) {
        this.ctx!.lineWidth = width
    }

    destroyEvents(): void {
        this.canvas.onmousemove = null
        this.canvas.onmousedown = null
        this.canvas.onmouseup = null
    }
}