import React, { MutableRefObject, useEffect, useRef } from "react"
import {useParams} from "react-router-dom"
import {observer} from "mobx-react-lite"

import "../css/modules/Canvas.module.scss"
import canvas from "../store/canvas"
import tools from "../store/tools"

import Brush from "../tools/Brush"
import ModalName from "./ModalName"

const Canvas = observer(() => {

    const reference = useRef() as MutableRefObject<HTMLCanvasElement>
    const params = useParams<string>()

    useEffect(() => {
        canvas.setCanvas(reference.current)
        tools.setTool({tool: new Brush(reference.current)})
    }, [])

    useEffect(() => {
       if (canvas.username) {
           const socket = new WebSocket("ws://localhost:5000")
           socket.onopen = () => {
               console.log("Connected")
               socket.send(JSON.stringify({
                   id: params.id,
                   username: canvas.username,
                   type: "join"
               }))
           }

           socket.onmessage = (event) => {
             console.log(event.data)
           }
       }
    }, [canvas.username])

    const onMouseDown = (): void => {
        canvas.setUndo(reference.current.toDataURL())
    }

    return (
        <div className="canvas">
          <ModalName />
          <canvas onMouseDown={onMouseDown} ref={reference} width={600} height={400} />
        </div>
    )
})

export default Canvas