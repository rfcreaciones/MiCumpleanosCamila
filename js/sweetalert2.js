



Swal.fire({
	// title:'Reserva el Día',
	//text: '',
	html:'<p class="textos-alert-inicio">Claudia Ventura Reyes <br> y<br>J. Alejandro Ensástigue Velazquez</p><br><p class="textos-alert-inicio-T3">Tenemos el honor de invitar a usted y a su apreciable familia al cumpleaños de nuestra hija:</p><br><p class="textos-alert-inicio-T2">Camila Alejandra Ensastigue Ventura</p></div>',
	//icon:'success'
	confirmButtonText:'Abrir Invitación',
	confirmButtonColor: "#cdec06",
	footer:'Te Esperamos, No Faltes!',
	width:'100%',
	allowOutsideClick: false,
	// background: '#fff url(img/fondo2.jpg)',
	
	// background:'rgba(0,0,123,0.4)'
	// imageUrl: 'https://unsplash.it/400/200',

	
}).then((result)=>{
	if(result.isConfirmed){
		
		musica=true;
		audio.play();
		$('.volumen').attr("src","img/no-sound.png");
		$('div').removeClass('visible')
		
		$( "#onload" ).fadeOut(5000);
		$("body").removeClass("hidden");


	}

});





$('#recepcion').click(function () {
	Swal.fire({
		title:'Ubicación de la Recepción ',
		//text: '',
	
		html:'<p>Calle el Arenal S/N Ayapango Estado de México</p><iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1371.7995771926333!2d-98.7939594180679!3d19.12615633045758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scalle%20el%20arenal%20ayapango%20edomx!5e0!3m2!1ses-419!2smx!4v1746141805487!5m2!1ses-419!2smx" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>',
		//icon:'success'
		confirmButtonText:'Cerrar',
		//footer:'Parroquia de Dulce Nombre de Jesus ',
	
	});
	});
	
	$('#liverpool').click(function () {
		Swal.fire({
			title:'Mesa de regalos Liverpool',
			//text: '',
		
			html:'<p>Número de Evento: 12345678<p/><br> <a href="https://mesaderegalos.liverpool.com.mx/eventodebusqueda" target="_blank"> Ir a Liverpool</a>',
			//icon:'success'
			confirmButtonText:'Cerrar',
			confirmButtonColor: "#917c07f1",
			//footer:'Parroquia de Dulce Nombre de Jesus ',
		
		});
	});
	
	$('#transferencia').click(function () {
			Swal.fire({
				title:'Datos para Transferencia',
				//text: '',
			
				html:'<p>Cuenta BBVA<p/><p>Nombre: Nombre de Cuenta<p/><br>Clabe: 0101234567891011',
				//icon:'success'
				confirmButtonText:'Cerrar',
				confirmButtonColor: "#917c07f1",
				//footer:'Parroquia de Dulce Nombre de Jesus ',
			
			});
	});
		
	
