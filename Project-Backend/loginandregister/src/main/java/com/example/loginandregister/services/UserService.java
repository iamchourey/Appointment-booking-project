package com.example.loginandregister.services;

import com.example.loginandregister.model.User;
import com.example.loginandregister.model.userRole;

import java.util.Set;

public interface UserService {
    public User createUser(User user, Set<userRole> userRoles) throws Exception;
    public User getUser(String uname);
    public void deleteUser(Long userId);
}
