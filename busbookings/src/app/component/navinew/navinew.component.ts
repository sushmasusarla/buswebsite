import { Component } from '@angular/core';

@Component({
  selector: 'app-navinew',
  templateUrl: './navinew.component.html',
  styleUrls: ['./navinew.component.css']
})
export class NavinewComponent {

  navbarData = {
    "navbar": [
      {
        "label": "Home",
        "link": "/"
      },
      {
        "label": "About Us",
        "link": "/about"
      },
      {
        "label": "Services",
        "link": "/services",
        "dropdown": [
          {
            "label": "Web Development",
            "link": "/services/web-development"
          },
          {
            "label": "Mobile App Development",
            "link": "/services/mobile-app-development"
          },
          {
            "label": "UI/UX Design",
            "link": "/services/ui-ux-design"
          }
        ]
      },
      {
        "label": "Contact",
        "link": "/contact"
      }
    ]
  };

}
