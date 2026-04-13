import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
});

export const fetchJobs = () => api.get('/job-posts');
export const searchJobs = (text) => api.get(`/job-posts/${text}`);
export const createJobPost = (job) => api.post('/create-job-post', job);