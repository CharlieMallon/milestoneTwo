<h1 align="center">Maze Game</h1>

This is a simple maze game with some fun features and should hopefully show of my coding Knowledge so far.

## User Experience (UX)

-   ### User stories

    -   #### First Time Visitor Goals

        1. As a First Time Visitor, I want to play a game.
        1. As a First Time Visitor, I need to know the keys.
       
    -   #### Returning Visitor Goals

        1. As a Returning Visitor, I want to beat my score.
        1. As a Returning Visitor, I want to customise the game board.

    -   #### Site Owner Goals
        1. As a Site Owner, I want to play a game I made.

-   ### Design
    -   #### Colour Scheme
        -   a few colour schemes for people to chose from.  remember that it should work on dark and light!
    -   #### Typography
        -   cartoony - comic sans?
    -   #### Imagery
        -   simple and clean

*   ### Wireframes

    -    General Game Wireframes - [View](assets/wireframes/general-game-ideas.png)

    -   Mobile Wireframes - [Idea 1](assets/wireframes/phone1.png) [Idea 2](assets/wireframes/phone2.png)

    -   Tablet Wireframes - [Idea 1](assets/wireframes/tablet1.png) [Idea 2](assets/wireframes/tablet2.png)

    -   Window Wireframes - [View](assets/wireframes/small-window.png)

## Features

I have split the features into Beta, Issue 1 & Issue 2.  The project is currently at the Beta stage

*   ### Beta
    -   Simple maze game in which you move using the arrow keys. 
    -   2-3 sample game maps
    -   Keep score
    -   Tell you when you have died/completed
    -   Tell you how to play
    -   Make Responsive on all Devices

*   ### Issue 1
    -   Model for Game over
    -   Model for How to play - with cool arrow graphics
    -   Change Character
    -   Change Colour
    -   Dark/Light Toggle
    -   Randomise Game Board (many levels)
    -   Use gestures for mobile Screens

*   ### Issue 2
    -   Leader Board

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
*   #### During coding
    -   The Hero was not able to walk two squares under the wall.  I put in loads of console.logs to see if i could find out why, as far as my code was concerned the wall extended two blocks further than my wall.  This issue due to the way i was defining my walls (start point and end point)
        -   fix - defined the start co-ordinate and the span of the height and width.
    -   The Hero can walk though the bottom left of a square.
        -   Only the top and left hand side of the square are being checked if they are a legal move (see table)
        -   Fix - nest the for loops so each square is being checked.
|   X,Y  | checked     | checked     |
|checked | not checked | not checked |
|checked | not checked | not checked |

*   #### Durning testing
    -   The hero continues to walk when and arrow key is followed by any other key. solution - default case to the switch.

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
