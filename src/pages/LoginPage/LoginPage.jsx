import { useState } from 'react';
import { useLoginMutation } from '@/store/auth.api';
import { useDispatch } from 'react-redux';
import { setCredentials } from '@/store/auth.slice';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [login, { isLoading, error }] = useLoginMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const data = await login({ username, password }).unwrap();

      dispatch(
        setCredentials({
          token: data.accessToken,
        })
      );

      navigate('/catalog');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="login">
      <form className="login__form" onSubmit={submitHandler}>
        <input
          onChange={(e) => setUsername(e.target.value)}
          className="login__input"
          placeholder="Login"
          type="text"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="login__input"
          placeholder="Password"
          type="password"
        />

        {error && (
          <p className="login__error">
            Login or Password is wrong. Try again.
          </p>
        )}

        <button
          className="login__submit"
          type="submit"
          disabled={isLoading || !username || !password}
        >
          {isLoading ? 'Loading...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
