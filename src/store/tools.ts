import {makeAutoObservable} from "mobx"

class ToolStore {
    tool: any = null

    constructor() {
        makeAutoObservable(this)
    }
    setCanvas(tool: any) {
        this.tool = tool
    }
}

export default new ToolStore()