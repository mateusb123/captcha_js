function func() {
    var checkbox = document.getElementById('check');

    if(checkbox.checked) {
        var demo = document.getElementById('demo');
        const btnV = document.getElementById('button');

        demo.style.display = 'block'

        if(btnV) {}
        else {
            var randomNum = Math.floor(Math.random() * 9) + 1;
            
            const h2 = document.createElement('h2');
            h2.textContent = `click em ${randomNum} checkbox`;
            demo.appendChild(h2);

            clickBox = 0;

            for(var i = 1;i <= 9;i++) {
                const check = document.createElement('input');
                check.className = 'checkbox';
                check.type = 'checkbox';
                demo.appendChild(check);
            }

            const btn = document.createElement('button')
            btn.textContent = "verificar";
            btn.id = 'button';
            demo.appendChild(btn);

            document.getElementById('button').addEventListener('click', function(){
                const c = document.querySelectorAll('.checkbox');
                c.forEach(function(el) {
                    if(el.checked) {
                        clickBox++;
                    }
                });
                if(clickBox == randomNum){
                    window.alert("parabens!");
                    window.location.reload(true);
                }
                else {
                    alert('Voce Errou tente novamente!');
                    window.location.reload(true);
                }
            });
        }
    }
}