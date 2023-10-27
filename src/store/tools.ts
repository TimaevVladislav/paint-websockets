import {makeAutoObservable} from "mobx"

interface IToolClass {
    tool: Object
}

class ToolStore {
    tool: any = null

    constructor() {
        makeAutoObservable(this)
    }

    setTool(tool: IToolClass): void {
        this.tool = tool
    }

    setFillColor(color: string): void {
        this.tool.fillColor = color
    }

    setStrokeColor(color: string): void {
        this.tool.strokeColor = color
    }

    setLineWidth(width: string): void {
        this.tool.lineWidth = width
    }
}

export default new ToolStore()