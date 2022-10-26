package com.example.loginandregister.repo;

import com.example.loginandregister.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface userRepository extends JpaRepository<User,Long> {


    User findByusername(String username);
}
