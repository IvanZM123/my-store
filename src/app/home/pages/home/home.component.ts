import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  items = [
    {
      title: "Visualiza nuestros clientes",
      subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      image: "https://png.pngtree.com/png-vector/20190721/ourlarge/pngtree-business-meeting-with-client-illustration-concept-modern-flat-design-concept-png-image_1567633.jpg",
      color: "aqua"
    },
    {
      title: "Encuentra tus productos",
      subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      image: "https://res.cloudinary.com/dte7upwcr/image/upload/blog/blog2/guia-para-ecommerce/image_0-guia-basica-para-ecommerce.png",
      color: "primary"
    },
    {
      title: "Hecha un vistazo a los pedidos",
      subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1621025103/assets/58/fed8fc-73e7-428e-a68c-802887085104/original/hero_manage_orders_3x2_2x.png",
      color: "skin"
    }
  ];
}
