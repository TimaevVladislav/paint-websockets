import {makeAutoObservable} from "mobx"

interface IToolClass {
    tool: Object
}

class ToolStore {
    tool: any = null

    constructor() {
        makeAutoObservable(this)
    }

    setTool(tool: IToolClass) {
        this.tool = tool
    }
}

export default new ToolStore()