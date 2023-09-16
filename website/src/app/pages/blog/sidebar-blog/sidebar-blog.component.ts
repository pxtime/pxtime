import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-sidebar-blog',
  templateUrl: './sidebar-blog.component.html',
  styleUrls: ['./sidebar-blog.component.scss']
})
export class SidebarBlogComponent implements OnInit {

  public lastItems !: Array<any>
  constructor(private http:HttpClient) { }

  public getLast5Posts(): Observable<Array<{}>> {
    const url = 'https://pixeltime.ro/wp/wp-json/wp/v2/posts?per_page=5';
    return this.http.get<Array<{}>>(url);
  }
  ngOnInit() {
    this.getLast5Posts().subscribe(data => {
      this.lastItems = data
    })
  }

}
