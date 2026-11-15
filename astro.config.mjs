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
			customCss: [
				'./src/styles/layout.css'
			],
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
					label: 'Technical Communication',
					items: [{ autogenerate: { directory: 'guides' } }],
				},
				{
					label: 'Documentation Engineering',
					items: [{ autogenerate: { directory: 'tools' } }],
				},
				{
					label: 'Information Analysis',
					items: [{ autogenerate: { directory: 'dx' } }],
				},
				{
					label: 'Knowledge Engineering',
					items: [{ autogenerate: { directory: 'knowledge' } }],
				},
				{
					label: 'Project Insights',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
	site: 'https://techierider.github.io',
	base: '/starlight'
});
