// create a new repo
// add .readme .gitignore files
// copy the url
// create a new folder on your machine
// git clone https://github.com/ParwinderBaidwan/cicdProject.git
// open the project in code (cd foldername)
// npm init -y
// add new file app.js with some console statements
// npm i
// git status
// git add .
// git commit -m "Message to add"
// git push

console.log("app is running");
console.log(new Date());
console.log("adding after edit in browser");
// npm i express , npm i pm2 -g
const app = require('express')();
app.get("/", (req,res) => {
    res.json({message : "cicd server g13 running"});
})
app.listen(3000, ()=>{
    console.log("server is running on 3000");
})