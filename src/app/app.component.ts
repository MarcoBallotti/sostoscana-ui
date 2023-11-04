import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss'],
})
export class AppComponent {
	public appPages = [
		{ title: 'Chiedi aiuto', url: '/sos', icon: 'archive' },
	];
	public labels = [
		{ numero: 112, label: 'Polizia' },
		{ numero: 118, label: 'Ospedale' }
	];
	constructor() { }
}
