### Project Notes

- To run the project: npm start
- npm install react-router-dom
- Setup routing app.js using react-router-dom
- Create StudentTable component and use in app.js
- install json server: npm install -g json-server
- To check the json server version: json-server --version
- Start the json server: json-server --watch db.json --port 8000
- Add some dummy data in db.json and check http://localhost:8000/students
- useEffect usage: data displayed using useEffect
- in form, we give htmlFor and id, so that it will be on focus
- when we click on view, it will be redirected to specific id, and that id we can extract using useParams hook in view details page.
- Copy the content from createStudent to EditStudent file
- - for delete, copy the fetch function from editStudent into StudentTable file RemoveDetail function
 
  - ![Landing Page]('./public/images/landingpage.png')
