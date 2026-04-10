package com.aseemjan.employment_platform.service;

import com.aseemjan.employment_platform.model.JobPostModel;
import com.aseemjan.employment_platform.repository.JobPostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobService {

    @Autowired
    private JobPostRepository repo;

    // Get all jobs
    public List<JobPostModel> getAllJobs() {
        return repo.findAll();
    }

    // Add job
    public JobPostModel addJob(JobPostModel job) {
        return repo.save(job);
    }

    // Search jobs
    public List<JobPostModel> searchJobs(String text) {
        return repo.findByText(text);
    }
}