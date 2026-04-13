package com.aseemjan.employment_platform.service;

import com.aseemjan.employment_platform.model.JobPostModel;
import com.aseemjan.employment_platform.repository.JobPostRepository;
import com.aseemjan.employment_platform.repository.SearchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
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
    @Autowired
    @Qualifier("searchRepoImplements")
    SearchRepository search_repo;
    public List<JobPostModel> searchJobs(String text) {
        return search_repo.findByText(text);
    }
}