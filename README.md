# Maze Game

[View the live website here](https://charliemallon.github.io/milestoneTwo/)

This is a simple maze game with some fun features and should hopefully show of my coding Knowledge so far.

## User Experience (UX)

-   ### User stories

    #### User Story 1

    As a user, I want to play an interactive game.

    #### Acceptance Criteria

    -   The hero character should be moveable.
    -   There should be rules for the environment.
    -   There should be multiple game maps.

    #### Description:

    The character will be able to move using buttons or keys. The character will not be able to walk 
    off the edge of the map or through the Maze walls. There will be at least two maze maps, with a 
    clear exit on each map.

    #### User Story 2

    As a user, I want to know if I have won or lost the game.

    #### Acceptance Criteria

    -   There should be a clear end point.
    -   It should be clear that the user has won/lost the game.
    -   If the user loses / finishes the game there should be an option to re-start.

    #### Description:

    There will be a clear exit on each map.Modal will be used to tell the user that they have Won or Lost the game.
    The loose modal will have the option to play again.  When you get to the end a modal will pop up with the option to play again.

    #### User Story 3

    As a user, I want to play know how to play the game.

    #### Acceptance Criteria

    -   The instruction to play the game should be clear and visible on first playing.
    -   The keys should be clearly indicated.
    -   Instructions should tell the user how to win the game
    -   The instruction to play the game should be  accessible whist playing.

    #### Description:

     The instruction will pop up on game start. Instructions will indicate the keys needed to play.
     The game is won by getting to the exit. The instruction will be accessible using  a 'how to play' link on the game page.

    #### User Story 4

    As a returning user, I want to get better at the game.

    #### Acceptance Criteria

    -   Have a score that takes into account the number of keystrokes used to get to the exit.

    #### Description:

    The score will be Visible. For each keystroke 5 points will be taken of the starting score of 1,000. If you get to a score of 0
    you will lose. For each level you clear 500 points will be added to the score.

    #### User Story 5

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

    #### User Story 6

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

    #### User Story 7

    As a user, I want to view the website and content clearly on any device

    #### Acceptance Criteria

    -   Website layout is well displayed and readable across all sized devices and different orientations.

    #### Description:

    Flexbox will be used to lay the content of the website. Mobile first design will be used when
    coding the project and testing will be required to ensure the layout is clear on all devices. No
    elements should overlap their containers and all items should be responsive. Where practical the
    game board should be displayed on one screen (ie no scrolling).

-   ### Design

    The design of this site has purposely been kept very simple. This is to allow for future customisation of the site.  
    This means the about the developer page in particular looks fairly sparse however as the point of the page is either
    to direct people away from the site (gitHub) or allow them to get in touch this was not seen as a particular concern.

    -   #### Colour Scheme

        The colours I have are purposely muted, I am going for a retro old school type look. Issue two of the game will
        have an option to choose your own colours and there will be some brighter colour schemes. The is to provide
        radically different colour schemes.

    -   #### Typography

        In keeping with the retro, cartoony look Comic Sans have been used. This is as the font was over used and
        generally a ['joke' font](https://www.freepik.com/blog/comic-sans-joke-graphic-design-community/). I have left
        it in as there is very little writing on the site.

    -   #### Maze Design
        Each of the [mazes](assets/supportingDocs/maze.png) were designed in excel. As well as the [Fav Icon](assets/supportingDocs/favIconExcel.png). 
        Using inspiration from doing a simple maze image search on [google](https://www.google.com/). I Layed out a 21 by 21 grid (as that is the size 
        i used for the css grid) and filled in squares until it looked right. I then added borders to each of the 'blocks' that i wanted to code. Worked 
        out the x & y co-ordinates for the starting block and then the heigh (h) or width (w) of the block from the starting square. These numbers 
        where then used to tell the JS where the maze needed to be drawn.

*   ### Wireframes

    -   General Game Wireframes - [View](assets/wireframes/general-game-ideas.png)

    -   Mobile Wireframes - [Idea 1](assets/wireframes/phone1.png) [Idea 2](assets/wireframes/phone2.png)

    -   Tablet Wireframes - [Idea 1](assets/wireframes/tablet1.png) [Idea 2](assets/wireframes/tablet2.png)

    -   Window Wireframes - [View](assets/wireframes/small-window.png)

## Features

I have split the features into Beta, Issue 1, Issue 2 & Issue 3. The project is currently at Issue 1.

-   ### Beta

    -   Simple maze game in which you move using the arrow keys.
    -   2-3 sample game maps
    -   Keep score
    -   Tell you when you have completed
    -   Tell you how to play
    -   Make Responsive on all Devices

-   ### Issue 1

    -   Model for Game over
    -   Model for Winning
    -   Model for How to play - with cool arrow graphics

-   ### Issue 2

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

### Resources

- [Code Institute Course Content](https://courses.codeinstitute.net/)
- Code Institute **SLACK Community**
- [Stack Overflow](https://stackoverflow.com/)
- [Youtube](https://www.youtube.com/)
- [CSS-Tricks](https://css-tricks.com/)
- [Balsamiq](https://balsamiq.com/wireframes/)


## Testing

Testing is detailed in a separate file [here](testing.md).

### Bugs

This section will detail the bugs that I came across coding and the main one that I found during testing.

-   #### During coding

| Bug | Things Tried | final Fix|
| ---| --- |--- |
| The Hero was not able to walk two squares under the wall.                       | I put in loads of console.logs to see if i could find out why, as far as my code was concerned the wall extended two blocks further than my wall. This issue due to the way i was defining my walls (start point and end point) | Defined the start co-ordinate and the span of the height and width.                                                                                                                   |
| The Hero can walk though the bottom left of a square.                           | Only the top and left hand side of the square are being checked if they are a legal move (see table)                                                                                                                            | nest the for loops so each square is being checked.                                                                                                                                   |
| The hero continues to walk when and arrow key is followed by any other key.     |                                                                                                                                                                                                                                 | default case to the switch.                                                                                                                                                           |
| The hero moves two steps not one when it goes through animation frames.         | this issue is to do with the refresh rate of the animation loop                                                                                                                                                                 | Removed the animation loop so it is now a user driven response.                                                                                                                       |
| On the iPhone a double tap of the buttons zooms in on that section of the page. | considered using JS - seemed over complicated.                                                                                                                                                                                  | Found an article about [touch-action](https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action#manipulation) that introduced me to touch actions and how to stop them happening. |

-   #### Durning testing

| Test Ref  | Test Description  | Bug Description | final fix | comment |
| --------- | ----------------- | ----------------| --------- | ------- |
| MS2-001 | Does the character move up, down, left and right using the arrow keys? | screen moves when up/down keys are pressed                 | Re-layed out the page so that it fits on one screen.                                                                                                         | Regression testing required re-do all layout tests MS2-049 through to MS2-056                                    |
| MS2-019 | Is there a 'how to play' link?                                         | on mobile - cannot scroll to bottom of page                | Body had touch events set to none. This was to remove the double tap zoom. Changed it to only allow scrolling. Also set the game board to touch-events none. | Regression testing re-do MS2-004, on tablet or phone - check for double tab.                                     |
| MS2-022 | Does the score reduce by 5 for every key I press?                      | score doesn't change the first time you move the character | Not fixing                                                                                                                                                   | This is a game quirk that I have decided to keep as it is a gesture of good will to allow the 1st move for free. |
| MS2-046 | Is an error given when the box is left blank?                          | Email sent with blank message                              | Added required attribute to the message box.                                                                                                                 | Regression testing re-do MS2-045 & MS2-046.                                                                      |

## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/CharlieMallon/milestoneTwo)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
    - Alternatively Click [Here](https://raw.githubusercontent.com/) for a GIF demonstrating the process starting from Step 2.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://github.com) in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the GitHub Repository you make a copy of the original repository on your GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/CharlieMallon/milestoneTwo)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/CharlieMallon/milestoneTwo)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

## Credits

### Code

The inspiration for this project came from this (Snake Game)[https://www.youtube.com/watch?v=QTcIXok9wNY&feature=emb_logo] by (Web Dev Simplified)[https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw].

### Content

-   All content was written by the developer.

### Media

-   [justy](https://giphy.com/justy) on [giphy.com](https://giphy.com) for the confetti background
-   [wifflegif](https://wifflegif.com/) on [giphy.com](https://giphy.com) for the ghost
-   [imgflip](https://imgflip.com/gif-maker?from=images) was used to make the keys.gif

### Acknowledgements

-   My Mentor Brian Macharia for some good guidance
-   Mr_Bim_alumni for general encouragement and the occasional kick up the backside
