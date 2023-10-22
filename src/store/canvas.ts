import {makeAutoObservable} from "mobx"

class CanvasStore {
    canvas: any = null

    constructor() {
        makeAutoObservable(this)
    }
    setCanvas(canvas: any) {
        this.canvas = canvas
    }
}

export default new CanvasStore()