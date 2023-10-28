import {makeAutoObservable} from "mobx"

class CanvasStore {
    canvas: HTMLCanvasElement = document.createElement("canvas")
    undo: Array<string> = []
    redo: Array<string> = []
    username: string = ""

    constructor() {
        makeAutoObservable(this)
    }

    setCanvas(canvas: HTMLCanvasElement) {
        this.canvas = canvas
    }

    setUserName(username: string) {
        this.username = username
    }

    setUndo(undo: string) {
        this.undo.push(undo)
    }

    setRedo(redo: string) {
        this.redo.push(redo)
    }

    clearUndo() {
        let ctx = this.canvas.getContext("2d")
        if (this.undo.length > 0) {
            let url = this.undo.pop()
            let img: HTMLImageElement = new Image()
            this.redo.push(this.canvas.toDataURL())

            img.src = url!
            img.onload = () => {
                ctx!.clearRect(0, 0, this.canvas.width, this.canvas.height)
                ctx!.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
            }
        } else {
            ctx!.clearRect(0, 0, this.canvas.width, this.canvas.height)
        }
    }

    redoCanvas() {
        let ctx = this.canvas.getContext("2d")
        if (this.redo.length > 0) {
            let url = this.redo.pop()
            let img: HTMLImageElement = new Image()
            this.undo.push(this.canvas.toDataURL())

            img.src = url!
            img.onload = () => {
                ctx!.clearRect(0, 0, this.canvas.width, this.canvas.height)
                ctx!.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
            }
        }
    }
}

export default new CanvasStore()