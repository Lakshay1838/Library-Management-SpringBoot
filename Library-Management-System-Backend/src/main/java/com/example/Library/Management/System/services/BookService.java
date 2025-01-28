package com.example.Library.Management.System.services;

import com.example.Library.Management.System.entity.Book;
import com.example.Library.Management.System.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class BookService {

    @Autowired
    private BookRepository bookRepository1;

    public void insertBook(Book b){
        bookRepository1.save(b);
    }
//    get al;
    public List<Book> getAll(){
        return bookRepository1.findAll();
    }
}
