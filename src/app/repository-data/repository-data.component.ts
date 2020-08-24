import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Repository } from "../model/Repository";

import { RepositoryService } from "../services/repository.service";

import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-repository-data",
  templateUrl: "./repository-data.component.html",
  styleUrls: ["./repository-data.component.css"],
})
export class RepositoryDataComponent implements OnInit {
  //attributes
  repo: Repository;

  constructor(
    private repoService: RepositoryService,
    private route: ActivatedRoute,
    //public dialogRef: MatDialogRef<RepositoryDataComponent>,
    //@Inject(MAT_DIALOG_DATA) private data: any
  ) { }

  ngOnInit(): void {
    //this.viewRepoData(this.getParam("name"));
    this.viewRepoData("elixibilitas");
  }

  /**
   * Get param from url
   */
  public getParam(param: string): string {
    return this.route.snapshot.paramMap.get(param);
  }

  viewRepoData(name: string) {
    this.repoService.getRepoDataByName(name).subscribe((data) => {
      this.repo = data;
    });
  }
}
