import { createContext, useContext, useState } from "react";
import { umbrellaShapes, fabricColors, steelColors } from "../data";

const CustomizationContext = createContext({});

export function CustomizationProvider(props) {
	const [umbrellaShape, setUmbrellaShape] = useState(umbrellaShapes[0]);
	const [fabricColor, setFabricColor] = useState(fabricColors[0]);
	const [steelColor, setSteelColor] = useState(steelColors[0]);

	return (
		<CustomizationContext.Provider
			value={{
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
