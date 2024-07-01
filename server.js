const express = require('express');
const axios = require('axios');
const { getSpotifyToken } = require('./getToken');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3014; 


app.use(express.static('public'));


app.get('/', (req, res) => {
  res.send('Welcome to the Spotify API integration server');
});


app.get('/api/new-releases', async (req, res) => {
  try {
    const token = await getSpotifyToken(); 

    const response = await axios.get('https://api.spotify.com/v1/browse/new-releases', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      params: {
        country: 'IN',
        limit: 50,
      },
    });


    console.log('Raw response:', response.data);

    
    const newReleases = response.data.albums.items.filter(album => {
      const releaseYear = new Date(album.release_date).getFullYear();
      console.log('Release Date:', album.release_date);
      return releaseYear === 2024;
    });

   
    console.log('Filtered releases:', newReleases);

   
    res.json(newReleases);
  } catch (error) {
    console.error('Error fetching data from Spotify:', error.message);
    console.error(error.response ? error.response.data : error);
    res.status(500).send('Internal Server Error');
  }
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
