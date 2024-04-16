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
							collapsed: false,
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
									label: 'Working With CSV Files',
									link: 'guides/data-packs/getting-started/csv-primer'
								}
							]
						},
						{
							label: 'Creating Data Packs',
							collapsed: false,
							items: [
								{
									label: 'Data Pack Skeleton',
									link: 'guides/data-packs/create/skeleton'
								},
								{
									label: 'Settings',
									link: 'guides/data-packs/create/settings'
								},
								{
									label: 'Sites, Stores, and Views',
									link: 'guides/data-packs/create/stores'
								},
								{
									label: 'Adding A Home Page',
									link: 'guides/data-packs/create/home-page'
								},
								{
									label: 'Product Attributes',
									link: 'guides/data-packs/create/product-attributes'
								},
								{
									label: 'Products',
									link: 'guides/data-packs/create/products'
								},
								{
									label: 'Basic Configurations',
									link: 'guides/data-packs/create/basic-configurations'
								},
							]
						},
						{
							label: 'Exporting Data Packs',
							collapsed: false,
							items: [
								{
									label: 'Getting Started',
									link: 'guides/data-packs/export'
								},
								{
									label: 'Useful Software',
									link: 'guides/data-packs/export/software'
								},
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
