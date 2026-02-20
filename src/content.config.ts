import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({
		loader: docsLoader({
			generateId: ({ entry }) => {
				const withoutExtension = entry.replace(/\.[^/.]+$/, '');
				return withoutExtension.endsWith('/index')
					? withoutExtension.slice(0, -'/index'.length)
					: withoutExtension;
			},
		}),
		schema: docsSchema(),
	}),
};
