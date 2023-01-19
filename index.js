const express = require('express');
const request = require('request');

// Setting up the environment variables to read from the .env file
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 3001;


// Setting up the API key from the env file
const apiKey=process.env.GNEWS_API_KEY

app.get('/fetch-articles', (req, res) => {
    const numOfArticles = req.query.num; // number of articles to fetch
    const keyword = req.query.keyword; // keyword to search for

    // Category to search for. Can be breaking-news, world, nation, business, technology, entertainment, sports, science and health.
    const category = req.query.category; 
    const url = `https://gnews.io/api/v4/top-headlines?topic=${category}&token=${apiKey}&max=${numOfArticles}&lan=en&country=us`;

    request.get(url, (error, response, body) => {
        if (error) {
            res.status(500).send(error);
        } else {
            const data = JSON.parse(body);
            res.send(data);
        }
    });
});

app.get('/find-by-title', (req, res) => {
    const title = req.query.title; // title of the article to search for
    const numOfArticles = req.query.num; // number of articles to fetch

    const url = `https://gnews.io/api/v4/search?q=${title}&token=${apiKey}&max=${numOfArticles}`;
    request.get(url, (error, response, body) => {
      if (error) {
        res.status(500).send(error);
      } else {
        const data = JSON.parse(body);
        res.send(data);
      }
    });
});

app.get('/find-by-author', (req, res) => {
    const author = req.query.author; // author of the article to search for
    const numOfArticles = req.query.num; // number of articles to fetch

    const url = `https://gnews.io/api/v4/search?q=${author}&token=${apiKey}&max=${numOfArticles}`;
    request.get(url, (error, response, body) => {
      if (error) {
        res.status(500).send(error);
      } else {
        const data = JSON.parse(body);
        res.send(data);
      }
    });
});

app.get('/search-by-keyword', (req, res) => {
    const keyword = req.query.keyword; // keyword to search for
    const numOfArticles = req.query.num; // number of articles to fetch

    const url = `https://gnews.io/api/v4/search?q=${keyword}&token=${apiKey}&max=${numOfArticles}`;
    request.get(url, (error, response, body) => {
      if (error) {
        res.status(500).send(error);
      } else {
        const data = JSON.parse(body);
        res.send(data);
      }
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


