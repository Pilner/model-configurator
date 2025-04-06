import { useState, useEffect } from "react";

import { useCustomization } from "../contexts/Customization";

import { umbrellaShapes, fabricColors, steelColors } from "../data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Configurator() {
	const [isOpen, setIsOpen] = useState(false);

	const {
		umbrellaShape,
		setUmbrellaShape,
		fabricColor,
		setFabricColor,
		steelColor,
		setSteelColor,
	} = useCustomization();

	return (
		<>
			{isOpen ? (
				<div className="backdrop-blur-sm fixed bottom-4 md:bottom-auto left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto w-full top-auto md:right-0 md:w-2/7 lg:w-1/4 md:top-1/2 md:-translate-y-1/2 text-white p-[16px] border-t border-l-0 md:border-l md:border-t-0 border-[#999999] flex overflow-y-scroll h-4/5 md:h-full flex-col gap-[32px]">
					<button
						className="text-white transition-colors duration-250 border border-white absolute rounded-lg flex items-center justify-center w-12 h-12 top-2 right-2 cursor-pointer"
						onClick={() => setIsOpen(!isOpen)}
					>
						<FontAwesomeIcon icon={faXmark} />
					</button>
					<div>
						<div className="font-bold uppercase">
							Umbrella Shape
						</div>
						<div className="flex items-center gap-[24px] mt-[24px] flex-wrap">
							{umbrellaShapes.map((item, index) => (
								<div
									key={index}
									className={`transition-opacity duration-500 flex flex-col gap-[8px] hover:opacity-[0.8] hover:cursor-pointer `}
									onClick={() => setUmbrellaShape(item)}
								>
									<div
										className={`text-[12px] text-[#acacac] transition-color duration-500 ${
											umbrellaShape === item
												? "text-white"
												: ""
										}`}
									>
										{item.name}
									</div>
								</div>
							))}
						</div>
					</div>
					<div>
						<div className="font-bold uppercase">Fabric Color</div>
						<div className="grid items-center gap-[24px] mt-[24px] grid-cols-3">
							{fabricColors.map((item, index) => (
								<div
									key={index}
									className={`transition-opacity duration-500 flex items-center gap-[8px] hover:opacity-[0.8] hover:cursor-pointer `}
									onClick={() => setFabricColor(item)}
								>
									<div
										style={{ backgroundColor: item.color }}
										className={` w-[32px] h-[32px] rounded-full border-[2px] border-[#999999] ${
											item.color === fabricColor.color
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
						<div className="font-bold uppercase">Steel Color</div>
						<div className="grid items-center gap-[24px] mt-[24px] grid-cols-3">
							{steelColors.map((item, index) => (
								<div
									key={index}
									className={`transition-opacity duration-500 flex items-center gap-[8px] hover:opacity-[0.8] hover:cursor-pointer `}
									onClick={() => setSteelColor(item)}
								>
									<div
										style={{ backgroundColor: item.color }}
										className={` w-[32px] h-[32px] rounded-full border-[2px] border-[#999999] ${
											item.color === steelColor.color
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
				</div>
			) : (
				<button
					className="text-white transition-colors duration-250 border border-white absolute rounded-lg flex items-center justify-center w-12 h-12 bottom-2 right-2 cursor-pointer"
					onClick={() => setIsOpen(!isOpen)}
				>
					<FontAwesomeIcon icon={faBars} />
				</button>
			)}
		</>
	);
}
