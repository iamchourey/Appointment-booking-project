package com.example.loginandregister.services.implement;

import ch.qos.logback.core.net.SyslogOutputStream;
import com.example.loginandregister.model.User;
import com.example.loginandregister.model.userRole;

import com.example.loginandregister.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class userServiceImpl implements UserService {

    @Autowired
    private com.example.loginandregister.repo.userRepository userRepository;

    @Autowired
    private com.example.loginandregister.repo.roleRepository roleRepository;
    @Override
    public User createUser(User user, Set<userRole> userRoles) throws Exception {

        User local =this.userRepository.findByusername(user.getUsername());

        if(local !=null)
        {
            System.out.println("User already present");
            throw  new Exception("User already present");
        }
        else
        {
            for(userRole ur:userRoles)
            {
                roleRepository.save(ur.getRole());
            }
            System.out.println(user.getUsername());
            user.getUserRoles().addAll(userRoles);
            local=this.userRepository.save(user);
        }
        return local;
    }

    @Override
    public User getUser(String uname) {
        return this.userRepository.findByusername(uname);
    }

    @Override
    public void deleteUser(Long userId) {
        this.userRepository.deleteById(userId);
    }

}
