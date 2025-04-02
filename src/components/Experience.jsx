import {
	MeshReflectorMaterial,
	PresentationControls,
	Stage,
} from "@react-three/drei";

import { Suspense } from "react";
import { Umbrella } from "./Umbrella";

export default function Experience() {
	return (
		<PresentationControls
			speed={1.5}
			global
			zoom={3}
			// polar={[0.1, Math.PI / 4, 0]}
		>
			<Stage
				environment={"city"}
				intensity={0.6}
				contactShadow={false}
				// adjustCamera={false}
			>
				<Suspense fallback={null}>
					<Umbrella
						position={[3, 1.1, 1]}
						// position={[3, -1.4, 0]}
					/>
				</Suspense>
			</Stage>
			<mesh rotation={[-Math.PI / 2, 0, 0]} position-y={-1.5}>
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
		</PresentationControls>
	);
}
