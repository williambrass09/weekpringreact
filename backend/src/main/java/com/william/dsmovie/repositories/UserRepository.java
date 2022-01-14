package com.william.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.william.dsmovie.entities.User;

public interface UserRepository extends JpaRepository<User, Long>{
	
	User findByEmail(String email);
}
