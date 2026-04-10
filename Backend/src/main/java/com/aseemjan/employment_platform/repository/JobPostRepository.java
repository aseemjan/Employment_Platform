package com.aseemjan.employment_platform.repository;

import com.aseemjan.employment_platform.model.JobPostModel;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface JobPostRepository
        extends MongoRepository<JobPostModel, String>, SearchRepository {
}
