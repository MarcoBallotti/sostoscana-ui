import { Type } from 'class-transformer';

import { Position } from './position';

export class SOS {
	id: string
	title: string;
	description: string;
	email: string;
	priority: number;
	insdate: number;
	closetime: number;
	open: boolean;
	@Type(() => Position)
	position: Position;

	attributes: any;

	constructor() {

	}

}

