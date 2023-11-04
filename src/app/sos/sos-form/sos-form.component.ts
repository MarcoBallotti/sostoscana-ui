import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SOS } from 'src/app/models/sos';

@Component({
	selector: 'app-sos-form',
	templateUrl: './sos-form.component.html',
	styleUrls: ['./sos-form.component.scss']
})
export class SosFormComponent {

	sos: SOS;

	constructor(private modalCtrl: ModalController) {

	}

	cancel() {
		return this.modalCtrl.dismiss(null, 'cancel');
	}

	confirm() {
		return this.modalCtrl.dismiss(this.sos, 'confirm');
	}
}
