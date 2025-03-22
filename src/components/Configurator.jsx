import {
	chairColors,
	cushionColors,
	useCustomization,
} from "../contexts/Customization";

export default function Configurator() {
	const {
		material,
		setMaterial,
		legs,
		setLegs,
		chairColor,
		setChairColor,
		cushionColor,
		setCushionColor,
	} = useCustomization();

	return (
		<div className="configurator">
			<div className="configurator_section">
				<div className="configurator_section_title">Chair Material</div>
				<div className="configurator_section_values">
					<div
						className={`item ${
							material === "leather" ? "item_active" : ""
						}`}
						onClick={() => setMaterial("leather")}
					>
						<div className="item_label">Leather</div>
					</div>
					<div
						className={`item ${
							material === "fabric" ? "item_active" : ""
						}`}
						onClick={() => setMaterial("fabric")}
					>
						<div className="item_label">Fabric</div>
					</div>
				</div>
			</div>
			<div className="configurator_section">
				<div className="configurator_section_title">Chair Color</div>
				<div className="configurator_section_values">
					{chairColors.map((item, index) => (
						<div
							key={index}
							className={`item ${
								item.color === chairColor.color
									? "item_active"
									: ""
							}`}
							onClick={() => setChairColor(item)}
						>
							<div
								className="item_dot"
								style={{
									backgroundColor: item.color,
								}}
							/>
							<div className="item_label">{item.name}</div>
						</div>
					))}
				</div>
			</div>
			<div className="configurator_section">
				<div className="configurator_section_title">Cushion Color</div>
				<div className="configurator_section_values">
					{cushionColors.map((item, index) => (
						<div
							key={index}
							className={`item ${
								item.color === cushionColor.color
									? "item_active"
									: ""
							}`}
							onClick={() => setCushionColor(item)}
						>
							<div
								className="item_dot"
								style={{
									backgroundColor: item.color,
								}}
							/>
							<div className="item_label">{item.name}</div>
						</div>
					))}
				</div>
			</div>
			<div className="configurator_section">
				<div className="configurator_section_title">Legs</div>
				<div className="configurator_section_values">
					<div
						className={`item ${legs === 1 ? "item_active" : ""}`}
						onClick={() => setLegs(1)}
					>
						<div className="item_label">Modern</div>
					</div>
					<div
						className={`item ${legs === 2 ? "item_active" : ""}`}
						onClick={() => setLegs(2)}
					>
						<div className="item_label">Classic</div>
					</div>
				</div>
			</div>
		</div>
	);
}
