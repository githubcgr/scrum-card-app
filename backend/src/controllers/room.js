module.exports = (app) => {
    const Room = app['src'].models.room;

    let controller = {

        saveRoom: (req, res) => {
            // if (req.body._id != '') {
            //     User.updateOne({_id: req.body._id}, req.body, function (err, updated) {
            //         return res.status(200).json(req.body);
            //     })
            // } else {
                const newRoom = new Room({
                    name: req.body.name,
                });
                newRoom.save(function (err, objSaved) {});

                return res.status(200).json(newRoom);
            // }
        },
        getRooms: (req, res) => {
            Room.find().lean().exec(function (e, collection) {
                res.json({
                    rooms: collection
                })
            })

        },
    }
    return controller;
}