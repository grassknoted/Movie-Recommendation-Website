# Movie Recommendation Website

A website that helps recommend upcoming or released movies to the user based on the user's likes and dislikes using **Machine Learning** Algorithms, combined with a simplistic and intuitive User Inteface.

The web app is built on Python's Flask to help users decide which upcoming movies they would enjoy watching, based on
their past likes and dislikes, based on ID3 (Decision Tree) algorithm. It also contains datasets of IMdB Top 1000 Movies, IMdB Top 250 Movies, and all the upcoming movies listed on IMdB, including and up to February 2017.

If the user enters a movie that is not present in the dataset, scripts dynamically scrape legitimate sources, to get the movie's details.

The website also has a Nodal Recommendation system which relates a specified movie with similar movies, which cascades to the third degree.


### Technology Stack

* Python (_Flask_, _sklearn_, _BeautifulSoup_, _pandas_)
* Javascript (_AJAX_, _JSON_)
* HTML5
* CSS3
* jQuery
