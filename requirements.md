## ColorCloset Requirements

### Languages

- Front end: React Native
- Back end: Express.js
- Database: MongoDB

### To-Do

- [ ] Clean up UI
  - [ ] Add designs, images, and color
  - [ ] Find color scheme to follow for entire app
  - [ ] Create a CSS file containing project color palette theme
- [ ] Figure out how to lock Featured, Camera, and Closet once we login/signup
- [ ] Ensure login/signup is correctly protected
- [ ] Attach MongoDB
  - [ ] Become familiar with the database and figure out organization we want to follow
  - [ ] Begin thinking of what makes each user different (email, password, outfits, images taken)
  - [ ] Store the images taken on camera in the database and in the correct corresponding slot for the user
  - [ ] Figure out to query this data after pinging the backend to receive this data
- [ ] Research more ML libraries to abstract color pigments from photos taken
  - [ ] Query color pigments from photo and suggest palettes
  - [ ] Research AI API that will suggest color palettes that blend with the pigments abstracted from the photo
- [ ] Move camera functionality to its own component in component folder to ensure smooth access in case user wants to change a photo and we need to use the camera again
