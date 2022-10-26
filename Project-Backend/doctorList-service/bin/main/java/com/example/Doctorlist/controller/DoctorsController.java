package com.example.Doctorlist.controller;

import com.example.Doctorlist.model.Doctors;
import com.example.Doctorlist.repo.DoctorsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/doctors-list")
@CrossOrigin("*")
public class DoctorsController {

    @Autowired
    private DoctorsRepository doctorsRepository;

    @GetMapping
    public List<Doctors> getAllDoctors(){
        return doctorsRepository.findAll();
    }
}
