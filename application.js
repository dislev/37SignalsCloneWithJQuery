/**
 * @author Soundwave
 */

$(document).ready(function(){
	
	$('.imagePanel:nth-child(1)').hover(function() {HeadLineInnerText('<h1><span>Basecamp</span> is the project management tool you wish you had on your last project.</h1>', 
		'<p>Are you still managing projects with email? Are you still using Excel for your to-do lists? It’s time to upgrade to Basecamp. '+
		'Manage projects and collaborate with your team and clients the modern way.</p>', 1);}, function() {DefaultHeadLine(1);});
	$('.imagePanel:nth-child(2)').hover(function() {HeadLineInnerText('<h1><span>Highrise</span> remembers the important things about people you&apos;d normally forget.<h1>',
		'<p>Keep a permanent record of people you do business with. Know who you talked to, when you talked to' + 
		'them, what was said, and when to follow up next. Over 20,000,000 contacts are tracked using Highrise.</p>', 2);}, function() {DefaultHeadLine(2);});
	$('.imagePanel:nth-child(3)').hover(function() {HeadLineInnerText('<h1>From near or far, <span>Campfire</span> helps teams work together over the web in real-time.<h1>',
		'<p>Share ideas, discussions, concepts, images, code samples, videos, mockups, and documents in a real-time private'+
		' chat room. It’s game changing. We couldn\'t run our own business without Campfire.</p>', 3);}, function() {DefaultHeadLine(3);});
		
	$('.arrow').hide();
		
	function HeadLineInnerText(h1Inner, pInner, n){
		$('#headline h1').html(h1Inner);
		$('#headline h5').html(pInner);
		$('#headline h1').css({'font-size': '46px', 'letter-spacing': '-1px'});
	};
	
	function DefaultHeadLine(n){
		HeadLineInnerText('<h1>Making collaboration productive and enjoyable for people every day.</h1>',
		'<h5>Frustration-free web-based apps for collaboration, sharing information, and making decisions.</h5>');
		
		$('#headline h1').css({'font-size': '58px', 'letter-spacing': '-2px'});
	};
	
	$('.imagePanel:nth-child(1)').hover(function(){
		$(this).find('.arrow').toggle();
	});
	
	$('.imagePanel:nth-child(2)').hover(function(){
		$(this).find('.arrow').toggle();
	});
	
	$('.imagePanel:nth-child(3)').hover(function(){
		$(this).find('.arrow').toggle();
	});
});
