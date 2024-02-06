import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NoteserviceService } from '../noteservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrl: './note.component.css'
})
export class NoteComponent implements OnInit {

	notes: Note[];

	constructor(private route: ActivatedRoute, private router : Router,private noteservice: NoteserviceService) {}

	ngOnInit(): void {
		this.noteservice.getAllNotes().subscribe(data => {
			this.notes = data;
		})
	}

	onClickDel(id: number){
		console.log('onClickDel Borrar Nota id: '+id);
		this.noteservice.deleteNote(id).subscribe(data =>{
			console.log(data);
			this.goHome();
		})
	}

	goHome() {
		this.router.navigate(['/']);
		window.location.reload();
	}
}
