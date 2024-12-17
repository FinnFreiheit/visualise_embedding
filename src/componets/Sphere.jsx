import {useRef} from "react";
import {useFrame} from "@react-three/fiber";

export default function Sphere({position, color}){
    const ref = useRef();

    useFrame((state, delta) => {
        ref.current.rotation.x += delta * 0.1
    })

    return (
        <mesh position={position} ref={ref} scale={0.3}>
            <sphereGeometry />
            <meshBasicMaterial wireframe={true} color={color}/>
        </mesh>
    )
}