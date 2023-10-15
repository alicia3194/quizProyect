// const playQuiz = [
//   {
//     name: "¿Cuál es la película de terror que presenta a un tiburón gigante que aterroriza a un pueblo costero??",
//     respuestas: ["Los Otros", "Tiburón", "Pesadilla en Elm Street", "Scream"],
//     respuestaCorrecta: "Tiburón",
//   },
//   {
//     name: "¿Cuál es la película de terror en la que un grupo de amigos viaja a una cabaña en el bosque y se enfrenta a amenazas sobrenaturales?",
//     respuestas: [
//       "El Conjuro",
//       "El Exorcista",
//       "El Silencio de los Corderos",
//       "Cabin in the Woods",
//     ],
//     respuestaCorrecta: "Cabin in the Woods",
//   },
//   {
//     name: "En la película Pesadilla en Elm Street, ¿cuál es el nombre del famoso asesino de sueños que acecha a los jóvenes en sus pesadillas?",
//     respuestas: [
//       "Jason Voorhees",
//       "Freddy Krueger",
//       "Michael Myers",
//       "Leatherface",
//     ],
//     respuestaCorrecta: "Freddy Krueger",
//   },
//   {
//     name: "¿Cuál es la película de terror en la que una niña gira la cabeza 360 grados y vomita un líquido verde?",
//     respuestas: [
//       "El Exorcista",
//       "El Conjuro",
//       "La Noche de los Muertos Vivientes",
//       "Saw",
//     ],
//     respuestaCorrecta: "El Exorcista",
//   },
//   {
//     name: "¿Cuál es la película de terror en la que una niña poseída es sometida a un exorcismo por dos sacerdotes?",
//     respuestas: ["Carrie", "The Ring", "El Exorcista", "Annabelle"],
//     respuestaCorrecta: "El Exorcista",
//   },
//   {
//     name: "En la película de terror El Aro, ¿qué sucede cuando alguien ve una misteriosa cinta de video?",
//     respuestas: [
//       "Reciben una llamada telefónica",
//       "Experimentan una muerte violenta en siete días",
//       "Se convierten en zombies",
//       "Obtienen poderes sobrenaturales",
//     ],
//     respuestaCorrecta: "Experimentan una muerte violenta en siete días",
//   },
//   {
//     name: "¿Cuál es la película de terror en la que una familia se muda a una casa encantada en Long Island, Nueva York, y es aterrorizada por fenómenos paranormales?",
//     respuestas: [
//       "Annabelle",
//       "La Llorona",
//       "Amityville Horror",
//       "Actividad Paranormal",
//     ],
//     respuestaCorrecta: "Amityville Horror",
//   },
//   {
//     name: "En la película de terror Scream, ¿cuál es el icónico disfraz que usa el asesino para aterrorizar a sus víctimas?",
//     respuestas: [
//       "Máscara de payaso",
//       "Máscara de lobo",
//       "Máscara de calavera",
//       "Máscara de bruja",
//     ],
//     respuestaCorrecta: "Máscara de calavera",
//   },
//   {
//     name: "¿Cuál es la película de terror en la que un grupo de adolescentes se enfrenta a un asesino enmascarado en un campamento de verano?",
//     respuestas: ["Viernes 13", "Halloween", "Carrie", "The Ring"],
//     respuestaCorrecta: "Halloween",
//   },
//   {
//     name: "En la película de terror Poltergeist, ¿qué objeto se desliza por el suelo y atrae la atención de la niña Carol Anne?",
//     respuestas: [
//       "Una muñeca diabólica",
//       "Una televisión embrujada",
//       "Un árbol aterrador",
//       "Un coche en miniatura",
//     ],
//   },
// ];

document.addEventListener("DOMContentLoaded", function () {
  const questions = [
    { id: "question-1", answer: "2" },
    { id: "question-2", answer: "3" },
    { id: "question-3", answer: "2" },
    { id: "question-4", answer: "1" },
    { id: "question-5", answer: "3" },
    { id: "question-6", answer: "1" },
    { id: "question-7", answer: "2" },
    { id: "question-8", answer: "3" },
    { id: "question-9", answer: "1" },
    { id: "question-10", answer: "4" },
  ];

  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let correctAnswers = 0;
    const correctResponses = [];
    const incorrectResponses = [];

    questions.forEach(function (question) {
      const selectedInput = document.querySelector(
        `#${question.id} input:checked`
      );

      if (selectedInput) {
        const answer = selectedInput.value;

        if (answer === question.answer) {
          correctAnswers++;
          document.querySelector(`#${question.id}`).classList.add("correct");
          correctResponses.push(question);
        } else {
          document.querySelector(`#${question.id}`).classList.add("incorrect");
          incorrectResponses.push(question);
        }
      }
    });

    const resultsDiv = document.querySelector(".results");

    const correctResponsesList = correctResponses.map(function (response) {
      return `<li>${response.id}</li>`;
    });

    const incorrectResponsesList = incorrectResponses.map(function (response) {
      return `<li>${response.id}</li>`;
    });

    resultsDiv.innerHTML = `Has acertado ${correctAnswers} de ${
      questions.length
    }<br><br>Respuestas correctas:<ul>${correctResponsesList.join(
      ""
    )}</ul><br>Respuestas incorrectas:<ul>${incorrectResponsesList.join(
      ""
    )}</ul>`;
  });
});
