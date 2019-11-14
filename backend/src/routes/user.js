module.exports = (app) => {
    const UserController = app['src'].controllers.user;
    app.post('/login-user', UserController.verifyUser);

    app.get('/get-users', UserController.getUsers);
    app.post('/save-user', UserController.saveUser);
    app.post('/delete-user', UserController.deleteUser);

}