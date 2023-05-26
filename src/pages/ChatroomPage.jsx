//import React from 'react';
import { Container, Box, Grid, Paper, MenuItem, MenuList, Stack } from '@mui/material';
import { Sidebar, ChatRoom } from '../components';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import io from 'socket.io-client';



const ChatroomPage = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);


  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);



  return (
    <Stack direction="row" spacing={2} sx={{ width: '100vw', height: '100vh' }}>
      <Sidebar />
      <Content />
    </Stack>
  );
};




const Content = () => {
  const Item = styled(Paper)(({ theme, bgcolor }) => ({
    backgroundColor: bgcolor || '#1A2027',
    ...theme.typography.body2,
    padding: theme.spacing(10),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }));



  const [socket, setSocket] = useState(null);
  useEffect(() => {
    // 在組件加載時建立 Socket.io 連接
    //const newSocket = io('http://localhost:4000');
    //setSocket(newSocket);

    // 清理函數，組件卸載時關閉 Socket.io 連接
    return () => {
      //newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket) {
      // 註冊事件監聽器
      socket.on('event', handleEvent);
    }
  }, [socket]);

  const handleEvent = (data) => {
    // 處理事件數據
    console.log(data);
  };

  let [room, setRoom] = useState([]);
  let chatRoom = <div>JJ</div>;

  const handleJoinRoom = (roomId, roomName) => {
    console.log(roomId)
    console.log(roomName)
    //if (socket) {
    // 傳送事件到 Socket.io 伺服器
    //socket.emit('room', roomId);
    const newRoom = { key: roomId, name: roomName };
    setRoom(room = [newRoom]);
    console.log(room)
    //}

    if (room.length) {
      chatRoom = <div>hoho</div>
    }
  }




  return (
    <Stack sx={{ width: '100%', height: '100vh' }}>
      <Stack>
        <h1>聊天室</h1>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Stack sx={{ width: '60%', height: '100vh' }}>
          <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
            <Grid item xs={6}>
              <Item bgcolor='#42a5f5' onClick={() => handleJoinRoom(1, "進來聊聊人生")}>
                <strong >進來聊聊人生</strong>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item bgcolor='#4caf50' onClick={() => handleJoinRoom(2, "一天React就上手")}>
                <strong >一天React就上手</strong>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item bgcolor='#ff9800' onClick={() => handleJoinRoom(3, "辦公室之瓜")}>
                <strong >辦公室之瓜</strong>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item bgcolor='#ef5350' onClick={() => handleJoinRoom(4, "一天React就上手")}>
                <strong >一天React就上手</strong>
              </Item>
            </Grid>
          </Grid>
        </Stack>
        <Stack sx={{ width: '40%', height: '100vh' }}>
          456
        </Stack>
        {chatRoom}
      </Stack>
    </Stack >
  );
};

export default ChatroomPage;
