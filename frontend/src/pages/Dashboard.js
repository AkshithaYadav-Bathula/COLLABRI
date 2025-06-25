import React, { useState } from 'react';
import { toast } from 'react-toastify';

export default function Dashboard({ user, onLogout }) {
  const [rooms, setRooms] = useState([
    { id: 1, name: "Math Study Group", participants: 5 },
    { id: 2, name: "CS Algorithms", participants: 8 }
  ]);
  
  const [newRoomName, setNewRoomName] = useState('');

  const createRoom = () => {
    if (!newRoomName.trim()) {
      toast.error('Please enter room name');
      return;
    }
    
    const newRoom = {
      id: Date.now(),
      name: newRoomName,
      participants: 1
    };
    
    setRooms([...rooms, newRoom]);
    setNewRoomName('');
    toast.success('Room created!');
  };

  const joinRoom = (roomId) => {
    toast.success(`Joined room ${roomId}!`);
  };

  return (
    <div>
      <h1>Welcome to Collabri Dashboard</h1>
      <p>Hello, {user?.name}!</p>
      <button onClick={onLogout}>Logout</button>
      
      <hr />
      
      <h2>Create New Room</h2>
      <input 
        type="text"
        placeholder="Room name"
        value={newRoomName}
        onChange={(e) => setNewRoomName(e.target.value)}
      />
      <button onClick={createRoom}>Create Room</button>
      
      <hr />
      
      <h2>Available Rooms</h2>
      {rooms.map(room => (
        <div key={room.id}>
          <h3>{room.name}</h3>
          <p>Participants: {room.participants}</p>
          <button onClick={() => joinRoom(room.id)}>Join Room</button>
        </div>
      ))}
    </div>
  );
}