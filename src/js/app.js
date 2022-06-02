const videoCardContainer = document.querySelector('.videoContent');

let api_key = "AIzaSyBuNVXXr09sC60k925Tu_ZqStZk4IkZVOE";
let video_http = "https://www.googleapis.com/youtube/v3/videos?";
let channel_http = "https://www.googleapis.com/youtube/v3/channels?";

fetch(
  video_http +
    new URLSearchParams({
      key: api_key,
      part: "snippet",
      chart: "most Popular",
      maxResults: 1,
      regionCode: "IN",
    })
)
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);
    data.items.forEach((item) => {
      getChannelIcon(item);
    });
  });
  .catch(err=>console.log(err));

const getChannelIcon = (data) => {};
