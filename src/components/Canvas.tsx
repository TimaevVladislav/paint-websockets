import React, { MutableRefObject, useEffect, useRef } from "react"
import {observer} from "mobx-react-lite"
import "../css/modules/Canvas.module.scss"
import canvas from "../store/canvas"
import tools from "../store/tools"

import Brush from "../tools/Brush"

const Canvas = observer(() => {

    const reference = useRef() as MutableRefObject<HTMLCanvasElement>

    useEffect(() => {
        canvas.setCanvas(reference.current)
        tools.setTool({tool: new Brush(reference.current)})
    }, [])

    return (
        <div className="canvas">
          <canvas ref={reference} width={600} height={400} />
        </div>
    )
})

export default Canvas