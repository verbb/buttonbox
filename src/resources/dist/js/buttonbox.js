!function($){Craft.ButtonBoxButtons=Garnish.Base.extend({id:null,$elem:null,init:function(e){this.id=e,this.$elem=$("#"+this.id),this.addListener(this.$elem,"change","update")},update:function(){this.$elem.find("label").removeClass("active"),this.$elem.find("input:checked").parent("label").addClass("active")}}),Craft.ButtonBoxHovers=Garnish.Base.extend({id:null,$elem:null,$labels:null,$cancel:null,init:function(e){this.id=e,this.$elem=$("#"+this.id),this.$labels=this.$elem.find("label"),this.$cancel=this.$elem.find(".buttonbox-stars__cancel"),this.addListener(this.$labels,"mouseenter","updateHover"),this.addListener(this.$labels,"mouseleave","removeHover"),this.addListener(this.$cancel,"click","cancelStars"),this.addListener(this.$elem,"click","update"),this.addListener(Garnish.$win,"load","update"),Garnish.$win.trigger("load")},cancelStars:function(){this.$elem.find("input").prop("checked",!1),this.$elem.find("input:first").prop("checked",!0)},update:function(){this.$elem.find("label").removeClass("active"),this.$elem.find("input:checked").parent("label").addClass("active"),this.$elem.find("input:checked").parent("label").prevAll("label").addClass("active")},removeHover:function(){this.$elem.find("label").removeClass("hover")},updateHover:function(e){this.removeHover();var t=$(e.currentTarget);t.addClass("hover"),t.prevAll("label").addClass("hover")}}),Craft.ButtonBoxFancyOptions=Garnish.Base.extend({id:null,$elem:null,$select:null,$menu:null,$btn:null,init:function(e){this.id=e,this.$elem=$("#"+this.id),this.$select=this.$elem.find("select"),this.$btn=this.$elem.find(".menubtn");var t=this.$btn.data("menubtn");t&&t.menu&&(this.$menu=t.menu.$container,this.$menu&&(t.menu.settings.onOptionSelect=$.proxy(this,"onMenuOptionSelect")))},onMenuOptionSelect:function(e){var t=$(e),i=t.data("buttonbox-value");this.$select.val(i),this.$select.attr("value",i),this._updateField(),this.$menu.find(".sel").removeClass("sel"),t.addClass("sel")},_updateField:function(){var e=this.$select.find("option:selected");if(this.$elem.hasClass("buttonbox-textsize"))var t='<span style="font-size: '+e.data("buttonbox-pxval")+'px;">'+e.text()+"</span>";else if(this.$elem.hasClass("buttonbox-colours"))var t='<div class="buttonbox-colours__block" style="background:'+e.data("buttonbox-csscolour")+';"></div><div class="buttonbox-colours__label">'+e.text()+"</div>";this.$btn.html(t)}})}(jQuery);
//# sourceMappingURL=buttonbox.js.map