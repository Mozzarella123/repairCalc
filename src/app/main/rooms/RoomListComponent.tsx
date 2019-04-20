import React from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Room from "../duck/models/Room";

interface Props extends RoomListStateProps, RoomListDispatchProps {}

export interface RoomListStateProps {
    rooms: Room[];
    selectedRoomId: number;
}

export interface RoomListDispatchProps {
    selectRoom: (roomId: number) => any;
}

export const RoomListComponent = ({ rooms, selectedRoomId, selectRoom }: Props) => {
    return (
        <div>
            <Nav tabs>
                {rooms.map((room, i) => (
                    <NavItem>
                        <NavLink
                            className={classnames({ active: room.id === selectedRoomId })}
                            onClick={() => { selectRoom(room.id) }}>
                            {room.title}
                        </NavLink>
                    </NavItem>
                ))}
            </Nav>
            <TabContent>
                {rooms.map((room) => (
                    <TabPane tabId={`room-${room.id}`}>
                         <Row>
                             <Col sm="12">
                                 Room
                             </Col>
                         </Row>
                     </TabPane>
                ))}
            </TabContent>
        </div>
    )
};