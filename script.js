function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none"; // Oculta todo el contenido de las pestañas
    }
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", ""); // Remueve la clase "active"
    }
    document.getElementById(tabName).style.display = "block"; // Muestra el contenido de la pestaña seleccionada
    evt.currentTarget.className += " active"; // Añade la clase "active" al botón seleccionado
}

// Mostrar por defecto la pestaña "pdf" cuando se cargue la página
document.addEventListener('DOMContentLoaded', function() {

    const correctAnswers = {
        q1: "c", // El asesinato del archiduque Francisco Fernando
        q2: "b", // Aliados: Francia, Reino Unido, Rusia, EE.UU.; Potencias Centrales: Alemania, Austria-Hungría, Imperio Otomano, Bulgaria
        q3: "a", // Nacionalismo, militarismo, imperialismo y alianzas
        q4: "c", // Guerra de trincheras
        q5: "a", // Tratado de Versalles; sancionó duramente a Alemania
        q6: "b", // Crisis económica y devastación en muchos países europeos
        q7: "c", // Porque generaron resentimiento en Alemania, facilitando el ascenso del nazismo
        q8: "c", // Alemania, Italia y Japón
        q9: "a", // Inició la Guerra Fría
        q10: "c" // La ONU
        
    };

    document.getElementById("examForm").addEventListener("submit", function(e) {
        e.preventDefault();

        let name = document.getElementById("nombre").value;
        let email = document.getElementById("email").value;
        let totalQuestions = Object.keys(correctAnswers).length;
        let correctCount = 0;
        let incorrectCount = 0;

        let resultMessage = `Nombre: ${name}\nCorreo: ${email}\n\nResultados:\n`;

        // Check each answer
        for (let i = 1; i <= totalQuestions; i++) {
            let questionName = "q" + i;
            let userAnswer = document.querySelector(`input[name="${questionName}"]:checked`);
            
            if (userAnswer) {
                if (userAnswer.value === correctAnswers[questionName]) {
                    correctCount++;
                    resultMessage += `Pregunta ${i}: Correcta\n`;
                } else {
                    incorrectCount++;
                    resultMessage += `Pregunta ${i}: Incorrecta (Tu respuesta: ${userAnswer.value.toUpperCase()})\n`;
                }
            }
        }

        resultMessage += `\nCorrectas: ${correctCount} de ${totalQuestions}`;
        alert(resultMessage);
    });
});

