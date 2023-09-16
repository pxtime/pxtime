import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {PostInterface} from "../../../interfaces/post.interface";



@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['../blog.component.scss']
})

export class SingleBlogComponent implements OnInit {

  public post !: PostInterface

  constructor(private http:HttpClient ,  private _route: ActivatedRoute,) { }

  public getPost(id:string): Observable<PostInterface> {
    const url = `https://pixeltime.ro/wp/wp-json/wp/v2/posts/${id}`;
    return this.http.get<PostInterface>(url);
  }

  ngOnInit() {
    this._route.paramMap.subscribe({
      next: (params: ParamMap) => {
        const id: string | null = params.get('id');
        if(!id){
          return;
        }
        this.getPost(id).subscribe(data => {
          this.post = data
        })
      }
    })
  }
}
