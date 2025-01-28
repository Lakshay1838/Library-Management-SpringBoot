package com.example.Library.Management.System.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class checkFrontendBackendIntegeration {

    @GetMapping("/example")
    public String exampleEndpoint() {
        return "CORS Configured Successfully!";
    }
}
