package com.example.Library.Management.System.controllers;

import com.example.Library.Management.System.Services.UserService;
import com.example.Library.Management.System.entity.User;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

@Component
@RestController
@RequestMapping("/userController")
public class UserController {

    @Autowired
    private UserService userService1;

    @PostMapping
    public ResponseEntity<String> createUser(@RequestBody User u1){
//        check if already exists
        User u = userService1.findByEmail(u1.getEmail());
        if(u != null){
            return new ResponseEntity<>("User already exists", HttpStatus.ALREADY_REPORTED);
        }
//        if not than save
        userService1.createUser(u1);
        return new ResponseEntity<>("User Created SuccessFully",HttpStatus.ACCEPTED);
    }
    @GetMapping
    public ResponseEntity<?> getUsers(){
        return new ResponseEntity<>(userService1.getAll(),HttpStatus.OK);
    }
}
