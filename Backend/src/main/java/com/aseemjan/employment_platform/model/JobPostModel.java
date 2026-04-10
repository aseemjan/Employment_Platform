package com.aseemjan.employment_platform.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Arrays;

@Document(collection = "job_posts")
@Data
public class JobPostModel {

    @Id
    private String id;
    private String profile;
    private String desc;
    private int exp;
    private String[] techs;

}
