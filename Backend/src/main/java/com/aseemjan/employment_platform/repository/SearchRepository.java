package com.aseemjan.employment_platform.repository;

import com.aseemjan.employment_platform.model.JobPostModel;

import java.util.List;

public interface SearchRepository {
    List<JobPostModel> findByText(String text);
}