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
		<div className="backdrop-blur-sm fixed bottom-4 md:bottom-auto left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto w-full top-auto md:right-0 md:w-2/7 lg:w-1/4 md:top-1/2 md:-translate-y-1/2 text-white p-[16px] border-t border-l-0 md:border-l md:border-t-0 border-[#999999] flex overflow-y-scroll h-1/5 md:h-full flex-col gap-[32px]">
			<div>
				<div className="font-bold uppercase">Chair Material</div>
				<div className="flex items-center gap-[24px] mt-[24px] flex-wrap">
					<div
						className={`transition-opacity duration-500 flex flex-col gap-[8px] hover:opacity-[0.8] hover:cursor-pointer`}
						onClick={() => setMaterial("leather")}
					>
						<div
							className={`text-[12px] text-[#acacac] transition-color duration-500 ${
								material === "leather" ? "text-white" : ""
							}`}
						>
							Leather
						</div>
					</div>
					<div
						className={`transition-opacity duration-500 flex flex-col gap-[8px] hover:opacity-[0.8] hover:cursor-pointer `}
						onClick={() => setMaterial("fabric")}
					>
						<div
							className={`text-[12px] text-[#acacac] transition-color duration-500 ${
								material === "fabric" ? "text-white" : ""
							}`}
						>
							Fabric
						</div>
					</div>
				</div>
			</div>
			<div>
				<div className="font-bold uppercase">Chair Color</div>
				<div className="flex items-center gap-[24px] mt-[24px] flex-wrap">
					{chairColors.map((item, index) => (
						<div
							key={index}
							className={`transition-opacity duration-500 flex flex-col gap-[8px] hover:opacity-[0.8] hover:cursor-pointer `}
							onClick={() => setChairColor(item)}
						>
							<div
								style={{ backgroundColor: item.color }}
								className={` w-[32px] h-[32px] rounded-full border-[2px] border-[#999999] ${
									item.color === chairColor.color
										? "border-white"
										: ""
								}`}
							/>
							<div
								className={`text-[12px] text-[#acacac] transition-color duration-500`}
							>
								{item.name}
							</div>
						</div>
					))}
				</div>
			</div>
			<div>
				<div className="font-bold uppercase">Cushion Color</div>
				<div className="flex items-center gap-[24px] mt-[24px] flex-wrap">
					{cushionColors.map((item, index) => (
						<div
							key={index}
							className={`transition-opacity duration-500 flex flex-col gap-[8px] hover:opacity-[0.8] hover:cursor-pointer `}
							onClick={() => setCushionColor(item)}
						>
							<div
								style={{ backgroundColor: item.color }}
								className={` w-[32px] h-[32px] rounded-full border-[2px] border-[#999999] ${
									item.color === cushionColor.color
										? "border-white"
										: ""
								}`}
							/>
							<div
								className={`text-[12px] text-[#acacac] transition-color duration-500`}
							>
								{item.name}
							</div>
						</div>
					))}
				</div>
			</div>
			<div>
				<div className="font-bold uppercase">Legs</div>
				<div className="flex items-center gap-[24px] mt-[24px] flex-wrap">
					<div
						className={`transition-opacity duration-500 flex flex-col gap-[8px] hover:opacity-[0.8] hover:cursor-pointer `}
						onClick={() => setLegs(1)}
					>
						<div
							className={`text-[12px] text-[#acacac] transition-color duration-500 ${
								legs === 1 ? "text-white" : ""
							}`}
						>
							Modern
						</div>
					</div>
					<div
						className={`transition-opacity duration-500 flex flex-col gap-[8px] hover:opacity-[0.8] hover:cursor-pointer `}
						onClick={() => setLegs(2)}
					>
						<div
							className={`text-[12px] text-[#acacac] transition-color duration-500 ${
								legs === 2 ? "text-white" : ""
							}`}
						>
							Classic
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
