declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]] & Render;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	export function getEntry<C extends keyof typeof entryMap, E extends keyof (typeof entryMap)[C]>(
		collection: C,
		entryKey: E
	): Promise<(typeof entryMap)[C][E] & Render>;
	export function getCollection<
		C extends keyof typeof entryMap,
		E extends keyof (typeof entryMap)[C]
	>(
		collection: C,
		filter?: (data: (typeof entryMap)[C][E]) => boolean
	): Promise<((typeof entryMap)[C][E] & Render)[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"articles": {
"design-grammar.mdx": {
  id: "design-grammar.mdx",
  slug: "design-grammar",
  body: string,
  collection: "articles",
  data: any
},
"implementing-shape-up.mdx": {
  id: "implementing-shape-up.mdx",
  slug: "implementing-shape-up",
  body: string,
  collection: "articles",
  data: any
},
"jobs-to-be-done.mdx": {
  id: "jobs-to-be-done.mdx",
  slug: "jobs-to-be-done",
  body: string,
  collection: "articles",
  data: any
},
"mocking-action-mailer.mdx": {
  id: "mocking-action-mailer.mdx",
  slug: "mocking-action-mailer",
  body: string,
  collection: "articles",
  data: any
},
"rails-contract-tests.mdx": {
  id: "rails-contract-tests.mdx",
  slug: "rails-contract-tests",
  body: string,
  collection: "articles",
  data: any
},
"testing-for-change.mdx": {
  id: "testing-for-change.mdx",
  slug: "testing-for-change",
  body: string,
  collection: "articles",
  data: any
},
"testing-graphql-in-rails.mdx": {
  id: "testing-graphql-in-rails.mdx",
  slug: "testing-graphql-in-rails",
  body: string,
  collection: "articles",
  data: any
},
"who-does-it-serve.mdx": {
  id: "who-does-it-serve.mdx",
  slug: "who-does-it-serve",
  body: string,
  collection: "articles",
  data: any
},
},

	};

	type ContentConfig = never;
}
