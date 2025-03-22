import { Canvas } from "@react-three/fiber";

import Experience from "./components/Experience";
import Configurator from "./components/Configurator";
import { CustomizationProvider } from "./contexts/Customization";
import "./App.css";

function App() {
	return (
		<CustomizationProvider>
			<div className="app">
				<Canvas>
					<color attach="background" args={["#213547"]} />
					<fog attach="fog" args={["#213547", 10, 20]} />
					<Experience />
				</Canvas>
				<Configurator />
			</div>
		</CustomizationProvider>
	);
}

export default App;
