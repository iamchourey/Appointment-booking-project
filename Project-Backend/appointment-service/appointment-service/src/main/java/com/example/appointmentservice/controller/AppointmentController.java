package com.example.appointmentservice.controller;

import com.example.appointmentservice.model.Appointment;
import com.example.appointmentservice.repo.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/appointment")
@CrossOrigin("*")
public class AppointmentController {

    @Autowired
    private AppointmentRepository appointmentRepository;

    @GetMapping("/get")
    public List<Appointment> getAppointment(){
        return this.appointmentRepository.findAll();
    }

    @PostMapping("/")
    public Appointment createAppointment(@RequestBody Appointment appointment){
        return this.appointmentRepository.save(appointment);
    }

    @DeleteMapping("/delete/{name}")
    public ResponseEntity<Map<String,Boolean>> delete(@PathVariable String name){
        Appointment appointment=appointmentRepository.findByName(name);
        appointmentRepository.delete(appointment);

        Map<String,Boolean> map=new HashMap<>();
        map.put("Deleted",Boolean.TRUE);

        return ResponseEntity.ok(map);
    }
}
