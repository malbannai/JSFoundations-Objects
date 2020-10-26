/**
 * REFERENCES
 *
 * Array Iteration Methods: https://www.w3schools.com/JS/js_array_iteration.asp
 * String Methods: https://www.w3schools.com/Jsref/jsref_includes.asp
 */

/**************************************************************
 * getChannelName(channel)
 * - recieves a channel object
 * - returns the name of the channel
 ****************************************************************/
function getChannelName(channel) {
  return channel.name;
}

/**************************************************************
 * numberOfVideos(channel)
 * - recieves a channel object
 * - returns the number of videos that channel has
 ****************************************************************/
function numberOfVideos(channel) {
  return channel.videos.length;
}

/**************************************************************
 * channelHasVideo(videoTitle, channel):
 * - receives a video title (string)
 * - recieves a channel object
 * - returns true if the channel object has a video that matches the given video title
 * - returns false otherwise
 *
 * BONUS: use iteration method `.some()`
 ****************************************************************/
function channelHasVideo(videoTitle, channel) {
  const result = channel.videos.some((video) => video.title == videoTitle);
  return result;
}
// Trail 1:
// let Tholder = [];
// Tholder = channel.videos.map((object) => {
//   return object.title == videoTitle;
// });
// return Tholder.includes(true);

/**************************************************************
 * getChannelByName(channelName, channels):
 * - receives a channel name (string)
 * - recieves an array of channel objects
 * - returns the channel object with the same name as the channelName provided
 *
 * BONUS: use iteration method `.find()`
 ****************************************************************/
function getChannelByName(channelName, channels) {
  let found = channels.find((channel) => channel.name == channelName);
  return found !== null ? found : undefined;
}
// Trail 1:
// let channelHolder = "";
// for (let i = 0; i < channels.length; i++) {
//   if (channels[i].name == channelName) channelHolder = channels[i];
// }
// if (channelHolder == "") return undefined;
// return channelHolder;

/**************************************************************
 * getChannelByVideoTitle(videoTitle, channels):
 * - receives a video title (string)
 * - recieves an array of channel objects
 * - returns the channel object that contains a video with the video title provided
 *
 * BONUS: use iteration methods `.find()` and `.some()`
 ****************************************************************/
function getChannelByVideoTitle(videoTitle, channels) {
  // channels is an array of objects
  // one object has name,description and videos
  // videos is an array of objects
  // object in vedios have titel, duration

  // channels (array) -> channel (object) -> vedios (array) -> vedio (object) -> title

  let titleHolder = null;
  channels.find((channel) =>
    channel.videos.some((video) =>
      video.title === videoTitle
        ? (titleHolder = channel)
        : (titleHolder = undefined)
    )
  );
  return titleHolder;
}

// Trail 1:
// let channelHolder = null;
// for (let i = 0; i < channels.length; i++) {
//   channels[i].videos.map((element) => {
//     if (element.title == videoTitle) channelHolder = channels[i];
//   });
// }
// return channelHolder !== null ? channelHolder : undefined;

/**************************************************************
 * searchChannels(query, channels):
 * - receives a query (string)
 * - recieves an array of channel objects
 * - returns an array of the channel objects that contain the query in their name/description.
 *
 * Hint: use string method `.includes()` and iteration method `.filter()`
 ****************************************************************/
function searchChannels(query, channels) {
  // channels (array) -> channel (object) -> vedios (array) -> vedio (object) -> title
  let queryHolder = channels.filter(
    (channel) =>
      channel.name.includes(query) || channel.description.includes(query)
  );
  return queryHolder;
}
//Trail 1:
// let channelHolder = [];
// for (let i = 0; i < channels.length; i++) {
//   if (
//     channels[i].name.includes(query) ||
//     channels[i].description.includes(query)
//   )
//     channelHolder.push(channels[i]);
// }

// return channelHolder;

module.exports = {
  getChannelName,
  numberOfVideos,
  channelHasVideo,
  getChannelByName,
  getChannelByVideoTitle,
  searchChannels,
};
