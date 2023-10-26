import React from "react"
import "../css/modules/Toolbar.module.scss"
import tools from "../store/tools"
import canvas from "../store/canvas"

import Brush from "../tools/Brush"
import Rect from "../tools/Rect"
import Circle from "../tools/Circle"
import Eraser from "../tools/Eraser"

const Toolbar = () => {

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
                onClick={() => tools.setTool({tool: new Brush(canvas.canvas)})}
            />

            <input type="color" />

            <button
                className="toolbar__btn undo"
                onClick={() => tools.setTool({tool: new Brush(canvas.canvas)})}
            />

            <button
                className="toolbar__btn redo"
                onClick={() => tools.setTool({tool: new Brush(canvas.canvas)})}
            />

            <button
                className="toolbar__btn save"
                onClick={() => tools.setTool({tool: new Brush(canvas.canvas)})}
            />
        </div>
    )
}

export default Toolbar;