# The Movies DB API application

The app was written by ReactJS (v18.1.0) library, Redux, Typescript and use Material UI for styles.

### Description app
The Movie DB SPA fetch the most popular movies and displays to the home page with pagination. Also, each one has 
tooltips: popup with short description, genres, release date and button add movie to the favorites list. Search of movies.
Page with detail information and with recommendations and similar lists. Page with favorite list of movies and remove
item from the list.

## Launch the app

Open Terminal and go to the directory, where there is a project.

Be sure, that Node.js was installed for your computer, execute command:
`node -v` in Terminal. \
If not download and install from official site: [https://nodejs.org]()

After that, execute command for downloading all necessary dependencies for launch the app:

### `npm i`

!!! Put file `.env.local` to the root directory (the same location with `.env` file).

Finally, you can run:

### `npm start` or `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
