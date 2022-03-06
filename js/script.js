$('button').click(function() {
	let data = $('#data').val()
	let nasa = ('https://api.nasa.gov/planetary/apod?api_key=XcnKFbtEzAwsvR57TJ3WOUl6JnZJx474wIp8Uqvs&date=' + data);

	$.ajax({
		url:nasa,
		success: function(req) {
			console.log(req)
			let titulo = req['title']
			let imagem = req['hdurl']
			let video = req['url']  
			
			$('.bloco-api').show()
			$('.bloco-api').css('display','flex')
			$('.titulo').text(titulo)
			
			if (req.media_type == 'image') {
				$('.img').attr('src', imagem)
				$('.img').show()
				$('.vid').hide()
			} else {
				$('.vid').attr('src', video)
				$('vid').css('display','block')
				$('.vid').show()
				$('.img').hide()
			}
		},
		
		error: function(erro) {
			console.log(erro);
		}
	})
})