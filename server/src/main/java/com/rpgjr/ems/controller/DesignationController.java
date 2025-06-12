package com.rpgjr.ems.controller;

import com.rpgjr.ems.model.Designation;
import com.rpgjr.ems.service.DesignationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/designation")
public class DesignationController {

    @Autowired
    private DesignationService designationService;

    @GetMapping("/all")
    public List<Designation> getAllDesignation() {
        return designationService.getAllDesignation();
    }

    @PostMapping("/add")
    public ResponseEntity<String> addDesignation(@RequestBody Designation designation) {
        return designationService.addDesignation(designation);
    }

}
