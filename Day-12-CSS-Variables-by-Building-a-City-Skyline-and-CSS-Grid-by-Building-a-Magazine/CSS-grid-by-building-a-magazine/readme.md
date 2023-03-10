# Day-12
Learned CSS Grid by Building a Magazine.

I learnt the following:

1. **header** element: `<header></header>`
2. **loading** attribute: The loading attribute on an img element can be set to lazy to tell the browser not to fetch the image resource until it is needed (as in, when the user scrolls the image into view). As an additional benefit, lazy loaded elements will not load until the non-lazy elements are loaded - this means users with slow internet connections can view the content of your page without having to wait for the images to load.: `<img src="https://cdn.freecodecamp.org/platform/universal/fcc_meta_1920X1080-indigo.png" alt="freecodecamp logo" class="hero-img" loading="lazy" width="400">`
3. **blockquote** element: `<blockquote></blockquote>`
4. **article** element: `<article></article>`
5. **aside** element: `<aside> </aside>`
6. ** * ** : targeting all elements. normalize the CSS rules by targeting all elements with *, including the ::before and ::after pseudo-selectors. Set the padding property and margin property both to 0. : `*,::before,::after{padding: 0;margin: 0;}`
7. `font-family: Anton,sans-serif;`
8. `h2, h3, h4, h5, h6{
    font-family:Raleway,sans-serif;
}`
9. `text-decoration: none;`
10. `display: grid;`: Now you can style the layout of your grid. CSS Grid is similar to Flexbox in that it has a special property for both the parent and child elements.
In this case, your parent element is the main element. Set the content to have a three-column layout by adding a grid-template-columns property with a value of 1fr 94rem 1fr. This will create three columns where the middle column is 94rem wide, and the first and last columns are both 1 fraction of the remaining space in the grid container.
11. `grid-template-columns:1fr 94rem 1fr;`
12. `grid-template-columns:minmax(2rem, 1fr) minmax(min-content, 94rem) minmax(2rem, 1fr);`: Use the minmax function to make your columns responsive on any device. The minmax function takes two arguments, the first being the minimum value and the second being the maximum. These values could be a length, percentage, fr, or even a keyword like max-content.
Wrap each of your already defined values of the grid-template-columns property in a minmax function, using each value as the second argument. The first argument should be 2rem, min-content, and 2rem respectively.
13. `row-gap: 3rem;`: To add space between rows in the grid layout, you can use the row-gap property. Give the main selector a row-gap property of 3rem.
14. `grid-column: 2/3;`: Your magazine will have three primary sections. You already set the overall layout in the main rule, but you can adjust the placement in the child rules.
One option is the grid-column property, which is shorthand for grid-column-start and grid-column-end. The grid-column property tells the grid item which grid line to start and end at.
Create a .heading rule and set the grid-column property to 2 / 3. This will tell the .heading element to start at grid line 2 and end at grid line 3.
15. `grid-template-columns: repeat(2, 1fr);`: The CSS repeat() function is used to repeat a value, rather than writing it out manually, and is helpful for grid layouts. For example, setting the grid-template-columns property to repeat(20, 200px) would create 20 columns each 200px wide.
Give your .heading element a grid-template-columns property set to repeat(2, 1fr) to create two columns of equal width.
16. `letter-spacing: 0.6px;`
17. `column-width: 25rem;`: create columns within an element without using Grid by using the column-width property.
18. `text-align: justify;`
19. `grid-column:1 / -1;`: the grid-column property determines which columns an element starts and ends at. There may be times where you are unsure of how many columns your grid will have, but you want an element to stop at the last column. To do this, you can use -1 for the end column.
Create a .hero selector and give it a grid-column property set to 1 / -1. This will tell the element to span the full width of the grid.
20. `object-fit: cover;`:The object-fit property tells the browser how to position the element within its container. In this case, cover will set the image to fill the container, cropping as needed to avoid changing the aspect ratio.
21. `grid-auto-flow: column;`: This property takes either row or column as the first value, with an optional second value of dense. grid-auto-flow uses an auto-placement algorithm to adjust the grid layout. Setting it to column will tell the algorithm to create new columns for content as needed. The dense value allows the algorithm to backtrack and fill holes in the grid with smaller items, which can result in items appearing out of order.
22. `grid-auto-columns: 1fr;`
21. `.first-paragraph::first-letter{
    font-size: 6rem;
    float:left;
    `
22. ` .quote::before{
    content: '" ';
}
.quote::after{
    content: ' "';
}` : .quote::before selector and set the content property to " with a space following it.
Also, create a .quote::after selector and set the content property to " with a space preceding it.
23. `column-gap:3rem;`: column-gap property to 3rem to provide more spacing between the columns.
24. `list-style-type:none;`
25. ` gap: 2rem;`: The gap property is a shorthand way to set the value of column-gap and row-gap at the same time.


Check the HTML code [here](./index.html)  
Check the CSS code [here](./styles.css)