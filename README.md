# The Purpose of this Lesson! 
Javascript allows your page to become more interactive:
* Strings
* Numbers
* Variables
* Functions
* Buttons
* Events
>Some things in JavaScript, like HTML elements, have special functions attached to them with a dot (.). Both getElementById and addEventListener are examples. Functions like this are often called methods. To better understand events and callbacks, think of a child out playing while her dad cooks dinner. Whenever dinner is done (the event), he'll call her back inside to eat (the callback). Some will say the event was triggered or fired — a lot of gun metaphors, for some reason.
```javascript
<script>
      var tellJoke = function () {
        var joke = 'Why did the chicken cross the road?'
        var punchline = 'To get to the Other Side!'
        
        alert(joke)
        alert(punchline)
        
        }
</script>
```
>This code contains a function, you can call the function by `tellJoke()`.
```javascript
<script>
      tellJoke = function (joke, punchline) {
        alert(joke)
        alert(punchline)
      }
</script>
```
>This code contains a function, allows the user to pass values through this function such as `tellJoke(joke, punchline`).
```javascript
<script>
      var buttonElement = document.getElementById('my-first-button')
      buttonElement.addEventListener('click', function() {
        alert(joke)
        alert(punchline)
      })

      var joke = 'Why did the chicken cross the road?'
      var punchline = 'To get to the Other Side!'
    </script>
```
>Inside the HTML, there would be a button or an element with the id of `buttonElement` that is traced and watched. Once this button or element has been 'clicked', it would start to run whatever is inside the function. 
