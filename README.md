<h1 align="center">Maze Game</h1>

This is a simple maze game with some fun features and should hopefully show of my coding Knowledge so far.

## User Experience (UX)

-   ### User stories

    #### User Story:

    As a user, I want to play an interactive game.

    #### Acceptance Criteria

    -   The hero character should be moveable.
    -   There should be rules for the environment.
    -   There should be a clear end point.
    -   The keys should be clearly indicated.
    -   The instruction to play the game should be clear and accessible at all times.
    -   It should be clear that the user has won/lost the game.

    #### Description:

    The character will be able to move using buttons or keys. There will be at least two maze maps,
    with a clear exit on each map. The character will not be able to walk off the edge of the map
    or through the Maze walls. The instruction will pop up on game start and will be accessible using
    a 'how to play' link on the game page. Instructions will indicate the keys needed to play and how
    to win the game. Modal will be used to tell the user that they have Won or Lost the game.

    #### User Story:

    As a returning user, I want to get better at the game.

    #### Acceptance Criteria

    -   Have a score that takes into account the number of keystrokes used to get to the exit.

    #### Description:

    For each keystroke 5 points will be taken of the starting score of 1,000. If you get to a score of 0
    you will lose. For each level you clear 500 points will be added to the score.

    #### User Story:

    As a user, I want to know more about the developer and see anything else they have been working on.

    #### Acceptance Criteria

    -   A short description of the developer of this game.
    -   A way to see any other projects.
    -   A way to get in touch.

    #### Description:

    This will be achieved with an about the developer page. Which will have a short description of the
    developer and why this site was created. It will also have a link to the developers gitHub page where
    more up-to-date information will be displayed. It is not intended that this will be updated regularly
    so the information will be generic. There will be a contact form that uses the JS email service to get
    in touch with the developer.

    #### User Story:

    As a user, I want give feedback on this game.

    #### Acceptance Criteria

    -   A way to send an email to the developer.
    -   To be alerted when the email has sent or failed to send.
    -   Validation on the boxes to ensure that all relevant boxes are filed in.
    -   Validation on the email address to say an email has been inputted.

    #### Description:

    This will be achieved using a contact form and the JS email service. With a pop up modal to tell the
    user that the message has been sent or failed to send. The required attribute will be added to each of
    the required boxes. The email attribute will be added to the email box. This will ensure the user is
    alerted if any of the information is incorrect or incomplete.

    #### User Story:

    As a user, I want to view the website and content clearly on any device

    #### Acceptance Criteria

    -   Website layout is well displayed and readable across all sized devices and different orientations.

    #### Description:

    Flexbox will be used to lay the content of the website. Mobile first design will be used when
    coding the project and testing will be required to ensure the layout is clear on all devices. No
    elements should overlap their containers and all items should be responsive. Where practical the
    game board should be displayed on one screen (ie no scrolling).

-   ### Design
    -   #### Colour Scheme
        -   Colours are 
    -   #### Typography
        -   cartoony - comic sans?
    -   #### Imagery
        -   simple and clean

*   ### Wireframes

    -   General Game Wireframes - [View](assets/wireframes/general-game-ideas.png)

    -   Mobile Wireframes - [Idea 1](assets/wireframes/phone1.png) [Idea 2](assets/wireframes/phone2.png)

    -   Tablet Wireframes - [Idea 1](assets/wireframes/tablet1.png) [Idea 2](assets/wireframes/tablet2.png)

    -   Window Wireframes - [View](assets/wireframes/small-window.png)

## Features

I have split the features into Beta, Issue 1 & Issue 2. The project is currently at the Beta stage

-   ### Beta

    -   Simple maze game in which you move using the arrow keys.
    -   2-3 sample game maps
    -   Keep score
    -   Tell you when you have completed
    -   Tell you how to play
    -   Make Responsive on all Devices

-   ### Issue 1

    -   Model for Game over
    -   Model for How to play - with cool arrow graphics
    -   Change Character
    -   Change Colour
    -   Dark/Light Toggle
    -   Use gestures for mobile Screens

-   ### Issue 2
    -   Leader Board
    -   Randomise Game Board (many levels)

## Technologies Used

### Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [JS](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries & Programs Used

1. [SweetAlert2](https://sweetalert2.github.io/)
2. [Google Fonts](https://fonts.google.com/)
3. [Font Awesome](https://fontawesome.com/)

## Testing

### Bugs

-   #### During coding

        -   The Hero was not able to walk two squares under the wall.  I put in loads of console.logs to see if i could find out why, as far as my code was concerned the wall extended two blocks further than my wall.  This issue due to the way i was defining my walls (start point and end point)
            -   fix - defined the start co-ordinate and the span of the height and width.
        -   The Hero can walk though the bottom left of a square.
            -   Only the top and left hand side of the square are being checked if they are a legal move (see table)
            -   Fix - nest the for loops so each square is being checked.

    | X,Y | checked | checked |
    |checked | not checked | not checked |
    |checked | not checked | not checked |

-   #### Durning testing
    -   The hero continues to walk when and arrow key is followed by any other key. solution - default case to the switch.
    -   The hero moves two steps not one when it goes through animation frames. - this issue is to do with the refresh rate of the animation loop - removed the animation loop so it is now a user driven response.
    -   On the iPhone a double tap of the buttons zooms in on that section of the page. - considered using JS - seemed over complicated. Found an article about [touch-action](https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action#manipulation) that introduced me to touch actions and how to stop them happening.

## Deployment

## Credits

### Code

-

### Content

-   All content was written by the developer.

### Media

-   [justy](https://giphy.com/justy) on [giphy.com](https://giphy.com) for the confetti background
-   [imgflip](https://imgflip.com/gif-maker?from=images) was used to make the keys.gif

### Acknowledgements

-   mentor
-   Bim
