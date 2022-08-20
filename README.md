# Frontend Mentor - Expenses chart component solution

This is my solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). 

## Table of contents

- [Frontend Mentor - Expenses chart component solution](#frontend-mentor---expenses-chart-component-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
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



### Links


## My process

- I created this project using the create-react-app tool for creating the overall react app, built components for the Balance section, the SVG logo, the chart container as well as every day in the chart. I used the json data provided for generating the <Day/> components. For styling I used a mix of global css with base styles & CSS variables and CSS modules with SASS for the components.

### Built with

- Semantic HTML markup
- CSS custom properties
- Flexbox
- CSS Modules
- SASS
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library


### What I learned

I applied react concepts such as props, state as well as using the useEffect hook for the overall data in the app.

```js
  // using useEffect to get the days data from the JSON file, then setting the obtained data as state for use in the app
  useEffect(() => {
    const getDataFromJSON = async () => {
      const response = await fetch('./data.json')
      const responseData = await response.json()
      setData(responseData)
    }

    getDataFromJSON()
  }, [])
```

### Continued development

- Would be great to obtain the data from an API to get the total user balance, total per month as well as the previous month data to compare it to the current month so data can be more dynamic.
- Adding a little description for every day's expense would be a nice addon for users.
- Being able to see the monthly calendar and select a specific week for checking expenses.
- Adding inputs in other components for getting the monthly income and every day expense.



## Author

- Frontend Mentor - [@juliflorezg](https://www.frontendmentor.io/profile/juliflorezg)
- Github - [@juliflorezg](https://github.com/juliflorezg)

