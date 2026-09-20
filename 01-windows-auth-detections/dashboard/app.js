const events=[
  ['10:01–10:04','Six distinct account failures','DC01 · 10.10.20.55 · Event ID 4625'],
  ['10:05','Password-spray alert created','Threshold met: 6 accounts in a five-minute window'],
  ['10:07','RDP success as maria.chen','FIN-WS-12 · LogonType 10 · same source IP','success'],
  ['10:11','VPN watchlist check returns no match','10.10.20.55 is not approved AFW-REMOTE egress'],
  ['10:16','User verification denies activity','Maria confirmed she was working from the Berlin office'],
  ['10:21','Containment completed in lab','Account disabled, cloud sessions revoked, endpoint isolated','success']
];
document.querySelector('#events').innerHTML=events.map(([time,title,detail,level])=>`<div class="event ${level||''}"><time>${time}</time><span class="bullet"></span><div><strong>${title}</strong><p>${detail}</p></div></div>`).join('');
const dialog=document.querySelector('#caseDialog');
document.querySelector('#showEvidence').onclick=()=>dialog.showModal();
document.querySelector('.close').onclick=()=>dialog.close();
document.querySelector('#export').onclick=()=>alert('Case summary prepared: AFW-SOC-2026-0918-014\nClassification: High · Probable account compromise');
