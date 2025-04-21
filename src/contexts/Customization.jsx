import { createContext, useContext, useState } from "react";
import { packages, umbrellaShapes, fabricColors, steelColors } from "../data";

const CustomizationContext = createContext({});

export function CustomizationProvider(props) {
	const [packageType, setPackageType] = useState(() => {
		const storedPackageType = localStorage.getItem("packageType");
		return storedPackageType ? JSON.parse(storedPackageType) : packages[0];
	});
	const [umbrellaShape, setUmbrellaShape] = useState(() => {
		const storedUmbrellaShape = localStorage.getItem("umbrellaShape");
		return storedUmbrellaShape
			? JSON.parse(storedUmbrellaShape)
			: umbrellaShapes[0];
	});
	const [fabricColor, setFabricColor] = useState(() => {
		const storedFabricColor = localStorage.getItem("fabricColor");
		return storedFabricColor
			? JSON.parse(storedFabricColor)
			: fabricColors[0];
	});
	const [steelColor, setSteelColor] = useState(() => {
		const storedSteelColor = localStorage.getItem("steelColor");
		return storedSteelColor ? JSON.parse(storedSteelColor) : steelColors[0];
	});

	return (
		<CustomizationContext.Provider
			value={{
				packageType,
				setPackageType: (value) => {
					setPackageType(value);
					localStorage.setItem("packageType", JSON.stringify(value));
				},
				umbrellaShape,
				setUmbrellaShape: (value) => {
					setUmbrellaShape(value);
					localStorage.setItem(
						"umbrellaShape",
						JSON.stringify(value)
					);
				},
				fabricColor,
				setFabricColor: (value) => {
					setFabricColor(value);
					localStorage.setItem("fabricColor", JSON.stringify(value));
				},
				steelColor,
				setSteelColor: (value) => {
					setSteelColor(value);
					localStorage.setItem("steelColor", JSON.stringify(value));
				},
			}}
		>
			{props.children}
		</CustomizationContext.Provider>
	);
}

export function useCustomization() {
	const context = useContext(CustomizationContext);

	return context;
}
