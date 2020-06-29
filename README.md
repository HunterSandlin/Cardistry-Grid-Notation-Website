# Cardistry Grid Notation Website
Website for creating Cardistry Grid Notation (CGN) sheets. Uses Bootstrap for formatting and vanilla HTML/CSS/JS for everything else.


## What is cardistry?
*Cardistry* is the art of flourishing playing cards. It started as a subgenre of magic, magicians would spring or an a deck to add style to their routine. It is now it's own artform - you can watch a cardistry video for reference [here](https://youtu.be/No_yMP_HKFo).

## What is CGN? 
Cardistry Grid Notation is effectively sheet music used to describe cardistry moves. It was developed by [Ladislas Toubart](https://www.instagram.com/mayo_naara/) and [Dimitri Arleri](https://www.instagram.com/dimitriarleri/?hl=en) from **Cardistry Touch** and was first released in the summer of 2019. You can either watch the video explanation from the creators [here](https://youtu.be/VAibY1Xx09w) or read the documentation [here](https://www.dropbox.com/s/073zvqcchsyjtod/CGN%20v1.0%20-%20Documentation.pdf). 


## Brief CGN Overview

Here is an exapmle of a sheet that was written by the CGN creators at [Cardistry Touch](https://www.cardistrytouch.com/stories/the-notation-system/); it represents the famous move [WERM by Dan & Dave Buck](https://youtu.be/o6HNsuFaETA?t=383).

<img src="https://www.cardistrytouch.com/wp-content/uploads/2020/04/full-werm2-CGN-e1586947197601.png" alt="Example of CGN sheet" width="50%">


* The letters that look like **SB** represent the starting grip. 
* Each square inside the grid is a packet of cards. 
    * Number on sides represent fingers.
    * The "flags" are rotations.
* Every packet has it's own column
* Commas and X's on lines further describe a packet (ex, comma for a packet of a single card).
* Lines and dots on the left side describe pacing.


This is just the surface of what how CGN works but it should be enough to contextualize this project. 


<br />

---

## Project Overview

The entire site is made of two bootstrap cards.
1. Card on the left edits the sheet and creates packets
2. Card on the right is the sheet.

Packets are made using an [HTML Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API). As The user selects options from the collapsable option menu, the corresponding element is added to the canvas. 

The canvas is given the [dragable attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/draggable) and through javascript is able to be dragged to the sheet. Once there it can be dragged to another spot without duplicating it. 


<br />


## Implemented Features
This website is still in very early development. Most work so far has been to getting everything set up, most future updates will be implementing new features.

#### Working features
- The user created packet can be dragged to the sheet while retaining it's design.
- Once on the sheet, the packet can be moved freely.
- The "Finger Placement" section is fully functioning. 

#### High Priority Upcoming Features 
- Pasing lines on the right of the sheet
- Marking options on the horizontal sheet lines.
- Starting grip letters
- Additional packet options
  - Rotations
  - Translations
  - Compound Action
