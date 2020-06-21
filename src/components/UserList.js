import React from 'react';
import { Table, Container } from 'react-bootstrap';

const UserList = (props) =>{
const userlist = props.userlist;
    let list;
    if (props.userlist) {
        list = userlist.map((val) => {
            return (
                <tr key={val.id} onClick={()=>props.getIndividualInfo(val.id)}>
                    <td>{val.id}</td>
                    <td>{val.first_name}</td>
                    <td>{val.last_name}</td>
                    <td>{val.email}</td>
                </tr>
            )
        })
    }
    return (
        <React.Fragment>
            <Container>

                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <td>#</td>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list}
                    </tbody>
                </Table>

            </Container>
        </React.Fragment>
    )
}

export default UserList;
