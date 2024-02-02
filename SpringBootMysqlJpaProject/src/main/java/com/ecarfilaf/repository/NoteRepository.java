package com.ecarfilaf.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecarfilaf.entity.Note;

@Repository
public interface NoteRepository extends JpaRepository<Note, Long> {

}
