package com.example.Library.Management.System.repositories;

import com.example.Library.Management.System.entity.Book;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.io.ObjectInput;
@Repository
public interface BookRepository extends MongoRepository<Book, ObjectId> {

}
