const datos = {
      scrum: {
        nombre: "Scrum",
        enfoque: "Iterativo e incremental",
        roles: "Scrum Master, Product Owner, Equipo",
        entregas: "Por Sprints (1-4 semanas)",
        adaptacion: "Alta flexibilidad ante cambios"
      },
      kanban: {
        nombre: "Kanban",
        enfoque: "Flujo continuo",
        roles: "Sin roles definidos",
        entregas: "Continuas según flujo",
        adaptacion: "Moderada, depende del equipo"
      },
      xp: {
        nombre: "Extreme Programming (XP)",
        enfoque: "Iterativo enfocado en calidad del código",
        roles: "Desarrolladores, Cliente",
        entregas: "Muy frecuentes, ciclos cortos",
        adaptacion: "Alta, se centra en feedback continuo"
      },
      waterfall: {
        nombre: "Waterfall (Cascada)",
        enfoque: "Secuencial, por fases",
        roles: "Gerente, Analista, Desarrollador, Tester",
        entregas: "Solo al final del proyecto",
        adaptacion: "Baja, pocos cambios permitidos"
      }
    };

    document.getElementById("comparar").addEventListener("click", () => {
      const seleccionadas = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
        .map(el => el.value);

      if (seleccionadas.length < 2) {
        document.getElementById("resultado").innerHTML =
          "<p style='text-align:center; color:red;'>⚠️ Seleccioná al menos dos metodologías para comparar.</p>";
        return;
      }

      let html = "<table><tr><th>Característica</th>";
      seleccionadas.forEach(m => html += `<th>${datos[m].nombre}</th>`);
      html += "</tr>";

      const campos = ["enfoque", "roles", "entregas", "adaptacion"];

      const titulos = {
        enfoque: "Enfoque",
        roles: "Roles",
        entregas: "Entregas",
        adaptacion: "Adaptación a cambios"
      };

      campos.forEach(campo => {
        html += `<tr><td>${titulos[campo]}</td>`;
        seleccionadas.forEach(m => html += `<td>${datos[m][campo]}</td>`);
        html += "</tr>";
      });

      html += "</table>";

      document.getElementById("resultado").innerHTML = html;
    });