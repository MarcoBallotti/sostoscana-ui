import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SosFormComponent } from './sos-form/sos-form.component';
import { SosRoutingModule } from './sos-routing.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		SosRoutingModule
	],
	declarations: [SosFormComponent]
})
export class SosPageModule { }
