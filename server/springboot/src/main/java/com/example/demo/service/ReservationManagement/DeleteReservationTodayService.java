package com.example.demo.service.ReservationManagement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.repository.ReservationTodayRepository;

@Service
public class DeleteReservationTodayService {

    private final ReservationTodayRepository reservationTodayRepository;

    @Autowired
    public DeleteReservationTodayService(ReservationTodayRepository reservationTodayRepository) {
        this.reservationTodayRepository = reservationTodayRepository;
    }
    @Transactional
    public void deleteReservationToday(Long reservationNum) {
    	reservationTodayRepository.deleteByReservationNum(reservationNum);
    }
}
