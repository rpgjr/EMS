package com.rpgjr.ems.controller;

import com.rpgjr.ems.model.Designation;
import com.rpgjr.ems.service.DesignationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
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

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteDesignation(@PathVariable Long id) {
        return designationService.deleteDesignation(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateDesignation(@PathVariable Long id, @RequestBody Designation designation) {
        return designationService.updateDesignation(id, designation);
    }

}
