"use strict";

// choice made by the user
let userSelection = "";

// dom elements and nodes
const $tagList = document.getElementById("tagList"); // ul menu
const $menuTags = $tagList.querySelectorAll("[data-filter]"); // nodelist
const $articleList = document.querySelectorAll("[data-tag]"); // nodelist


// listen to click on menu
$tagList.addEventListener('click', (event) => {
    // if one of the 'a' elements is clicked
    if (event.target.tagName === 'A') {
        // check the data-filter attribute in the menu
        let selectedTag = event.target.getAttribute("data-filter");

        // add attribute's value from userSelection
        userSelection = selectedTag;

        // iterate through menu and highlight selection
        $menuTags.forEach(function(entry){
            if (userSelection === entry.getAttribute("data-filter")) {
                entry.className = "selected";
            } else {
                entry.className = "";
            }
        });

        // iterate through the $articleList array
        $articleList.forEach(function(article) {
            // get article attributes
            let articleTag = article.getAttribute("data-tag");

            // turn article list of tags into an array
            let tagArray = articleTag.split(', ');

            // check if tags match the user's selection
            if(tagArray.includes(userSelection)) {
                article.className = "";
            } else {
                article.className = "hidden";
            }
        });
    }
});

