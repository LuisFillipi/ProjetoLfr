function validateForm(event) {
    event.preventDefault();
  
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    if (password.length >= 4) {
      window.location.href = "exames.html";
    } else {
      alert("A senha deve ter mais de 3 caracteres.");
    }
  }

  function showPatientInfo(patientId) {
    var patientInfo = getPatientInfo(patientId);
    var patientInfoHtml = `
      <h2>Informações do Paciente</h2>
      <p>Nome: ${patientInfo.name}</p> 
      <p>Idade: ${patientInfo.age}</p>
      Cidade: ${patientInfo.city}
    ,Gênero: ${patientInfo.gender}
    ,Data de Nascimento: ${patientInfo.birthdate}
    ,Tipo Sanguíneo: ${patientInfo.bloodType}
    ,Alergia: ${patientInfo.allergy}
      <p>CPF: ${patientInfo.cpf}</p>
      <p>CEP: ${patientInfo.cep}</p>
      <img src="${patientInfo.examPhoto}" alt="Exame" style="width: 100%; max-width: 300px;">
    `;
    document.getElementById('patient-info').innerHTML = patientInfoHtml;
}

function getPatientInfo(patientId) {
    if (patientId === 'paciente1') {
        return {
            name: 'Neymar Jr', age: 32, city: 'São Paulo',
            gender: 'Masculino', birthdate: '05/02/1992', bloodType: 'O+',
            allergy: 'Amar demais', cpf: '123.456.789-00', cep: '01234-567',
            examPhoto: './imagens/doenças.jpg',
        };
    } else if (patientId === 'paciente2') {
        return {
            name: 'Bruna Marquezine',
            age: 28,
            city: 'Rio de Janeiro',
            gender: 'Feminino',
            birthdate: '04/08/1995',
            bloodType: 'A-',
            allergy: 'Penicilina',
            cpf: '987.654.321-00',
            cep: '21000-000',
            examPhoto: './imagens/doença.jpg',
        };
    }
}

  