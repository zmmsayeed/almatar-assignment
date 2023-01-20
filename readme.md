# Almatar Assingment
## _Steps to run the project:_
This project is built using the NodeJs for JavaScript. 

Steps to run the project:
1. Clone the repository using the following command: 
```git clone https://github.com/zmmsayeed/almatar-assignment.git```
2. cd into the folder:
```cd almatar-assignment```
3. Install all the packages: ```npm install``
4. Create an .env file in the root directory and add the following values:
    ```APP=assingment
    PORT=3001
    GNEWS_API_KEY=<GNEWS_API_KEY>
    ```
    *Note: The GNEWS_API_KEY has to be entered from the GNEWS API KEY Dashboard*
5. Run the server using the following command:
```node index.js```

____________

### Information Regarding the Project:
The code in this repository sets up an Express server that listens for GET requests and uses the **GNews API** to fetch articles based on different parameters. The GNews API **requires** an **API key**, which is read from the `.env` file using the `dotenv` library. The server listens on port **3001** by default, or `process.env.PORT` if it's set.

### Endpoints:
- `/fetch-articles` - Fetches articles based on a keyword and category. The number of articles to fetch is passed as a query parameter.
Example:
    ```
    curl "http://localhost:3001/fetch-articles?keyword=technology&num=5&category=technology"
    ```
    Parameters:
    - `num`: Number of articles needed to be returned in the response
    - `category`: Category to search for. Can be **breaking-news**, **world**, **nation**, **business**, **technology**, **entertainment**, **sports**, **science**, and **health**.
    - `langauge`: Language of the articles to fetch. Default is `en`.
    - `country`: Country of the articles to fetch. Default is `us`.
    
- `/find-by-title` - Fetches articles based on a title of an article. The number of articles to fetch is passed as a query parameter.
Example:
    ```
    curl "http://localhost:3001/find-by-title?title=Microsoft&num=5"
    ```
    Parameters:
    - `title`: Title of the article to search for
    - `num`: Number of articles to fetch
    
- `/find-by-author` - Fetches articles based on the author of an article. The number of articles to fetch is passed as a query parameter.
Example:
    ```
    curl "http://localhost:3001/find-by-author?author=Elon Musk&num=5"
    ```
     Parameters:
    - `author`: Author of the article to search for
    - `num`: Number of articles to fetch
    
    
- `/search-by-keyword` - Fetches articles based on a keyword. The number of articles to fetch is passed as a query parameter.
Example:
    ```
    curl "http://localhost:3001/search-by-keyword?keyword=AI&num=5"
    ```
    Parameters:
    - `keyword`: Keyword to search for
    - `num`: Number of articles to fetch
    
The code will return the data in json format containing the articles details that match the given keyword/title/author.