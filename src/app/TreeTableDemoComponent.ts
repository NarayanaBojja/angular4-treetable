import { Component,OnInit } from '@angular/core';
import {TreeNode,Message} from 'primeng/primeng';
import {NodeService} from './NodeService';

@Component({
  selector: 'tree-table',
  templateUrl: './TreeTableDemoComponent.html',
})
export class TreeTableDemoComponent implements OnInit {
     msgs: Message[];

    files: TreeNode[];
  selectedFile2: TreeNode;

    constructor(private nodeService: NodeService) {}
    
    ngOnInit() {
        this.nodeService.getFilesystem().then(files => {
            
            this.files = files[0].data;

        });
    }

      nodeSelect(event) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Node Selected', detail: event.node.data.name});
         console.log( event.node);
     

    }


}