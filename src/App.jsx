import {Canvas} from '@react-three/fiber'
import "./App.css"
import { MapControls } from "@react-three/drei";
import Sphere from "./componets/Sphere.jsx"
import {useEffect, useState} from "react";



export default function App() {

    const [points, setPoints] = useState([]);

    const generatePoints = (count) => {
        const points = [];
        for (let i = 0; i < count; i++) {
            points.push({
                x: Math.random() * 10, // Random number between 0 and 100
                y: Math.random() * 10,
                z: Math.random() * 10,
            });
        }
        return points;
    };

    useEffect(() => {
        const initialPoints = generatePoints(100); // Generate 10 points
        setPoints(initialPoints);
    }, []);


    return (
        <Canvas>
            <ambientLight/>
            {points.map(point => (
                <Sphere position={[point.x, point.y, point.z]} color={"blue"}/>
                ))}
            <Sphere position={[0,0,0]} color={"black"} />

            <MapControls
                enableDamping={true}
                dampingFactor={0.05}
                maxPolarAngle={Math.PI / 2}
                screenSpacePanning={true}
            />
        </Canvas>
    )
}
