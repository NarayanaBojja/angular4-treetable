import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {TreeNode} from 'primeng/primeng';


@Injectable()
export class NodeService {
     private dataUrl = 'app/data';

    constructor(private http: Http) {}

    getFilesystem() {
        return this.http.get(this.dataUrl).toPromise()
                    .then(res => <TreeNode[]> res.json().data);
    }

}
