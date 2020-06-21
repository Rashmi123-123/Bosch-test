import React, { useState, useEffect } from 'react';
import UserList from './UserList';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import UserProfile from './Userprofile';
import { Container, Row, Tab, Tabs } from 'react-bootstrap';

const Body = (props) => {
  const [userlist, setUserList] = useState();
  const [individuauser, setIndividuauser] = useState();
  const [key, setKey] = useState('home');
  const fetchUserinfo = (page) => {
    let url;
    if (page) {
      url = 'https:/reqres.in/api/users?page=' + page;
    } else {
      url = 'https:/reqres.in/api/users';
    }
    fetch(url)
      .then(
        function (response) {
          response.json().then((res) => {
            setUserList(res.data);
          });
        }
      )
      .catch(function (err) {
        alert(err.message);
      });
  }
  useEffect(() => {
    fetchUserinfo();
    return (setIndividuauser(''));
  }, [])
  const redirectToProfile = (data) => {
    setIndividuauser(data);
    setKey('profile');
    props.history.push('/userprofile');

  }
  const getIndividualInfo = (uid) => {
    const url = 'https://reqres.in/api/users/' + uid;
    fetch(url)
      .then(
        function (response) {
          response.json().then((res) => {
            redirectToProfile(res.data);
          });
        }
      )
      .catch(function (err) {
        alert(err.message);
      });
  }
  const selectTab = (k) => {
    setKey(k);
    if (k === 'home') {
      props.history.replace('/');
    } else {
      props.history.replace('/userprofile');
    }
  }
  return (
    <Container>
      <Tabs
        activeKey={key}
        onSelect={(k) => { selectTab(k) }}>
        <Tab eventKey="home" title="Users List">
        </Tab>
        <Tab eventKey="profile" title="User Profile" >
        </Tab>
      </Tabs>
      <br />
      <Row>
        <Switch>
          <Route path='/userprofile' render={() => <UserProfile userinfo={individuauser} />}></Route>
          <Route path='/' render={props => <UserList userlist={userlist} getIndividualInfo={getIndividualInfo} />}></Route>
        </Switch>
      </Row>
    </Container>
  );
}

export default withRouter(Body);
