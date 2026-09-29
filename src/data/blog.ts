export type BlogAuthor = {
  name: string;
  image?: string;
  bio?: string;
  slug?: { current: string };
  _id?: number | string;
  _ref?: number | string;
};

export type Blog = {
  _id: string;
  title: string;
  slug: { current: string };
  metadata: string;
  body: any[];
  mainImage?: string;
  author?: BlogAuthor;
  tags?: string[];
  publishedAt?: string;
};

const blogPosts: Blog[] = [
  {
    _id: "blog-1",
    title: "How to ship a polished portfolio in one weekend",
    slug: { current: "ship-a-polished-portfolio" },
    metadata:
      "A simple launch checklist for building a modern portfolio site that feels premium without overengineering it.",
    body: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "A strong portfolio is less about complexity and more about clarity. Pick a single objective, tighten the message, and remove anything that dilutes the narrative.",
          },
        ],
      },
    ],
    mainImage: "/images/blog/blog-01.jpg",
    author: { name: "Ian Davison", slug: { current: "ian-davison" } },
    tags: ["Portfolio", "Launch", "Design"],
    publishedAt: "2026-04-12",
  },
  {
    _id: "blog-2",
    title: "The most effective SEO upgrades for developer portfolios",
    slug: { current: "seo-upgrades-for-developer-portfolios" },
    metadata:
      "A practical framework for improving search discoverability without sacrificing speed or user experience.",
    body: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Search visibility improves when your content matches real user intent. Focus on useful headlines, unique project summaries, and a clear call to action on every page.",
          },
        ],
      },
    ],
    mainImage: "/images/blog/blog-02.jpg",
    author: { name: "Ian Davison", slug: { current: "ian-davison" } },
    tags: ["SEO", "Marketing", "Web"],
    publishedAt: "2026-05-03",
  },
  {
    _id: "blog-3",
    title: "Why fast interactions matter more than flashy animations",
    slug: { current: "why-fast-interactions-matter" },
    metadata:
      "Performance and polish often win over heavy motion. Make your interface feel responsive without obscuring the core experience.",
    body: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Fast feedback loops help people trust your product. If the interface feels quick and stable, the brand instantly feels more premium.",
          },
        ],
      },
    ],
    mainImage: "/images/blog/blog-03.jpg",
    author: { name: "Ian Davison", slug: { current: "ian-davison" } },
    tags: ["Performance", "UX", "Next.js"],
    publishedAt: "2026-06-05",
  },
  {
    _id: "blog-4",
    title: "Designing a clear narrative for freelance work",
    slug: { current: "designing-a-clear-narrative" },
    metadata:
      "When clients scan a portfolio, they need a simplifying story. Show outcomes, process, and proof, not random artifacts.",
    body: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "A portfolio should reduce uncertainty. Make it easy for someone to understand the kind of work you do, who it is for, and the value you create.",
          },
        ],
      },
    ],
    mainImage: "/images/blog/blog-04.jpg",
    author: { name: "Ian Davison", slug: { current: "ian-davison" } },
    tags: ["Freelance", "Branding", "Storytelling"],
    publishedAt: "2026-07-19",
  },
];

export function getPosts(): Blog[] {
  return blogPosts;
}

export function getPost(slug: string): Blog | undefined {
  return blogPosts.find((post) => post.slug.current === slug);
}

export function getPostsByAuthor(authorSlug: string): Blog[] {
  return blogPosts.filter(
    (post) => post.author?.slug?.current === authorSlug,
  );
}

export function imageBuilder(source?: string) {
  return {
    url: () => source || "/images/blog/blog-01.jpg",
  };
}
