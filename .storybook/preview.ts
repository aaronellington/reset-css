import type { Preview } from '@storybook/react'

const preview: Preview = {
	parameters: {
		backgrounds: {
			default: 'primary',
			values: [
				{
					name: 'primary',
					value: 'var(--reset-css-background-primary)',
				},
				{
					name: 'secondary',
					value: 'var(--reset-css-background-secondary)',
				},
			],
		},
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
}

import '../src/index.scss'

export default preview
