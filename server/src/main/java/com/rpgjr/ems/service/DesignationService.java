package com.rpgjr.ems.service;

import com.rpgjr.ems.model.Designation;
import com.rpgjr.ems.repository.DesignationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DesignationService {

    @Autowired
    private DesignationRepository designationRepository;

    public List<Designation> getAllDesignation() {
        return designationRepository.findAll();
    }

    public ResponseEntity<String> addDesignation(Designation designation) {
        try {
            Designation newDesignation = designationRepository.save(designation);

            if (newDesignation.getId() == null)
                return new ResponseEntity<>("ERROR: Could not create designation.", HttpStatus.INTERNAL_SERVER_ERROR);

            return new ResponseEntity<>("Designation successfully created.", HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("ERROR: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
