import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClassConstructor, instanceToPlain, plainToInstance } from 'class-transformer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Count, Search } from '../models/advancedSearch';

@Injectable({
	providedIn: 'root',
})
export class CrudService {

	constructor(protected http: HttpClient) { }


	createEntity<T>(entityClass: ClassConstructor<T>, entityName: string, entity: any): Observable<T> {
		return this.http.post(`api/${entityName}`, instanceToPlain(entity))
			.pipe(map(res => plainToInstance(entityClass, res as Object)));
	}

	getEntity<T>(entityClass: ClassConstructor<T>, entityName: string, id: number): Observable<T> {
		return this.http.get(`api/${entityName}/${id}`)
			.pipe(map(res => plainToInstance(entityClass, res as Object)));
	}

	getEntities<T>(entityClass: ClassConstructor<T>, entityName: string): Observable<T> {
		return this.http.get(`api/${entityName}`)
			.pipe(map(res => plainToInstance(entityClass, res as Object)));
	}

	saveEntity<T>(entityClass: ClassConstructor<T>, entityName: string, entity: any): Observable<T> {
		return this.http.put(`api/${entityName}/${entity.id}`, instanceToPlain(entity))
			.pipe(map(res => plainToInstance(entityClass, res as Object)));
	}

	deleteEntity<T>(entityClass: ClassConstructor<T>, entityName: string, entity: any): Observable<any> {
		return this.http.delete(`api/${entityName}/${entity.id}`);
	}


	searchEntities<T>(entityClass: ClassConstructor<T>, entityName: string, search: Search<T>): Observable<{ entities: T[], totalCount: number }> {

		const response = this.http.post(`api/${entityName}/advancedSearch`, instanceToPlain(search))
			.pipe(map(res => plainToInstance(entityClass, res as Object[])));

		return response.pipe(map(res => {
			return {
				entities: plainToInstance(entityClass, res['entities'] as Object[]),
				totalCount: res['totalCount'],
			}
		}))


	}


	countEntities<T>(entityClass: ClassConstructor<any>, entityName: string, search: Search<T>): Observable<Count> {
		return this.http.post(`api/${entityName}/search`, instanceToPlain(search))
			.pipe(map(res => plainToInstance(Count, res as Object)));
	}


	/*	xlsxExport(entityName: string, search: any, page: Page) {
			return this.http.post(`api/${entityName}/xlsxexport/${page.start}/${page.stop}`, instanceToPlain(search),
				{ responseType: 'blob' });
		}
		*/
	/*
		upload(file: any, data: any, entity?: string, eid?: number, custompath?: string): any {
			console.log('%c file', 'color:#FFB86C', file);
			console.log('%c data', 'color:#FFB86C', data);
			const formData = new FormData();
			formData.append('file', file);
			Object.keys(data).forEach(key => {
				formData.append(key, data[key]);
			});
	
			console.log('formdata', formData);
			const progressSource = new Subject<any>();
			const successSource = new Subject<any>();
			const errorSource = new Subject<any>();
			const completeSource = new Subject<any>();
	
			const path = (custompath) ? custompath : eid ? `/api/${entity}/${eid}` : `/api/${entity}`;
	
			const call = eid ? this.http.put(path, formData, {
				reportProgress: true, observe: 'events'
			}) : this.http.post(path, formData, {
				reportProgress: true, observe: 'events'
			})
	
	
			call.subscribe(event => {
				console.log('upload event', event);
				const uploadEvent = event as any;
				if (uploadEvent.type === HttpEventType.UploadProgress) {
					progressSource.next({ loaded: uploadEvent.loaded, total: uploadEvent.total });
				} else if (uploadEvent.type === HttpEventType.Response) {
					const status = uploadEvent.status;
					const statusText = uploadEvent.statusText;
					const body = uploadEvent.body;
					if (status === 200 || status === 204 || status === 201) {
						successSource.next(plainToInstance(File, body as Object));
					}
					completeSource.next({ status, statusText });
				}
			}, (error) => {
				console.log('upload error', error);
				return errorSource.next(error);
			});
	
			return {
				progress: progressSource.asObservable(),
				success: successSource.asObservable(),
				error: errorSource.asObservable(),
				complete: completeSource.asObservable()
			};
		}
	
		download(eid: number): Observable<any> {
			return this.http.get(`/api/files/download/${eid}`, { responseType: 'blob' });
		}
		*/


}
