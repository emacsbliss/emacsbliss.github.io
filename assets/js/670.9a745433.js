"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[670,7331],{670:(t,e,s)=>{s.r(e),s.d(e,{YouTubeProvider:()=>c});var i=s(4487),o=s(5122),r=s(3362),a=s(5587),n=s(7331);class c extends a.h{$$PROVIDER_TYPE="YOUTUBE";scope=(0,i.Ds)();#t;#e=(0,i.O)("");#s=-1;#i=null;#o=-1;#r=!1;#a=new Map;constructor(t,e){super(t),this.#t=e}language="en";color="red";cookies=!1;get currentSrc(){return this.#i}get type(){return"youtube"}get videoId(){return this.#e()}preconnect(){(0,r.kZ)(this.getOrigin())}setup(){super.setup(),(0,i.QZ)(this.#n.bind(this)),this.#t.notify("provider-setup",this)}destroy(){this.#c();for(const t of this.#a.values())for(const{reject:e}of t)e("provider destroyed");this.#a.clear()}async play(){return this.#d("playVideo")}#h(t){this.#u("playVideo")?.reject(t)}async pause(){return this.#d("pauseVideo")}#l(t){this.#u("pauseVideo")?.reject(t)}setMuted(t){t?this.#d("mute"):this.#d("unMute")}setCurrentTime(t){this.#d("seekTo",t),this.#t.notify("seeking",t)}setVolume(t){this.#d("setVolume",100*t)}setPlaybackRate(t){this.#d("setPlaybackRate",t)}async loadSource(t){if(!(0,i.Kg)(t.src))return this.#i=null,void this.#e.set("");const e=(0,n.resolveYouTubeVideoId)(t.src);this.#e.set(e??""),this.#i=t}getOrigin(){return this.cookies?"https://www.youtube.com":"https://www.youtube-nocookie.com"}#n(){this.#c();const t=this.#e();t?(this.src.set(`${this.getOrigin()}/embed/${t}`),this.#t.notify("load-start")):this.src.set("")}buildParams(){const{keyDisabled:t}=this.#t.$props,{muted:e,playsInline:s,nativeControls:i}=this.#t.$state,o=i();return{rel:0,autoplay:0,cc_lang_pref:this.language,cc_load_policy:o?1:void 0,color:this.color,controls:o?1:0,disablekb:!o||t()?1:0,enablejsapi:1,fs:1,hl:this.language,iv_load_policy:o?1:3,mute:e()?1:0,playsinline:s()?1:0}}#d(t,e){let s=(0,i.vI)(),o=this.#a.get(t);return o||this.#a.set(t,o=[]),o.push(s),this.postMessage({event:"command",func:t,args:e?[e]:void 0}),s.promise}onLoad(){window.setTimeout((()=>this.postMessage({event:"listening"})),100)}#p(t){this.#t.notify("loaded-metadata"),this.#t.notify("loaded-data"),this.#t.delegate.ready(void 0,t)}#g(t){this.#u("pauseVideo")?.resolve(),this.#t.notify("pause",void 0,t)}#m(t,e){const{duration:s,realCurrentTime:i}=this.#t.$state,o=0===this.#s,r=o?s():t;this.#t.notify("time-change",r,e),!o&&Math.abs(r-i())>1&&this.#t.notify("seeking",r,e)}#y(t,e,s){const i={buffered:new o.zJ(0,t),seekable:e};this.#t.notify("progress",i,s);const{seeking:r,realCurrentTime:a}=this.#t.$state;r()&&t>a()&&this.#f(s)}#f(t){const{paused:e,realCurrentTime:s}=this.#t.$state;window.clearTimeout(this.#o),this.#o=window.setTimeout((()=>{this.#t.notify("seeked",s(),t),this.#o=-1}),e()?100:0)}#v(t){const{seeking:e}=this.#t.$state;e()&&this.#f(t),this.#t.notify("pause",void 0,t),this.#t.notify("end",void 0,t)}#b(t,e){const{paused:s,seeking:i}=this.#t.$state,o=1===t,r=3===t,a=this.#k("playVideo"),n=s()&&(r||o);if(r&&this.#t.notify("waiting",void 0,e),i()&&o&&this.#f(e),this.#r&&o)return this.pause(),this.#r=!1,void this.setMuted(this.#t.$state.muted());if(!a&&n)return this.#r=!0,void this.setMuted(!0);switch(n&&(this.#u("playVideo")?.resolve(),this.#t.notify("play",void 0,e)),t){case 5:this.#p(e);break;case 1:this.#t.notify("playing",void 0,e);break;case 2:this.#g(e);break;case 0:this.#v(e)}this.#s=t}onMessage({info:t},e){if(!t)return;const{title:s,intrinsicDuration:r,playbackRate:a}=this.#t.$state;if((0,i.Gv)(t.videoData)&&t.videoData.title!==s()&&this.#t.notify("title-change",t.videoData.title,e),(0,i.Et)(t.duration)&&t.duration!==r()){if((0,i.Et)(t.videoLoadedFraction)){const s=t.progressState?.loaded??t.videoLoadedFraction*t.duration,i=new o.zJ(0,t.duration);this.#y(s,i,e)}this.#t.notify("duration-change",t.duration,e)}if((0,i.Et)(t.playbackRate)&&t.playbackRate!==a()&&this.#t.notify("rate-change",t.playbackRate,e),t.progressState){const{current:s,seekableStart:i,seekableEnd:a,loaded:n,duration:c}=t.progressState;this.#m(s,e),this.#y(n,new o.zJ(i,a),e),c!==r()&&this.#t.notify("duration-change",c,e)}if((0,i.Et)(t.volume)&&(0,i.Lm)(t.muted)&&!this.#r){const s={muted:t.muted,volume:t.volume/100};this.#t.notify("volume-change",s,e)}(0,i.Et)(t.playerState)&&t.playerState!==this.#s&&this.#b(t.playerState,e)}#c(){this.#s=-1,this.#o=-1,this.#r=!1}#u(t){return this.#a.get(t)?.shift()}#k(t){return Boolean(this.#a.get(t)?.length)}}},5587:(t,e,s)=>{s.d(e,{h:()=>r});var i=s(4487),o=s(3362);class r{#w;src=(0,i.O)("");referrerPolicy=null;get iframe(){return this.#w}constructor(t){this.#w=t,t.setAttribute("frameBorder","0"),t.setAttribute("aria-hidden","true"),t.setAttribute("allow","autoplay; fullscreen; encrypted-media; picture-in-picture; accelerometer; gyroscope"),null!==this.referrerPolicy&&t.setAttribute("referrerpolicy",this.referrerPolicy)}setup(){(0,i.k6)(window,"message",this.#x.bind(this)),(0,i.k6)(this.#w,"load",this.onLoad.bind(this)),(0,i.QZ)(this.#P.bind(this))}#P(){const t=this.src();if(!t.length)return void this.#w.setAttribute("src","");const e=(0,i.se)((()=>this.buildParams()));this.#w.setAttribute("src",(0,o.xF)(t,e))}postMessage(t,e){this.#w.contentWindow?.postMessage(JSON.stringify(t),e??"*")}#x(t){const e=this.getOrigin();if(!(null!==t.source&&t.source!==this.#w?.contentWindow||(0,i.Kg)(e)&&e!==t.origin)){try{const e=JSON.parse(t.data);return void(e&&this.onMessage(e,t))}catch(t){}t.data&&this.onMessage(t.data,t)}}}},7331:(t,e,s)=>{s.d(e,{findYouTubePoster:()=>n,resolveYouTubeVideoId:()=>a});const i=/(?:youtu\.be|youtube|youtube\.com|youtube-nocookie\.com)(?:\/shorts)?\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|)((?:\w|-){11})/,o=new Map,r=new Map;function a(t){return t.match(i)?.[1]}async function n(t,e){if(o.has(t))return o.get(t);if(r.has(t))return r.get(t);const s=new Promise((async s=>{const i=["maxresdefault","sddefault","hqdefault"];for(const r of i)for(const i of[!0,!1]){const a=c(t,r,i);if((await fetch(a,{mode:"no-cors",signal:e.signal})).status<400)return o.set(t,a),void s(a)}})).catch((()=>"")).finally((()=>r.delete(t)));return r.set(t,s),s}function c(t,e,s){return`https://i.ytimg.com/${s?"vi_webp":"vi"}/${t}/${e}.${s?"webp":"jpg"}`}}}]);