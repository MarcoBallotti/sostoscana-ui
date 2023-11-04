import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SosListComponent } from './sos-list/sos-list.component';


const routes: Routes = [
	{
		path: '',
		component: SosListComponent
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class SosRoutingModule { }
