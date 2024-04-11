import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://skukla.github.io',
	integrations: [
		starlight({
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
							link: 'guides/start-here/install-software'
						},
					]
				},
				{
					label: 'Data Packs',
					items: [
						{
							label: 'Getting Started',
							link: 'guides/data-packs/getting-started/introduction'
						},
						{
							label: 'Your First Data Pack',
							link: 'guides/data-packs/create-from-scratch/create-basic'
						}
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
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
