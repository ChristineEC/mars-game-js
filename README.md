#  Welcome to Mars!

## A learning game of rock, paper, scissors, lizard, Spock
### Written with HTML, CSS, and JavaScript

### Description

In this game, the user is a newly arrived tourist on Mars. The game is introduced as a way to teach the visitor the rules of the game of Rock, Paper Scissors, Lizard, Spock through active play. It enables the user to play against the computer and learn the rules as they go along. They can reset the scoreboard anytime they like, so after they learn the rules they can start keeping score anew. The tone of the game is lightly humorous, encouraging, for example, the user to enter a fun user name instead of a real name. Default text is kept to a minimum in line with the game's purpose, which is to entertain and teach the rules of the game, but the user can learn more about the game by choosing to reveal a paragraph that can be displayed and then hidden, if desired. Credit for the invention of the game is given there, under the button "About Game."

### Features

#### Responsiveness and Accessibility
The game was designed under the "mobile first" principal. It is fully responsive to all screen sizes. Media queries in CSS are used where necessary to enhance responsiveness, as well as flexbox to make the game attractive on all screens. Accessibility is ensured through the use of large buttons and icons and the use of strongly contrasting colors. The color scheme is dark green background with white text in dark mode or white background with dark green text in light mode. The game buttons and all other interactive buttons have a bright green background in both modes, with black text or icons. Aria-labels are used where appropriate.

![alt text](<Screenshot 2024-08-02 024402.png>)

![alt text](<Screenshot 2024-08-01 191539.png>)

The game has three main sections, the introduction and greeting section, the game section, and the results and scoring section.

#### Introduction and Greeting
The introduction section gives a two-sentence introduction to the game, telling the user it is intended to teach them the rules. More information about the game, and credit to its creator, can be accessed through an interactive feature described below. Instructions to click one of the five choices in the game section are given.
There are five interactive features in this section: 
1. The **About Game** button, which when clicked reveals a longer paragraph on the origins of the game and some light humor concerning the (lack of) intelligence of Earthlings based on the cognitive test we give our supreme leaders. 
2. The longer "about game" paragraph can then be hidden with the **Hide** button so that users playing on smaller screens can still see the game in the window without scrolling.
3. The **Dark/Light** button allows users to toggle between light and dark mode, with the browser first opening in dark mode.
4. The **Player Name** input field is prefaced by a suggestion that the player "pick a good one", as no one uses their real name on Mars. This is designed to add fun and also to encourage players to enter a name, as the field is not required but when filled and entered causes a personal greeting to appear and remain on the screen (until or unless the user changes their name there). It was felt that requiring the user to fill in this field could be considered tedious, as users on mobile phones don't always want to have to type.
When the player enters their name, a **personal greeting** appears on the screen.
5. An addition convenience for mobile users is the **Go** button, which does that same thing as hitting *enter* on a keyboard or mobile screen after entering the name in the userfield. While not required for the *player name* to be successfully entered, it was thought the feature might also be useful to users of a setup that the author of this code might be unaware of. (I found I sometimes wanted it there when using my touchscreen laptop.)
Screenshot of the introduction section after the player enters a name:

![Screenshot of the introduction section after the player enters a name](<Screenshot 2024-08-01 232014.png>) 


![Screenshot with the full *About Game* paragraph visible](<Screenshot 2024-08-01 232644.png>)

#### TheGame Section

The game section consists of five circular buttons with large icons representing the different choices. The button `<label>` for each is hidden but those label elements do contain aria-labels for people using screen readers. Regular paragraph elements were used to label the buttons, as this gave better visual results and was easier to style in CSS using flexbox properties in common with the buttons.

![alt text](<Screenshot 2024-08-01 233931.png>)

#### The Scoring Section

When the player chooses one of the five options -- rock, paper, scissors, lizard, or Spock -- the game then fills in the as-yet empty field next to "You chose:" and "Computer chose". It also displays the winner or declares a tie and gives the relevant rule, such as "Paper disproves Spock." In this way, the player can learn the rules as they go. The game keeps a tally of wins, for both player and computer, and ties. The player can choose to reset the score by clicking the **Reset score** button.
Screenshots of the scoring section before and after first play:

![Scoring section before first play](<Screenshot 2024-08-01 234435.png>)


![Scoring section after first play](<Screenshot 2024-08-01 234500.png>)


### Testing

Regular testing was done on the code throughout development, mainly through the use of console.logs and through reading errors in the console in Chrome dev tools. Once the game no longer threw any errors and functioned perfectly in Chrome from a user perspective, it was then tested in Microsoft Edge, Firefox, Opera GX, and Safari and on an iPhone and an android phone. No problems were encountered. The HTML, CSS, and JavaScript files were passed through validators, as described below. In addition, the game website was checked in Chrome's Lighthouse tool and scores were very good. Accessibility and best practices each at 100, performance at 91 and SEO at 90. The empty H2 heading where the name appears after username entry in a personal greeting is probably largely responsible for points off the SEO score. 

More to be written here after deployment.

#### Validator Testing
##### HTML
The HTML code passed validation in the W3C Markup Validator, with no erros and one warning concerning an empty headings tag. That tag corresponds to the place where the player's name appears in a greeting generated by JavaScript; therefore, it was decided that the warning could be safely ignored.

![HTML validation](<Screenshot 2024-08-02 000157.png>)

##### CSS
The CSS file passed validation in W3C's CSS Validator, with no errors or warnings.

![alt text](<Screenshot 2024-08-01 235101.png>)

##### JavaScript
The JavaScript file was passed through JSHint and came back with no errors and only the following comments, which were deemed fully acceptable.
1. "'template literal syntax' is only available in ES6 (use 'esversion: 6')."
2. "'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz)."
3. "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz)."

#### Bugs (none unfixed)
There are no unfixed bugs, but a number of bugs were encountered on the way. The first ones caught were caused by extra or missing semi-colons or curly brackets, and these were easy enough to identify and squash. JSHint was helpful in this regard. The more difficult ones were hiding in punctuation, namely in the use of an occassional capital "S" in "Spock" in the code, where it was only meant to occur in inner HTML elements, and in the use of a lone exclamation point after "Computer wins". (Once the exclamation point was found it was decided to use them universally for that expression.) The errors caused by these bugs were inconsistent and I was unable to track their origin using dev tools or JSHint or Python Tutor (https://pythontutor.com/visualize.html#mode=edit). I could see errors being thrown in my console.logs but not why. Because the code was so closely entwined with the html, I was unable to make use of Python tutor for this. My mentor was helpful here, providing a fresh pair of eyes where I had become somewhat code blind. Actually, the capital "S" was easier to spot because the game was only affected when the player chose Spock. The exclamation point caused errors in scoring, but only infrequently, and I was unable to spot a pattern, so it was more difficult to spot. 
The toggle dark/light button would only work on the second click. This was fixed by including the initial style not only in the CSS file but also in the html tag for the element targeted, after which the button functioned as it should. My mentor helped me to see the problem in dev tools, where the argument appeared as empty ("") on the first click.

### Future Features
The graphics of the game could be made more interesting. Some animation would definitely enhance the user experience. Also, it would be good to include the total number of games, that is, wins, losses and ties total, in case someone wanted to play in parallel with another person and compare scores more easily.

### Credits
[Google Fonts](https://fonts.google.com/) were used for the text styling.
The favicon was obtained from ([Favicon.io]https://favicon.io/).
The icons in the game section were obtained [from Font Awesome](https://kit.fontawesome.com/14c1e6c054.js).
For tips on how to code the main loop of the game, comparing the user's the the computer's choices, I watched a number of YouTube videos. Although there were a number of different ways presented in the different videos, the method I used here was suggested in a video by [Coding with John](https://www.youtube.com/@CodingWithJohn). I didn't watch the video in it's entirety, but rather got the idea for the general method I would use for comparing the results. I was able to conceive of all of the necessary functions for the game independendly. I did refer back to lessons in JavaScript Essentials for reminders of correct syntax. For a reminder of how to ensure the page was loaded and event listeners in place before the game functions would run, I referred back to the Love Maths lesson.

### Deployment
Coding was done in GitPod and deployed through GitHub. More here after deployment.