/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 ../../public/models/umbrella.glb 
*/

import React from "react";
import * as THREE from "three";
import { useGLTF, useTexture } from "@react-three/drei";
import { useCustomization } from "../contexts/Customization";

export function Umbrella(props) {
	const { nodes, materials } = useGLTF("models/umbrella.glb");

	const { umbrellaShape, fabricColor, steelColor } = useCustomization();

	const fabricTextureProps = useTexture({
		normalMap: "/textures/fabric/Fabric_Jute_001_normal.png",
		roughnessMap: "/textures/fabric/Fabric_Jute_001_roughness.png",
		heightMap: "/textures/fabric/Fabric_Jute_001_height.png",
		aoMap: "/textures/fabric/Fabric_Jute_001_ambientOcclusion.png",
	});

	const steelTextureProps = useTexture({
		normalMap: "/textures/steel/Metal_Steel_Brushed_001_normal.jpg",
		roughnessMap: "/textures/steel/Metal_Steel_Brushed_001_roughness.jpg",
		heightMap: "/textures/steel/Metal_Steel_Brushed_001_height.png",
		aoMap: "/textures/steel/Metal_Steel_Brushed_001_ambientOcclusion.jpg",
		metalnessMap: "/textures/steel/Metal_Steel_Brushed_001_metallic.jpg",
		diffuseMap: "/textures/steel/Metal_Steel_Brushed_001_diffuse.jpg",
	});

	const plasticTextureProps = useTexture({
		roughnessMap: "/textures/plastic/Plastic_001_ROUGH.jpg",
	});

	fabricTextureProps.normalMap.repeat.set(2, 2);
	fabricTextureProps.roughnessMap.repeat.set(2, 2);
	fabricTextureProps.heightMap.repeat.set(2, 2);
	fabricTextureProps.aoMap.repeat.set(2, 2);

	fabricTextureProps.normalMap.wrapS =
		fabricTextureProps.normalMap.wrapT =
		fabricTextureProps.roughnessMap.wrapS =
		fabricTextureProps.roughnessMap.wrapT =
		fabricTextureProps.heightMap.wrapS =
		fabricTextureProps.heightMap.wrapT =
		fabricTextureProps.aoMap.wrapS =
		fabricTextureProps.aoMap.wrapT =
			THREE.RepeatWrapping;

	return (
		<group {...props} dispose={null}>
			{/* Canopy */}
			<mesh
				visible={umbrellaShape.name === "Square"}
				geometry={nodes.Square_Canopy.geometry}
				material={materials.Material}
				position={[0, 3.435, 0]}
			>
				<meshStandardMaterial
					{...fabricTextureProps}
					color={fabricColor.color}
				/>
			</mesh>
			<mesh
				visible={umbrellaShape.name === "Rectangle"}
				geometry={nodes.Rectangular_Canopy.geometry}
				material={materials["Material.001"]}
				position={[0, 3.472, 0]}
			>
				<meshStandardMaterial
					{...fabricTextureProps}
					color={fabricColor.color}
				/>
			</mesh>
			<mesh
				visible={umbrellaShape.name === "Truncated Square"}
				geometry={nodes.Truncated_Canopy.geometry}
				material={materials["Material.005"]}
				position={[0, 2.36, 0]}
				scale={[0.115, 1, 0.115]}
			>
				<meshStandardMaterial
					{...fabricTextureProps}
					color={fabricColor.color}
				/>
			</mesh>

			{/* Gutter */}
			<mesh
				visible={umbrellaShape.name === "Square"}
				geometry={nodes.Square_Gutter.geometry}
				material={nodes.Square_Gutter.material}
				position={[0, 2.383, 0]}
				rotation={[0, Math.PI / 2, 0]}
				scale={[0.685, 1, 1]}
			>
				<meshStandardMaterial
					{...steelTextureProps}
					color={steelColor.color}
				/>
			</mesh>
			<mesh
				visible={umbrellaShape.name === "Rectangle"}
				geometry={nodes.Rectangular_Gutter.geometry}
				material={nodes.Rectangular_Gutter.material}
				position={[-2.337, 3.429, -1.6]}
			>
				<meshStandardMaterial
					{...steelTextureProps}
					color={steelColor.color}
				/>
			</mesh>
			<mesh
				visible={umbrellaShape.name === "Truncated Square"}
				geometry={nodes.Truncated_GUTTER.geometry}
				material={nodes.Truncated_GUTTER.material}
				scale={2.298}
			>
				<meshStandardMaterial
					{...steelTextureProps}
					color={steelColor.color}
				/>
			</mesh>

			{/* Center Post */}
			<mesh
				visible={umbrellaShape.name === "Square"}
				geometry={nodes.Square_Center_Post.geometry}
				material={nodes.Square_Center_Post.material}
				rotation={[-0.172, 1.571, 0]}
			>
				<meshStandardMaterial
					{...steelTextureProps}
					color={steelColor.color}
				/>
			</mesh>
			<mesh
				visible={umbrellaShape.name === "Rectangle"}
				geometry={nodes.Rectangular_Center_Post.geometry}
				material={nodes.Rectangular_Center_Post.material}
				rotation={[0, 0, -0.172]}
			>
				<meshStandardMaterial
					{...steelTextureProps}
					color={steelColor.color}
				/>
			</mesh>
			<mesh
				visible={umbrellaShape.name === "Truncated Square"}
				geometry={nodes.Truncated_Center_Post.geometry}
				material={nodes.Truncated_Center_Post.material}
				rotation={[0, Math.PI / 4, -0.172]}
			>
				<meshStandardMaterial
					{...steelTextureProps}
					color={steelColor.color}
				/>
			</mesh>

			{/* Frame */}
			<mesh
				visible={umbrellaShape.name === "Square"}
				geometry={nodes.Square_Frame.geometry}
				material={nodes.Square_Frame.material}
				position={[-0.003, 0, -0.003]}
				rotation={[-Math.PI, 1.385, 2.969]}
			>
				<meshStandardMaterial
					{...steelTextureProps}
					color={steelColor.color}
				/>
			</mesh>
			<mesh
				visible={umbrellaShape.name === "Rectangle"}
				geometry={nodes.Rectangular_Frame.geometry}
				material={nodes.Rectangular_Frame.material}
				position={[1.363, 2.548, 0]}
				rotation={[0, 0, -0.172]}
			>
				<meshStandardMaterial
					{...steelTextureProps}
					color={steelColor.color}
				/>
			</mesh>
			<mesh
				visible={umbrellaShape.name === "Truncated Square"}
				geometry={nodes.Truncated_Frame.geometry}
				material={nodes.Truncated_Frame.material}
				position={[0, 0, -0.004]}
				rotation={[0, 0.971, -0.172]}
			>
				<meshStandardMaterial
					{...steelTextureProps}
					color={steelColor.color}
				/>
			</mesh>

			{/* Wind Columns */}
			<mesh
				visible={umbrellaShape.name === "Square"}
				geometry={nodes.Square_Columns.geometry}
				material={nodes.Square_Columns.material}
				position={[0, 1.18, 0]}
				rotation={[0, Math.PI / 2, 0]}
				scale={[0.684, 1, 1.001]}
			>
				<meshStandardMaterial
					{...steelTextureProps}
					color={steelColor.color}
				/>
			</mesh>
			<mesh
				visible={umbrellaShape.name === "Rectangle"}
				geometry={nodes.Rectangular_Columns.geometry}
				material={nodes.Rectangular_Columns.material}
				position={[2.373, 2.36, 1.614]}
			>
				<meshStandardMaterial
					{...steelTextureProps}
					color={steelColor.color}
				/>
			</mesh>
			<mesh
				visible={umbrellaShape.name === "Truncated Square"}
				geometry={nodes.Truncated_Columns.geometry}
				material={nodes.Truncated_Columns.material}
				position={[0, 1.18, 0]}
				rotation={[0, Math.PI / 4, 0]}
				scale={[0.684, 1, 1.001]}
			>
				<meshStandardMaterial
					{...steelTextureProps}
					color={steelColor.color}
				/>
			</mesh>

			{/* Cover */}
			<mesh
				visible={umbrellaShape.name === "Square"}
				geometry={nodes.Square_Cover.geometry}
				material={nodes.Square_Cover.material}
			>
				<meshStandardMaterial
					{...plasticTextureProps}
					color={"#DCF0EF"}
					transparent
					opacity={0.25}
				/>
			</mesh>
			<mesh
				visible={umbrellaShape.name === "Rectangle"}
				geometry={nodes.Rectangular_Cover.geometry}
				material={nodes.Rectangular_Cover.material}
			>
				<meshStandardMaterial
					{...plasticTextureProps}
					color={"#DCF0EF"}
					transparent
					opacity={0.25}
				/>
			</mesh>
			<mesh
				visible={umbrellaShape.name === "Truncated Square"}
				geometry={nodes.Truncated_Cover.geometry}
				material={nodes.Truncated_Cover.material}
				position={[-1, 0, 3.408]}
			>
				<meshStandardMaterial
					{...plasticTextureProps}
					color={"#DCF0EF"}
					transparent
					opacity={0.25}
				/>
			</mesh>

			{/* Heater */}
			<mesh
				visible={umbrellaShape.name === "Square"}
				geometry={nodes.Square_Heater.geometry}
				material={nodes.Square_Heater.material}
				rotation={[0, 1.412, -0.172]}
			/>
			<mesh
				visible={umbrellaShape.name === "Rectangle"}
				geometry={nodes.Rectangular_Heater.geometry}
				material={nodes.Rectangular_Heater.material}
				rotation={[0, -1.195, -0.172]}
			/>
			<mesh
				visible={umbrellaShape.name === "Truncated Square"}
				geometry={nodes.Truncated_Heater.geometry}
				material={nodes.Truncated_Heater.material}
				rotation={[0, 0.627, -0.172]}
			/>
		</group>
	);
}

useGLTF.preload("models/umbrella.glb");
