import { useMemo } from "react";
import { useTexture } from "@react-three/drei";

export default function usePlasticTextures() {
	const textures = useTexture({
		roughnessMap: "/textures/plastic/Plastic_001_ROUGH.jpg",
	});

	return useMemo(() => {
		return textures;
	}, [textures]);
}
