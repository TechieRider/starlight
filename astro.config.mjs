// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Johnny Starlight',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight'}, 
				{ icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/johnny-engstrom-tech/'}],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Docs-as-code', slug: 'guides/example' },
					],
				},
				{
					label: 'Tools',
					items: [{ autogenerate: { directory: 'tools' } }],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
