package com.william.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.william.dsmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long>{
	
}
