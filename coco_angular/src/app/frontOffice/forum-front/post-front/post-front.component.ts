import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-front',
  templateUrl: './post-front.component.html',
  styleUrls: ['./post-front.component.css']
})
export class PostFrontComponent implements OnInit {
  postForm!: FormGroup;
  commentsForm!: FormGroup;
  posts!: any[];
  comments: { [postId: number]: any[] } = {};
  postId!: number;
  badWords: string[] = ['fuck', 'badword2', 'badword3'];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.initializeForms();
    this.getAllPosts();
  }

  initializeForms(): void {
    this.postForm = this.fb.group({
      content: ['', [Validators.required, Validators.maxLength(255)]],
    });

    this.commentsForm = this.fb.group({
      content: ['', [Validators.required, Validators.maxLength(255)]],
    });
  }

  addPost(): void {
    if (this.postForm.valid) {
      let postContent = this.postForm.value.content;

      // Filter out bad words
      this.badWords.forEach(word => {
        postContent = postContent.replace(new RegExp(word, 'gi'), '*'.repeat(word.length));
      });

      const apiEndpoint = 'http://localhost:8085/spring2024/api/posts/create';
      window.location.reload();
      this.http.post(apiEndpoint, { description: postContent }).subscribe(
        (data: any) => {
          console.log('Post created successfully:', data);
          this.postForm.reset();
          this.getAllPosts();
        },
        (error) => {
          console.error('Error creating post:', error);
        }
      );
    } else {
      console.log('Invalid form');
    }
  }

  getAllPosts(): void {
    const apiEndpoint = 'http://localhost:8085/spring2024/api/posts/getAll';

    this.http.get(apiEndpoint).subscribe(
      (data: any) => {
        this.posts = data;
      },
      (error) => {
        console.error('Error fetching posts:', error);
      }
    );
  }

  showPostDetails(postId: number): void {
    this.router.navigate(['/post-details', postId]);
  }

  getPostAndComments(postId: number): void {
    this.router.navigate(['/post-comment', postId]);
  }


  upvote(post: any): void {
    const apiEndpoint = `http://localhost:8085/spring2024/api/posts/${post.postId}/upvote`;
    window.location.reload();
    this.http.post(apiEndpoint, {}).subscribe(
      (data: any) => {
        console.log('Upvoted successfully:', data);
        post.upvotes++;
      },
      (error) => {
        console.error('Error upvoting post:', error);
      }
    );
  }

  downvote(post: any): void {
    const apiEndpoint = `http://localhost:8085/spring2024/api/posts/${post.postId}/downvote`;
    window.location.reload();
    this.http.post(apiEndpoint, {}).subscribe(
      (data: any) => {
        console.log('Downvoted successfully:', data);
        post.downvotes++;
      },
      (error) => {
        console.error('Error downvoting post:', error);
      }
    );
  }

  sortedPosts(): any[] {
    if (this.posts && this.posts.length > 0) {
      // Sort the posts array
      return this.posts.sort((a, b) => (b.upvotes - b.downvotes) - (a.upvotes - a.downvotes));
    } else {
      return [];
    }
  }

}
