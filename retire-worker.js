import html from './retire.html';
export default {
  fetch() {
    return new Response(html, {
      headers: { 'Content-Type': 'text/html;charset=UTF-8' }
    });
  }
};
