package com.aseemjan.employment_platform.controller;

import com.aseemjan.employment_platform.repository.JobPostRepository;
import com.aseemjan.employment_platform.repository.SearchRepository;
import com.aseemjan.employment_platform.model.JobPostModel;

import jakarta.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import io.swagger.v3.oas.annotations.Hidden;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class JobPostController {

    @Autowired
    JobPostRepository repo;

    @Autowired
    @Qualifier("searchRepoImplements")
    SearchRepository search_repo;

    @Hidden
    @RequestMapping(value = "/")
    public void redirect(HttpServletResponse response) throws IOException {
        response.sendRedirect("/swagger-ui.html");
    }

    @GetMapping("/job-posts")
    public List<JobPostModel> getAllJobPosts(){
        return repo.findAll();
    }

    @GetMapping("/job-posts/{text}")
    public List<JobPostModel> search(@PathVariable String text){
        return search_repo.findByText(text);
    }

    @PostMapping("/create-job-post")
    public JobPostModel createJobPost(@RequestBody JobPostModel job_post){
        return repo.save(job_post);
    }
}