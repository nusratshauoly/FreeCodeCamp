# Day-12
- CSS variables by Building a City Skyline.

Learned the following:
1. **:root selector**: This is the highest level selector in CSS; putting your variables there will make them usable everywhere. Add the :root selector to the top of your stylesheet, and move all your variable declarations there: `:root{--building-color1: #aa80ff;}`
2. **overflow** property: overflow property to hidden to hide any scroll bars that appear when something extends past the viewport: `overflow: hidden;`
3. `display: flex;`
4. `align-items: flex-end;`
5. `justify-content: space-evenly;`
6. `flex-direction: column;`
7. `align-items: center;`
8. `background: radial-gradient(circle closest-corner at 15% 15%,  #ffcf33 0%,#ffcf33 20%, #ffff66 21%, #bbeeff 100%);`
9. `background: linear-gradient(var(--building-color1) , var(--window-color1));`
10. `background-color: var(--building-color1);`
11. `background: linear-gradient(var(--building-color1) 50%, var(--window-color1));`
12. `width: 5vw;`
13. `border-bottom: 5vh solid var(--building-color2);`
14. `border-left: 5vw solid transparent;`
15. **repeating-linear-gradient**: `background:repeating-linear-gradient(90deg, var(--building-color2), var(--building-color2) 6%,);`
16. `.background-buildings, .foreground-buildings{position:absolute;top:0;}`
17. `border-bottom: 7vh solid var(--building-color4);`
18. `background: repeating-linear-gradient(90deg, 
   var(--building-color4) 0%,
   var(--building-color4) 10%,
   transparent 10%,
   transparent 15%
   ),
   repeating-linear-gradient(var(--building-color4) 0%, var(--building-color4) 10%, var(--window-color4) 10%, var(--window-color4) 90%);
}`
19. `flex-wrap: wrap;`
20. `background: radial-gradient(circle closest-corner at 15% 15%,  #ccc 0%,#ccc 20%, #445 21%, #223 100%);`

<br>

### <i>Check the HTML code [here](./index.html)</i>  
### <i>Check the CSS code [here](./styles.css)</i>