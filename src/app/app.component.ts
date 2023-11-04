import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss'],
})
export class AppComponent {
	public appPages = [
		{ title: 'Richiesta di aiuto', url: '/folder/sos', icon: 'archive' },
	];
	public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
	constructor() { }
}
