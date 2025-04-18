import { MeshReflectorMaterial, OrbitControls, Stage } from "@react-three/drei";

import { Suspense } from "react";
import { Umbrella } from "./Umbrella";

export default function Experience() {
	return (
		<>
			<OrbitControls
				autoRotate={true}
				autoRotateSpeed={2}
				maxPolarAngle={Math.PI / 1.75}
				minDistance={3}
				target={[0, 2, 0]}
				position={[0, 2, 5]}
			/>
			<Stage
				environment={"city"}
				intensity={0.6}
				contactShadow={false}
				adjustCamera={false}
				shadows={false}
			>
				<Suspense fallback={null}>
					<Umbrella />
				</Suspense>
			</Stage>
			<mesh rotation={[-Math.PI / 2, 0, 0]}>
				<planeGeometry args={[170, 170]} />
				<MeshReflectorMaterial
					blur={[100, 100]}
					resolution={2048}
					mixBlur={1}
					mixStrength={40}
					roughness={1}
					depthScale={1.2}
					minDepthThreshold={0.4}
					maxDepthThreshold={1.4}
					color={"#101010"}
					metalness={0.5}
				/>
			</mesh>
		</>
	);
}
