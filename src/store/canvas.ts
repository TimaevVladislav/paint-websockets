import {makeAutoObservable} from "mobx"

class CanvasStore {
    canvas: HTMLCanvasElement | string = ""

    constructor() {
        makeAutoObservable(this)
    }

    setCanvas(canvas: HTMLCanvasElement) {
        this.canvas = canvas
    }
}

export default new CanvasStore()