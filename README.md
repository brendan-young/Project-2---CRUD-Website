# Brendan Young - Project 2 - CRUD Web App

## Tech Stack:
- Node.js
- Express
- MongoDB
- Mongoose
- EJS
- HTML/CSS

## Approach/Problem
For this project I chose to create a CRUD (create, read, update, delete) web based application that allows users to upload information about rental properties throughout Australia (can be expanded globally). I took inspiration from glassdoor.com as this websites allows users to offer unfiltered opinions about organisations, and I believe there is a gap in the market for unfiltered reviews of rental properties. This was noticed when a friend of mine recently moved to a new city, but was unable to view the apartment prior to signing a lease - what my friend was not aware of when signing the lease was the apartment looked over a large, noisy construction site. If only there was a website that allowed a potential tenant to know these things before committing to a lease contract...

## Challenges
I chose to not use Bootstap Framework for this project as I wanted to practice and continue my learning of HTML/CSS. 
 One of the largest challenges I came up against was structuring my HTML and utilising CSS to create styling that I was content with. Whilst working on the display of the rental cards seen in the /rentals coute - I had an overlapping issue where the cards would overlap with one another, covering the 'delete' & 'edit' buttons. This was rectified by putting the cards in a single class and changing the display to block so they would stack ontop of eachother rather than inline. 

Another challenge I faced was my buttons were rendering with the default HTML styling. I was able to have this changed to a custom button layout by... 

## Future Functionality
- Login/Logout user functionality - this is a top priority as only registered users will have the ability to create and edit properties. Guest users may be able to view properties and reviews, but should not have access to be able to update and create without signing up. This functionality will include password encryption secutiry.

- Image upload - Giving users the ability to upload their own images of properties. Currently the application renders random 'house' images from loremflickr.com - this will be changed to allow users to upload multiple images with their reviews. These images will then be displayed in a thumbnail, where users can select the image to view it full sized, and scroll through the images. 

- One-to-many commenting relationships - Users will have the ability to comment on a particular property to share their experiences/opinions of each property. This will result in more transparency as guest users will be able to view properties as well as user comments.
One-to-many relationship will also be incorporated for apartment complexes with multiple apartments/flats/duplexes. Users will be able to find the building by address or name, and browse reviews of different aparments & flats within the same complex.

- Google Maps API Integration - Allow users to view the localation of reviewed apartments/complexes visually via a Google Maps API. 

