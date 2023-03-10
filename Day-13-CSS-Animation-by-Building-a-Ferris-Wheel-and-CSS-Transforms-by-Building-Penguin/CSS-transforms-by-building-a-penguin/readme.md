# Day-13
Learned CSS Transforms by Building a Penguin.

I learnt the following:

1. `overflow: clip;`:  Remove both the horizontal and vertical scrollbars, and prevent programmatic scrolling, using only one property.
2. `height: calc(100vh - 300px);`:  calculate the height of the .ground element to be the height of the viewport minus the height of the .penguin element.
3. `margin: auto;`: Use the margin property to horizontally center.
4. `transform: skew(0deg, 44deg);`: the skew transform function, which takes two arguments. The first being an angle to shear the x-axis by, and the second being an angle to shear the y-axis by.
Use the transform property to skew the mountain by 0deg in the x-axis and 44deg in the y-axis.
5. `.penguin-body::before{
    content: "";
    }`
6. `opacity: 70%;`
7. `font-weight: initial;`
8. `transform-origin:top left;`: the origin of the transform function to be the top left corner of its parent.
9. `transform: scale(1.5);`: when it is active, and increase its size by 50% in both dimensions.
10. ` @keyframes wave{
10%{
        transform:rotate(110deg) scaleX(-1);
    }
    20%{
        transform:rotate(130deg) scaleX(-1);
    }
    30%{
       transform:rotate(110deg) scaleX(-1);
    }
    40%{
        transform:rotate(130deg) scaleX(-1);
    }
}`

Check the HTML code [here](./index.html)  
Check the CSS code [here](./styles.css)