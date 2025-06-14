import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'my-router',
  styleUrl: '',//['../../global/colors.css', '../../global/fonts.css'],
  shadow: false,
})
export class MyRouter {
  @State() route: string = '';
  @State() params: string = '';

  componentWillLoad() {
    this.setRouteFromUrl();

    window.addEventListener('hashchange', () => {
      
      this.setRouteFromUrl();
    });
  }

  setRouteFromUrl() {
    console.log(window.location)
    // Pega o hash da URL, ex: #/HomePage ou #/NossoAmor
    let pathname = window.location.pathname || '/';
    // Remove o '#' para facilitar o switch
    this.route = pathname; // Exemplo: '/HomePage', '/NossoAmor' ou '/'
    this.params = window.location.search || ''
  }

  render() {
    switch (this.route) {
      case '/':
      case '/HomePage':
        return <my-homepage />;
      case '/NossoAmor':
        return <my-taypage />;
      default:
        return <my-homepage />; // fallback padrão
    }
  }
}
