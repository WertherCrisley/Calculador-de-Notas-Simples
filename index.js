  function calculo() {
            let mat1 = document.getElementById('Matematica1').value
            let mat2 = document.getElementById('Matematica2').value
            let mat3 = document.getElementById('Matematica3').value
            let mat4 = document.getElementById('Matematica4').value
            let port1 = document.getElementById('Portugues1').value
            let port2 = document.getElementById('Portugues2').value
            let port3 = document.getElementById('Portugues3').value
            let port4 = document.getElementById('Portugues4').value
            let geo1 = document.getElementById('Geografia1').value
            let geo2 = document.getElementById('Geografia2').value
            let geo3 = document.getElementById('Geografia3').value
            let geo4 = document.getElementById('Geografia4').value

            let btnClicado = document.querySelector('button')
            btnClicado.classList.add('clicado')
            setTimeout(() => btnClicado.classList.remove('clicado'), 150)

            const todasNotas = [mat1, mat2, mat3, mat4, port1, port2, port3, port4, geo1, geo2, geo3, geo4]
            if (todasNotas.some(nota => nota === '')) {
                alert('O campo não pode estar vazio!!')
                return
            }

            let calculoMat = Number(mat1) + Number(mat2) + Number(mat3) + Number(mat4)
            let calculoPort = Number(port1) + Number(port2) + Number(port3) + Number(port4)
            let calculoGeo = Number(geo1) + Number(geo2) + Number(geo3) + Number(geo4)

            if (calculoMat >= 24) {
                let AprovadoMat = document.createElement('span');
                AprovadoMat.className = 'aprovado';
                AprovadoMat.innerText = 'Aprovado'

                let matStatus = document.querySelector('#FinalMat')
                matStatus.appendChild(AprovadoMat)
            } else {
                let ReprovadoMat = document.createElement('span');
                ReprovadoMat.className = 'reprovado';
                ReprovadoMat.innerText = 'Reprovado'
                let matStatusR = document.querySelector('#FinalMat')
                matStatusR.appendChild(ReprovadoMat)
            }


            if (calculoPort >= 24) {
                let AprovadoP = document.createElement('span');
                AprovadoP.className = 'aprovado';
                AprovadoP.innerText = 'Aprovado'

                let PortStatus = document.querySelector('#FinalPort')
                PortStatus.appendChild(AprovadoP)
            } else {
                let ReprovadoP = document.createElement('span');
                ReprovadoP.className = 'reprovado';
                ReprovadoP.innerText = 'Reprovado'

                let PortStatusR = document.querySelector('#FinalPort')
                PortStatusR.appendChild(ReprovadoP)
            }

            if (calculoGeo >= 24) {
                let AprovadoG = document.createElement('span');
                AprovadoG.className = 'aprovado';
                AprovadoG.innerText = 'Aprovado'

                let GeoStatus = document.querySelector('#FinalGeo')
                GeoStatus.appendChild(AprovadoG)
            } else {
                let ReprovadoG = document.createElement('span');
                ReprovadoG.className = 'reprovado';
                ReprovadoG.innerText = 'Reprovado'

                let GeoStatusR = document.querySelector('#FinalGeo')
                GeoStatusR.appendChild(ReprovadoG)
            }




        }
        //falta corrigir erro de duplicação ao clicar no botão
        //e aprimorar o alert
        //e deixar responsivo
        //Testar esse codigo
        //  matStatus.innerHTML = `Matemática: <span class="${calculoMat >= 24 ? 'aprovado' : 'reprovado'}">${calculoMat >= 24 ? 'Aprovado' : 'Reprovado'}</span>`
        //     portStatus.innerHTML = `Português: <span class="${calculoPort >= 24 ? 'aprovado' : 'reprovado'}">${calculoPort >= 24 ? 'Aprovado' : 'Reprovado'}</span>`
        //     geoStatus.innerHTML = `Geografia: <span class="${calculoGeo >= 24 ? 'aprovado' : 'reprovado'}">${calculoGeo >= 24 ? 'Aprovado' : 'Reprovado'}</span>`