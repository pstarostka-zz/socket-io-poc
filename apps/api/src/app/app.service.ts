import { Message } from '@chat-socket-io/api-interfaces';
import { Injectable } from '@nestjs/common';
import { Server } from 'socket.io';
@Injectable()
export class AppService {
  public readonly io = new Server(3000, {
    path: '/chat',
    serveClient: true,
    // below are engine.IO options
    pingInterval: 10000,
    pingTimeout: 5000,
    cookie: false,
    cors: {
      origin: '*',
    },
  });

  getData(): Message {
    return { message: 'Welcome to api!' };
  }

  emit(): void {
    this.io.emit('chat', { elo: Math.random() });
  }
}
