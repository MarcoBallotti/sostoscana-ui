import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Position } from 'src/app/models/position';
import { SOS } from 'src/app/models/sos';
import { CrudService } from 'src/app/shared/crud.service';

@Component({
	selector: 'app-sos-form',
	templateUrl: './sos-form.component.html',
	styleUrls: ['./sos-form.component.scss']
})
export class SosFormComponent {

	sos: SOS;
	positions: Position[] = [];
	constructor(private modalCtrl: ModalController,
		private crudService: CrudService) {

		this.getPositions();
	}

	cancel() {
		return this.modalCtrl.dismiss(null, 'cancel');
	}

	confirm() {
		return this.modalCtrl.dismiss(this.sos, 'confirm');
	}

	getPositions() {
		this.crudService.getEntities(Position, 'positions').subscribe(res => {
			this.positions = res['data'];
		})
	}
}
