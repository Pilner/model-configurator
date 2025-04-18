import { useMemo } from "react";
import { useTexture } from "@react-three/drei";

export default function useSteelTextures() {
	const textures = useTexture({
		normalMap: "/textures/steel/Metal_Steel_Brushed_001_normal.jpg",
		roughnessMap: "/textures/steel/Metal_Steel_Brushed_001_roughness.jpg",
		heightMap: "/textures/steel/Metal_Steel_Brushed_001_height.png",
		aoMap: "/textures/steel/Metal_Steel_Brushed_001_ambientOcclusion.jpg",
		metalnessMap: "/textures/steel/Metal_Steel_Brushed_001_metallic.jpg",
		diffuseMap: "/textures/steel/Metal_Steel_Brushed_001_diffuse.jpg",
	});

	return useMemo(() => {
		return textures;
	}, [textures]);
}
