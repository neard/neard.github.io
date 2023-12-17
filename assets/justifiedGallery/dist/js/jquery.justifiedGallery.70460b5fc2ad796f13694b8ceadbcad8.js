!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof module&&module.exports?module.exports=function(i,e){return void 0===e&&(e="undefined"!=typeof window?require("jquery"):require("jquery")(i)),t(e),e}:t(jQuery)}(function(t){function i(){return t("body").height()>t(window).height()}var e=function(i,e){this.settings=e,this.checkSettings(),this.imgAnalyzerTimeout=null,this.entries=null,this.buildingRow={entriesBuff:[],width:0,height:0,aspectRatio:0},this.lastFetchedEntry=null,this.lastAnalyzedIndex=-1,this.yield={every:2,flushed:0},this.border=e.border>=0?e.border:e.margins,this.maxRowHeight=this.retrieveMaxRowHeight(),this.suffixRanges=this.retrieveSuffixRanges(),this.offY=this.border,this.rows=0,this.spinner={phase:0,timeSlot:150,$el:t('<div class="spinner"><span></span><span></span><span></span></div>'),intervalId:null},this.scrollBarOn=!1,this.checkWidthIntervalId=null,this.galleryWidth=i.width(),this.$gallery=i};e.prototype.getSuffix=function(t,i){var e,s;for(e=t>i?t:i,s=0;s<this.suffixRanges.length;s++)if(e<=this.suffixRanges[s])return this.settings.sizeRangeSuffixes[this.suffixRanges[s]];return this.settings.sizeRangeSuffixes[this.suffixRanges[s-1]]},e.prototype.removeSuffix=function(t,i){return t.substring(0,t.length-i.length)},e.prototype.endsWith=function(t,i){return-1!==t.indexOf(i,t.length-i.length)},e.prototype.getUsedSuffix=function(t){for(var i in this.settings.sizeRangeSuffixes)if(this.settings.sizeRangeSuffixes.hasOwnProperty(i)){if(0===this.settings.sizeRangeSuffixes[i].length)continue;if(this.endsWith(t,this.settings.sizeRangeSuffixes[i]))return this.settings.sizeRangeSuffixes[i]}return""},e.prototype.newSrc=function(t,i,e,s){var n;if(this.settings.thumbnailPath)n=this.settings.thumbnailPath(t,i,e,s);else{var r=t.match(this.settings.extension),o=null!==r?r[0]:"";n=t.replace(this.settings.extension,""),n=this.removeSuffix(n,this.getUsedSuffix(n)),n+=this.getSuffix(i,e)+o}return n},e.prototype.showImg=function(t,i){this.settings.cssAnimation?(t.addClass("entry-visible"),i&&i()):(t.stop().fadeTo(this.settings.imagesAnimationDuration,1,i),t.find(this.settings.imgSelector).stop().fadeTo(this.settings.imagesAnimationDuration,1,i))},e.prototype.extractImgSrcFromImage=function(t){var i=void 0!==t.data("safe-src")?t.data("safe-src"):t.attr("src");return t.data("jg.originalSrc",i),i},e.prototype.imgFromEntry=function(t){var i=t.find(this.settings.imgSelector);return 0===i.length?null:i},e.prototype.captionFromEntry=function(t){var i=t.find("> .caption");return 0===i.length?null:i},e.prototype.displayEntry=function(i,e,s,n,r,o){i.width(n),i.height(o),i.css("top",s),i.css("left",e);var a=this.imgFromEntry(i);if(null!==a){a.css("width",n),a.css("height",r),a.css("margin-left",-n/2),a.css("margin-top",-r/2);var h=a.attr("src"),l=this.newSrc(h,n,r,a[0]);a.one("error",function(){a.attr("src",a.data("jg.originalSrc"))});var g=function(){h!==l&&a.attr("src",l)};"skipped"===i.data("jg.loaded")?this.onImageEvent(h,t.proxy(function(){this.showImg(i,g),i.data("jg.loaded",!0)},this)):this.showImg(i,g)}else this.showImg(i);this.displayEntryCaption(i)},e.prototype.displayEntryCaption=function(i){var e=this.imgFromEntry(i);if(null!==e&&this.settings.captions){var s=this.captionFromEntry(i);if(null===s){var n=e.attr("alt");this.isValidCaption(n)||(n=i.attr("title")),this.isValidCaption(n)&&(s=t('<div class="caption">'+n+"</div>"),i.append(s),i.data("jg.createdCaption",!0))}null!==s&&(this.settings.cssAnimation||s.stop().fadeTo(0,this.settings.captionSettings.nonVisibleOpacity),this.addCaptionEventsHandlers(i))}else this.removeCaptionEventsHandlers(i)},e.prototype.isValidCaption=function(t){return void 0!==t&&t.length>0},e.prototype.onEntryMouseEnterForCaption=function(i){var e=this.captionFromEntry(t(i.currentTarget));this.settings.cssAnimation?e.addClass("caption-visible").removeClass("caption-hidden"):e.stop().fadeTo(this.settings.captionSettings.animationDuration,this.settings.captionSettings.visibleOpacity)},e.prototype.onEntryMouseLeaveForCaption=function(i){var e=this.captionFromEntry(t(i.currentTarget));this.settings.cssAnimation?e.removeClass("caption-visible").removeClass("caption-hidden"):e.stop().fadeTo(this.settings.captionSettings.animationDuration,this.settings.captionSettings.nonVisibleOpacity)},e.prototype.addCaptionEventsHandlers=function(i){var e=i.data("jg.captionMouseEvents");void 0===e&&(e={mouseenter:t.proxy(this.onEntryMouseEnterForCaption,this),mouseleave:t.proxy(this.onEntryMouseLeaveForCaption,this)},i.on("mouseenter",void 0,void 0,e.mouseenter),i.on("mouseleave",void 0,void 0,e.mouseleave),i.data("jg.captionMouseEvents",e))},e.prototype.removeCaptionEventsHandlers=function(t){var i=t.data("jg.captionMouseEvents");void 0!==i&&(t.off("mouseenter",void 0,i.mouseenter),t.off("mouseleave",void 0,i.mouseleave),t.removeData("jg.captionMouseEvents"))},e.prototype.clearBuildingRow=function(){this.buildingRow.entriesBuff=[],this.buildingRow.aspectRatio=0,this.buildingRow.width=0},e.prototype.prepareBuildingRow=function(t){var i,e,s,n,r,o=!0,a=0,h=this.galleryWidth-2*this.border-(this.buildingRow.entriesBuff.length-1)*this.settings.margins,l=h/this.buildingRow.aspectRatio,g=this.settings.rowHeight,d=this.buildingRow.width/h>this.settings.justifyThreshold;if(t&&"hide"===this.settings.lastRow&&!d){for(i=0;i<this.buildingRow.entriesBuff.length;i++)e=this.buildingRow.entriesBuff[i],this.settings.cssAnimation?e.removeClass("entry-visible"):(e.stop().fadeTo(0,.1),e.find("> img, > a > img").fadeTo(0,0));return-1}for(t&&!d&&"justify"!==this.settings.lastRow&&"hide"!==this.settings.lastRow&&(o=!1,this.rows>0&&(g=(this.offY-this.border-this.settings.margins*this.rows)/this.rows,o=g*this.buildingRow.aspectRatio/h>this.settings.justifyThreshold)),i=0;i<this.buildingRow.entriesBuff.length;i++)e=this.buildingRow.entriesBuff[i],s=e.data("jg.width")/e.data("jg.height"),o?(n=i===this.buildingRow.entriesBuff.length-1?h:l*s,r=l):(n=g*s,r=g),h-=Math.round(n),e.data("jg.jwidth",Math.round(n)),e.data("jg.jheight",Math.ceil(r)),(0===i||a>r)&&(a=r);return this.buildingRow.height=a,o},e.prototype.flushRow=function(t){var i,e,s,n=this.settings,r=this.border;if(e=this.prepareBuildingRow(t),t&&"hide"===n.lastRow&&-1===e)return void this.clearBuildingRow();if(this.maxRowHeight&&this.maxRowHeight<this.buildingRow.height&&(this.buildingRow.height=this.maxRowHeight),t&&("center"===n.lastRow||"right"===n.lastRow)){var o=this.galleryWidth-2*this.border-(this.buildingRow.entriesBuff.length-1)*n.margins;for(s=0;s<this.buildingRow.entriesBuff.length;s++)i=this.buildingRow.entriesBuff[s],o-=i.data("jg.jwidth");"center"===n.lastRow?r+=o/2:"right"===n.lastRow&&(r+=o)}var a=this.buildingRow.entriesBuff.length-1;for(s=0;s<=a;s++)i=this.buildingRow.entriesBuff[this.settings.rtl?a-s:s],this.displayEntry(i,r,this.offY,i.data("jg.jwidth"),i.data("jg.jheight"),this.buildingRow.height),r+=i.data("jg.jwidth")+n.margins;this.galleryHeightToSet=this.offY+this.buildingRow.height+this.border,this.setGalleryTempHeight(this.galleryHeightToSet+this.getSpinnerHeight()),(!t||this.buildingRow.height<=n.rowHeight&&e)&&(this.offY+=this.buildingRow.height+n.margins,this.rows+=1,this.clearBuildingRow(),this.settings.triggerEvent.call(this,"jg.rowflush"))};var s=0;e.prototype.rememberGalleryHeight=function(){s=this.$gallery.height(),this.$gallery.height(s)},e.prototype.setGalleryTempHeight=function(t){s=Math.max(t,s),this.$gallery.height(s)},e.prototype.setGalleryFinalHeight=function(t){s=t,this.$gallery.height(t)},e.prototype.checkWidth=function(){this.checkWidthIntervalId=setInterval(t.proxy(function(){if(this.$gallery.is(":visible")){var t=parseFloat(this.$gallery.width());i()===this.scrollBarOn?Math.abs(t-this.galleryWidth)>this.settings.refreshSensitivity&&(this.galleryWidth=t,this.rewind(),this.rememberGalleryHeight(),this.startImgAnalyzer(!0)):(this.scrollBarOn=i(),this.galleryWidth=t)}},this),this.settings.refreshTime)},e.prototype.isSpinnerActive=function(){return null!==this.spinner.intervalId},e.prototype.getSpinnerHeight=function(){return this.spinner.$el.innerHeight()},e.prototype.stopLoadingSpinnerAnimation=function(){clearInterval(this.spinner.intervalId),this.spinner.intervalId=null,this.setGalleryTempHeight(this.$gallery.height()-this.getSpinnerHeight()),this.spinner.$el.detach()},e.prototype.startLoadingSpinnerAnimation=function(){var t=this.spinner,i=t.$el.find("span");clearInterval(t.intervalId),this.$gallery.append(t.$el),this.setGalleryTempHeight(this.offY+this.buildingRow.height+this.getSpinnerHeight()),t.intervalId=setInterval(function(){t.phase<i.length?i.eq(t.phase).fadeTo(t.timeSlot,1):i.eq(t.phase-i.length).fadeTo(t.timeSlot,0),t.phase=(t.phase+1)%(2*i.length)},t.timeSlot)},e.prototype.rewind=function(){this.lastFetchedEntry=null,this.lastAnalyzedIndex=-1,this.offY=this.border,this.rows=0,this.clearBuildingRow()},e.prototype.updateEntries=function(i){var e;return i&&null!=this.lastFetchedEntry?e=t(this.lastFetchedEntry).nextAll(this.settings.selector).toArray():(this.entries=[],e=this.$gallery.children(this.settings.selector).toArray()),e.length>0&&(t.isFunction(this.settings.sort)?e=this.sortArray(e):this.settings.randomize&&(e=this.shuffleArray(e)),this.lastFetchedEntry=e[e.length-1],this.settings.filter?e=this.filterArray(e):this.resetFilters(e)),this.entries=this.entries.concat(e),!0},e.prototype.insertToGallery=function(i){var e=this;t.each(i,function(){t(this).appendTo(e.$gallery)})},e.prototype.shuffleArray=function(t){var i,e,s;for(i=t.length-1;i>0;i--)e=Math.floor(Math.random()*(i+1)),s=t[i],t[i]=t[e],t[e]=s;return this.insertToGallery(t),t},e.prototype.sortArray=function(t){return t.sort(this.settings.sort),this.insertToGallery(t),t},e.prototype.resetFilters=function(i){for(var e=0;e<i.length;e++)t(i[e]).removeClass("jg-filtered")},e.prototype.filterArray=function(i){var e=this.settings;if("string"===t.type(e.filter))return i.filter(function(i){var s=t(i);return s.is(e.filter)?(s.removeClass("jg-filtered"),!0):(s.addClass("jg-filtered").removeClass("jg-visible"),!1)});if(t.isFunction(e.filter)){for(var s=i.filter(e.filter),n=0;n<i.length;n++)-1===s.indexOf(i[n])?t(i[n]).addClass("jg-filtered").removeClass("jg-visible"):t(i[n]).removeClass("jg-filtered");return s}},e.prototype.destroy=function(){clearInterval(this.checkWidthIntervalId),t.each(this.entries,t.proxy(function(i,e){var s=t(e);s.css("width",""),s.css("height",""),s.css("top",""),s.css("left",""),s.data("jg.loaded",void 0),s.removeClass("jg-entry");var n=this.imgFromEntry(s);n.css("width",""),n.css("height",""),n.css("margin-left",""),n.css("margin-top",""),n.attr("src",n.data("jg.originalSrc")),n.data("jg.originalSrc",void 0),this.removeCaptionEventsHandlers(s);var r=this.captionFromEntry(s);s.data("jg.createdCaption")?(s.data("jg.createdCaption",void 0),null!==r&&r.remove()):null!==r&&r.fadeTo(0,1)},this)),this.$gallery.css("height",""),this.$gallery.removeClass("justified-gallery"),this.$gallery.data("jg.controller",void 0)},e.prototype.analyzeImages=function(i){for(var e=this.lastAnalyzedIndex+1;e<this.entries.length;e++){var s=t(this.entries[e]);if(!0===s.data("jg.loaded")||"skipped"===s.data("jg.loaded")){var n=this.galleryWidth-2*this.border-(this.buildingRow.entriesBuff.length-1)*this.settings.margins,r=s.data("jg.width")/s.data("jg.height");if(n/(this.buildingRow.aspectRatio+r)<this.settings.rowHeight&&(this.flushRow(!1),++this.yield.flushed>=this.yield.every))return void this.startImgAnalyzer(i);this.buildingRow.entriesBuff.push(s),this.buildingRow.aspectRatio+=r,this.buildingRow.width+=r*this.settings.rowHeight,this.lastAnalyzedIndex=e}else if("error"!==s.data("jg.loaded"))return}this.buildingRow.entriesBuff.length>0&&this.flushRow(!0),this.isSpinnerActive()&&this.stopLoadingSpinnerAnimation(),this.stopImgAnalyzerStarter(),this.settings.triggerEvent.call(this,i?"jg.resize":"jg.complete"),this.setGalleryFinalHeight(this.galleryHeightToSet)},e.prototype.stopImgAnalyzerStarter=function(){this.yield.flushed=0,null!==this.imgAnalyzerTimeout&&(clearTimeout(this.imgAnalyzerTimeout),this.imgAnalyzerTimeout=null)},e.prototype.startImgAnalyzer=function(t){var i=this;this.stopImgAnalyzerStarter(),this.imgAnalyzerTimeout=setTimeout(function(){i.analyzeImages(t)},.001)},e.prototype.onImageEvent=function(i,e,s){if(e||s){var n=new Image,r=t(n);e&&r.one("load",function(){r.off("load error"),e(n)}),s&&r.one("error",function(){r.off("load error"),s(n)}),n.src=i}},e.prototype.init=function(){var i=!1,e=!1,s=this;t.each(this.entries,function(n,r){var o=t(r),a=s.imgFromEntry(o);if(o.addClass("jg-entry"),!0!==o.data("jg.loaded")&&"skipped"!==o.data("jg.loaded"))if(null!==s.settings.rel&&o.attr("rel",s.settings.rel),null!==s.settings.target&&o.attr("target",s.settings.target),null!==a){var h=s.extractImgSrcFromImage(a);if(a.attr("src",h),!1===s.settings.waitThumbnailsLoad){var l=parseFloat(a.prop("width")),g=parseFloat(a.prop("height"));if(!isNaN(l)&&!isNaN(g))return o.data("jg.width",l),o.data("jg.height",g),o.data("jg.loaded","skipped"),e=!0,s.startImgAnalyzer(!1),!0}o.data("jg.loaded",!1),i=!0,s.isSpinnerActive()||s.startLoadingSpinnerAnimation(),s.onImageEvent(h,function(t){o.data("jg.width",t.width),o.data("jg.height",t.height),o.data("jg.loaded",!0),s.startImgAnalyzer(!1)},function(){o.data("jg.loaded","error"),s.startImgAnalyzer(!1)})}else o.data("jg.loaded",!0),o.data("jg.width",o.width()|parseFloat(o.css("width"))|1),o.data("jg.height",o.height()|parseFloat(o.css("height"))|1)}),i||e||this.startImgAnalyzer(!1),this.checkWidth()},e.prototype.checkOrConvertNumber=function(i,e){if("string"===t.type(i[e])&&(i[e]=parseFloat(i[e])),"number"!==t.type(i[e]))throw e+" must be a number";if(isNaN(i[e]))throw"invalid number for "+e},e.prototype.checkSizeRangesSuffixes=function(){if("object"!==t.type(this.settings.sizeRangeSuffixes))throw"sizeRangeSuffixes must be defined and must be an object";var i=[];for(var e in this.settings.sizeRangeSuffixes)this.settings.sizeRangeSuffixes.hasOwnProperty(e)&&i.push(e);for(var s={0:""},n=0;n<i.length;n++)if("string"===t.type(i[n]))try{var r=parseInt(i[n].replace(/^[a-z]+/,""),10);s[r]=this.settings.sizeRangeSuffixes[i[n]]}catch(t){throw"sizeRangeSuffixes keys must contains correct numbers ("+t+")"}else s[i[n]]=this.settings.sizeRangeSuffixes[i[n]];this.settings.sizeRangeSuffixes=s},e.prototype.retrieveMaxRowHeight=function(){var i=null,e=this.settings.rowHeight;if("string"===t.type(this.settings.maxRowHeight))i=this.settings.maxRowHeight.match(/^[0-9]+%$/)?e*parseFloat(this.settings.maxRowHeight.match(/^([0-9]+)%$/)[1])/100:parseFloat(this.settings.maxRowHeight);else{if("number"!==t.type(this.settings.maxRowHeight)){if(!1===this.settings.maxRowHeight||null==this.settings.maxRowHeight)return null;throw"maxRowHeight must be a number or a percentage"}i=this.settings.maxRowHeight}if(isNaN(i))throw"invalid number for maxRowHeight";return i<e&&(i=e),i},e.prototype.checkSettings=function(){this.checkSizeRangesSuffixes(),this.checkOrConvertNumber(this.settings,"rowHeight"),this.checkOrConvertNumber(this.settings,"margins"),this.checkOrConvertNumber(this.settings,"border");var i=["justify","nojustify","left","center","right","hide"];if(-1===i.indexOf(this.settings.lastRow))throw"lastRow must be one of: "+i.join(", ");if(this.checkOrConvertNumber(this.settings,"justifyThreshold"),this.settings.justifyThreshold<0||this.settings.justifyThreshold>1)throw"justifyThreshold must be in the interval [0,1]";if("boolean"!==t.type(this.settings.cssAnimation))throw"cssAnimation must be a boolean";if("boolean"!==t.type(this.settings.captions))throw"captions must be a boolean";if(this.checkOrConvertNumber(this.settings.captionSettings,"animationDuration"),this.checkOrConvertNumber(this.settings.captionSettings,"visibleOpacity"),this.settings.captionSettings.visibleOpacity<0||this.settings.captionSettings.visibleOpacity>1)throw"captionSettings.visibleOpacity must be in the interval [0, 1]";if(this.checkOrConvertNumber(this.settings.captionSettings,"nonVisibleOpacity"),this.settings.captionSettings.nonVisibleOpacity<0||this.settings.captionSettings.nonVisibleOpacity>1)throw"captionSettings.nonVisibleOpacity must be in the interval [0, 1]";if(this.checkOrConvertNumber(this.settings,"imagesAnimationDuration"),this.checkOrConvertNumber(this.settings,"refreshTime"),this.checkOrConvertNumber(this.settings,"refreshSensitivity"),"boolean"!==t.type(this.settings.randomize))throw"randomize must be a boolean";if("string"!==t.type(this.settings.selector))throw"selector must be a string";if(!1!==this.settings.sort&&!t.isFunction(this.settings.sort))throw"sort must be false or a comparison function";if(!1!==this.settings.filter&&!t.isFunction(this.settings.filter)&&"string"!==t.type(this.settings.filter))throw"filter must be false, a string or a filter function"},e.prototype.retrieveSuffixRanges=function(){var t=[];for(var i in this.settings.sizeRangeSuffixes)this.settings.sizeRangeSuffixes.hasOwnProperty(i)&&t.push(parseInt(i,10));return t.sort(function(t,i){return t>i?1:t<i?-1:0}),t},e.prototype.updateSettings=function(i){this.settings=t.extend({},this.settings,i),this.checkSettings(),this.border=this.settings.border>=0?this.settings.border:this.settings.margins,this.maxRowHeight=this.retrieveMaxRowHeight(),this.suffixRanges=this.retrieveSuffixRanges()},e.prototype.defaults={sizeRangeSuffixes:{},thumbnailPath:void 0,rowHeight:120,maxRowHeight:!1,margins:1,border:-1,lastRow:"nojustify",justifyThreshold:.9,waitThumbnailsLoad:!0,captions:!0,cssAnimation:!0,imagesAnimationDuration:500,captionSettings:{animationDuration:500,visibleOpacity:.7,nonVisibleOpacity:0},rel:null,target:null,extension:/\.[^.\\\/]+$/,refreshTime:200,refreshSensitivity:0,randomize:!1,rtl:!1,sort:!1,filter:!1,selector:"a, div:not(.spinner)",imgSelector:"> img, > a > img",triggerEvent:function(t){this.$gallery.trigger(t)}},t.fn.justifiedGallery=function(i){return this.each(function(s,n){var r=t(n);r.addClass("justified-gallery");var o=r.data("jg.controller");if(void 0===o){if(void 0!==i&&null!==i&&"object"!==t.type(i)){if("destroy"===i)return;throw"The argument must be an object"}o=new e(r,t.extend({},e.prototype.defaults,i)),r.data("jg.controller",o)}else if("norewind"===i);else{if("destroy"===i)return void o.destroy();o.updateSettings(i),o.rewind()}o.updateEntries("norewind"===i)&&o.init()})}});