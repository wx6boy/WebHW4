import express from 'express';
import DB from './database/Database';
import UserGame from './objects/UserGame';

let current_game_id = 5;
let current_user_id = 2;

const app = express();

//GAME REQUESTS

//1
app.get("/games/:id", function(request, response){
    
    const id = parseInt(request.params.id);
    const game = DB.games.find((game) => game.id == id);
    response.json(game);
    
});

//2
app.post("/games", function(request, response){
    
    let game = request.body;
    game.id = current_game_id;
    current_game_id++;
    DB.games.push(game);
    response.send(`{"id": ${game.id}}`);

});
//3
app.put("/games/:id", function(request, response){

    const id = parseInt(request.params.id);
    const game = request.body;
    let objIndex = DB.games.findIndex((obj => obj.id == id));
    DB.games[objIndex] = game;
    response.end();

});
//4
app.delete("/games/:id", function(request, response){
    
    const idToRemove = parseInt(request.params.id);
    DB.games = DB.games.filter((obj) => obj.id !== idToRemove);
    
    for(let i = 0; i < DB.users.length; i++){

        DB.users[i].games = DB.users[i].games.filter((user_game) => user_game.game.id != idToRemove);    
    
    }
    response.end();

});

//USERS REQUESTS
//5
app.get("/user/:id", function(request, response){

    const id = parseInt(request.params.id);
    const user = DB.users.find((user) => user.id == id);
    response.json(user);

});
//6
app.post("/users", function(request, response){
    
    let user = request.body;
    user.id = current_user_id;
    current_user_id++;
    DB.users.push(user);
    response.send(`{"id": ${user.id}}`);

});
//7
app.put("/users/:id", function(request, response){

    const id = parseInt(request.params.id);
    const user = request.body;
    let objIndex = DB.users.findIndex((obj => obj.id == id));
    DB.users[objIndex] = user;
    response.end();

});
//8
app.delete("/users/:id", function(request, response){
    
    const idToRemove = parseInt(request.params.id);
    DB.users = DB.users.filter((obj) => obj.id !== idToRemove);
    response.end();

});

//USER GAMES REQUESTS
//9
app.get("/users/:id/games", function(request, response){
 
    const id = parseInt(request.params.id);
    const user = DB.users.find((user) => user.id == id);
    response.json(user?.games);

});
//10
app.post("/users/:id/games", function(request, response){
    
    const id = parseInt(request.params.id);
    const user_game = request.body;
    const user = DB.users.find((user) => user.id == id);
    
    if(user){

        user.games.push(user_game);
        DB.users = [...DB.users.filter((user) => user.id != id), user]
    
    }
    
    response.end();

});
//11
app.post("/users/:id/games/:gameid", function(request, response){
    
    const id = parseInt(request.params.id);
    const game_id = parseInt(request.params.gameid);
    const user_game: UserGame = request.body;
    const user = DB.users.find((user) => user.id == id);
    
    if (user) {

        const game = user.games.find((game) => game.game.id == game_id)
        
        if (game) {
        
            game.playTime += user_game.playTime;
            user.games = [...user.games.filter((cur_game) => cur_game.game.id != game_id), game];
        
        }
        else {
        
            user.games = [...user.games, {...user_game, playTime: user_game.playTime}];
        
        }
        DB.users = [...DB.users.filter((user) => user.id != id), user];
      
    }
    response.end();

});
//12
app.delete("/users/:id/games/:gameId", function(request, response){
    
    const game_id_toRemove = parseInt(request.params.gameId);
    const user_id = parseInt(request.params.id);
    const user = DB.users.find((user) => user.id == user_id);

    if(user){

        user.games = user.games.filter((user_game) => user_game.game.id !== game_id_toRemove);
        DB.users = [...DB.users.filter((user) => user.id !== user_id, user)];    

    }

    response.end();

});

app.listen(3000, () => {

    console.info('Server started');

});