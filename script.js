jQuery(function($){
	$(document).ready(function(){

		var fnames = {
			a: 'Toll',
			b: 'Swing',
			c: 'Suspension',
			d: 'Bowstring',
			e: 'Clapper',
			f: 'Covered',
			g: 'Pigtail',
			h: 'Spiral',
			i: 'Pontoon',
			j: 'Roving',
			k: 'Segmental',
			l: 'Ramp',
			m: 'MacPass',
			n: 'Span',
			o: 'Tower',
			p: 'Abutment',
			q: 'Tubular',
			r: 'Truss',
			s: 'Beam',
			t: 'Grinder',
			u: 'Arch',
			v: 'Stinger',
			w: 'Bracing',
			x: 'Trestle',
			y: 'Rod',
			z: 'Crossing'
		}
		var lnames = {
			a: 'Harbour',
			b: 'Sway',
			c: 'Deck',
			d: 'Strut',
			e: 'Cable',
			f: 'Anchor',
			g: 'Tension',
			h: 'Pillar',
			i: 'Vierendeel',
			j: 'Hangar',
			k: 'Gyalpo',
			l: 'Iron',
			m: 'Veranzio',
			n: 'Finley',
			o: 'MacDonald',
			p: 'MacKay',
			q: 'Parabola',
			r: 'Narrows',
			s: 'Commission',
			t: 'Cantilever',
			u: 'Mixture',
			v: '',
			w: '',
			x: '',
			y: '',
			z: ''
		}
		var titles = ['Professor', 'Doctor', 'Colonel', 'Master', 'Miss', 'Emperor', 'Captain', 'Master', 'Professor', 'Doctor'];
		var chars = 'abcdefghijklmnopqrstuvwxyz';
		var chars = 'abc';

		$('#name-form').submit(function(e){
			first = $('#first-name').val().toLowerCase().substr(0,1);
			last = $('#last-name').val().toLowerCase().substr(0,1);
			first_name = fnames[first];
			last_name = lnames[last];
			if(typeof first_name == 'undefined'){
				n = Math.floor(Math.random() * chars.length);
				first = chars.substr(n,1);
				first_name = fnames[first];
			}
			if(typeof last_name == 'undefined'){
				n = Math.floor(Math.random() * chars.length);
				last = chars.substr(n,1);
				last_name = lnames[last];
			}
			var len = $('#first-name').val().length + 1;
			var title = titles[len.toString().substr(0,1)];
			$('#results').html('Your name is: ' + title + ' ' + first_name + ' ' + last_name);
			e.preventDefault();
		});

	});
});