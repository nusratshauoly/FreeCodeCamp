# Day-13
- CSS Animation by Building a Ferris Wheel. 

Learned the following:
1. `max-height: 500px;`
2. `max-width: 500px;`
3. `animation-name: wheel;`: The animation-name property is used to link a @keyframes rule to a CSS selector. The value of this property should match the name of the @keyframes rule.
4. `animation-duration:10s`: The animation-duration property is used to set how long the animation should sequence to complete. The time should be specified in either seconds (s) or milliseconds (ms).
5. `animation-iteration-count: infinite;`: The animation-iteration-count property sets how many times your animation should repeat. This can be set to a number, or to infinite to indefinitely repeat the animation.
6. `animation-timing-function: linear;`:  The animation-timing-function property sets how the animation should progress over time. There are a few different values for this property, but you want the Ferris wheel animation to run at the same rate from start to finish.
7. `transform-origin: 0% 0%;`: The transform-origin property is used to set the point around which a CSS transformation is applied. For example, when performing a rotate (which you will do later in this project), the transform-origin determines around which point the element is rotated.
8. `transform: rotate(60deg);`: the transform property allows you to manipulate the shape of an element. In this case, using the rotate(60deg) value will rotate the element around its transform-origin point by 60 degrees clockwise.
9. `.line:nth-of-type(2){
     transform: rotate(60deg);
}`
10. ` transform-origin:50% 0%;`: transform-origin property of 50% 0%. This will set the origin point to be offset 50% from the left and 0% from the top, placing it in the middle of the top edge of the element.
11. `animation : cabins 10s ease-in-out infinite;`: the animation property of the .cabin rule to cabins 10s linear infinite. This will set the animation-name, animation-duration, animation-timing-function, and animation-iteration-count properties in that order.
12. `@keyframes wheel{
    0% {
        transform: rotate(0deg);
      }
    100%{
        transform: rotate(360deg);
    }
}`: The @keyframes at-rule is used to define the flow of a CSS animation. Within the @keyframes rule, you can create selectors for specific points in the animation sequence, such as 0% or 25%, or use from and to to define the start and end of the sequence.
@keyframes rules require a name to be assigned to them, which you use in other rules to reference. For example, the @keyframes freeCodeCamp { } rule would be named freeCodeCamp.
 
 <br>

### <i>Check the HTML code [here](./index.html)</i>  
### <i>Check the CSS code [here](./styles.css)</i>