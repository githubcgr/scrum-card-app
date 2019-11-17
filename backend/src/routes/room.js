module.exports = (app) => {
    const RoomController = app['src'].controllers.room;
    app.post('/save-room', RoomController.saveRoom);
    app.get('/get-rooms', RoomController.getRooms);

}