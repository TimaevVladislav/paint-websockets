import React, {ChangeEvent} from "react"
import "../css/modules/Toolbar.module.scss"
import tools from "../store/tools"
import canvas from "../store/canvas"

import Brush from "../tools/Brush"
import Rect from "../tools/Rect"
import Circle from "../tools/Circle"
import Eraser from "../tools/Eraser"
import Line from "../tools/Line"

const Toolbar = () => {

    const changeColor = (e: ChangeEvent<HTMLInputElement>) => {
        tools.setFillColor(e.target.value)
        tools.setStrokeColor(e.target.value)
    }

    return (
        <div className="toolbar">
            <button
                className="toolbar__btn brush"
                onClick={() => tools.setTool({tool: new Brush(canvas.canvas)})}
            />

            <button
                className="toolbar__btn rect"
                onClick={() => tools.setTool({tool: new Rect(canvas.canvas)})}
            />

            <button
                className="toolbar__btn circle"
                onClick={() => tools.setTool({tool: new Circle(canvas.canvas)})}
            />

            <button
                className="toolbar__btn eraser"
                onClick={() => tools.setTool({tool: new Eraser(canvas.canvas)})}
            />

            <button
                className="toolbar__btn line"
                onClick={() => tools.setTool({tool: new Line(canvas.canvas)})}
            />

            <input
                onChange={(e) => changeColor(e)}
                type="color"
            />

            <button
                className="toolbar__btn undo"
                onClick={() => canvas.clearUndo()}
            />

            <button
                className="toolbar__btn redo"
                onClick={() => canvas.redoCanvas()}
            />

            <button
                className="toolbar__btn save"
                onClick={() => tools.setTool({tool: new Brush(canvas.canvas)})}
            />
        </div>
    )
}

export default Toolbar