import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAddColor]'
})
export class AddColorDirective implements OnInit {
  @Input() appAddColor: string = "";

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.addClass(this.el.nativeElement, `text-${ this.appAddColor }`);
    this.renderer.addClass(this.el.nativeElement, `bg-${ this.appAddColor }-transparent`);
  }
}
