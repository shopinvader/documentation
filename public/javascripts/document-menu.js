$(document).ready(function () {
	$container = $('.documentation-content');
	$('.doc-menu').append($('<ul>').addClass('list-group pl-2'));
	$menu = $('.doc-menu ul');
	console.log($menu);
	
	if($container.length > 0) {
		console.log($menu.html());
		var menu = [];
		var latest_level = [];
		$container.find('h1, h2, h3').each(function(i, title) {
			$title = $(title);
			$title.attr('id', 'title-'+i);
			var $link = $('<a>').html($title.html()).addClass('text-dark').attr('href', '#title-'+i);
			var title_level = $title[0].tagName.substring(1);
			$menu_item = $('<li>').addClass('list-group-item border-0 pt-1 pb-1').addClass('pl-'+(title_level*2));
			$menu_item.append($link);
			$menu.append($menu_item);
		});
	}
});