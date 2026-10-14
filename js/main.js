document.documentElement.classList.add('js');
var RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* marquee */
(function(){
  var items=['Brand strategy','Social media','Content management','Paid ads','Copywriting',
             'Creative direction','Community growth','Influencer marketing'];
  var html=items.map(function(t){return '<span>'+t+'</span>';}).join('');
  document.getElementById('mq').innerHTML=html+html;
})();

/* role rotator */
(function(){
  var roles=['brand strategist','content manager','social media strategist','brand consultant'];
  var el=document.getElementById('rot'), i=0, j=roles[0].length, dir=-1;
  if(RM) return;
  setTimeout(function tick(){
    if(dir<0){ j--; if(j<=0){ dir=1; i=(i+1)%roles.length; } }
    else { j++; if(j>=roles[i].length){ dir=-1; el.textContent=roles[i];
      setTimeout(tick,1900); return; } }
    el.textContent=roles[i].slice(0,j);
    setTimeout(tick, dir<0?42:62);
  }, 2600);
})();

/* enter */
(function(){
  var btn=document.getElementById('enter');
  function go(){
    document.body.classList.add('entered');
    setTimeout(function(){ var n=document.getElementById('intro'); if(n) n.remove(); },1200);
  }
  btn.addEventListener('click',go);
})();

/* reveals */
(function(){
  var els=document.querySelectorAll('.rv');
  if(!('IntersectionObserver' in window)){
    els.forEach(function(e){e.classList.add('in');}); return;
  }
  var io=new IntersectionObserver(function(es){
    es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  },{rootMargin:'0px 0px -8% 0px',threshold:.08});
  els.forEach(function(e){io.observe(e);});
})();

/* counters */
(function(){
  var ns=document.querySelectorAll('.stat .n');
  var io=new IntersectionObserver(function(es){
    es.forEach(function(e){
      if(!e.isIntersecting) return;
      io.unobserve(e.target);
      var el=e.target, to=+el.dataset.to, suf=el.dataset.suf||'', t0=null;
      if(RM){ el.textContent=to+suf; return; }
      requestAnimationFrame(function step(t){
        if(!t0) t0=t;
        var p=Math.min((t-t0)/900,1), e2=1-Math.pow(1-p,3);
        el.textContent=Math.round(to*e2)+suf;
        if(p<1) requestAnimationFrame(step);
      });
    });
  },{threshold:.5});
  ns.forEach(function(n){io.observe(n);});
})();

/* skill bars */
(function(){
  var wrap=document.getElementById('bars');
  if(!wrap) return;
  var io=new IntersectionObserver(function(es){
    es.forEach(function(e){
      if(!e.isIntersecting) return;
      io.unobserve(e.target);
      wrap.querySelectorAll('.tr i').forEach(function(b,k){
        setTimeout(function(){ b.style.width=b.dataset.w+'%'; }, RM?0:k*80);
      });
    });
  },{threshold:.25});
  io.observe(wrap);
})();

/* story progress bar */
(function(){
  var ids=['top','about','services','work','experience','contact'];
  var names=['Intro','About','Services','Work','Experience','Contact'];
  var bar=document.getElementById('stories');
  bar.innerHTML=ids.map(function(id,k){
    return '<a class="seg" href="#'+id+'" title="'+names[k]+'" aria-label="'+names[k]+'"><i></i></a>';
  }).join('');
  var segs=[].slice.call(bar.querySelectorAll('.seg i'));
  function upd(){
    var y=window.scrollY+window.innerHeight*0.35;
    ids.forEach(function(id,k){
      var s=document.getElementById(id); if(!s) return;
      var top=s.offsetTop, h=s.offsetHeight;
      var p=(y-top)/h;
      segs[k].style.width=Math.max(0,Math.min(1,p))*100+'%';
    });
  }
  var tick=false;
  window.addEventListener('scroll',function(){
    if(tick) return; tick=true;
    requestAnimationFrame(function(){ upd(); tick=false; });
  },{passive:true});
  upd();
})();

/* copy email */
(function(){
  var p=document.getElementById('mailpill');
  var orig=p.textContent;
  function copy(){
    var t='cindeljully@gmail.com';
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(t).then(function(){
        p.textContent='Copied ✓';
        setTimeout(function(){p.textContent=orig;},1600);
      }).catch(select);
    } else select();
  }
  function select(){
    var r=document.createRange(); r.selectNodeContents(p);
    var s=window.getSelection(); s.removeAllRanges(); s.addRange(r);
  }
  p.addEventListener('click',copy);
  p.addEventListener('keydown',function(e){ if(e.key==='Enter'||e.key===' '){e.preventDefault();copy();} });
})();
