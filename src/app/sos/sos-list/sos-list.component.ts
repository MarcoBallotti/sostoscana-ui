import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Generic } from 'src/app/models/advancedSearch';
import { SOS } from 'src/app/models/sos';
import { CrudService } from 'src/app/shared/crud.service';

import { SosFormComponent } from '../sos-form/sos-form.component';

@Component({
	selector: 'app-sos-list',
	templateUrl: './sos-list.component.html',
	styleUrls: ['./sos-list.component.scss']
})
export class SosListComponent {

	public sosList = []
	constructor(private crudService: CrudService,
		private modalCtrl: ModalController) {

		console.log('%c ', 'color:#FFB86C', 'prova');
		this.getAllSos();
	}


	getAllSos() {
		this.crudService.getEntities(Generic, 'soses').subscribe(res => {
			this.sosList = res['data'] as any;
			console.log('%c 	this.sosList', 'color:#FFB86C', this.sosList);
		})
	}


	async openModal(row?: SOS) {
		const modal = await this.modalCtrl.create({
			component: SosFormComponent,
			componentProps: {
				sos: row ? row.attributes : new SOS()
			}
		});
		modal.present();

		const { data, role } = await modal.onWillDismiss();
		console.log('%c role', 'color:#FFB86C', role);
		console.log('%c data', 'color:#FFB86C', data);

		if (role === 'confirm') {
			const call = row?.id ? this.crudService.saveEntity(SOS, 'sos.sos', data) : this.crudService.createEntity(SOS, 'sos.sos', data);
			call.subscribe(res => {
				this.getAllSos();
				console.log('%c res', 'color:#FFB86C', res);

			})

		} else {
			//canceled, will hide modal 

		}
	}

}
