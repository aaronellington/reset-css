import type { Preview } from "@storybook/react"

import "../src/index.scss"

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		backgrounds: {
			default: "Primary",
			values: [
				{
					name: "Primary",
					value: "var(--reset-css-background-primary)",
				},
				{
					name: "Secondary",
					value: "var(--reset-css-background-secondary)",
				},
			],
		},
	},
}

export default preview
