import { useState } from 'react';

import axios from 'axios';

const JoinBlock = ({ onLogin }) => {
  const [roomId, setRoomId] = useState('');
  const [userName, setUserName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onEnter = async () => {
    if (!roomId || !userName) {
      return alert('Введите данные для входа');
    }
    const obj = {
      roomId,
      userName,
    };
    setIsLoading(true);
    await axios.post('/rooms', obj);
    onLogin(obj);
  };

  return (
    <div className="join-block">
      <input
        type="text"
        placeholder="Room ID"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Ваше имя"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button
        className="btn btn-success"
        disabled={isLoading}
        onClick={onEnter}
      >
        Войти
      </button>
    </div>
  );
};

export default JoinBlock;
