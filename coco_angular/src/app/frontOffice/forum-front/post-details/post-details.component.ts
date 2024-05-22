// post-details.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
})
export class PostDetailsComponent implements OnInit {

  postId!: number;
  post: any;
  showModificationForm: boolean = false;
  modifiedDescription: string = '';

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.postId = +params['id'];
      this.getPostDetails();
    });
  }

  getPostDetails(): void {
    const apiEndpoint = `http://localhost:8085/spring2024/api/posts/${this.postId}`;

    this.http.get(apiEndpoint).subscribe(
      (data: any) => {
        this.post = data;
      },
      (error) => {
        console.error('Error fetching post details:', error);
      }
    );
  }

  deletePost(postId: number): void {
    const apiEndpoint = `http://localhost:8085/spring2024/api/posts/delete/${postId}`;
    this.http.delete(apiEndpoint).subscribe(()=>this.router.navigateByUrl('/blog'))
    this.router.navigate(['/blog']);

  }


  toggleModificationForm(): void {
    this.showModificationForm = !this.showModificationForm;
    this.modifiedDescription = this.post.description; // Set the initial value to the current description
  }

  modifyPost(): void {
    const apiEndpoint = `http://localhost:8085/spring2024/api/posts/modify/${this.postId}`;
    this.router.navigate(['/blog']);

    this.http.put(apiEndpoint, {description: this.modifiedDescription}).subscribe(
      () => {
        console.log('Post modified successfully');
        this.showModificationForm = false;
        this.getPostDetails(); // Refresh the post details after modifying
      },
      (error) => {
        console.error('Error modifying post:', error);
      }
    );
  }
}
