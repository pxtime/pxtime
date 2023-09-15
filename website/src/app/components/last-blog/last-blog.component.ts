import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-last-blog',
  templateUrl: './last-blog.component.html',
  styleUrls: ['./last-blog.component.scss']
})
export class LastBlogComponent implements OnInit {

  public lastPageItems !: Array<any>

  constructor(private http:HttpClient) { }

  public getLast3Posts(): Observable<Array<{}>> {
    const url = 'https://pixeltime.ro/wp/wp-json/wp/v2/posts?per_page=3';
    return this.http.get<Array<{}>>(url);
  }

  ngOnInit() {
    this.getLast3Posts().subscribe(data => {
      this.lastPageItems = data
    })
  }
}
