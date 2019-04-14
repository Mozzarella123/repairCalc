

export const RoomListContainer = connect(
    (state: AppState) => ({
        project : state.project
    }),
    dispatch => ({
        selectRoom: (room: string) => dispatch(selectRoom(room))
    })
)(MainComponent);