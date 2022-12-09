import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const Authentication = () => {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState('Sign In');
  const handleShow = () => {
    setAuth('Sign In');
    setShow(!show);
  };
  const handleLogin = () => {
    const form = document.querySelector('form');
    const info = {
      user: {
        name: form.name.value,
        password: form.password.value,
      },
    };
    fetch('http://127.0.0.1:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.user) {
          localStorage.setItem(
            'session',
            JSON.stringify({
              user: data.user.name,
              token: data.token,
            }),
          );
          setShow(!show);
          setAuth('Log Out');
        } else {
          throw new Error('Invalid credentials');
        }
      });
  };

  const handleRegister = () => {
    const form = document.querySelector('form');

    fetch('http://127.0.0.1:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          name: form.name.value,
          email: form.email.value,
          password: form.password.value,
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.user) {
          localStorage.setItem(
            'session',
            JSON.stringify({
              user: data.user.name,
              token: data.token,
            }),
          );
          setShow(!show);
          setAuth('Log Out');
        } else {
          throw new Error('Invalid credentials');
        }
      });
  };

  return (
    <>
      <Button
        type="button"
        className="nav-link bg-light border-0 ps-3"
        onClick={handleShow}
      >
        {auth}
      </Button>

      <Modal show={show} onHide={handleShow}>
        <Modal.Header closeButton>
          <Modal.Title>{auth}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form action="">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
                autoFocus
              />
            </Form.Group>
            {auth === 'Sign Up' && (
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  placeholder="email"
                  className="form-control"
                />
              </Form.Group>
            )}
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="password"
              />
            </Form.Group>
            <Button
              variant="success"
              type="button"
              onClick={auth === 'Sign In' ? handleLogin : handleRegister}
            >
              {auth}
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {auth === 'Sign In' && (
            <>
              <p>Don&apos;t have an account yet?</p>
              <Button
                type="button"
                className="nav-link bg-light border-0 text-primary"
                onClick={() => setAuth('Sign Up')}
              >
                Sign up
              </Button>
            </>
          )}
          {auth === 'Sign Up' && (
            <>
              <p>Want to sign in instead?</p>
              <Button
                type="button"
                className="nav-link bg-light border-0 text-primary"
                onClick={() => setAuth('Sign In')}
              >
                Sign In
              </Button>
            </>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Authentication;
