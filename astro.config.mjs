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
			head: [
				{
					tag: 'script',
					attrs: {
						src: 'https://cdn.jsdelivr.net/npm/litlyx-js@latest/browser/litlyx.js',
						defer: true,
						'data-workspace': '67a3a5e8b9b9224b45cc0aea',
					}
				}
			],
			sidebar: [
				{
					label: 'Portfolio',
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
	site: 'https://techierider.github.io',
	base: '/starlight'
});
