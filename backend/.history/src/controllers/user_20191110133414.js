module.exports = (app) => {
    const User = app['src'].models.user;

    let controller = {
        getUsers: (req, res) => {
            User.find().lean().exec(function (e, collection) {
                res.json({
                    users: collection
                })
            })

        },
        verifyUser: (req, res) => {
            User.findOne({
                login: req.body.login,
                password: req.body.password
            }).lean().exec(function (e, collection) {

                found = false;
                if (collection != null) {
                    found = true;
                }

                res.json({
                    found: found
                })
            });
        },
        saveUser: (req, res) => {
            if (req.body._id != '') {
                User.updateOne({_id: req.body._id}, req.body, function (err, updated) {
                    return res.status(200).json(req.body);
                })
            } else {
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                    active: req.body.active
                });
                newUser.save(function (err, objSaved) {});

                return res.status(200).json(newUser);
            }
        },
        deleteUser: (req, res) => {
            if (req.body._id != '') {
                User.findOneAndRemove({_id: req.body._id}, req.body, function (err, updated) {
                    return res.status(200).json(req.body);
                })
            }
        }
    }
    return controller;
}