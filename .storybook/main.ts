import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
	stories: [
		'../src/demo/introduction.stories.mdx',
		'../src/demo/**/*.stories.tsx',
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-onboarding',
		'@storybook/addon-interactions',
	],
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
	staticDirs: ['../ops'], //👈 Configures the static asset folder in Storybook
}
export default config
