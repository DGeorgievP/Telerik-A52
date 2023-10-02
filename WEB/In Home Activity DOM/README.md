<img src="https://webassets.telerikacademy.com/images/default-source/logos/telerik-academy.svg" alt="logo" width="300px" style="margin-top: 20px;"/>

## Event listeners

### 1. Project goals

Your responsibility is to assign event listeners (global, or to specific elements) which record event history on the page.

<br>

### 2. Project structure

In its ultimate iteration, the solution should adhere to the following organizational structure:

- `index.html` - serving as the landing page
- `styles.css` - focusing on tailored styles for specific elements or groups
- `package.json` - configuring the setup to enable the entire site to run seamlessly through live-server

<br>

### 3. Event listeners

One of the event listeners is already implemented for you to have as example. The goal is to show *the last 10 events* triggered (per the two lists below) in the **History** column.

- every time the text input in the left column is in focus record the message `Standard input is in focus.`
- every time the text input in the left column is out of focus record the message `Standard input is out of focus.`
- every time the checkbox input in the lest column is checked or unckeched record the message `Checkbox input has changed value to "{VALUE}".` where **VALUE** is either `true` or `false`
- every time the `Add dynamic standard input` button is clicked you should add a new text input in the middle column, i.e. `<label>Dynamic input <input type="text"></label>`
- every time the `Add dynamic checkbox` button is clicked you should add a new checkbox input in the middle column, i.e. `<label>Dynamic checkbox <input type="checkbox"></label>`
- every time the `Add dynamic button` button is clicked you should add a new button in the middle column, i.e. `<button class="dynamic">Dynamic button</button>`

Here is where things get more complicated:

- every time a text input in the middle column has a new value on keydown record the message `Dynamic input has changed value to "{VALUE}".` where **VALUE** is the current value of the input
- every time a text input in the middle column is in focus record the message `Dynamic input is in focus.`
- every time a text input in the middle column is out of focus record the message `Dynamic input is out of focus.`
- every time a checkbox input in the middle column is checked or unckeched record the message `Dynamic checkbox input has changed value to "{VALUE}".` where **VALUE** is either `true` or `false`

<br>

### 4. Helpers

Research the `focusin`, `focusout`, `change` and `click` events.

Event listeners are only added when the page loads. This will do for *existing* elements only. For elements added after that *dynamically*, there is still a way to listen on events on them, if you add the event listeners to the documents instead. However, global event listeners might *catch* events on the input in the left column as well, so you will need to think of a way to distinguish between elements in the left and the middle column.

Few things that might help you figure it out:

- `event.target.tagName`
- `event.target.type`
- `event.target.classList`

Have fun!