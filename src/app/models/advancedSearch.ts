import { Exclude } from 'class-transformer';

export class Page {

	limit: number = 20; // number of results for each page
	page: number = 0; // current page number, starts at 0

	@Exclude()
	totalElements: number = 0;
	@Exclude()
	totalPages: number = 0;


	constructor(size: number = 20) {
		this.limit = size;
	}

	setPageNumber(n: number, elementsPerRow: number = 1) {
		this.page = n
	}

	setTotal(t: number) {
		this.totalElements = t;
		this.totalPages = Math.ceil(t / this.limit);
	}


	getSize(): number {
		return this.limit;
	}

	getTotalElements(): number {
		return this.totalElements;
	}


	nextPage() {
		if (this.hasmore) {
			this.setPageNumber(this.page + 1);
		}
	}

	prevPage() {
		if (this.page - 1 >= 0) {
			this.setPageNumber(this.page - 1);
		}
	}

	get hasmore() {
		return this.page + 1 < this.totalPages;
	}


}

//dynamic
export class Search<T> extends Page {
	query: T;
	include: string[] = []

	constructor(entityClass: new () => T) {
		super();
		if (entityClass)
			this.query = new entityClass(); // Create a new instance of the provided class
	}

	decorate(table: string) {
		this.include.push(table)
	}
}

export class Count {
	ct: number;
	entity: string;
}


export class Generic {

}


