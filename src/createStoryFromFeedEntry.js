import moment from 'moment';

export default ({title, description, categories, date}) => ({
  title,
  contentFormat: 'html',
  content: `<h1>${title}</h1>
            <blockquote>This post was originally published on ${moment(date).format('YYYY-MM-DD')}</blockquote>
            ${description}`,
  tags: categories,
  publishStatus: 'draft',
});
