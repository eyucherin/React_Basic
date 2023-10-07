import React, {useState } from "react";

export default function PointerApp() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        setPosition({
            x: event.clientX,
            y: event.clientY,
        });
    };

    return (
        <div className="pointerContainer" onPointerMove={(e) => handleMouseMove(e)}>
            <div>X:{position.x}</div>
            <div>Y:{position.y}</div>
            <div className = "pointer" style = {{transform:`translate(${position.x}px,${position.y}px)`}}></div>
        </div>
    );
}
