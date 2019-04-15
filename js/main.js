window.maps = [];

$('.new-map').each(function(index, el) {
	var	lat_start = $('.map-wrap').data('lat'),
	lng_start = $('.map-wrap').data('lng'),

	map = new google.maps.Map(el, {
		zoom: 4,
		center: { lat: lat_start, lng: lng_start }
	});
	window.maps.push(map);
	console.log($(this))
});

$(document).ready(function(){

	$('.map-wrap').find('.checkbox_icon').change(function() {
		var $this = $(this),
		$parent = $this.closest('.add-marker');
		if(this.checked) {
			$('select[name="icon"]', $parent).show();
		}else{
			$('select[name="icon"]', $parent).hide();
		}
	});

	$('.add-marker').submit(function(e){
		e.preventDefault();
		var map,
		$this = $(this),
		marker_lat = $this.closest('.map-wrap').find('.lat_number').val(),
		marker_lng = $this.closest('.map-wrap').find('.lng_number').val(),
		marker_title = $this.closest('.map-wrap').find('[name = "title"]').val(),
		index = $this.closest('.map-wrap').find('.new-map').data('index'),
		image,
		animation_checked = $this.closest('.map-wrap').find('.checkbox_animated:checked').length ? animate = google.maps.Animation.DROP : animate = null;

		$this.closest('.map-wrap').find('select[name="icon"]').is(':hidden') ? image = null : image = $this.closest('.map-wrap').find('select[name="icon"] option:selected').val();
		var marker = new google.maps.Marker({
			position: {lat : +marker_lat, lng : +marker_lng},
			map: maps[index],
			title: marker_title,
			animation: animate,
			icon: image,
		});
		marker.setMap(maps[index]);
		maps[index].setCenter(new google.maps.LatLng(+marker_lat, +marker_lng));


		
		console.log($this.closest('.map-wrap').find('select[name="icon"]').prop('selected', false).val());
		
	})


	















})

















// function initMap(pos){
//   var myLatlng = new google.maps.LatLng(pos.coords.latitude,pos.coords.longitude);
//   console.log(myLatlng)
//   var map = new google.maps.Map(document.getElementById('myLocation'),{
//     zoom:10,
//     center: myLatlng
//   });
//   var marker = new google.maps.Marker({
//       position: myLatlng,
//       title:"Hello World!",
//       map:map,
//       customData: function(text){
//         alert(text)
//       },
//   });

//   marker.addListener('click', function(e){
//     this.customData(this.title);
//   });
// }
// $(document).ready(function() {

//   navigator.geolocation.getCurrentPosition(
//     initMap, 
//     function(e){
//       alert('Need GPS');
//       location.reload()
//     }
//   );
// });