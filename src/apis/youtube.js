import axios from 'axios';

const KEY = 'AIzaSyBjBG8S044xKgJffBBWpGgRJhb6gcUem9g';

export default axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3',
      params: {
            part: 'snippet',
            maxResults: 5,
            key: KEY
      }
});
