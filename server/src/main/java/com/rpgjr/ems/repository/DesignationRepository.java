package com.rpgjr.ems.repository;

import com.rpgjr.ems.model.Designation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DesignationRepository extends JpaRepository<Designation, Long> {

    List<Designation> findAllByOrderByIdAsc();

}
