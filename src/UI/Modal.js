export class Modal {
  constructor(contentId, fallbackText) {
    this.fallbackText = fallbackText;
    this.contentTemplateEl = document.getElementById(contentId);
    this.modalTemplateEl = document.getElementById('modal-template');
  }
  show() {
    if ('content' in document.createElement('template')) {
      const modalElements = document.importNode(
        this.modalTemplateEl.content,
        true
      );
      this.modalElement = modalElements.querySelector('.modal'); // replaced "const" by "this"
      this.backdropElement = modalElements.querySelector('.backdrop'); // replaced "const" by "this"
      const contentElement = document.importNode(
        this.contentTemplateEl.content,
        true
      );

      this.modalElement.appendChild(contentElement);
      // therefore, we need to add "this" here, because these are no longer variables or constants of this method,
      // these are now properties of the class instance.

      document.body.insertAdjacentElement('afterbegin', this.modalElement);
      // therefore, we need to add "this" here, because these are no longer variables or constants of this method,
      // these are now properties of the class instance.
      document.body.insertAdjacentElement('afterbegin', this.backdropElement);
      // therefore, we need to add "this" here, because these are no longer variables or constants of this method,
      // these are now properties of the class instance.
    } else {
      // fallback code
      alert(this.fallbackText);
    }
  }

  /*

  To hide the modal, we basically need to remove the backdropElement and the modalElement from the DOM.
  To remove these elements here, I will store modalElement in a property not in a constant and the same here for backdropElement,
  so that they're are not just constants that are available in the show() method, 
  but properties of the entire Modal class or of the instance we create based on the class to be precise

  */
  hide() {
    if (this.modalElement) {
      document.body.removeChild(this.modalElement); // this.modalElement.remove()
      document.body.removeChild(this.backdropElement);
      this.modalElement = null;
      this.backdropElement = null;
      // I do this to tell Javascript that these properties are cleared
      // and that the references to the DOM elements are no longer needed
      // and can be cleaned up so that we don't have them in memory and create memory leaks
    }
  }
}
