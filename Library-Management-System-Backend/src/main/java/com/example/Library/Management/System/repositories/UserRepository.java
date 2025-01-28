package com.example.Library.Management.System.repositories;

import com.example.Library.Management.System.entity.User;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository // -> not mandatory just for more understanding of code.
public interface UserRepository extends MongoRepository<User, ObjectId> {
    User findByEmail(String email);
}
