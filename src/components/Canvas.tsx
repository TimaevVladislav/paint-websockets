import React, { MutableRefObject, useEffect, useRef } from "react"
import {useParams} from "react-router-dom"
import {observer} from "mobx-react-lite"

import "../css/modules/Canvas.module.scss"
import canvas from "../store/canvas"
import tools from "../store/tools"

import Brush from "../tools/Brush"
import ModalName from "./ModalName"


interface IFigure {
    type: string
    id: string
    figure: {
        type: string,
        x: number,
        y: number
        color: string
        width: number
    }
}

const Canvas = observer(() => {

    const reference = useRef() as MutableRefObject<HTMLCanvasElement>
    const params = useParams<string>()

    useEffect(() => {
        canvas.setCanvas(reference.current)
    }, [])

    useEffect(() => {
       if (canvas.username) {
           const socket = new WebSocket("ws://localhost:5000")
           canvas.setSocket(socket)
           canvas.setSessionId(params.id as string)
           tools.setTool({tool: new Brush(reference.current, socket, params.id as string)})

           socket.onopen = () => {
               console.log("Connected")
               socket.send(JSON.stringify({
                   id: params.id,
                   username: canvas.username,
                   type: "join"
               }))
           }

           socket.onmessage = (event) => {
             let message = JSON.parse(event.data)

             if (message.type === "draw") {
                 draw(message)
             }

             if (message.type === "join") {
                 console.log(`${message.username} joined`)
             }
           }
       }
    }, [canvas.username])

    const draw = (message: IFigure): void => {
      const figure = message.figure
      const ctx = reference.current.getContext("2d")
      switch (figure.type) {
          case "brush":
              Brush.draw(ctx, figure.x, figure.y)
      }
    }

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