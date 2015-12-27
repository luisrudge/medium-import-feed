import moment from 'moment';

export default ({title, description, categories, pubdate}) => ({
  title,
  contentFormat: 'html',
  content: `<h1>${title}</h1>
            ${description}`,
  tags: categories,
  publishedAt: pubdate,
  publishStatus: 'draft',
});
