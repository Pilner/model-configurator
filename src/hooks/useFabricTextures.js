import { useMemo } from "react";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

export default function useFabricTextures() {
	const textures = useTexture({
		normalMap: "/textures/fabric/Fabric_Jute_001_normal.png",
		roughnessMap: "/textures/fabric/Fabric_Jute_001_roughness.png",
		heightMap: "/textures/fabric/Fabric_Jute_001_height.png",
		aoMap: "/textures/fabric/Fabric_Jute_001_ambientOcclusion.png",
	});

	return useMemo(() => {
		textures.normalMap.wrapS = textures.normalMap.wrapT =
			THREE.RepeatWrapping;
		textures.roughnessMap.wrapS = textures.roughnessMap.wrapT =
			THREE.RepeatWrapping;
		textures.heightMap.wrapS = textures.heightMap.wrapT =
			THREE.RepeatWrapping;
		textures.aoMap.wrapS = textures.aoMap.wrapT = THREE.RepeatWrapping;

		textures.normalMap.repeat.set(2, 2);
		textures.roughnessMap.repeat.set(2, 2);
		textures.heightMap.repeat.set(2, 2);
		textures.aoMap.repeat.set(2, 2);

		return textures;
	}, [textures]);
}
