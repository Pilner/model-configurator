import { createContext, useContext, useState } from "react";
import { packages, umbrellaShapes, fabricColors, steelColors } from "../data";

const CustomizationContext = createContext({});

export function CustomizationProvider(props) {
	const [packageType, setPackageType] = useState(packages[0]);
	const [umbrellaShape, setUmbrellaShape] = useState(umbrellaShapes[0]);
	const [fabricColor, setFabricColor] = useState(fabricColors[0]);
	const [steelColor, setSteelColor] = useState(steelColors[0]);

	return (
		<CustomizationContext.Provider
			value={{
				packageType,
				setPackageType,
				umbrellaShape,
				setUmbrellaShape,
				fabricColor,
				setFabricColor,
				steelColor,
				setSteelColor,
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
