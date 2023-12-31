import React from "react"
import "../css/modules/Toolbar.module.scss"

import tools from "../store/tools"

const SettingBar = () => {
    return (
        <div className="setting-bar">
          <label htmlFor="line-width">Толщина линии</label>

          <input
              onChange={(e) => tools.setLineWidth(e.target.value)}
              id="line-width"
              type="number"
              defaultValue={1}
              min={1}
              max={50}
          />

            <label htmlFor="stroke-color">Цвет обводки</label>

            <input
                onChange={(e) => tools.setStrokeColor(e.target.value)}
                id="stroke-color"
                type="color"
            />
        </div>
    )
}

export default SettingBar