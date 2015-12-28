
export default ({title, description, categories, pubDate}) => ({
  title,
  contentFormat: 'html',
  content: `<h1>${title}</h1>
            ${description}`,
  tags: categories,
  publishedAt: pubDate,
  publishStatus: 'draft',
});
