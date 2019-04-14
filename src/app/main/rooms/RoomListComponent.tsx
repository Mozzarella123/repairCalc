import React from "react";
import { Room } from "./duck/types";
import { Nav, NavItem, NavLink, TabContent, TabPane, Row, Col } from 'reactstrap';
import classnames from 'classnames';

interface Props {
    rooms: Room[];
    selectedRoom: string;
    selectRoom: (room: string) => any;
}

export const RoomListComponent = ({ rooms, selectedRoom, selectRoom }: Props) => {
    return (
        <div>
            <Nav tabs>
                {rooms.map((room, i) => (
                    <NavItem>
                        <NavLink
                            className={classnames({ active: room.id === selectedRoom })}
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
}