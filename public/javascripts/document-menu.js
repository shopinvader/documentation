$(document).ready(function () {
	$container = $('.documentation-content');
	$('.doc-menu').append($('<div>').addClass('pl-2'));
	$menu = $('.doc-menu');
	console.log($menu);
	
	if($container.length > 0) {
		console.log($menu.html());
		var menu = [];
		var latest_level = [];
		$container.find('h1, h2, h3').each(function(i, title) {
			$title = $(title);
			$title.attr('id', 'title-'+i);
			var $link = $('<a>').html($title.html()).addClass('text-dark').attr('href', '#title-'+i);
			$menu_item = $('<div>').addClass('title-'+($title[0].tagName.substring(1)));
			$menu_item.append($link);
			$menu.append($menu_item);
		});
	}
});

$(document).ready(function () {
	$('.documentation-content a').each(function(i, element){
		link_url = new URL($(element).attr('href'));
		page_url = new URL(document.location);
		console.log(link_url);
		if(link_url.host != page_url.host) {
			$(element).attr('target', '_blank');
			$(element).addClass('external');
			//$(element).html($(element).html()+ '  <span class="small"><i class="fas fa-external-link-alt "></i></span>');
		}
	});
	$('code').each(function(i, element){
		var lines = $(element).html().split('\n');
		console.log(lines.length, lines);
		if(lines.length > 1){
			$(this).addClass('multiline');
			
		}
		else {
			$(this).addClass('inline');
		}
		hljs.highlightBlock($(element)[0]);
	});
});	