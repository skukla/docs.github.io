import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom'

// https://astro.build/config
export default defineConfig({
	site: 'https://skukla.github.io',
	integrations: [
		starlight({
			plugins: [starlightImageZoom()],
			title: 'Kukla Docs',
			customCss: ['./src/styles/custom.css'],
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Start Here',
					items: [
						{
							label: 'Stuff You Need',
							link: 'guides/start-here/'
						},
					]
				},
				{
					label: 'Data Packs',
					items: [
						{
							label: 'Getting Started',
							link: 'guides/data-packs/getting-started'
						},
						{
							label: 'Your First Data Pack',
							link: 'guides/data-packs/create/your-first-pack'
						},
						{
							label: 'Exporting Data Packs',
							link: 'guides/data-packs/export'
						}
					]
				},
				{
					label: 'Demo System Commerce',
					items: [
						{
							label: 'Getting Started',
							link: '#'
						},
						{
							label: 'Recommended Workflow',
							link: '#'
						},
					]
				},
				{
					label: 'Kukla VM Builder',
					items: [
						{
							label: 'Introduction',
							link: 'guides/vm-builder/introduction'
						},
						{
							label: 'Installation and Updates',
							link: 'guides/vm-builder/installation'
						},
						{
							label: 'Getting Started',
							link: 'guides/vm-builder/getting-started'
						},
						{
							label: 'VM Configuration',
							link: 'guides/vm-builder/config_json'
						},
						{
							label: 'Your First Project',
							link: 'guides/vm-builder/first-project'
						},
					]
				},
				{
					label: 'EDS Storefront',
					items: [
						{
							label: 'Getting Started',
							link: '#'
						},
						{
							label: 'Commerce Configuration',
							link: '#'
						},
						{
							label: 'EDS Configuration',
							link: '#'
						},
						{
							label: 'Caveats',
							link: '#'
						},
					]
				},
				{
					label: 'API Mesh',
					items: [
						{
							label: 'Getting Started',
							link: '#'
						},
						{
							label: 'Installation',
							link: '#'
						},
						{
							label: 'Creating Your Mesh',
							link: '#'
						},
					]
				},
				{
					label: 'App Builder Integration',
					items: [
						{
							label: 'Getting Started',
							link: '#'
						},
						{
							label: 'Installation',
							link: '#'
						},
						{
							label: 'Creating Your App Builder App',
							link: '#'
						},
					]
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
