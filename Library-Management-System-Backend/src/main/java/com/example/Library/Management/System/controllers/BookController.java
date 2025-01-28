package com.example.Library.Management.System.controllers;

import com.example.Library.Management.System.entity.Book;
import com.example.Library.Management.System.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/bookController")
public class BookController {

    @Autowired
    private BookService bookService1;

    @PostMapping
    public ResponseEntity<String> SaveBook(@RequestBody Book b){
        if(b != null){
            bookService1.insertBook(b);
            return new ResponseEntity<>("Book Saved Successfully", HttpStatus.CREATED);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
    @GetMapping
    public List<Book> getAllBooks(){
        return bookService1.getAll();
    }
}
