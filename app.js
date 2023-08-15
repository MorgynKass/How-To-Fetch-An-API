
//Creating a variable named "URL" and setting it to a string with a url. 
const URL = "https://iskarr.github.io/austindonovan.github.io/api/business.json";

//Using the "fetch()" method to extract the JSON body content from the url.
fetch(URL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
    });