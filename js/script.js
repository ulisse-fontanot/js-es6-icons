$(document).ready(function () {
  const icons = [
      {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
      },
      {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
      },
      {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
      },
      {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
      },
      {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
      },
      {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
      },
      {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
      },
      {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
      },
      {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
      },
      {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
      },
      {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
      },
      {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
      },
      {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
      },
      {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
      },
      {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
      },
      {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
      }
    ];

    const colors = [
      "blue",
      "orange",
      "violet"
    ];

    //TIPO DELLE ICONE
    const iconsType = [];
    icons.forEach((element) =>
    {
      if (!iconsType.includes(element.type)) {
        iconsType.push(element.type);
      }
    });
    console.log(iconsType);

    //ICONE CON COLORE
    const iconsColor = icons.map((element) =>{
      const indexType = iconsType.indexOf(element.type);
      return {
        ...element,
        color: colors[indexType]
      };
    });
    console.log(iconsColor);

    //AGGIUNGO OPZIONI ALLA SELECT
    iconsType.forEach((element) => {
      document.getElementById('scelta').innerHTML +=`
      <option >${element}</option>
      `
    });

    //STAMPO ICONE
    const container = $("main");
    const printIcons = iconsColor.forEach((element) =>{
      const {name, type, color} = element;
      container.append(`
        <div class="icon">
          <i class="fas fa-${name}" style="color: ${color}"></i>
          <div class="title">${name.toUpperCase()}</div>
        </div>
        `);
    });

    //CHANGE
    


});









//
