package com.example.demo.service.ReservationManagement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.repository.ReservationRepository;

@Service
public class CancelReservationService {

    private final ReservationRepository reservationRepository;

    @Autowired
    public CancelReservationService(ReservationRepository reservationRepository) {
        this.reservationRepository = reservationRepository;
    }
    @Transactional
    public void cancelReservation(Long reservationNum) {
        reservationRepository.deleteByReservationNum(reservationNum);
    }
}