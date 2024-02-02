package com.ecarfilaf.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecarfilaf.entity.Note;
import com.ecarfilaf.repository.NoteRepository;

@RestController
@RequestMapping("/api/v01")
public class NoteRestController {

	@Autowired
	NoteRepository noterepository;
	
	//Get All Notes
	//http://localhost:8080/api/notes
	@GetMapping("/notes")
	public ResponseEntity<List<Note>> getAllNotes() {
		try { 
			List<Note> notes = new ArrayList<Note>();
			
			noterepository.findAll().forEach(notes :: add);
						
			return new ResponseEntity<>(notes, HttpStatus.OK);
		} catch (Exception e) { 
	      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	}
	
	//Get Note
	//http://localhost:8080/api/notes/1
	@GetMapping("/notes/{id}")
	public  Optional<Note> getNoteById(@PathVariable(value = "id") Long id){
		return noterepository.findById(id);
	}
	
	// Create a new Note
    // URL: http://localhost:8080/api/notes
    // Object json: {"id":"3","tittle":"titulo post","content":"Contenido nota desde postman"}
    @PostMapping("/notes")
    public Note createNote(@RequestBody Note note) {
        return noterepository.save(note);
    }
 
    // Update a User
    // URL: http://localhost:8080/api/notes/2
    // Object json: {"id":"2","tittle":"Titulo segundo","content":"Contenido Segundo"}
    @PutMapping("/notes/{id}")
    public Note updateNote(@PathVariable(value = "id") Long id, @Validated @RequestBody Note noteDet) {
 
        Note note = noterepository.findById(id).orElse(null);
 
        note.setTittle(noteDet.getTittle());
        note.setContent(noteDet.getContent());
 
        Note updatedNote = noterepository.save(note);
        return updatedNote;
    }
 
    // Delete a User
    // URL: http://localhost:8080/api/notes/3
    @DeleteMapping("/notes/{id}")
    public ResponseEntity<?> deleteNote(@PathVariable(value = "id") Long id) {
         
        Note note = noterepository.findById(id).orElse(null);
 
        noterepository.delete(note);
 
        return ResponseEntity.ok().build();
    }
}
