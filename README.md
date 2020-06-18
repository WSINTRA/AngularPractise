# Recipe APP

This project was built as part of a code challenge for apprentice.io

## The Challenge

Build an app that allows a user to create recipes with steps, the user can then see those steps and follow through them....
accurate details of project left out for privacy reasons..

## Extra details

App had to be in Angular and Angular materials, for bonus points create a backend in Sails.js and MongoDB that can save user recipes...


## What I did - statement - What I learnt? How I approached it?

>Brief

Having very little Angular experience and zero Sails experience my first thing was to try and quickly learn the basics.
I created a plan see `firstPlan.txt`
I used a guerrilla style to approach the challenge, I was aware it was quite a challenge having never built a full crud application with Angular. Overall I found Angular really frustrating to use coming from React experience. I hacked out the app as best I could, and I think if I was to spend more time with it I would go back to basics without the pressure of trying to build something to a timeframe. Learn Angular from the basics upward and take my time grasping the concepts.

> backend

For the backend I found Sails to be really intuitive and a great API that I would like to work with more and gain a better understanding, previously I had experience with mongoDB so for this project I used mongoDB atlas to host the data on a free tier cloud. I built user models with JWT authentification and recipe and step models. 
A recipe belonged to a user and a step belonged to a recipe. A recipe can have many steps, and a user can have many recipes.

> frontend

The further I got into the project the more my frustrations with Angulars way of doing things eased off. I still prefer React but I think Angular can be a lot more powerful having experienced some of its power. I found its complexity to be off putting, this is why I wish to go back and get a grasp on the basics to reduce that complexity feeling. 
Overall I have creating an App that meets the criteria, it has plenty of room for improvement and I could spend another week or 2 working out the bugs I have introduced by not knowing the basics. A lot of times If I came across a problem, I used the sledge hammer approach, this is not ideal in the real world but I wanted to see how I could get something done in time. 
TODO: Make a video demo of the app as it currently is and link it to here.
[https://youtu.be/BVNHuccafOE](https://youtu.be/BVNHuccafOE)
TODO: Work on the frontend UI, currently it leaves a lot to be desired.
The app consists of a login or signup, once logged in a header and nav bar allow the user to switch between adding new recipes or viewing current ones. 
Recipes have a title and description and steps.
Steps have a title, a description, and a video url or a image url.

To render the video I used the angular youtube video module, I then use a pipe to get the url id from the string. 

>Final thoughts


I have learnt a lot about Angular and Sails and regardless of the outcome of the code challenge I will continue learning Angular and brush up on the foundational knowledge I had to scan over. Angular is a powerful framework and one I hope to become more proficient in. 

[Link to backend REPO - no README yet](https://github.com/WSINTRA/sails_apprentice.io)
