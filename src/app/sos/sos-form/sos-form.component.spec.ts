import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SosFormComponent } from './sos-form.component';

describe('SosFormComponent', () => {
	let component: SosFormComponent;
	let fixture: ComponentFixture<SosFormComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [SosFormComponent]
		});
		fixture = TestBed.createComponent(SosFormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
