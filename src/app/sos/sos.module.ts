import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { SosFormComponent } from './sos-form/sos-form.component';
import { SosListComponent } from './sos-list/sos-list.component';
import { SosRoutingModule } from './sos-routing.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		SosRoutingModule,
		NgxDatatableModule
	],
	declarations: [SosFormComponent, SosListComponent]
})
export class SosModule { }
