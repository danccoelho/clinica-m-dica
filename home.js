const translations = {
    pt: {
      nome_usuario: "Nome do usuário",
      titulo: "Hospital Santa Rita",
      label_idioma: "Idioma:",
      especialidade: "Especialidade",
      convenio: "Selecione seu convênio",
      consulta: "Consulta",
      medico: "Médico",
      data: "Data da consulta",
      horario: "Selecione seu horário",
      botao_agendar: "Agendar"
    },
    en: {
      nome_usuario: "User Name",
      titulo: "Santa Rita Hospital",
      label_idioma: "Language:",
      especialidade: "Specialty",
      convenio: "Select your insurance",
      consulta: "Consultation",
      medico: "Doctor",
      data: "Appointment Date",
      horario: "Select your time",
      botao_agendar: "Book"
    },
    de: {
      nome_usuario: "Benutzername",
      titulo: "Santa Rita Krankenhaus",
      label_idioma: "Sprache:",
      especialidade: "Fachrichtung",
      convenio: "Versicherung auswählen",
      consulta: "Beratung",
      medico: "Arzt",
      data: "Termin Datum",
      horario: "Uhrzeit auswählen",
      botao_agendar: "Termin vereinbaren"
    }
  };
  
  function changeLanguage(lang) {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
  }
  