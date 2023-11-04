import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Acquirenti', url: '/folder/acquirenti', icon: 'mail' },
    { title: 'Agenda', url: '/folder/agenda', icon: 'paper-plane' },
    { title: 'Immobili', url: '/folder/immobili', icon: 'map' },
    { title: 'Rubrica', url: '/folder/rubrica', icon: 'archive' },
    { title: 'Mappa', url: '/folder/maps', icon: 'map' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
