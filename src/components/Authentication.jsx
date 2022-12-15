import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const Authentication = () => {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState('Sign In');
  const authentication = localStorage.getItem('session');

  const handleShow = () => {
    const auth = localStorage.getItem('session');
    if (auth) {
      localStorage.removeItem('session');
    }
    setShow(!show);
  };

  const validEmail = (email) => {
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
  };

  const validate = () => {
    const form = document.querySelector('form');
    const name = form.name.value;
    const password = form.password.value;

    if (!name) {
      document.querySelector('.name-err').textContent = 'Name cannot be blank';
      document.querySelector('.name-err').previousSibling.style.borderColor = 'red';
      setTimeout(() => {
        document.querySelector('.name-err').textContent = '';
        document.querySelector('.name-err').previousSibling.style.borderColor = '#E0E0E0';
      }, 2000);
    }

    if (password.length < 6) {
      document.querySelector('.pass-err').textContent = 'Password must be at least 6 characters';
      document.querySelector('.pass-err').previousSibling.style.borderColor = 'red';
      setTimeout(() => {
        document.querySelector('.pass-err').textContent = '';
        document.querySelector('.pass-err').previousSibling.style.borderColor = '#E0E0E0';
      }, 2000);
    }
  };

  const handleLogin = () => {
    const form = document.querySelector('form');
    validate();
    fetch('http://127.0.0.1:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          name: form.name.value.toLowerCase(),
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
              user_id: data.user.id,
              role: data.user.role,
              user: data.user.name,
              token: data.token,
            }),
          );
          setShow(!show);
        } else {
          document.querySelector('.err').textContent = 'Invalid username or password';
          setTimeout(() => {
            document.querySelector('.err').textContent = '';
          }, 2000);
          throw new Error('Invalid credentials');
        }
      });
  };

  const handleRegister = () => {
    const form = document.querySelector('form');
    const email = form.email.value.toLowerCase();
    validate();

    if (!email || !validEmail(email)) {
      document.querySelector('.mail-err').textContent = 'Please enter a valid email address';
      document.querySelector('.mail-err').previousSibling.style.borderColor = 'red';
      setTimeout(() => {
        document.querySelector('.mail-err').textContent = '';
        document.querySelector('.mail-err').previousSibling.style.borderColor = '#E0E0E0';
      }, 2000);
    } else {
      fetch('http://127.0.0.1:3000/api/v1/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            name: form.name.value.toLowerCase(),
            email,
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
                user_id: data.user.id,
                role: data.user.role,
                token: data.token,
              }),
            );
            setShow(!show);
          } else {
            document.querySelector('.err').textContent = 'Username or email already taken';
            setTimeout(() => {
              document.querySelector('.err').textContent = '';
            }, 2000);
            throw new Error('Invalid username or email');
          }
        });
    }
  };

  return (
    <>
      <Button
        type="button"
        className="nav-link bg-light border-0 ps-3"
        onClick={handleShow}
      >
        {authentication ? 'Log Out' : 'Sign In'}
      </Button>

      <Modal show={show} onHide={handleShow}>
        <Modal.Header closeButton>
          <Modal.Title>{auth}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form action="" className="auth">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
                autoFocus
              />
              <small className="text-danger name-err" />
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
                <small className="text-danger mail-err" />
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
              <small className="text-danger pass-err" />
            </Form.Group>
            <Button
              style={{ backgroundColor: '#97e00f' }}
              className="border-0"
              type="button"
              onClick={auth === 'Sign In' ? handleLogin : handleRegister}
            >
              {auth}
            </Button>
          </Form>
          <small className="text-danger err" />
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
