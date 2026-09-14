export const journalPublicationStates = ['DRAFT', 'READY', 'PUBLISHED', 'ARCHIVED'] as const;
export type JournalPublicationState = typeof journalPublicationStates[number];

export const journalCategories = [
  { id: 'new-earth', label: 'New Earth', description: 'Updates and learning across the wider New Earth body of work.' },
  { id: 'technology', label: 'Technology', description: 'Evidence-led notes on life-serving tools, systems and engineering.' },
  { id: 'microgrow', label: 'MicroGrow', description: 'Bounded progress and learning related to the MicroGrow project.' },
  { id: 'digital-products', label: 'Digital Products', description: 'Creation, development and release context for approved future offers.' },
  { id: 'research', label: 'Research', description: 'Questions, investigations and learning that do not imply finished results.' },
  { id: 'founder-journey', label: 'Founder Journey', description: 'Approved reflections on the founders’ developing work and learning.' },
  { id: 'conscious-living', label: 'Conscious Living', description: 'Approved writing connected with conscious living and practical wellbeing.' },
] as const;

export type JournalCategoryId = typeof journalCategories[number]['id'];

export const journalAuthors = [
  { id: 'peter', label: 'Peter' },
  { id: 'hayley', label: 'Hayley' },
  { id: 'new-earth', label: 'New Earth' },
] as const;

export type JournalAuthorId = typeof journalAuthors[number]['id'];

export interface JournalAssetReference {
  publicPath: `/assets/${string}`;
  alt: string;
  approvedForPublicUse: boolean;
}

export interface JournalArticle {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: JournalCategoryId;
  author: JournalAuthorId;
  publishedDate: string;
  updatedDate?: string;
  status: JournalPublicationState;
  featured: boolean;
  heroAsset?: JournalAssetReference;
  socialAsset?: JournalAssetReference;
  readingTime: string;
  tags: string[];
  relatedProjectIds: string[];
  relatedProductIds: string[];
  bodySource: string;
  body: string[];
  published: boolean;
}

// This file is the controlled public Journal boundary. Repository Markdown,
// project notes and strategy material do not publish unless an intentionally
// approved article record is added here with status PUBLISHED and published true.
export const journalArticles: JournalArticle[] = [];

export const publishedJournalArticles = journalArticles.filter(
  (article) => article.status === 'PUBLISHED' && article.published,
);

export const journalCategory = (id: JournalCategoryId) =>
  journalCategories.find((category) => category.id === id);

export const journalAuthor = (id: JournalAuthorId) =>
  journalAuthors.find((author) => author.id === id);
