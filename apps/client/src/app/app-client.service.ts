import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
@Injectable({
  providedIn: 'root',
})
export class AppClientService {
  public socket = io('ws://localhost:3000', {
    reconnectionDelayMax: 10000,
    path: '/chat',
    // auth: {
    //   token: '123',
    // },
  });
}
