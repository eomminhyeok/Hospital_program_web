package com.example.demo.controller;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration

public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/sign/**") // api/sign/ 경로에 대해서 CORS 설정
                .allowedOrigins("http://localhost:3000") // 리액트 애플리케이션의 도메인을 설정
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowCredentials(true);

        registry.addMapping("/api/search/**") // api/search/ 경로에 대해서 CORS 설정
                .allowedOrigins("http://localhost:3000") // 리액트 애플리케이션의 도메인을 설정
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowCredentials(true);
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**").allowedOrigins("http://localhost:3000");
            }
        };
    }
}
