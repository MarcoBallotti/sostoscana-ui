import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SosRoutingModule } from './sos-routing.module';
import { SosComponent } from './sos.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		SosRoutingModule
	],
	declarations: [SosComponent]
})
export class SosPageModule { }
