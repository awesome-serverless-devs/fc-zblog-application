"use strict";$(function(){$(".help").hover(function(){$(this).next().show();},function(){$(this).next().hide();});$(".tmain .layoutset label").click(function(){$(this).addClass("on").siblings("label").removeClass("on");});$.fn.smartFloat = function(){var position = function(element){var top = element.position().top, pos = element.css("position");$(window).scroll(function(){var scrolls = $(this).scrollTop();if(scrolls > top){if (window.XMLHttpRequest){element.css({position:"fixed",top:0});}else{element.css({top:scrolls});}}else{element.css({position:"absolute",top:top});}});};return $(this).each(function(){position($(this));});};$("aside.left").smartFloat();$(".tmain dd.half:odd").addClass("right");var container = document.createElement('script');$(container).attr('type','text/plain').attr('id','img_editor');$("body").append(container);if (window.UE){var _editor,metasrc,object,input;_editor = UE.getEditor('img_editor',{autoHeightEnabled:false});_editor.ready(function () {_editor.hide();$(".uploadimg").bind('click',function(){metasrc = $(this).parents("p").find(".metasrc");object = $(this).parents("tr").find(".thumbimg");input = $(this).parents("tr").find(".thumbsrc");_editor.getDialog("insertimage").open();_editor.addListener('beforeInsertImage', function (t, arg) {metasrc.attr("value", arg[0].src);object.attr("src", arg[0].src);input.attr("value", arg[0].src);});});$(".uploadfile").bind('click',function(){metasrc = $(this).parents("p").find(".metasrc");input = $(this).parents("tr").find(".thumbsrc");_editor.getDialog("attachment").open();_editor.addListener('afterinsertfile', function (t, arg) {metasrc.attr("value", arg[0].url);input.attr("value", arg[0].url);});});});}(function($){$.fn.hoverDelay = function(options){var defaults = {hoverDuring: 200,outDuring: 200,hoverEvent: function(){$.noop();},outEvent: function(){$.noop();}};var sets = $.extend(defaults,options || {});var hoverTimer, outTimer, that = this;return $(this).each(function(){$(this).hover(function(){clearTimeout(outTimer);hoverTimer = setTimeout(function(){sets.hoverEvent.apply(that)}, sets.hoverDuring);},function(){clearTimeout(hoverTimer);outTimer = setTimeout(function(){sets.outEvent.apply(that)}, sets.outDuring);});});}})(jQuery);$(".togglelabel").click(function(){$(this).parent().toggleClass("on");});$(".ckbox").sortable({revert: true});$(".checkui").click(function(e){if($(this).is('.ui-sortable-helper')) return false;if($(this).hasClass('on')){$(this).removeClass("on");$(this).find("input").val('0');}else{$(this).addClass("on");$(this).find("input").val('1');}});var opt=$("#PostFILTERCATEGORY").val();if(opt=='0'){$(".PostFILTERCATEGORY").parent().show();$(".PostFILTERCATEGORY").attr("name","PostFILTERCATEGORY");}else{$(".PostFILTERCATEGORY").parent().hide();$(".PostFILTERCATEGORY").removeAttr("name");}$("#PostFILTERCATEGORY").change(function(){var opt=$("#PostFILTERCATEGORY").val();if(opt=='0'){$(".PostFILTERCATEGORY").parent().show();$(".PostFILTERCATEGORY").attr("name","PostFILTERCATEGORY");}else{$(".PostFILTERCATEGORY").parent().hide();$(".PostFILTERCATEGORY").removeAttr("name");}});$(".ajaxon .imgcheck").bind("click",function(){if($(this).hasClass('imgcheck-on')){$(".ajaxinfo").hide();}else{$(".ajaxinfo").show();}});$(".seoon .imgcheck").bind("click",function(){if($(this).hasClass('imgcheck-on')){$(".seoinfo").hide();}else{$(".seoinfo").show();}});$(".coloron .imgcheck").bind("click",function(){if($(this).hasClass('imgcheck-on')){$(".colorinfo").hide();}else{$(".colorinfo").show();}});});