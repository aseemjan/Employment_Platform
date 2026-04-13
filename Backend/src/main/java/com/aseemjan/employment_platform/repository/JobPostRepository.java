package com.aseemjan.employment_platform.repository;

import com.aseemjan.employment_platform.model.JobPostModel;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface JobPostRepository
        extends MongoRepository<JobPostModel, String>{
   // List<JobPostModel> findByText(String text);
}
