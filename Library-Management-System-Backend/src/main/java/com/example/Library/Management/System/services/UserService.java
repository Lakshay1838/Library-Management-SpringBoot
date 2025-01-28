package com.example.Library.Management.System.Services;

import com.example.Library.Management.System.entity.User;
import com.example.Library.Management.System.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import java.util.*;

@Component
public class UserService {

    @Autowired
    private UserRepository userRepository1;

    public void createUser(User user){
        userRepository1.save(user);
    }
    public User findByEmail(String email){
        return  userRepository1.findByEmail(email);
    }
//    find alll
    public List<User> getAll(){
        return userRepository1.findAll();
    }

}
