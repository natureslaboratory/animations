# animations

A simple animation library for websites. 

Classes:
* c-animated - The element to watch.
* c-animated__child - The child element of c-animated. All children will be animated in when the c-animated element is animated.
  * data-animation-delay - Add a delay to a child element animation.
* c-animated(__child) +
  * --fade
  * --fade-up
  * --fade-down
  * --fade-left
  * --fade-right

For example:
```html
<div class="c-animated">
  <p class="c-animated__child c-animated__child--fade">
  <p class="c-animated__child c-animated__child--fade-up data-animation-delay="500">
  <p class="c-animated__child c-animated__child--fade-down data-animation-delay="1000">
</div>

<div class="c-animated c-animated--fade">
  <h1>Hello There</h1>
</div>
```
