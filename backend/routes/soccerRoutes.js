import { 
    addNewPlayer,
    getPlayers,
    getPlayerWithID,
    UpdatePlayer,
    deletePlayer
} from '../controllers/playerControllers';

const routes = (app) => {
    app.route('/players')
        .get(getPlayers)
    // POST endpoint
        .post(addNewPlayer);
    app.route('/player/:PlayerId')
        // GET specific player
        .get(getPlayerWithID)

        //Update specific player
        .put(UpdatePlayer)
        
        //delete player
        .delete(deletePlayer);
};

export default routes; // why do you need to export this? 