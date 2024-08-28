// Garden Gnome Software - Skin
// Pano2VR 5.0.1/15068
// Filename: ???????.ggsk
// Generated Ср авг 28 11:50:30 2024

function pano2vrSkin(player,base) {
	var ggSkinVars = [];
	var me=this;
	var flag=false;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=me.player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		this._thumbnail_menu=document.createElement('div');
		this._thumbnail_menu__content=document.createElement('div');
		this._thumbnail_menu.ggContent=this._thumbnail_menu__content;
		this._thumbnail_menu.appendChild(this._thumbnail_menu__content);
		hs ='';
		hs+='background : rgba(163,163,163,0.784314);';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		this._thumbnail_menu__content.setAttribute('style',hs);
		this._thumbnail_menu.ggId="Thumbnail Menu";
		this._thumbnail_menu.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._thumbnail_menu.ggVisible=true;
		this._thumbnail_menu.className='ggskin ggskin_scrollarea ';
		this._thumbnail_menu.ggType='scrollarea';
		hs ='';
		hs+='-webkit-overflow-scrolling : touch;';
		hs+='background : rgba(163,163,163,0.784314);';
		hs+='border : 1px solid #ffffff;';
		hs+='height : 81px;';
		hs+='left : 1.72%;';
		hs+='overflow-x : auto;';
		hs+='overflow-y : auto;';
		hs+='position : absolute;';
		hs+='top : 8px;';
		hs+='visibility : inherit;';
		hs+='width : 97.1875%;';
		hs+='border-radius: 5px;';
		this._thumbnail_menu.setAttribute('style',hs);
		this._thumbnail_menu.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_menu.ggIsActive=function() {
			return false;
		}
		me._thumbnail_menu.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._thumbnail_menu.ggUpdatePosition=function () {
			{
				this.ggContent.style.left = '0px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = '0px';
				this.ggContent.style.marginTop = '0px';
			}
		}
		this._thumbnail_cloner=document.createElement('div');
		this._thumbnail_cloner.ggNumRepeat = 1;
		this._thumbnail_cloner.ggWidth = 98;
		this._thumbnail_cloner.ggHeight = 60;
		this._thumbnail_cloner.ggUpdating = false;
		this._thumbnail_cloner.ggFilter = [];
		this._thumbnail_cloner.ggUpdate = function(filter) {
			if(me._thumbnail_cloner.ggUpdating == true) return;
			me._thumbnail_cloner.ggUpdating = true;
			if (typeof filter=='object') {
				me._thumbnail_cloner.ggFilter = filter;
			} else {
				filter = me._thumbnail_cloner.ggFilter;
			};
			if (me._thumbnail_cloner.hasChildNodes() == true) {
				while (me._thumbnail_cloner.firstChild) {
					me._thumbnail_cloner.removeChild(me._thumbnail_cloner.firstChild);
				}
			}
			var tourNodes = me.player.getNodeIds();
			var row = 0;
			var column = 0;
			var numRows = me._thumbnail_cloner.ggNumRepeat;
			if (numRows < 1) numRows = 1;
			for (i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = false;
				if (filter.length > 0) {
					var nodeData = me.player.getNodeUserdata(nodeId);
					for (j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) != -1) passed = true;
					}
				}
				else passed = true;
				if (passed) {
					me._thumbnail_cloner__node = document.createElement('div');
					me._thumbnail_cloner.appendChild(me._thumbnail_cloner__node);
					me._thumbnail_cloner__node.setAttribute('style','position: absolute; top: ' + (row * me._thumbnail_cloner.ggHeight) + 'px; left:' + (column * me._thumbnail_cloner.ggWidth) + 'px; height: ' + me._thumbnail_cloner.ggHeight + 'px; width: ' + me._thumbnail_cloner.ggWidth + 'px; overflow: hidden;');
					var inst = new SkinCloner_thumbnail_cloner_Class(nodeId, me);
					me._thumbnail_cloner__node.appendChild(inst.__div);
					me._thumbnail_cloner__node.ggObj=inst;
					me.updateSize(inst.__div);
					row++;
					if (row >= numRows) {
						row = 0;
						column++;
					}
				}
			}
			me._thumbnail_cloner.ggClonerCallChildFunctions('ggUpdateConditionTimer');
			me._thumbnail_cloner.ggUpdating = false;
		}
		this._thumbnail_cloner.ggClonerCallChildFunctions = function(functionname){
			var stack = [];
			var i;
			for(i=0; i<me._thumbnail_cloner.childNodes.length; i++) {
				stack.push(me._thumbnail_cloner.childNodes[i]);
			}
			while (stack.length > 0) {
				var e = stack.pop();
				if (typeof e[functionname] == 'function')
					e[functionname]();
				if(e.hasChildNodes()) {
					for(i=0; i<e.childNodes.length; i++) {
						stack.push(e.childNodes[i]);
					}
				}
			}
		}
		this._thumbnail_cloner.ggTags = [];
		this._thumbnail_cloner.ggId="Thumbnail Cloner";
		this._thumbnail_cloner.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._thumbnail_cloner.ggVisible=true;
		this._thumbnail_cloner.className='ggskin ggskin_cloner ';
		this._thumbnail_cloner.ggType='cloner';
		hs ='';
		hs+='height : 59px;';
		hs+='left : 1px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 97px;';
		this._thumbnail_cloner.setAttribute('style',hs);
		this._thumbnail_cloner.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._thumbnail_cloner.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._thumbnail_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=me.player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner.childNodes.length; i++) {
				var child=me._thumbnail_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							if ((p.scrollLeft + p.clientWidth) < (childOffX + child.clientWidth)) {
								p.scrollLeft = (childOffX + child.clientWidth) - p.clientWidth;
							}
							if ((p.scrollTop + p.clientHeight) < (childOffY + child.clientHeight)) {
								p.scrollTop = (childOffY + child.clientHeight) - p.clientHeight;
							}
							if (childOffX < p.scrollLeft) {
								p.scrollLeft = childOffX;
							}
							if (childOffY < p.scrollTop) {
								p.scrollTop = childOffY;
							}
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		this._thumbnail_cloner.ggUpdatePosition=function () {
			var w=me.player.getViewerSize().width;
			var h=me.player.getViewerSize().height
			if ((!me._thumbnail_cloner.ggLastSize) || (me._thumbnail_cloner.ggLastSize.w!=w) || (me._thumbnail_cloner.ggLastSize.h!=h)) {
				me._thumbnail_cloner.ggLastSize={ w:w, h:h };
				me._thumbnail_cloner.ggUpdate();
			}
		}
		this._thumbnail_cloner.ggNodeChange=function () {
			me._thumbnail_cloner.ggUpdateConditionNodeChange();
		}
		this._thumbnail_menu__content.appendChild(this._thumbnail_cloner);
		this.divSkin.appendChild(this._thumbnail_menu);
		this._button_direction=document.createElement('div');
		this._button_direction.ggId="button_direction";
		this._button_direction.ggLeft=-94;
		this._button_direction.ggTop=-80;
		this._button_direction.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_direction.ggVisible=true;
		this._button_direction.className='ggskin ggskin_container ';
		this._button_direction.ggType='container';
		hs ='';
		hs+='height : 62px;';
		hs+='left : -94px;';
		hs+='position : absolute;';
		hs+='top : -80px;';
		hs+='visibility : inherit;';
		hs+='width : 82px;';
		this._button_direction.setAttribute('style',hs);
		this._button_direction.style[domTransform + 'Origin']='50% 50%';
		me._button_direction.ggIsActive=function() {
			return false;
		}
		me._button_direction.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._button_direction.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._button_image_right=document.createElement('div');
		this._button_image_right__img=document.createElement('img');
		this._button_image_right__img.className='ggskin ggskin_svg';
		this._button_image_right__img.setAttribute('src',basePath + 'images/button_image_right.svg');
		this._button_image_right__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_image_right__img['ondragstart']=function() { return false; };
		this._button_image_right.appendChild(this._button_image_right__img);
		this._button_image_right__imgo=document.createElement('img');
		this._button_image_right__imgo.className='ggskin ggskin_svg';
		this._button_image_right__imgo.setAttribute('src',basePath + 'images/button_image_right__o.svg');
		this._button_image_right__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._button_image_right__imgo['ondragstart']=function() { return false; };
		this._button_image_right.appendChild(this._button_image_right__imgo);
		this._button_image_right.ggId="button_image_right";
		this._button_image_right.ggLeft=-31;
		this._button_image_right.ggTop=-47;
		this._button_image_right.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_image_right.ggVisible=true;
		this._button_image_right.className='ggskin ggskin_svg ';
		this._button_image_right.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -31px;';
		hs+='position : absolute;';
		hs+='top : -47px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		this._button_image_right.setAttribute('style',hs);
		this._button_image_right.style[domTransform + 'Origin']='50% 50%';
		me._button_image_right.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_image_right.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_image_right.onmouseover=function () {
			me._button_image_right__img.style.visibility='hidden';
			me._button_image_right__imgo.style.visibility='inherit';
		}
		this._button_image_right.onmouseout=function () {
			me._button_image_right__img.style.visibility='inherit';
			me._button_image_right__imgo.style.visibility='hidden';
			me.elementMouseDown['button_image_right']=false;
		}
		this._button_image_right.onmousedown=function () {
			me.elementMouseDown['button_image_right']=true;
		}
		this._button_image_right.onmouseup=function () {
			me.elementMouseDown['button_image_right']=false;
		}
		this._button_image_right.ontouchend=function () {
			me.elementMouseDown['button_image_right']=false;
		}
		this._button_image_right.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._button_direction.appendChild(this._button_image_right);
		this._button_image_left=document.createElement('div');
		this._button_image_left__img=document.createElement('img');
		this._button_image_left__img.className='ggskin ggskin_svg';
		this._button_image_left__img.setAttribute('src',basePath + 'images/button_image_left.svg');
		this._button_image_left__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_image_left__img['ondragstart']=function() { return false; };
		this._button_image_left.appendChild(this._button_image_left__img);
		this._button_image_left__imgo=document.createElement('img');
		this._button_image_left__imgo.className='ggskin ggskin_svg';
		this._button_image_left__imgo.setAttribute('src',basePath + 'images/button_image_left__o.svg');
		this._button_image_left__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._button_image_left__imgo['ondragstart']=function() { return false; };
		this._button_image_left.appendChild(this._button_image_left__imgo);
		this._button_image_left.ggId="button_image_left";
		this._button_image_left.ggLeft=-83;
		this._button_image_left.ggTop=-47;
		this._button_image_left.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_image_left.ggVisible=true;
		this._button_image_left.className='ggskin ggskin_svg ';
		this._button_image_left.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -83px;';
		hs+='position : absolute;';
		hs+='top : -47px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		this._button_image_left.setAttribute('style',hs);
		this._button_image_left.style[domTransform + 'Origin']='50% 50%';
		me._button_image_left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_image_left.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_image_left.onmouseover=function () {
			me._button_image_left__img.style.visibility='hidden';
			me._button_image_left__imgo.style.visibility='inherit';
		}
		this._button_image_left.onmouseout=function () {
			me._button_image_left__img.style.visibility='inherit';
			me._button_image_left__imgo.style.visibility='hidden';
			me.elementMouseDown['button_image_left']=false;
		}
		this._button_image_left.onmousedown=function () {
			me.elementMouseDown['button_image_left']=true;
		}
		this._button_image_left.onmouseup=function () {
			me.elementMouseDown['button_image_left']=false;
		}
		this._button_image_left.ontouchend=function () {
			me.elementMouseDown['button_image_left']=false;
		}
		this._button_image_left.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._button_direction.appendChild(this._button_image_left);
		this._button_image_down=document.createElement('div');
		this._button_image_down__img=document.createElement('img');
		this._button_image_down__img.className='ggskin ggskin_svg';
		this._button_image_down__img.setAttribute('src',basePath + 'images/button_image_down.svg');
		this._button_image_down__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_image_down__img['ondragstart']=function() { return false; };
		this._button_image_down.appendChild(this._button_image_down__img);
		this._button_image_down__imgo=document.createElement('img');
		this._button_image_down__imgo.className='ggskin ggskin_svg';
		this._button_image_down__imgo.setAttribute('src',basePath + 'images/button_image_down__o.svg');
		this._button_image_down__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._button_image_down__imgo['ondragstart']=function() { return false; };
		this._button_image_down.appendChild(this._button_image_down__imgo);
		this._button_image_down.ggId="button_image_down";
		this._button_image_down.ggLeft=-57;
		this._button_image_down.ggTop=-31;
		this._button_image_down.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_image_down.ggVisible=true;
		this._button_image_down.className='ggskin ggskin_svg ';
		this._button_image_down.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -57px;';
		hs+='position : absolute;';
		hs+='top : -31px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		this._button_image_down.setAttribute('style',hs);
		this._button_image_down.style[domTransform + 'Origin']='50% 50%';
		me._button_image_down.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_image_down.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_image_down.onmouseover=function () {
			me._button_image_down__img.style.visibility='hidden';
			me._button_image_down__imgo.style.visibility='inherit';
		}
		this._button_image_down.onmouseout=function () {
			me._button_image_down__img.style.visibility='inherit';
			me._button_image_down__imgo.style.visibility='hidden';
			me.elementMouseDown['button_image_down']=false;
		}
		this._button_image_down.onmousedown=function () {
			me.elementMouseDown['button_image_down']=true;
		}
		this._button_image_down.onmouseup=function () {
			me.elementMouseDown['button_image_down']=false;
		}
		this._button_image_down.ontouchend=function () {
			me.elementMouseDown['button_image_down']=false;
		}
		this._button_image_down.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._button_direction.appendChild(this._button_image_down);
		this._button_image_up=document.createElement('div');
		this._button_image_up__img=document.createElement('img');
		this._button_image_up__img.className='ggskin ggskin_svg';
		this._button_image_up__img.setAttribute('src',basePath + 'images/button_image_up.svg');
		this._button_image_up__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_image_up__img['ondragstart']=function() { return false; };
		this._button_image_up.appendChild(this._button_image_up__img);
		this._button_image_up__imgo=document.createElement('img');
		this._button_image_up__imgo.className='ggskin ggskin_svg';
		this._button_image_up__imgo.setAttribute('src',basePath + 'images/button_image_up__o.svg');
		this._button_image_up__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._button_image_up__imgo['ondragstart']=function() { return false; };
		this._button_image_up.appendChild(this._button_image_up__imgo);
		this._button_image_up.ggId="button_image_up";
		this._button_image_up.ggLeft=-57;
		this._button_image_up.ggTop=-63;
		this._button_image_up.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_image_up.ggVisible=true;
		this._button_image_up.className='ggskin ggskin_svg ';
		this._button_image_up.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -57px;';
		hs+='position : absolute;';
		hs+='top : -63px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		this._button_image_up.setAttribute('style',hs);
		this._button_image_up.style[domTransform + 'Origin']='50% 50%';
		me._button_image_up.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_image_up.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_image_up.onmouseover=function () {
			me._button_image_up__img.style.visibility='hidden';
			me._button_image_up__imgo.style.visibility='inherit';
		}
		this._button_image_up.onmouseout=function () {
			me._button_image_up__img.style.visibility='inherit';
			me._button_image_up__imgo.style.visibility='hidden';
			me.elementMouseDown['button_image_up']=false;
		}
		this._button_image_up.onmousedown=function () {
			me.elementMouseDown['button_image_up']=true;
		}
		this._button_image_up.onmouseup=function () {
			me.elementMouseDown['button_image_up']=false;
		}
		this._button_image_up.ontouchend=function () {
			me.elementMouseDown['button_image_up']=false;
		}
		this._button_image_up.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._button_direction.appendChild(this._button_image_up);
		this.divSkin.appendChild(this._button_direction);
		this._button_auto_rotate=document.createElement('div');
		this._button_auto_rotate.ggId="button_auto_rotate";
		this._button_auto_rotate.ggLeft=-137;
		this._button_auto_rotate.ggTop=-65;
		this._button_auto_rotate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_auto_rotate.ggVisible=true;
		this._button_auto_rotate.className='ggskin ggskin_container ';
		this._button_auto_rotate.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -137px;';
		hs+='position : absolute;';
		hs+='top : -65px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		this._button_auto_rotate.setAttribute('style',hs);
		this._button_auto_rotate.style[domTransform + 'Origin']='50% 50%';
		me._button_auto_rotate.ggIsActive=function() {
			return false;
		}
		me._button_auto_rotate.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._button_auto_rotate.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._stop_rotate_image=document.createElement('div');
		this._stop_rotate_image__img=document.createElement('img');
		this._stop_rotate_image__img.className='ggskin ggskin_svg';
		this._stop_rotate_image__img.setAttribute('src',basePath + 'images/stop_rotate_image.svg');
		this._stop_rotate_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._stop_rotate_image__img['ondragstart']=function() { return false; };
		this._stop_rotate_image.appendChild(this._stop_rotate_image__img);
		this._stop_rotate_image__imgo=document.createElement('img');
		this._stop_rotate_image__imgo.className='ggskin ggskin_svg';
		this._stop_rotate_image__imgo.setAttribute('src',basePath + 'images/stop_rotate_image__o.svg');
		this._stop_rotate_image__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._stop_rotate_image__imgo['ondragstart']=function() { return false; };
		this._stop_rotate_image.appendChild(this._stop_rotate_image__imgo);
		this._stop_rotate_image.ggId="stop_rotate_image";
		this._stop_rotate_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._stop_rotate_image.ggVisible=false;
		this._stop_rotate_image.className='ggskin ggskin_svg ';
		this._stop_rotate_image.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		this._stop_rotate_image.setAttribute('style',hs);
		this._stop_rotate_image.style[domTransform + 'Origin']='50% 50%';
		me._stop_rotate_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._stop_rotate_image.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._stop_rotate_image.onclick=function () {
			me.player.stopAutorotate();
			me._stop_rotate_image.style[domTransition]='none';
			me._stop_rotate_image.style.visibility='hidden';
			me._stop_rotate_image.ggVisible=false;
			me._start_rotate_image.style[domTransition]='none';
			me._start_rotate_image.style.visibility=(Number(me._start_rotate_image.style.opacity)>0||!me._start_rotate_image.style.opacity)?'inherit':'hidden';
			me._start_rotate_image.ggVisible=true;
		}
		this._stop_rotate_image.onmouseover=function () {
			me._stop_rotate_image__img.style.visibility='hidden';
			me._stop_rotate_image__imgo.style.visibility='inherit';
			me.elementMouseOver['stop_rotate_image']=true;
		}
		this._stop_rotate_image.onmouseout=function () {
			me._stop_rotate_image__img.style.visibility='inherit';
			me._stop_rotate_image__imgo.style.visibility='hidden';
			me.elementMouseOver['stop_rotate_image']=false;
		}
		this._stop_rotate_image.ontouchend=function () {
			me.elementMouseOver['stop_rotate_image']=false;
		}
		this._stop_rotate_image.ggUpdatePosition=function () {
		}
		this._tt_stop_auto_rotate0=document.createElement('div');
		this._tt_stop_auto_rotate0__text=document.createElement('div');
		this._tt_stop_auto_rotate0.className='ggskin ggskin_textdiv';
		this._tt_stop_auto_rotate0.ggTextDiv=this._tt_stop_auto_rotate0__text;
		this._tt_stop_auto_rotate0.ggId="tt_stop_auto_rotate";
		this._tt_stop_auto_rotate0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_stop_auto_rotate0.ggVisible=false;
		this._tt_stop_auto_rotate0.className='ggskin ggskin_text ';
		this._tt_stop_auto_rotate0.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -59px;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : hidden;';
		hs+='width : 148px;';
		this._tt_stop_auto_rotate0.setAttribute('style',hs);
		this._tt_stop_auto_rotate0.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_stop_auto_rotate0__text.setAttribute('style',hs);
		this._tt_stop_auto_rotate0__text.innerHTML="\u0421\u0442\u043e\u043f 360";
		this._tt_stop_auto_rotate0.appendChild(this._tt_stop_auto_rotate0__text);
		me._tt_stop_auto_rotate0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_stop_auto_rotate0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._tt_stop_auto_rotate0.ggCurrentLogicStateVisible = -1;
		this._tt_stop_auto_rotate0.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['stop_rotate_image'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_stop_auto_rotate0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_stop_auto_rotate0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_stop_auto_rotate0.style[domTransition]='';
				if (me._tt_stop_auto_rotate0.ggCurrentLogicStateVisible == 0) {
					me._tt_stop_auto_rotate0.style.visibility=(Number(me._tt_stop_auto_rotate0.style.opacity)>0||!me._tt_stop_auto_rotate0.style.opacity)?'inherit':'hidden';
					me._tt_stop_auto_rotate0.ggVisible=true;
				}
				else {
					me._tt_stop_auto_rotate0.style.visibility="hidden";
					me._tt_stop_auto_rotate0.ggVisible=false;
				}
			}
		}
		this._tt_stop_auto_rotate0.ggUpdatePosition=function () {
		}
		this._tt_stop_auto_rotate_white0=document.createElement('div');
		this._tt_stop_auto_rotate_white0__text=document.createElement('div');
		this._tt_stop_auto_rotate_white0.className='ggskin ggskin_textdiv';
		this._tt_stop_auto_rotate_white0.ggTextDiv=this._tt_stop_auto_rotate_white0__text;
		this._tt_stop_auto_rotate_white0.ggId="tt_stop_auto_rotate_white";
		this._tt_stop_auto_rotate_white0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_stop_auto_rotate_white0.ggVisible=true;
		this._tt_stop_auto_rotate_white0.className='ggskin ggskin_text ';
		this._tt_stop_auto_rotate_white0.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		this._tt_stop_auto_rotate_white0.setAttribute('style',hs);
		this._tt_stop_auto_rotate_white0.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_stop_auto_rotate_white0__text.setAttribute('style',hs);
		this._tt_stop_auto_rotate_white0__text.innerHTML="\u0421\u0442\u043e\u043f 360";
		this._tt_stop_auto_rotate_white0.appendChild(this._tt_stop_auto_rotate_white0__text);
		me._tt_stop_auto_rotate_white0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_stop_auto_rotate_white0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tt_stop_auto_rotate_white0.ggUpdatePosition=function () {
		}
		this._tt_stop_auto_rotate0.appendChild(this._tt_stop_auto_rotate_white0);
		this._stop_rotate_image.appendChild(this._tt_stop_auto_rotate0);
		this._button_auto_rotate.appendChild(this._stop_rotate_image);
		this._start_rotate_image=document.createElement('div');
		this._start_rotate_image__img=document.createElement('img');
		this._start_rotate_image__img.className='ggskin ggskin_svg';
		this._start_rotate_image__img.setAttribute('src',basePath + 'images/start_rotate_image.svg');
		this._start_rotate_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._start_rotate_image__img['ondragstart']=function() { return false; };
		this._start_rotate_image.appendChild(this._start_rotate_image__img);
		this._start_rotate_image__imgo=document.createElement('img');
		this._start_rotate_image__imgo.className='ggskin ggskin_svg';
		this._start_rotate_image__imgo.setAttribute('src',basePath + 'images/start_rotate_image__o.svg');
		this._start_rotate_image__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._start_rotate_image__imgo['ondragstart']=function() { return false; };
		this._start_rotate_image.appendChild(this._start_rotate_image__imgo);
		this._start_rotate_image.ggId="start_rotate_image";
		this._start_rotate_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._start_rotate_image.ggVisible=true;
		this._start_rotate_image.className='ggskin ggskin_svg ';
		this._start_rotate_image.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		this._start_rotate_image.setAttribute('style',hs);
		this._start_rotate_image.style[domTransform + 'Origin']='50% 50%';
		me._start_rotate_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._start_rotate_image.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._start_rotate_image.onclick=function () {
			me.player.startAutorotate(0.1,5,1);
			me._start_rotate_image.style[domTransition]='none';
			me._start_rotate_image.style.visibility='hidden';
			me._start_rotate_image.ggVisible=false;
			me._stop_rotate_image.style[domTransition]='none';
			me._stop_rotate_image.style.visibility=(Number(me._stop_rotate_image.style.opacity)>0||!me._stop_rotate_image.style.opacity)?'inherit':'hidden';
			me._stop_rotate_image.ggVisible=true;
		}
		this._start_rotate_image.onmouseover=function () {
			me._start_rotate_image__img.style.visibility='hidden';
			me._start_rotate_image__imgo.style.visibility='inherit';
			me.elementMouseOver['start_rotate_image']=true;
		}
		this._start_rotate_image.onmouseout=function () {
			me._start_rotate_image__img.style.visibility='inherit';
			me._start_rotate_image__imgo.style.visibility='hidden';
			me.elementMouseOver['start_rotate_image']=false;
		}
		this._start_rotate_image.ontouchend=function () {
			me.elementMouseOver['start_rotate_image']=false;
		}
		this._start_rotate_image.ggUpdatePosition=function () {
		}
		this._tt_start_auto_rotate0=document.createElement('div');
		this._tt_start_auto_rotate0__text=document.createElement('div');
		this._tt_start_auto_rotate0.className='ggskin ggskin_textdiv';
		this._tt_start_auto_rotate0.ggTextDiv=this._tt_start_auto_rotate0__text;
		this._tt_start_auto_rotate0.ggId="tt_start_auto_rotate";
		this._tt_start_auto_rotate0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_start_auto_rotate0.ggVisible=false;
		this._tt_start_auto_rotate0.className='ggskin ggskin_text ';
		this._tt_start_auto_rotate0.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -59px;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : hidden;';
		hs+='width : 148px;';
		this._tt_start_auto_rotate0.setAttribute('style',hs);
		this._tt_start_auto_rotate0.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_start_auto_rotate0__text.setAttribute('style',hs);
		this._tt_start_auto_rotate0__text.innerHTML="\u0421\u0442\u0430\u0440\u0442 360";
		this._tt_start_auto_rotate0.appendChild(this._tt_start_auto_rotate0__text);
		me._tt_start_auto_rotate0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_start_auto_rotate0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._tt_start_auto_rotate0.ggCurrentLogicStateVisible = -1;
		this._tt_start_auto_rotate0.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['start_rotate_image'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_start_auto_rotate0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_start_auto_rotate0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_start_auto_rotate0.style[domTransition]='';
				if (me._tt_start_auto_rotate0.ggCurrentLogicStateVisible == 0) {
					me._tt_start_auto_rotate0.style.visibility=(Number(me._tt_start_auto_rotate0.style.opacity)>0||!me._tt_start_auto_rotate0.style.opacity)?'inherit':'hidden';
					me._tt_start_auto_rotate0.ggVisible=true;
				}
				else {
					me._tt_start_auto_rotate0.style.visibility="hidden";
					me._tt_start_auto_rotate0.ggVisible=false;
				}
			}
		}
		this._tt_start_auto_rotate0.ggUpdatePosition=function () {
		}
		this._tt_start_auto_rotate_white0=document.createElement('div');
		this._tt_start_auto_rotate_white0__text=document.createElement('div');
		this._tt_start_auto_rotate_white0.className='ggskin ggskin_textdiv';
		this._tt_start_auto_rotate_white0.ggTextDiv=this._tt_start_auto_rotate_white0__text;
		this._tt_start_auto_rotate_white0.ggId="tt_start_auto_rotate_white";
		this._tt_start_auto_rotate_white0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_start_auto_rotate_white0.ggVisible=true;
		this._tt_start_auto_rotate_white0.className='ggskin ggskin_text ';
		this._tt_start_auto_rotate_white0.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		this._tt_start_auto_rotate_white0.setAttribute('style',hs);
		this._tt_start_auto_rotate_white0.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_start_auto_rotate_white0__text.setAttribute('style',hs);
		this._tt_start_auto_rotate_white0__text.innerHTML="\u0421\u0442\u0430\u0440\u0442 360";
		this._tt_start_auto_rotate_white0.appendChild(this._tt_start_auto_rotate_white0__text);
		me._tt_start_auto_rotate_white0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_start_auto_rotate_white0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tt_start_auto_rotate_white0.ggUpdatePosition=function () {
		}
		this._tt_start_auto_rotate0.appendChild(this._tt_start_auto_rotate_white0);
		this._start_rotate_image.appendChild(this._tt_start_auto_rotate0);
		this._button_auto_rotate.appendChild(this._start_rotate_image);
		this.divSkin.appendChild(this._button_auto_rotate);
		this._button_1=document.createElement('div');
		this._button_1__img=document.createElement('img');
		this._button_1__img.className='ggskin ggskin_button';
		this._button_1__img.setAttribute('src',basePath + 'images/button_1.png');
		this._button_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_1__img.className='ggskin ggskin_button';
		this._button_1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_1__img);
		this._button_1.appendChild(this._button_1__img);
		this._button_1.ggId="Button 1";
		this._button_1.ggLeft=-183;
		this._button_1.ggTop=-65;
		this._button_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_1.ggVisible=true;
		this._button_1.className='ggskin ggskin_button ';
		this._button_1.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 31px;';
		hs+='left : -183px;';
		hs+='position : absolute;';
		hs+='top : -65px;';
		hs+='visibility : inherit;';
		hs+='width : 31px;';
		this._button_1.setAttribute('style',hs);
		this._button_1.style[domTransform + 'Origin']='50% 50%';
		me._button_1.ggIsActive=function() {
			return false;
		}
		me._button_1.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._button_1.onclick=function () {
			me._thumbnail_menu.style[domTransition]='none';
			me._thumbnail_menu.style.visibility='hidden';
			me._thumbnail_menu.ggVisible=false;
			me._button_2.style[domTransition]='none';
			me._button_2.style.visibility=(Number(me._button_2.style.opacity)>0||!me._button_2.style.opacity)?'inherit':'hidden';
			me._button_2.ggVisible=true;
			me._button_1.style[domTransition]='none';
			me._button_1.style.visibility='hidden';
			me._button_1.ggVisible=false;
		}
		this._button_1.onmouseover=function () {
			me.elementMouseOver['button_1']=true;
		}
		this._button_1.onmouseout=function () {
			me.elementMouseOver['button_1']=false;
		}
		this._button_1.ontouchend=function () {
			me.elementMouseOver['button_1']=false;
		}
		this._button_1.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._tt_start_auto_rotate=document.createElement('div');
		this._tt_start_auto_rotate__text=document.createElement('div');
		this._tt_start_auto_rotate.className='ggskin ggskin_textdiv';
		this._tt_start_auto_rotate.ggTextDiv=this._tt_start_auto_rotate__text;
		this._tt_start_auto_rotate.ggId="tt_start_auto_rotate";
		this._tt_start_auto_rotate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_start_auto_rotate.ggVisible=false;
		this._tt_start_auto_rotate.className='ggskin ggskin_text ';
		this._tt_start_auto_rotate.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -56px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : 148px;';
		this._tt_start_auto_rotate.setAttribute('style',hs);
		this._tt_start_auto_rotate.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_start_auto_rotate__text.setAttribute('style',hs);
		this._tt_start_auto_rotate__text.innerHTML="\u0421\u043a\u0440\u044b\u0442\u044c \u043b\u0435\u043d\u0442\u0443 \u0444\u043e\u0442\u043e";
		this._tt_start_auto_rotate.appendChild(this._tt_start_auto_rotate__text);
		me._tt_start_auto_rotate.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_start_auto_rotate.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._tt_start_auto_rotate.ggCurrentLogicStateVisible = -1;
		this._tt_start_auto_rotate.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['button_1'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_start_auto_rotate.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_start_auto_rotate.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_start_auto_rotate.style[domTransition]='';
				if (me._tt_start_auto_rotate.ggCurrentLogicStateVisible == 0) {
					me._tt_start_auto_rotate.style.visibility=(Number(me._tt_start_auto_rotate.style.opacity)>0||!me._tt_start_auto_rotate.style.opacity)?'inherit':'hidden';
					me._tt_start_auto_rotate.ggVisible=true;
				}
				else {
					me._tt_start_auto_rotate.style.visibility="hidden";
					me._tt_start_auto_rotate.ggVisible=false;
				}
			}
		}
		this._tt_start_auto_rotate.ggUpdatePosition=function () {
		}
		this._tt_start_auto_rotate_white=document.createElement('div');
		this._tt_start_auto_rotate_white__text=document.createElement('div');
		this._tt_start_auto_rotate_white.className='ggskin ggskin_textdiv';
		this._tt_start_auto_rotate_white.ggTextDiv=this._tt_start_auto_rotate_white__text;
		this._tt_start_auto_rotate_white.ggId="tt_start_auto_rotate_white";
		this._tt_start_auto_rotate_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_start_auto_rotate_white.ggVisible=true;
		this._tt_start_auto_rotate_white.className='ggskin ggskin_text ';
		this._tt_start_auto_rotate_white.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		this._tt_start_auto_rotate_white.setAttribute('style',hs);
		this._tt_start_auto_rotate_white.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_start_auto_rotate_white__text.setAttribute('style',hs);
		this._tt_start_auto_rotate_white__text.innerHTML="\u0421\u043a\u0440\u044b\u0442\u044c \u043b\u0435\u043d\u0442\u0443 \u0444\u043e\u0442\u043e";
		this._tt_start_auto_rotate_white.appendChild(this._tt_start_auto_rotate_white__text);
		me._tt_start_auto_rotate_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_start_auto_rotate_white.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tt_start_auto_rotate_white.ggUpdatePosition=function () {
		}
		this._tt_start_auto_rotate.appendChild(this._tt_start_auto_rotate_white);
		this._button_1.appendChild(this._tt_start_auto_rotate);
		this.divSkin.appendChild(this._button_1);
		this._button_2=document.createElement('div');
		this._button_2__img=document.createElement('img');
		this._button_2__img.className='ggskin ggskin_button';
		this._button_2__img.setAttribute('src',basePath + 'images/button_2.png');
		this._button_2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_2__img.className='ggskin ggskin_button';
		this._button_2__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_2__img);
		this._button_2.appendChild(this._button_2__img);
		this._button_2.ggId="Button 2";
		this._button_2.ggLeft=-183;
		this._button_2.ggTop=-65;
		this._button_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_2.ggVisible=false;
		this._button_2.className='ggskin ggskin_button ';
		this._button_2.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 31px;';
		hs+='left : -183px;';
		hs+='position : absolute;';
		hs+='top : -65px;';
		hs+='visibility : hidden;';
		hs+='width : 31px;';
		this._button_2.setAttribute('style',hs);
		this._button_2.style[domTransform + 'Origin']='50% 50%';
		me._button_2.ggIsActive=function() {
			return false;
		}
		me._button_2.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._button_2.onclick=function () {
			me._thumbnail_menu.style[domTransition]='none';
			me._thumbnail_menu.style.visibility=(Number(me._thumbnail_menu.style.opacity)>0||!me._thumbnail_menu.style.opacity)?'inherit':'hidden';
			me._thumbnail_menu.ggVisible=true;
			me._button_1.style[domTransition]='none';
			me._button_1.style.visibility=(Number(me._button_1.style.opacity)>0||!me._button_1.style.opacity)?'inherit':'hidden';
			me._button_1.ggVisible=true;
			me._button_2.style[domTransition]='none';
			me._button_2.style.visibility='hidden';
			me._button_2.ggVisible=false;
		}
		this._button_2.onmouseover=function () {
			me.elementMouseOver['button_2']=true;
		}
		this._button_2.onmouseout=function () {
			me.elementMouseOver['button_2']=false;
		}
		this._button_2.ontouchend=function () {
			me.elementMouseOver['button_2']=false;
		}
		this._button_2.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._tt_stop_auto_rotate=document.createElement('div');
		this._tt_stop_auto_rotate__text=document.createElement('div');
		this._tt_stop_auto_rotate.className='ggskin ggskin_textdiv';
		this._tt_stop_auto_rotate.ggTextDiv=this._tt_stop_auto_rotate__text;
		this._tt_stop_auto_rotate.ggId="tt_stop_auto_rotate";
		this._tt_stop_auto_rotate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_stop_auto_rotate.ggVisible=false;
		this._tt_stop_auto_rotate.className='ggskin ggskin_text ';
		this._tt_stop_auto_rotate.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -55px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : 148px;';
		this._tt_stop_auto_rotate.setAttribute('style',hs);
		this._tt_stop_auto_rotate.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_stop_auto_rotate__text.setAttribute('style',hs);
		this._tt_stop_auto_rotate__text.innerHTML="\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043b\u0435\u043d\u0442\u0443 \u0444\u043e\u0442\u043e";
		this._tt_stop_auto_rotate.appendChild(this._tt_stop_auto_rotate__text);
		me._tt_stop_auto_rotate.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_stop_auto_rotate.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._tt_stop_auto_rotate.ggCurrentLogicStateVisible = -1;
		this._tt_stop_auto_rotate.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['button_2'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_stop_auto_rotate.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_stop_auto_rotate.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_stop_auto_rotate.style[domTransition]='';
				if (me._tt_stop_auto_rotate.ggCurrentLogicStateVisible == 0) {
					me._tt_stop_auto_rotate.style.visibility=(Number(me._tt_stop_auto_rotate.style.opacity)>0||!me._tt_stop_auto_rotate.style.opacity)?'inherit':'hidden';
					me._tt_stop_auto_rotate.ggVisible=true;
				}
				else {
					me._tt_stop_auto_rotate.style.visibility="hidden";
					me._tt_stop_auto_rotate.ggVisible=false;
				}
			}
		}
		this._tt_stop_auto_rotate.ggUpdatePosition=function () {
		}
		this._tt_stop_auto_rotate_white=document.createElement('div');
		this._tt_stop_auto_rotate_white__text=document.createElement('div');
		this._tt_stop_auto_rotate_white.className='ggskin ggskin_textdiv';
		this._tt_stop_auto_rotate_white.ggTextDiv=this._tt_stop_auto_rotate_white__text;
		this._tt_stop_auto_rotate_white.ggId="tt_stop_auto_rotate_white";
		this._tt_stop_auto_rotate_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_stop_auto_rotate_white.ggVisible=true;
		this._tt_stop_auto_rotate_white.className='ggskin ggskin_text ';
		this._tt_stop_auto_rotate_white.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		this._tt_stop_auto_rotate_white.setAttribute('style',hs);
		this._tt_stop_auto_rotate_white.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_stop_auto_rotate_white__text.setAttribute('style',hs);
		this._tt_stop_auto_rotate_white__text.innerHTML="\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043b\u0435\u043d\u0442\u0443 \u0444\u043e\u0442\u043e";
		this._tt_stop_auto_rotate_white.appendChild(this._tt_stop_auto_rotate_white__text);
		me._tt_stop_auto_rotate_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_stop_auto_rotate_white.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tt_stop_auto_rotate_white.ggUpdatePosition=function () {
		}
		this._tt_stop_auto_rotate.appendChild(this._tt_stop_auto_rotate_white);
		this._button_2.appendChild(this._tt_stop_auto_rotate);
		this.divSkin.appendChild(this._button_2);
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
			me._thumbnail_cloner.ggUpdate(me._thumbnail_cloner.ggTags);
		}
		this.divSkin.ggLoaded=function() {
		}
		this.divSkin.ggReLoaded=function() {
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.changeActiveNode=function(id) {
		me.ggUserdata=me.player.userdata;
		me._thumbnail_cloner.ggNodeChange();
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		me.ggCurrentTime=new Date().getTime();
		me._thumbnail_cloner.ggClonerCallChildFunctions('ggUpdateConditionTimer');
		if (me.elementMouseDown['button_image_right']) {
			me.player.changePanLog(-1,true);
		}
		if (me.elementMouseDown['button_image_left']) {
			me.player.changePanLog(1,true);
		}
		if (me.elementMouseDown['button_image_down']) {
			me.player.changeTiltLog(-1,true);
		}
		if (me.elementMouseDown['button_image_up']) {
			me.player.changeTiltLog(1,true);
		}
		if (me.elementMouseOver['stop_rotate_image']) {
		}
		me._tt_stop_auto_rotate0.ggUpdateConditionTimer();
		if (me.elementMouseOver['start_rotate_image']) {
		}
		me._tt_start_auto_rotate0.ggUpdateConditionTimer();
		if (me.elementMouseOver['button_1']) {
		}
		me._tt_start_auto_rotate.ggUpdateConditionTimer();
		if (me.elementMouseOver['button_2']) {
		}
		me._tt_stop_auto_rotate.ggUpdateConditionTimer();
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		{
			this.__div=document.createElement('div');
			this.__div.ggId="\u0421\u0442\u0440\u0435\u043b\u043a\u0430";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 252px;';
			hs+='position : absolute;';
			hs+='top : 316px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.player.openNext(me.hotspot.url,"$cur");
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._image_1=document.createElement('div');
			this._image_1__img=document.createElement('img');
			this._image_1__img.className='ggskin ggskin_image';
			this._image_1__img.setAttribute('src',basePath + 'images/image_1.png');
			this._image_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._image_1__img.className='ggskin ggskin_image';
			this._image_1__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_1__img);
			this._image_1.appendChild(this._image_1__img);
			this._image_1.ggId="Image 1";
			this._image_1.ggParameter={ rx:0,ry:0,a:180,sx:1,sy:1 };
			this._image_1.ggVisible=true;
			this._image_1.className='ggskin ggskin_image ';
			this._image_1.ggType='image';
			hs ='';
			hs+='height : 51px;';
			hs+='left : -25px;';
			hs+='position : absolute;';
			hs+='top : -29px;';
			hs+='visibility : inherit;';
			hs+='width : 51px;';
			this._image_1.setAttribute('style',hs);
			this._image_1.style[domTransform + 'Origin']='50% 50%';
			this._image_1.style[domTransform]=parameterToTransform(this._image_1.ggParameter);
			me._image_1.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._image_1.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._image_1.onmouseover=function () {
				me.elementMouseOver['image_1']=true;
			}
			this._image_1.onmouseout=function () {
				me._text_1.style[domTransition]='none';
				me._text_1.style.visibility='hidden';
				me._text_1.ggVisible=false;
				me.elementMouseOver['image_1']=false;
			}
			this._image_1.ontouchend=function () {
				me.elementMouseOver['image_1']=false;
			}
			this._image_1.ggUpdatePosition=function () {
			}
			this._text_1=document.createElement('div');
			this._text_1__text=document.createElement('div');
			this._text_1.className='ggskin ggskin_textdiv';
			this._text_1.ggTextDiv=this._text_1__text;
			this._text_1.ggId="Text 1";
			this._text_1.ggParameter={ rx:0,ry:0,a:180,sx:1,sy:1 };
			this._text_1.ggVisible=false;
			this._text_1.className='ggskin ggskin_text ';
			this._text_1.ggType='text';
			hs ='';
			hs+='height : 37px;';
			hs+='left : -38px;';
			hs+='position : absolute;';
			hs+='top : -47px;';
			hs+='visibility : hidden;';
			hs+='width : 130px;';
			this._text_1.setAttribute('style',hs);
			this._text_1.style[domTransform + 'Origin']='50% 50%';
			this._text_1.style[domTransform]=parameterToTransform(this._text_1.ggParameter);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 130px;';
			hs+='height: auto;';
			hs+='border: 0px solid #000000;';
			hs+='color: rgba(255,255,255,1);';
			hs+='text-align: center;';
			hs+='white-space: pre-wrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			hs+='overflow-y: auto;';
			this._text_1__text.setAttribute('style',hs);
			this._text_1.ggUpdateText=function() {
				var hs=me.ggUserdata.title;
				if (hs!=this.ggText) {
					this.ggText=hs;
					this.ggTextDiv.innerHTML=hs;
					if (this.ggUpdatePosition) this.ggUpdatePosition();
				}
			}
			me._text_1.ggUpdateText();
			this._text_1.appendChild(this._text_1__text);
			me._text_1.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._text_1.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._text_1.ggUpdatePosition=function () {
			}
			this._image_1.appendChild(this._text_1);
			this.__div.appendChild(this._image_1);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['image_1']) {
					me._text_1.style[domTransition]='none';
					me._text_1.style.visibility=(Number(me._text_1.style.opacity)>0||!me._text_1.style.opacity)?'inherit':'hidden';
					me._text_1.ggVisible=true;
				}
				me._text_1.ggUpdateText();
			}
			this.hotspotTimerEvent();
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	function SkinCloner_thumbnail_cloner_Class(nodeId, parent) {
		var me=this;
		this.skin=parent;
		this.player=this.skin.player;
		this.ggNodeId=nodeId;
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		this.__div=document.createElement('div');
		this.__div.setAttribute('style','position: absolute; left: 0px; top: 0px; width: 98px; height: 60px; visibility: inherit;');
		this.__div.ggIsActive = function() {
			return me.player.getCurrentNode()==me.ggNodeId;
		}
		this.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		this._thumbnail_nodeimage=document.createElement('div');
		this._thumbnail_nodeimage__img=document.createElement('img');
		this._thumbnail_nodeimage__img.className='ggskin ggskin_nodeimage';
		this._thumbnail_nodeimage__img.setAttribute('src',basePath + "images/thumbnail_nodeimage_" + nodeId + ".jpg");
		this._thumbnail_nodeimage.ggNodeId=nodeId;
		this._thumbnail_nodeimage__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._thumbnail_nodeimage__img.className='ggskin ggskin_nodeimage';
		this._thumbnail_nodeimage__img['ondragstart']=function() { return false; };
		this._thumbnail_nodeimage.appendChild(this._thumbnail_nodeimage__img);
		this._thumbnail_nodeimage.ggId="Thumbnail NodeImage";
		this._thumbnail_nodeimage.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._thumbnail_nodeimage.ggVisible=true;
		this._thumbnail_nodeimage.className='ggskin ggskin_nodeimage ';
		this._thumbnail_nodeimage.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		this._thumbnail_nodeimage.setAttribute('style',hs);
		this._thumbnail_nodeimage.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_nodeimage.ggIsActive=function() {
			return me.player.getCurrentNode()==this.ggElementNodeId();
		}
		me._thumbnail_nodeimage.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		this._thumbnail_nodeimage.onclick=function () {
			me.player.openNext("{"+me.ggNodeId+"}",me.player.hotspot.target);
		}
		this._thumbnail_nodeimage.ggUpdatePosition=function () {
		}
		this._checkmark_tick=document.createElement('div');
		this._checkmark_tick__img=document.createElement('img');
		this._checkmark_tick__img.className='ggskin ggskin_svg';
		this._checkmark_tick__img.setAttribute('src',basePath + 'images/checkmark_tick.svg');
		this._checkmark_tick__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._checkmark_tick__img['ondragstart']=function() { return false; };
		this._checkmark_tick.appendChild(this._checkmark_tick__img);
		this._checkmark_tick.ggId="checkmark_tick";
		this._checkmark_tick.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._checkmark_tick.ggVisible=false;
		this._checkmark_tick.className='ggskin ggskin_svg ';
		this._checkmark_tick.ggType='svg';
		hs ='';
		hs+='height : 26px;';
		hs+='left : 69px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : hidden;';
		hs+='width : 26px;';
		this._checkmark_tick.setAttribute('style',hs);
		this._checkmark_tick.style[domTransform + 'Origin']='50% 50%';
		me._checkmark_tick.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._checkmark_tick.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._checkmark_tick.ggCurrentLogicStateVisible = -1;
		this._checkmark_tick.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.player.nodeVisited(me._checkmark_tick.ggElementNodeId()) == true) || 
				(me._checkmark_tick.ggIsActive() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkmark_tick.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkmark_tick.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkmark_tick.style[domTransition]='';
				if (me._checkmark_tick.ggCurrentLogicStateVisible == 0) {
					me._checkmark_tick.style.visibility=(Number(me._checkmark_tick.style.opacity)>0||!me._checkmark_tick.style.opacity)?'inherit':'hidden';
					me._checkmark_tick.ggVisible=true;
				}
				else {
					me._checkmark_tick.style.visibility="hidden";
					me._checkmark_tick.ggVisible=false;
				}
			}
		}
		this._checkmark_tick.ggUpdatePosition=function () {
		}
		this._thumbnail_nodeimage.appendChild(this._checkmark_tick);
		this._thumbnail_active=document.createElement('div');
		this._thumbnail_active.ggId="Thumbnail Active";
		this._thumbnail_active.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._thumbnail_active.ggVisible=true;
		this._thumbnail_active.className='ggskin ggskin_rectangle ';
		this._thumbnail_active.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #d1d1d1;';
		hs+='height : 53px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 91px;';
		this._thumbnail_active.setAttribute('style',hs);
		this._thumbnail_active.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._thumbnail_active.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._thumbnail_active.onmouseover=function () {
			me.elementMouseOver['thumbnail_active']=true;
		}
		this._thumbnail_active.onmouseout=function () {
			me.elementMouseOver['thumbnail_active']=false;
		}
		this._thumbnail_active.ontouchend=function () {
			me.elementMouseOver['thumbnail_active']=false;
		}
		me._thumbnail_active.ggCurrentLogicStateBorderColor = -1;
		this._thumbnail_active.ggUpdateConditionTimer=function () {
			var newLogicStateBorderColor;
			if (
				(me._thumbnail_active.ggIsActive() == true)
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				(me.elementMouseOver['thumbnail_active'] == true)
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_active.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_active.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_active.style[domTransition]='border-color none';
				if (me._thumbnail_active.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_active.style.borderColor="rgba(255,255,255,1)";
				}
				else if (me._thumbnail_active.ggCurrentLogicStateBorderColor == 1) {
					me._thumbnail_active.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me._thumbnail_active.style.borderColor="rgba(209,209,209,1)";
				}
			}
		}
		this._thumbnail_active.ggUpdatePosition=function () {
		}
		this._thumbnail_nodeimage.appendChild(this._thumbnail_active);
		this.__div.appendChild(this._thumbnail_nodeimage);
	};
	this.addSkin();
};