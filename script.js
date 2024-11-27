const questions = {
    start: {
        text: "¿Es perro o gato?",
        options: [
            { text: "Sí", next: "perro_gato_signos" },
            { text: "No", next: "Mamifero" },
        ],
    },
    perro_gato_signos: {
        text: "¿El perro o gato tiene signos (Comportamiento anormal del animal que pueda representar enfermedad), muerto?",
        options: [
            { text: "Sí", next: "exposicion_grave" },
            { text: "No", next: "observable" },
        ],
    },
    Mamifero:{
        text: "Es otro mamifero?",
        options: [
            {text: "Sí", next:"raton_rata_ardilla"},
            {text: "No", next:"No_hace_parte_aptr"},
        ],
    },
    raton_rata_ardilla: {
        text: "¿Es ratón, rata o ardilla?",
        options: [
            { text: "Sí", next: "No_hace_parte_aptr" },
            { text: "No", next: "exposicion_grave" },
        ],
    },
    observable: {
        text: "¿Es observable?",
        options: [
            { text: "Sí", next: "no_exposicion" },
            { text: "No", next: "lesion_cabeza" },
        ],
    },
    lesion_cabeza: {
        text: "¿La lesión está en cabeza, cara, cuello, dedos, manos, pies o genitales?",
        options: [
            { text: "Sí", next: "exposicion_grave" },
            { text: "No", next: "lesion_unica" },
        ],
    },
    lesion_profunda: {
        text: "¿La lesión es profunda (atraviesa tejido subcutáneo o requiere sutura)?",
        options: [
            { text: "Sí", next: "exposicion_grave" },
            { text: "No", next: "exposicion_leve" },
        ],
    },
    lesion_unica: {
        text: "¿La lesión es única (Cuando el animal agrede solo una vez, solo una intención)?",
        options: [
            { text: "Sí", next: "lesion_profunda" },
            { text: "No", next: "exposicion_grave" },
        ],
    },
    exposicion_grave: {
        text: "Clasificación: Exposición Grave. Vacunación antirrábica esquema post-exposición e inmunoglobulina antirrábica.",
        options: [],
    },
    exposicion_leve: {
        text: "Clasificación: Exposición Leve. Vacunación antirrábica post-exposición recomendada.",
        options: [],
    },
    no_exposicion: {
        text: "Clasificación: No exposición. Remitir cha de noticación de manera inmediata a salud ambiental para la observación del perro gato por mínimo 10 días.",
        options: [
            {text: "Siguiente", next: "no_exposicion_sig"}
        ],
    },
    No_hace_parte_aptr: {
        text:"No hace parte de la Vigilancia de APTR",
        options:[],  
    },

    no_exposicion_sig: {
        text: "Si el perro o gato durante el periodo de observación FALLECE O presenta SIGNOS compatibles con rabia, el paciente deberá ser reclasicado como exposición grave e iniciar esquema post-exposición antirrábica",
    },
};

function nextQuestion(key) {
    const question = questions[key];

    // Mostrar texto de la pregunta
    document.getElementById("question-text").textContent = question.text;

    // Crear botones para las opciones
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    question.options.forEach((option) => {
        const button = document.createElement("button");
        button.textContent = option.text;
        button.onclick = () => nextQuestion(option.next);
        optionsContainer.appendChild(button);
    });
}
