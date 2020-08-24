import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";

/**
 * This component is where we specify the top menu paths
 */
@Component({
  selector: "app-top-menu",
  templateUrl: "./top-menu.component.html",
  styleUrls: ["./top-menu.component.css"]
})
export class TopMenuComponent implements OnInit {

  constructor(private location: Location) { }

  /**
   * Navigation links and labels for the menu on the left (LOGO)
   */
  public dashboardLink = {
    label: "OpenEBench",
    path: "oeb"
  };

  /**
   * Navigation links and labels for the menu on the right
   */
  public navLinks: any[];

  ngOnInit() {
    this.navLinks = [
      {
        label: "OpenEBench",
        path: "/oeb"
      },
      {
        label: "Scientific Benchmarking",
        path: "/scientific"
      },
      {
        label: "Technical Monitoring",
        path: "/technical"
      },
      {
        label: "Topics",
        path: "/topics"
      },
      {
        label: "Repositories",
        path: "/repositories"
      },
      {
        label: "APIs",
        path: "/apis"
      }
    ];
  }

  /**
   * Get URL path
   */
  getPath() {
    return this.location.isCurrentPathEqualTo(this.dashboardLink.path);
  }
}
