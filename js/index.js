// JavaScript Document
$(document).ready(function(){
	$('.left-nav ul li').click(function(){
		$('.left-nav ul li').removeClass('active');
		$('.la-nav').hide()
		$(this).addClass('active');	
		$(this).children('.la-nav').show();
	});
	$('.left-nav ul li .abtn').click(function(){
		$('.left-nav ul li .abtn').removeClass('active1');
		$('.left-nav ul li div p').hide()
		$(this).addClass('active1');	
		$(this).next('.left-nav ul li div p').show();
	});

	var oUl = document.getElementById('ul-box');
	var aLi = oUl.getElementsByTagName('li');
	var oPrev = document.getElementById('prev');
	var oNext = document.getElementById('next');
	//保存当前的位置
	var now=0;
	
	oPrev.onclick=function(){
		if(now>0){
			now--;
		}else{
			now=aLi.length-1;	
		}
		for(var i=0;i<aLi.length;i++){
			aLi[i].className='';
		}
		aLi[now].className='active';	
	};
	
	oNext.onclick=next;
	function next(){
		if(now<aLi.length-1){
			now++;
		}else{
			now=0;	
		}
		
		for(var i=0;i<aLi.length;i++){
			aLi[i].className='';
		}
		aLi[now].className='active';	
	};
});