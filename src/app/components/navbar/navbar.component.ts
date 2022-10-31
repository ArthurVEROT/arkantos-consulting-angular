import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  scrolled: boolean = false;
  @ViewChild('menuTop') menuTop!: ElementRef;
  @ViewChild('menuBottom') menuBottom!: ElementRef;
  @ViewChild('menuMiddle') menuMiddle!: ElementRef;
  @ViewChild('mobileNavbar') mobileNavbar!: ElementRef;

  ngOnInit(): void {
    document.addEventListener('scroll', (e) => {
      this.scroll();
    });
  }

  scroll() {
    let lastKnownScrollPosition: number = 0;
    lastKnownScrollPosition = window.scrollY;

    if (lastKnownScrollPosition > 30) {
      window.requestAnimationFrame(() => {
        this.scrolled = true;
      });
    } else {
      window.requestAnimationFrame(() => {
        this.scrolled = false;
      });
    }
  }

  openMenu() {
    this.menuTop.nativeElement.classList.toggle('menu-top-click');
    this.menuMiddle.nativeElement.classList.toggle('menu-middle-click');
    this.menuBottom.nativeElement.classList.toggle('menu-bottom-click');
    this.mobileNavbar.nativeElement.classList.toggle('unvisible');
    setTimeout(() => {
      this.scrolled ? (this.scrolled = false) : (this.scrolled = true);
    }, 400);
  }
}
