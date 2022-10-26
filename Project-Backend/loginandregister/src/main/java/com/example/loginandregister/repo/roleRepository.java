package com.example.loginandregister.repo;

import com.example.loginandregister.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface roleRepository extends JpaRepository<Role,Long> {

}
