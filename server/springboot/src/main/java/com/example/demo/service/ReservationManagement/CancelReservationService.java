package com.example.demo.service.ReservationManagement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.support.TransactionSynchronization;
import org.springframework.transaction.support.TransactionSynchronizationManager;
import com.example.demo.repository.ReservationRepository;

@Service
public class CancelReservationService {

    @Autowired
    private ReservationRepository reservationRepository;

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Transactional
    public void cancelReservation(Long reservationNum) {
        reservationRepository.deleteByReservationNum(reservationNum);

        TransactionSynchronizationManager.registerSynchronization(new TransactionSynchronization() {
            @Override
            public void afterCommit() {
                jdbcTemplate.execute("CALL REFRESH_RESERVATION_TODAY()");
            }

            @Override
            public void suspend() {
            }

            @Override
            public void resume() {
            }

            @Override
            public void flush() {
            }

            @Override
            public void beforeCommit(boolean readOnly) {
            }

            @Override
            public void beforeCompletion() {
            }

            @Override
            public void afterCompletion(int status) {
            }
        });
    }
}
