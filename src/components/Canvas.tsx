import React from "react"
import "../css/modules/Canvas.module.scss"

const Canvas = () => {
    return (
        <div className="canvas">
          <canvas width={600} height={400} />
        </div>
    )
}

export default Canvas