import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Server } from 'socket.io';
import { Cron, CronExpression } from '@nestjs/schedule';
import axios from 'axios';


@WebSocketGateway()
export class AppGateway {
  @WebSocketServer()
  server: Server;

  @Cron(CronExpression.EVERY_5_SECONDS)
  async handleCron() {
    const activity = await axios.get("https://www.boredapi.com/api/activity")
    this.server.emit("activity",activity.data);
  }

  @SubscribeMessage('events')
  findAll(@MessageBody() data: any): Observable<WsResponse<number>> {
    return from([1, 2, 3]).pipe(map(item => ({ event: 'events', data: item })));
  }

  @SubscribeMessage('identity')
  async identity(@MessageBody() data: number): Promise<number> {
    return data;
  }
}
