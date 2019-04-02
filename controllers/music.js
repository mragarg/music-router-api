// GET functions (Retrieve)
function retrieveAll(req, res) {
    res.json({message: "You retrieved all!"});
}

// POST functions (Create)
function createSong(req, res){
    res.json({message: "You created a new song!"});
}

// PUT functions (Update)

// DELETE functions (Delete)

module.exports = {
    retrieveAll,
    createSong
};