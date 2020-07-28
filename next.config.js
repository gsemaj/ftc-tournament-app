import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

module.exports = (phase, { defaultConfig }) => {
	env: () => {
		if (phase === PHASE_DEVELOPMENT_SERVER) {
			return {
				/* development only config options here */
			};
		}

		// Default config
		return {
			domain: "localhost",
		};
	};
};
