import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class NoteserviceService {

	private apiUrl = 'http://localhost:8080/api/v01/notes';

	constructor(private http: HttpClient) { }

	public getAllNotes(): Observable<Note[]>{
		return this.http.get<Note[]>(this.apiUrl);
	}

	public addNote(note: Note): Observable<Object>{
		return this.http.post(`${this.apiUrl}`, note);
	}

	public getNoteById(id: number): Observable<Note>{
		return this.http.get<Note>(`${this.apiUrl}/${id}`);
	}

	public updateNote(id: number, note: Note): Observable<Object>{
		return this.http.put(`${this.apiUrl}/${id}`, note);
	}

	public deleteNote(id: number): Observable<Note>{
		return this.http.delete<Note>(`${this.apiUrl}/${id}`);
	}
}
