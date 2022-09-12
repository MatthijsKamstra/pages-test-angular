import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class DataService {

	contacts: Array<Contact> = [
		{ id: 1, name: "Contact 001", description: "Contact 001 des", email: "c001@email.com" },
		{ id: 2, name: "Contact 002", description: "Contact 002 des", email: "c002@email.com" },
		{ id: 3, name: "Contact 003", description: "Contact 003 des", email: "c003@email.com" },
		{ id: 4, name: "Contact 004", description: "Contact 004 des", email: "c004@email.com" }
	];

	constructor() { }

	public getContacts(): Array<Contact> {
		return this.contacts;
	}
	public createContact(contact: Contact) {
		this.contacts.push(contact);
	}
}

export interface Contact {
	id: number | null,
	name: string,
	description: string,
	email: string
}