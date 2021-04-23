class App
{
  flexProperties = [
    'justify-content',
    'align-items',
    'flex-direction',
    'flex-wrap',
  ];
  selectElements = {
    'justify-content': document.getElementById('container-justify-content'),
    'align-items': document.getElementById('container-align-items'),
    'flex-direction': document.getElementById('container-flex-direction'),
    'flex-wrap': document.getElementById('container-flex-wrap'),
  };
  element = undefined;

  constructor()
  {
    this.selectElement(document.getElementById('default-selected'));

    for (let property of this.flexProperties)
    {
      const selectElement = this.selectElements[property];
      selectElement.value = this.getCssProperty(property);
      selectElement.addEventListener('change',
        event => {
          this.setCssProperty(property, selectElement.value)
        }
      );
    }
  }

  selectElement = (element) =>
  {
    if (typeof this.element !== 'undefined')
    {
      this.element.classList.remove('selected');
    }
    element.classList.add('selected');
    this.element = element;
  }

  getCssProperty = (property) =>
  {
    return this.element.style[property];
  }

  setCssProperty = (property, value) =>
  {
    this.element.style[property] = value;
  }
}

let app;
document.addEventListener('DOMContentLoaded', (event) => {
  app = new App();
});
