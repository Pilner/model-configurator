import { MeshReflectorMaterial, OrbitControls, Stage } from "@react-three/drei";
import { Suspense } from "react";
import { Umbrella } from "./Umbrella";

export default function Experience() {
	return (
		<>
			<Suspense fallback={null}>
				<OrbitControls
					autoRotate={true}
					autoRotateSpeed={0.5}
					maxPolarAngle={Math.PI / 1.75}
					minDistance={3}
					target={[0, 2, 0]}
					position={[0, 2, 5]}
					// enablePan={false}
				/>
				<Stage
					environment={"city"}
					intensity={0.6}
					contactShadow={false}
					adjustCamera={false}
					shadows={false}
				/>
				<Umbrella />
			</Suspense>
			<mesh rotation={[-Math.PI / 2, 0, 0]}>
				<planeGeometry args={[170, 170]} />
				<MeshReflectorMaterial color={"#101010"} />
			</mesh>
		</>
	);
}
