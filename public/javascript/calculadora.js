const funcionAhorro = () => {
    const formulario = document.getElementById('submit-button')
    formulario.addEventListener('click', (evento) => {
         // previene que el navegador haga cualquier accion con este evento
        evento.preventDefault();
        // Obtenemos todos los ingresos
        var listaingresos = document.getElementsByClassName("seccion-ingreso");
        var ingresosTotales = 0;
        for (var i = 0; i < listaingresos.length; i++) {
            var dato = parseInt(listaingresos[i].value);
            ingresosTotales+=dato;
        }
        // Obtenemos todos los gastos
        var listagastos = document.getElementsByClassName("seccion-gasto");
        var gastosTotales = 0;
        for (var i = 0; i < listagastos.length; i++) {
            var dato = parseInt(listagastos[i].value);
            gastosTotales+=dato;
        }
        const ahorro = parseInt(ingresosTotales)-parseInt(gastosTotales);
        var aho = document.getElementById("ahorro-total");
        aho.innerHTML=`
            <h4>Ahorro total = $${ahorro}</h4>
            <h4>Ahorro del ${ahorro*100/ingresosTotales}% con respecto a su ingreso</h4>
            <h4>Gasto del ${gastosTotales*100/ingresosTotales}% con respecto a su ingreso</h4>
        `;
    })
};
funcionAhorro();


