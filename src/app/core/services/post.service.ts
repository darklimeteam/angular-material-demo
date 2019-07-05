import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Post } from '../models/post.model';


@Injectable()
export class PostService {

    constructor(private http: HttpClient) {
    }

    search(term: string): Observable<Post[]> {
        return this.http
            .get(`api/posts/?title=${term}`).pipe(
                map(response => response as Post[])
            );
    }

    getPostList(): Observable<Post[]> {
        return this.http
            .get(`api/posts`).pipe(
                map(response => response as Post[])
            );
    }

}
