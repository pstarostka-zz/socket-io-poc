import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Message } from '@chat-socket-io/api-interfaces';
import { AppClientService } from './app-client.service';

@Component({
  selector: 'chat-socket-io-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  hello$ = this.http.get<Message>('/api/hello');
  constructor(
    private http: HttpClient,
    private readonly appclientService: AppClientService
  ) {}

  public ngOnInit(): void {
    this.appclientService.socket.connect();
    this.appclientService.socket.on('chat', (message) => {
      console.log(message);
    });
  }

  click = async () => {
    await this.http.get<Message>('/api/hello').toPromise();
  };
}
