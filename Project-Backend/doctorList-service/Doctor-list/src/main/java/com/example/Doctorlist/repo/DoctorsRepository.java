package com.example.Doctorlist.repo;

import com.example.Doctorlist.model.Doctors;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DoctorsRepository extends JpaRepository<Doctors,Long> {
}
