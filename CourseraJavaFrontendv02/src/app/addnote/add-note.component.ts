import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from '../noteservice.service';
import { Note } from '../note';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrl: './add-note.component.css'
})
export class AddNoteComponent implements OnInit {

	note : Note = new Note();;

	constructor(private route: ActivatedRoute, private router : Router, private noteservice: NoteserviceService){
		this.note.id = 0;
		this.note.tittle = "";
		this.note.content = "";
	}

	ngOnInit(): void {
	}

	onSubmit(){
		alert('onSubmit');
		console.log('onSubmit');
		this.noteservice.addNote(this.note).subscribe( data =>{
			console.log(data);
			// this.goHome();
		  });
	}

	onClickAdd(){
		console.log('onClickAdd Agregar Nota');
		// this.note.id=0;
		// this.note.tittle=tittle;
		// this.note.content=content;
		this.noteservice.addNote(this.note).subscribe( data =>{
			console.log(data);
			this.goHome();
		  });
	}

	goHome() {
		this.router.navigate(['/']);
		window.location.reload();
	}
}
