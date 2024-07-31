const express = require('express');

const app = express();


const port = 4001;


const githubData={
    "login": "arvind-ishi",
    "id": 126157696,
    "node_id": "U_kgDOB4UDgA",
    "avatar_url": "https://avatars.githubusercontent.com/u/126157696?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/arvind-ishi",
    "html_url": "https://github.com/arvind-ishi",
    "followers_url": "https://api.github.com/users/arvind-ishi/followers",
    "following_url": "https://api.github.com/users/arvind-ishi/following{/other_user}",
    "gists_url": "https://api.github.com/users/arvind-ishi/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/arvind-ishi/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/arvind-ishi/subscriptions",
    "organizations_url": "https://api.github.com/users/arvind-ishi/orgs",
    "repos_url": "https://api.github.com/users/arvind-ishi/repos",
    "events_url": "https://api.github.com/users/arvind-ishi/events{/privacy}",
    "received_events_url": "https://api.github.com/users/arvind-ishi/received_events",
    "type": "User",
    "site_admin": false,
    "name": "arvind jadhav ",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "web app developer ",
    "twitter_username": null,
    "public_repos": 33,
    "public_gists": 0,
    "followers": 2,
    "following": 52,
    "created_at": "2023-02-23T10:08:34Z",
    "updated_at": "2024-07-29T09:46:50Z"
}
app.get('/', function(req,res){
    res.send("hello world ");

});

app.get('/home', function(req,res){
    res.send("welcome to home");

})

app.get('/login',function(req,res){
    res.send("please enter your credentials");

})

app.get('/Github',function(req,res){
    res.json(githubData);

})

app.listen(port, function(){
    console.log(`server is runinig at port ${port}`)

})