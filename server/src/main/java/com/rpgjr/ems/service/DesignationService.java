package com.rpgjr.ems.service;

import com.rpgjr.ems.model.Designation;
import com.rpgjr.ems.repository.DesignationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DesignationService {

    @Autowired
    private DesignationRepository designationRepository;

    public List<Designation> getAllDesignation() {
        return designationRepository.findAllByOrderByIdAsc();
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

    public ResponseEntity<String> deleteDesignation(Long id) {
        try {
            designationRepository.deleteById(id);
            return new ResponseEntity<>("Designation Successfully deleted", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("ERROR: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public ResponseEntity<String> updateDesignation(Long id, Designation designation) {
        try {
            Optional<Designation> getDesignation = designationRepository.findById(id);
            Designation toNewDesignation = null;

            if (getDesignation.isPresent())
                toNewDesignation = getDesignation.get();

            toNewDesignation.setTitle(designation.getTitle());
            designationRepository.save(toNewDesignation);
            return new ResponseEntity<>("Desination Suceessfully updated", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("ERROR: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
