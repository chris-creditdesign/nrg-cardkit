const journals = [
	{
		name: "Nature",
		colour: "#E30613",
		secondaryColour: "#E30613",
		logo: "./images/Nature.png",
	},
	{
		name: "Nature Astronomy",
		colour: "#516B78",
		secondaryColour: "#516B78",
		logo: "./images/Nature-Astronomy.png",
	},
	{
		name: "Nature Biomedical Engineering",
		colour: "#85237F",
		secondaryColour: "#85237F",
		logo: "./images/Nature-Biomedical-Engineering.png",
	},
	{
		name: "Nature Biotechnology",
		colour: "#918F34",
		secondaryColour: "#918F34",
		logo: "./images/Nature-Biotechnology.png",
	},
	{
		name: "Nature Catalysis",
		colour: "#2a63af",
		secondaryColour: "#2a63af",
		logo: "./images/Nature-Catalysis.png",
	},
	{
		name: "Nature Cell Biology",
		colour: "#065DA7",
		secondaryColour: "#065DA7",
		logo: "./images/Nature-Cell-Biology.png",
	},
	{
		name: "Nature Chemical Biology",
		colour: "#0080AF",
		secondaryColour: "#0080AF",
		logo: "./images/Nature-Chemical-Biology.png",
	},
	{
		name: "Nature Chemistry",
		colour: "#5C2483",
		secondaryColour: "#5C2483",
		logo: "./images/Nature-Chemistry.png",
	},
	{
		name: "Nature Climate Change",
		colour: "#0099BC",
		secondaryColour: "#0099BC",
		logo: "./images/Nature-Climate-Change.png",
	},
	{
		name: "Nature Communications",
		colour: "#507885",
		secondaryColour: "#507885",
		logo: "./images/Nature-Communications.png",
	},
	{
		name: "Nature Communications Chemistry",
		colour: "#507885",
		secondaryColour: "#507885",
		logo: "./images/Nature-Communications-Chemistry.png",
	},
	{
		name: "Nature Communications Biology",
		colour: "#507885",
		secondaryColour: "#507885",
		logo: "./images/Nature-Communications-Biology.png",
	},
	{
		name: "Nature Communications Physics",
		colour: "#507885",
		secondaryColour: "#507885",
		logo: "./images/Nature-Communications-Physics.png",
	},
	{
		name: "Nature Ecology & Evolution",
		colour: "#7c7640",
		secondaryColour: "#7c7640",
		logo: "./images/Nature-Ecology-&-Evolution.png",
	},
	{
		name: "Nature Electronics",
		colour: "#488a96",
		secondaryColour: "#488a96",
		logo: "./images/Nature-Electronics.png",
	},
	{
		name: "Nature Energy",
		colour: "#ec6608",
		secondaryColour: "#ec6608",
		logo: "./images/Nature-Energy.png",
	},
	{
		name: "Nature Food",
		colour: "#f2b300",
		secondaryColour: "#f2b300",
		logo: "./images/Nature-Food.png",
	},
	{
		name: "Nature Genetics",
		colour: "#4A6B53",
		secondaryColour: "#4A6B53",
		logo: "./images/Nature-Genetics.png",
	},
	{
		name: "Nature Geoscience",
		colour: "#00663A",
		secondaryColour: "#00663A",
		logo: "./images/Nature-Geoscience.png",
	},
	{
		name: "Nature Human Behaviour",
		colour: "#00497D",
		secondaryColour: "#00497D",
		logo: "./images/Nature-Human-Behaviour.png",
	},
	{
		name: "Nature Immunology",
		colour: "#006394",
		secondaryColour: "#006394",
		logo: "./images/Nature-Immunology.png",
	},
	{
		name: "Nature Machine Intelligence",
		colour: "#819096",
		secondaryColour: "#819096",
		logo: "./images/Nature-Machine-Intelligence.png",
	},
	{
		name: "Nature Materials",
		colour: "#B60F3C",
		secondaryColour: "#B60F3C",
		logo: "./images/Nature-Materials.png",
	},
	{
		name: "Nature Medicine",
		colour: "#981711",
		secondaryColour: "#981711",
		logo: "./images/Nature-Medicine.png",
	},
	{
		name: "Nature Metabolism",
		colour: "#EA560D",
		secondaryColour: "#EA560D",
		logo: "./images/Nature-Metabolism.png",
	},
	{
		name: "Nature Methods",
		colour: "#4b617f",
		secondaryColour: "#4b617f",
		logo: "./images/Nature-Methods.png",
	},
	{
		name: "Nature Microbiology",
		colour: "#814997",
		secondaryColour: "#814997",
		logo: "./images/Nature-Microbiology.png",
	},
	{
		name: "Nature Nanotechnology",
		colour: "#E4AB00",
		secondaryColour: "#E4AB00",
		logo: "./images/Nature-Nanotechnology.png",
	},
	{
		name: "Nature Neuroscience",
		colour: "#006E89",
		secondaryColour: "#006E89",
		logo: "./images/Nature-Neuroscience.png",
	},
	{
		name: "Nature Photonics",
		colour: "#0062AB",
		secondaryColour: "#0062AB",
		logo: "./images/Nature-Photonics.png",
	},
	{
		name: "Nature Physics",
		colour: "#393187",
		secondaryColour: "#393187",
		logo: "./images/Nature-Physics.png",
	},
	{
		name: "Nature Plants",
		colour: "#3c7815",
		secondaryColour: "#3c7815",
		logo: "./images/Nature-Plants.png",
	},
	{
		name: "Nature Protocols",
		colour: "#523480",
		secondaryColour: "#523480",
		logo: "./images/Nature-Protocols.png",
	},
	{
		name: "Nature Reviews Endocrinology",
		colour: "#50B8E1",
		secondaryColour: "#50B8E1",
		logo: "./images/Nature-Reviews-Endocrinology.png",
	},
	{
		name: "Nature Reviews Cardiology",
		colour: "#5C2483",
		secondaryColour: "#5C2483",
		logo: "./images/Nature-Reviews-Cardiology.png",
	},
	{
		name: "Nature Reviews Nephrology",
		colour: "#0071B6",
		secondaryColour: "#0071B6",
		logo: "./images/Nature-Reviews-Nephrology.png",
	},
	{
		name: "Nature Reviews Clinical Oncology",
		colour: "#D7488A",
		secondaryColour: "#D7488A",
		logo: "./images/Nature-Reviews-Clinical-Oncology.png",
	},
	{
		name: "Nature Reviews Rheumatology",
		colour: "#EC6467",
		secondaryColour: "#EC6467",
		logo: "./images/Nature-Reviews-Rheumatology.png",
	},
	{
		name: "Nature Reviews Gastroenterology & Hepatology",
		colour: "#AF0D21",
		secondaryColour: "#AF0D21",
		logo:
			"./images/Nature-Reviews-Gastroenterology-&-Hepatology.png",
	},
	{
		name: "Nature Reviews Neurology",
		colour: "#903A8E",
		secondaryColour: "#903A8E",
		logo: "./images/Nature-Reviews-Neurology.png",
	},
	{
		name: "Nature Reviews Urology",
		colour: "#009A8B",
		secondaryColour: "#009A8B",
		logo: "./images/Nature-Reviews-Urology.png",
	},
	{
		name: "Nature Reviews Microbiology",
		colour: "#8E1B48",
		secondaryColour: "#8E1B48",
		logo: "./images/Nature-Reviews-Microbiology.png",
	},
	{
		name: "Nature Reviews Genetics",
		colour: "#D50911",
		secondaryColour: "#D50911",
		logo: "./images/Nature-Reviews-Genetics.png",
	},
	{
		name: "Nature Reviews Neuroscience",
		colour: "#008237",
		secondaryColour: "#008237",
		logo: "./images/Nature-Reviews-Neuroscience.png",
	},
	{
		name: "Nature Reviews Molecular Cell Biology",
		colour: "#003D7C",
		secondaryColour: "#003D7C",
		logo: "./images/Nature-Reviews-Molecular-Cell-Biology.png",
	},
	{
		name: "Nature Reviews Cancer",
		colour: "#0087A8",
		secondaryColour: "#0087A8",
		logo: "./images/Nature-Reviews-Cancer.png",
	},
	{
		name: "Nature Reviews Immunology",
		colour: "#7D69A4",
		secondaryColour: "#7D69A4",
		logo: "./images/Nature-Reviews-Immunology.png",
	},
	{
		name: "Nature Reviews Drug Discovery",
		colour: "#E67900",
		secondaryColour: "#E67900",
		logo: "./images/Nature-Reviews-Drug-Discovery.png",
	},
	{
		name: "Nature Reviews Disease Primers",
		colour: "#71A029",
		secondaryColour: "#71A029",
		logo: "./images/Nature-Reviews-Disease-Primers.png",
	},
	{
		name: "Nature Reviews Materials",
		colour: "#0098DA",
		secondaryColour: "#0098DA",
		logo: "./images/Nature-Reviews-Materials.png",
	},
	{
		name: "Nature Reviews Chemistry",
		colour: "#19675D",
		secondaryColour: "#19675D",
		logo: "./images/Nature-Reviews-Chemistry.png",
	},
	{
		name: "Nature Reviews Physics",
		colour: "#075472",
		secondaryColour: "#075472",
		logo: "./images/Nature-Reviews-Physics.png",
	},
	{
		name: "Nature Structural & Molecular Biology",
		colour: "#3F1F71",
		secondaryColour: "#3F1F71",
		logo: "./images/Nature-Structural-&-Molecular-Biology.png",
	},
	{
		name: "Nature Sustainability",
		colour: "#c83c1c",
		secondaryColour: "#c83c1c",
		logo: "./images/Nature-Sustainability.png",
	},
	{
		name: "Naturejobs",
		colour: "#085878",
		secondaryColour: "#085878",
		logo: "./images/Naturejobs.png",
	},
	{
		name: "Scientific Data",
		colour: "#3598C2",
		secondaryColour: "#3598C2",
		logo: "./images/Scientific-Data.png",
	},
	{
		name: "Scientific Reports",
		colour: "#cedde4",
		secondaryColour: "#575756",
		logo: "./images/Scientific-Reports.png",
	},
]

module.exports = journals
