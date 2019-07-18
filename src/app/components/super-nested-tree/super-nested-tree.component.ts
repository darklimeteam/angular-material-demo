import {NestedTreeControl} from '@angular/cdk/tree';
import {Component} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import { of as observableOf } from 'rxjs';
import { files } from './example-data';

/** File node data with possible child nodes. */
export interface FileNode {
  name: string;
  type: string;
  children?: FileNode[];
}

@Component({
  selector: 'app-super-nested-tree',
  templateUrl: './super-nested-tree.component.html',
  styleUrls: ['./super-nested-tree.component.scss']
})
export class SuperNestedTreeComponent {

  /** The TreeControl controls the expand/collapse state of tree nodes.  */
  treeControl: NestedTreeControl<FileNode>;

  /** The MatTreeFlatDataSource connects the control and flattener to provide data. */
  dataSource: MatTreeNestedDataSource<FileNode>;

  constructor() {
    this.treeControl = new NestedTreeControl(this.getChildren);
    this.dataSource = new MatTreeNestedDataSource();
    this.dataSource.data = files;
  }

  public getChildren = (node: FileNode) => node.children;

  public hasChild = (_: number, node: FileNode) => !!node.children && node.children.length > 0;


  isEmptyFolder(index: number, node: FileNode) {
    return node.type === 'folder';
  }


}
