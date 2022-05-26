# Frontend Mentor - Expenses chart component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)

  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)

  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day’s bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page
- **Bonus**: Use the JSON data file provided to dynamically size the bars on the chart

### Screenshot

(expenses-chart-component-main\Screenshot 2022-05-26 at 03-15-47 Frontend Mentor Expenses chart component.png)

### Links

- Solution URL: [Expense Chart Component solution on Github](https://github.com/jossyboy2580/expenses-chart-component-main)
- Live Site URL: [Live Site](https://jossyboy2580.github.io/expenses-chart-component-main/)

### Built with

- Semantic HTML5 markup
- CSS3
- Javascript with the Date and Fetch API
- Flexbox
- Mobile-first workflow

### What I learned

The HTML and CSS Parts were kind of a walkthrough journey, i had recently learnt about the javascript fetch api, but i could'nt get it to do what i wanted.
The fetch api returns a response object

```js
fetch("data.json"); /*Returns a response object*/
```

and you chain a .then() method to work with it, within that block i now returned a json data using the response.json() method on the response

```js
fetch("data.json").then((response) => {
  /* Within this context/scope you use the .json method on the response object to get the data */
  return response.json();
});
```

My struggle was that in the next .then() scope where i now have access to the data, i was now tryin to populate a global variable array i set up with the contents of the json file

```js
let infoList = [];
fetch("data.json") /*Returns a response object*/
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((dat) => infoList.push(dat));
  });
```

i was getting weird results likt an array with length 0, or objects that returns undefined.
I asked a question on sending items from the .then() scope outside for use on reddit, that got only one response(as at the last time i checked). the response had one phrase that changed how i viewed the entire task " everything in async land stays in async land".
At this point i just created functions outside the fetch api then called them within the .then()

```js
fetch("data.json") /*Returns a response object*/
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    /* Everything stayed here in the end, welcome to async land*/
  });
```

This is one long section

## Author

- Website - [Ajobiewe Joseph]
- Frontend Mentor - [@jossyboy2580](https://www.frontendmentor.io/profile/jossyboy2580)
- Twitter - [@jossyboy2580](https://www.twitter.com/jossyboy2580)
