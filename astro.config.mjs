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
							label: 'Software You Need',
							link: 'guides/start-here/'
						}
					]
				},
				{
					label: 'Data Packs',
					collapsed: true,
					items: [
						{
							label: 'Getting Started',
							collapsed: true,
							items: [
								{
									label: 'What Are Data Packs?',
									link: 'guides/data-packs/getting-started'
								},
								{
									label: 'A JSON Primer',
									link: 'guides/data-packs/getting-started/json-primer'
								},
								{
									label: 'Data Pack Software',
									link: 'guides/data-packs/getting-started/software'
								},
								{
									label: 'Data Pack VSCode Extensions',
									link: 'guides/data-packs/getting-started/extensions'
								}
							]
						},
						{
							label: 'Creating Data Packs',
							collapsed: true,
							items: [
								{
									label: 'Your First Data Pack',
									collapsed: true,
									items: [
										{
											label: 'Creating the Skeleton',
											link: '#'
										},
										{
											label: 'Settings',
											link: '#'
										},
										{
											label: 'Sites, Stores, and Views',
											link: '#'
										},
										{
											label: 'Adding A Home Page',
											link: '#'
										},
										{
											label: 'Product Attributes',
											link: '#'
										},
										{
											label: 'Products',
											link: '#'
										},
										{
											label: 'Basic Configurations',
											link: '#'
										},
									]
								}
							]
						},
						{
							label: 'Exporting Data Packs',
							collapsed: true,
							items: [
								{
									label: 'Getting Started',
									link: 'guides/data-packs/export'
								}
							]
						}
					]
				},
				{
					label: 'Commerce Demos',
					collapsed: true,
					items: [
						{
							label: 'Demo System Commerce',
							collapsed: true,
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
							collapsed: true,
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
					]
				},
				{
					label: 'App Builder Demos',
					collapsed: true,
					items: [
						{
							label: 'API Mesh',
							collapsed: true,
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
							collapsed: true,
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
						}
					]
				},
				{
					label: 'EDS Storefront',
					collapsed: true,
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
					label: 'Reference',
					collapsed: true,
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
