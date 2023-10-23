import {makeAutoObservable} from "mobx"

class CanvasStore {
    canvas: HTMLCanvasElement = document.createElement("canvas")

    constructor() {
        makeAutoObservable(this)
    }

    setCanvas(canvas: HTMLCanvasElement) {
        this.canvas = canvas
    }
}

export default new CanvasStore()