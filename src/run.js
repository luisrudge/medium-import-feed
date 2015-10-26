import getUser from './getUser';
import postStory from './postStory';
import getFeed from './getFeed';
import createStoryFromFeedEntry from './createStoryFromFeedEntry';

export default async () => {
  const me = await getUser();
  const feed = await getFeed();
  feed.reverse();
  for (let index = 0; index < feed.length; index++) {
    const feedEntry = feed[index];
    try {
      const createdStory = await postStory(me, createStoryFromFeedEntry(feedEntry));
      console.log('Added post:');
      console.log(`Title: ${createdStory.title}`);
      console.log(`Tags: ${createdStory.tags}`);
      console.log(`Url: ${createdStory.url}`);
      console.log(`Status: ${createdStory.publishStatus}`);
      console.log(`License: ${createdStory.license} (${createdStory.licenseUrl})`);
      console.log('');
    } catch (error) {
      console.log(`Couldn't create story ${feedEntry.title}`);
      console.log(error);
    }
  }
};
