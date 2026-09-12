const teams = [
  {name:"McLaren", tag:"MCL", color:"#ff8700", drivers:[
    {name:"Lando Norris", number:1, nationality:"สหราชอาณาจักร", dob:"13 พฤศจิกายน 1999", debut:"2019", titles:1,
     bio:"Lando Norris เติบโตจากสายการแข่งขันรถยนต์เยาวชนของสหราชอาณาจักรและไต่ระดับผ่านรายการ junior ก่อนเข้าสู่ Formula 1 กับ McLaren ในปี 2019 เขาคว้าชัยชนะครั้งแรกที่ Miami Grand Prix 2024 และคว้าแชมป์โลกนักขับครั้งแรกในฤดูกาล 2025 ก่อนกลับมาป้องกันแชมป์กับ McLaren ในปี 2026.",
     highlights:["แชมป์โลก F1 ปี 2025","ชนะ F1 ครั้งแรกที่ Miami 2024","เป็นนักขับ McLaren ตั้งแต่ F1 debut"]},
    {name:"Oscar Piastri", number:81, nationality:"ออสเตรเลีย", dob:"6 เมษายน 2001", debut:"2023", titles:0,
     bio:"Oscar Piastri เป็นแชมป์ Formula 2 ปี 2021 และ Formula 3 ปี 2020 ก่อนก้าวสู่ F1 กับ McLaren ในปี 2023 เขาเป็นหนึ่งในนักขับรุ่นใหม่ที่เติบโตเร็วที่สุดและกลายเป็นคู่แข่งสำคัญในการลุ้นแชมป์ตั้งแต่ช่วงต้นอาชีพ.",
     highlights:["แชมป์ FIA Formula 2 ปี 2021","ชนะ F1 ครั้งแรกที่ Hungary 2024","ร่วมทีม McLaren กับ Norris ตั้งแต่ 2023"]}]},
  {name:"Ferrari", tag:"FER", color:"#e80000", drivers:[
    {name:"Charles Leclerc", number:16, nationality:"โมนาโก", dob:"16 ตุลาคม 1997", debut:"2018", titles:0,
     bio:"Charles Leclerc ผ่าน Ferrari Driver Academy และขึ้น F1 กับ Sauber ในปี 2018 ก่อนย้ายสู่ Ferrari ในปี 2019 เขาคว้าชัยชนะหลายสนามและกลายเป็นหนึ่งในนักขับหลักของทีมจาก Maranello.",
     highlights:["เข้าสู่ Ferrari ตั้งแต่ฤดูกาล 2019","คว้า pole positions จำนวนมากในยุคปัจจุบัน","เป็นนักขับโมนาโกคนสำคัญของ F1"]},
    {name:"Lewis Hamilton", number:44, nationality:"สหราชอาณาจักร", dob:"7 มกราคม 1985", debut:"2007", titles:7,
     bio:"Lewis Hamilton เปิดตัว F1 กับ McLaren ในปี 2007 และคว้าแชมป์โลกครั้งแรกในปีถัดมา ก่อนสร้างยุคแห่งความสำเร็จกับ Mercedes เขาคือหนึ่งในนักขับที่ประสบความสำเร็จที่สุดในประวัติศาสตร์ F1 และย้ายสู่ Ferrari ในปี 2025.",
     highlights:["แชมป์โลก 7 สมัย","ชัยชนะ F1 มากกว่า 100 ครั้ง","เปิดตัวกับ Ferrari ในปี 2025"]}]},
  {name:"Mercedes", tag:"MER", color:"#00d2be", drivers:[
    {name:"George Russell", number:63, nationality:"สหราชอาณาจักร", dob:"15 กุมภาพันธ์ 1998", debut:"2019", titles:0,
     bio:"George Russell เป็นสมาชิก Mercedes junior programme และเปิดตัว F1 กับ Williams ในปี 2019 ก่อนย้ายมา Mercedes ในปี 2022 เขาเป็นนักขับที่โดดเด่นด้านความเร็วรอบเดียวและการต่อสู้ในสนาม.",
     highlights:["แชมป์ GP3 ปี 2017 และ F2 ปี 2018","ย้ายสู่ Mercedes ในปี 2022","คว้าชัยชนะ F1 ครั้งแรกที่ São Paulo 2022"]},
    {name:"Andrea Kimi Antonelli", number:12, nationality:"อิตาลี", dob:"25 สิงหาคม 2006", debut:"2025", titles:0,
     bio:"Kimi Antonelli เป็นดาวรุ่งจากอิตาลีที่ Mercedes ผลักดันผ่านโปรแกรม junior เขาเปิดตัว F1 ในปี 2025 และพัฒนาขึ้นอย่างรวดเร็ว จนกลายเป็นหนึ่งในนักขับชั้นนำของฤดูกาล 2026.",
     highlights:["แชมป์ Formula Regional Europe 2022","แชมป์ Formula 2 ปี 2024","คว้าชัยชนะ Italian GP 2026"]}]},
  {name:"Red Bull Racing", tag:"RBR", color:"#3671c6", drivers:[
    {name:"Max Verstappen", number:3, nationality:"เนเธอร์แลนด์", dob:"30 กันยายน 1997", debut:"2015", titles:4,
     bio:"Max Verstappen เปิดตัว F1 กับ Toro Rosso ในปี 2015 ด้วยวัยเพียง 17 ปี ก่อนย้ายสู่ Red Bull Racing และกลายเป็นแชมป์โลก 4 สมัยติดต่อกันในช่วง 2021–2024 เขาเป็นที่รู้จักจากความเร็ว การดวลแบบดุดัน และการควบคุมรถระดับสูง.",
     highlights:["แชมป์โลก 4 สมัย (2021–2024)","ชนะ F1 ครั้งแรกที่ Spanish GP 2016","กลับมาใช้หมายเลข 3 หลัง Lando Norris คว้าแชมป์ 2025"]},
    {name:"Isack Hadjar", number:6, nationality:"ฝรั่งเศส", dob:"28 กันยายน 2004", debut:"2025", titles:0,
     bio:"Isack Hadjar เป็นนักขับฝรั่งเศสจาก Red Bull Junior Team เขาเปิดตัว F1 กับ Racing Bulls ในปี 2025 ก่อนเลื่อนขึ้นสู่ Red Bull Racing ในฤดูกาล 2026 เพื่อจับคู่กับ Max Verstappen.",
     highlights:["สมาชิก Red Bull Junior Team","เปิดตัว F1 ปี 2025","เลื่อนขึ้น Red Bull Racing ในปี 2026"]}]},
  {name:"Racing Bulls", tag:"VCARB", color:"#6692ff", drivers:[
    {name:"Liam Lawson", number:30, nationality:"นิวซีแลนด์", dob:"11 กุมภาพันธ์ 2002", debut:"2023", titles:0,
     bio:"Liam Lawson เป็นนักขับจากนิวซีแลนด์ใน Red Bull driver programme เขาเคยทำหน้าที่แทนใน F1 ก่อนเข้าสู่ Racing Bulls แบบเต็มฤดูกาล และยังคงพัฒนาตัวเองในทีมสำหรับฤดูกาล 2026.",
     highlights:["สมาชิก Red Bull Junior Team","เปิดตัว F1 ในปี 2023","แข่งขันให้ Racing Bulls ในปี 2026"]},
    {name:"Arvid Lindblad", number:41, nationality:"สหราชอาณาจักร", dob:"8 สิงหาคม 2007", debut:"2026", titles:0,
     bio:"Arvid Lindblad เป็นดาวรุ่งจาก Red Bull Junior Team ที่ไต่ระดับจาก karting และ single-seaters อย่างรวดเร็ว เขาก้าวขึ้นสู่ F1 กับ Racing Bulls ในปี 2026 และเป็น rookie เต็มฤดูกาลของกริดปีนี้.",
     highlights:["เติบโตจาก Red Bull Junior Team","แชมป์ Formula 3 ปี 2025","F1 rookie เต็มฤดูกาลปี 2026"]}]},
  {name:"Alpine", tag:"ALP", color:"#0090ff", drivers:[
    {name:"Pierre Gasly", number:10, nationality:"ฝรั่งเศส", dob:"7 กุมภาพันธ์ 1996", debut:"2017", titles:0,
     bio:"Pierre Gasly เป็นแชมป์ GP2 ปี 2016 และเข้าสู่ F1 กับ Toro Rosso ในปี 2017 เขาคว้าชัยชนะที่ Monza ในปี 2020 ซึ่งเป็นหนึ่งในชัยชนะที่น่าจดจำที่สุดของยุคใหม่ และเป็นแกนหลักของ Alpine.",
     highlights:["แชมป์ GP2 ปี 2016","ชนะ Italian GP 2020","นักขับ Alpine ตั้งแต่ 2023"]},
    {name:"Franco Colapinto", number:43, nationality:"อาร์เจนตินา", dob:"27 พฤษภาคม 2003", debut:"2024", titles:0,
     bio:"Franco Colapinto เป็นนักขับอาร์เจนตินาที่ก้าวขึ้นมาจาก Williams Academy เขาเปิดตัว F1 ในช่วงปลายปี 2024 และได้ที่นั่ง Alpine ในปี 2025 ก่อนแข่งขันต่อในปี 2026.",
     highlights:["นักขับอาร์เจนตินาคนแรกใน F1 ในรอบหลายปี","เปิดตัว F1 ปี 2024","แข่งขันกับ Alpine ในปี 2026"]}]},
  {name:"Audi", tag:"AUD", color:"#d8d8d8", drivers:[
    {name:"Gabriel Bortoleto", number:5, nationality:"บราซิล", dob:"14 ตุลาคม 2004", debut:"2025", titles:0,
     bio:"Gabriel Bortoleto เป็นดาวรุ่งบราซิลที่คว้าแชมป์ Formula 3 ปี 2023 และ Formula 2 ปี 2024 ก่อนขึ้น F1 เขาเริ่มต้นกับ Sauber และเป็นส่วนหนึ่งของโครงการ Audi เมื่อทีมเข้าสู่ยุคใหม่ในปี 2026.",
     highlights:["แชมป์ FIA Formula 3 ปี 2023","แชมป์ FIA Formula 2 ปี 2024","เป็นนักขับ Audi ในปี 2026"]},
    {name:"Nico Hülkenberg", number:27, nationality:"เยอรมนี", dob:"19 สิงหาคม 1987", debut:"2010", titles:0,
     bio:"Nico Hülkenberg เป็นนักขับเยอรมันมากประสบการณ์ เปิดตัว F1 ในปี 2010 และสร้างชื่อจากความเร็วรอบควอลิฟายรวมถึงผลงาน endurance racing เขาเข้าสู่ยุค Audi หลัง Sauber เปลี่ยนชื่อทีมในปี 2026.",
     highlights:["F1 debut ปี 2010","คว้า pole position ที่ Brazilian GP 2010","ประสบการณ์ F1 มากกว่าทศวรรษ"]}]},
  {name:"Williams", tag:"WIL", color:"#1868db", drivers:[
    {name:"Carlos Sainz", number:55, nationality:"สเปน", dob:"1 กันยายน 1994", debut:"2015", titles:0,
     bio:"Carlos Sainz เป็นนักขับสเปนที่ผ่าน Toro Rosso, Renault, McLaren และ Ferrari ก่อนย้ายสู่ Williams ในปี 2025 เขาโดดเด่นด้านความสม่ำเสมอ การอ่านเกม และความสามารถในการพัฒนารถ.",
     highlights:["F1 debut ปี 2015","ชนะ F1 ที่ Silverstone 2022","ย้ายสู่ Williams ในปี 2025"]},
    {name:"Alexander Albon", number:23, nationality:"ไทย", dob:"23 มีนาคม 1996", debut:"2019", titles:0,
     bio:"Alexander Albon เป็นนักขับไทย-อังกฤษที่เปิดตัว F1 กับ Toro Rosso ในปี 2019 และได้รับการเลื่อนสู่ Red Bull ในปีเดียวกัน ก่อนกลับมา F1 กับ Williams ในปี 2022 และกลายเป็นหัวใจสำคัญของทีม.",
     highlights:["F1 debut ปี 2019","ขึ้น Red Bull Racing ในปี 2019","นำทีม Williams ในยุคสร้างทีมใหม่"]}]},
  {name:"Cadillac", tag:"CAD", color:"#bcbcbc", drivers:[
    {name:"Sergio Pérez", number:11, nationality:"เม็กซิโก", dob:"26 มกราคม 1990", debut:"2011", titles:0,
     bio:"Sergio Pérez หรือ Checo เป็นนักขับเม็กซิโกที่มีประสบการณ์ยาวนานใน F1 เขาสร้างชื่อจากการจัดการยางและการแซง ก่อนกลับเข้าสู่กริดปี 2026 กับ Cadillac ซึ่งเป็นทีมใหม่ของ F1.",
     highlights:["F1 debut ปี 2011","ชนะ F1 ครั้งแรกที่ Sakhir 2020","กลับสู่กริดกับ Cadillac ในปี 2026"]},
    {name:"Valtteri Bottas", number:77, nationality:"ฟินแลนด์", dob:"28 สิงหาคม 1989", debut:"2013", titles:0,
     bio:"Valtteri Bottas เป็นนักขับฟินแลนด์ที่สร้างผลงานโดดเด่นกับ Williams และ Mercedes เขาคว้าชัยชนะหลายรายการและเป็นส่วนหนึ่งของยุคความสำเร็จของ Mercedes ก่อนกลับสู่กริดกับ Cadillac ในปี 2026.",
     highlights:["F1 debut ปี 2013","ชนะ F1 10 รายการ","รองแชมป์โลกปี 2019 และ 2020"]}]},
  {name:"Aston Martin", tag:"AMR", color:"#006f62", drivers:[
    {name:"Fernando Alonso", number:14, nationality:"สเปน", dob:"29 กรกฎาคม 1981", debut:"2001", titles:2,
     bio:"Fernando Alonso เป็นแชมป์โลก 2 สมัยจากปี 2005 และ 2006 และเป็นหนึ่งในนักขับที่มีประสบการณ์มากที่สุดในประวัติศาสตร์ F1 เขาผ่านหลายทีมระดับแถวหน้าและยังคงแข่งขันกับ Aston Martin ในปี 2026.",
     highlights:["แชมป์โลก 2 สมัย (2005, 2006)","ชนะ Le Mans 24 Hours สองครั้ง","หนึ่งในนักขับที่มีประสบการณ์มากที่สุดใน F1"]},
    {name:"Lance Stroll", number:18, nationality:"แคนาดา", dob:"29 ตุลาคม 1998", debut:"2017", titles:0,
     bio:"Lance Stroll เป็นนักขับแคนาดาที่เข้าสู่ F1 กับ Williams ในปี 2017 และคว้า podium ตั้งแต่ฤดูกาล rookie เขาเป็นนักขับหลักของ Aston Martin ตั้งแต่ทีมเปลี่ยนเข้าสู่แบรนด์ปัจจุบัน.",
     highlights:["F1 debut ปี 2017","podium ที่ Azerbaijan GP 2017","แข่งขันกับ Aston Martin ตั้งแต่ 2021"]}]},
  {name:"Haas F1 Team", tag:"HAS", color:"#b6b6b6", drivers:[
    {name:"Esteban Ocon", number:31, nationality:"ฝรั่งเศส", dob:"17 กันยายน 1996", debut:"2016", titles:0,
     bio:"Esteban Ocon เป็นนักขับฝรั่งเศสที่ผ่านโปรแกรม Mercedes junior และเปิดตัว F1 ในปี 2016 เขาคว้า podium และชัยชนะที่ Hungary 2021 ก่อนย้ายสู่ Haas ในปี 2025.",
     highlights:["F1 debut ปี 2016","คว้าชัยชนะ Hungarian GP 2021","เข้าร่วม Haas ในปี 2025"]},
    {name:"Oliver Bearman", number:87, nationality:"สหราชอาณาจักร", dob:"8 พฤษภาคม 2005", debut:"2024", titles:0,
     bio:"Oliver Bearman เป็นดาวรุ่งอังกฤษจาก Ferrari Driver Academy เขาเปิดตัว F1 แบบฉุกเฉินในปี 2024 และกลายเป็นนักขับเต็มฤดูกาลของ Haas ในปี 2025–2026.",
     highlights:["Ferrari Driver Academy","เปิดตัว F1 ปี 2024 กับ Ferrari","นักขับ Haas เต็มฤดูกาลตั้งแต่ 2025"]}]}
];


const races=[
['Australia','Melbourne','2026-03-08','15:00','16:00','12:30','09:30',''],
['China','Shanghai','2026-03-15','15:00','15:00','11:00','-', 'SPRINT'],
['Japan','Suzuka','2026-03-29','14:00','15:00','11:30','10:30',''],
['Miami','Miami','2026-05-03','16:00','16:00','12:30','12:00','SPRINT'],
['Canada','Montreal','2026-05-24','16:00','16:00','12:30','12:00','SPRINT'],
['Monaco','Monaco','2026-06-07','15:00','16:00','12:30','-', ''],
['Spain','Barcelona-Catalunya','2026-06-14','15:00','16:00','11:30','-', ''],
['Austria','Spielberg','2026-06-28','15:00','16:00','13:30','-', ''],
['Great Britain','Silverstone','2026-07-05','15:00','16:00','11:30','12:00','SPRINT'],
['Belgium','Spa-Francorchamps','2026-07-19','16:00','16:00','13:30','-', ''],
['Hungary','Budapest','2026-07-26','15:00','16:00','13:30','-', ''],
['Netherlands','Zandvoort','2026-08-23','15:00','16:00','11:30','12:00','SPRINT'],
['Italy','Monza','2026-09-06','15:00','16:00','12:30','-', ''],
['Spain','Madrid','2026-09-13','15:00','16:00','11:30','-', ''],
['Azerbaijan','Baku','2026-09-26','15:00','16:00','11:30','-', ''],
['Bahrain','Sepang','2026-10-04','20:00','21:00','16:30','-', ''],
['Singapore','Singapore','2026-10-11','20:00','21:00','17:30','17:00','SPRINT'],
['United States','Austin','2026-10-25','15:00','16:00','12:30','-', ''],
['Mexico','Mexico City','2026-11-01','14:00','15:00','11:30','-', ''],
['Brazil','São Paulo','2026-11-08','14:00','15:00','11:30','-', ''],
['United States','Las Vegas','2026-11-21','20:00','20:00','17:30','-', ''],
['Qatar','Lusail','2026-11-29','19:00','21:00','17:30','-', ''],
['Abu Dhabi','Yas Marina','2026-12-06','17:00','18:00','13:30','-', '']
].map((r,i)=>({country:r[0],venue:r[1],date:r[2],race:r[3],qualifying:r[4],fp1:r[5],sprint:r[6],fp3:r[5],round:i+1,type:r[7]}));

let use12=true;
const fmtTime=(v)=>{ if(!v || v==='-') return '—'; const [hh,mm]=v.split(':').map(Number); if(!use12) return `${String(hh).padStart(2,'0')}:${String(mm).padStart(2,'0')}`; const ap=hh>=12?'PM':'AM'; const h=hh%12||12; return `${h}:${String(mm).padStart(2,'0')} ${ap}`; };
const fmtDate=(v)=>new Intl.DateTimeFormat('th-TH',{day:'numeric',month:'short',year:'numeric'}).format(new Date(v+'T12:00:00'));
const circuitImages={
 'Melbourne':'https://commons.wikimedia.org/wiki/Special:Redirect/file/Albert_Park_Circuit.svg?width=1000',
 'Shanghai':'https://commons.wikimedia.org/wiki/Special:Redirect/file/Shanghai_International_Circuit.svg?width=1000',
 'Suzuka':'https://commons.wikimedia.org/wiki/Special:Redirect/file/Suzuka_circuit_map.svg?width=1000',
 'Sakhir':'https://commons.wikimedia.org/wiki/Special:Redirect/file/Bahrain_International_Circuit--Grand_Prix_Layout.svg?width=1000',
 'Jeddah':'https://commons.wikimedia.org/wiki/Special:Redirect/file/Jeddah_Corniche_Circuit.svg?width=1000',
 'Miami':'https://commons.wikimedia.org/wiki/Special:Redirect/file/Miami_International_Autodrome.svg?width=1000',
 'Montreal':'https://commons.wikimedia.org/wiki/Special:Redirect/file/Circuit_Gilles_Villeneuve.svg?width=1000',
 'Monaco':'https://commons.wikimedia.org/wiki/Special:Redirect/file/Circuit_de_Monaco.svg?width=1000',
 'Barcelona-Catalunya':'https://commons.wikimedia.org/wiki/Special:Redirect/file/Circuit_de_Barcelona-Catalunya.svg?width=1000',
 'Spielberg':'https://commons.wikimedia.org/wiki/Special:Redirect/file/Red_Bull_Ring.svg?width=1000',
 'Silverstone':'https://commons.wikimedia.org/wiki/Special:Redirect/file/Silverstone_Circuit.svg?width=1000',
 'Spa-Francorchamps':'https://commons.wikimedia.org/wiki/Special:Redirect/file/Circuit_de_Spa-Francorchamps.svg?width=1000',
 'Budapest':'https://commons.wikimedia.org/wiki/Special:Redirect/file/Hungaroring.svg?width=1000',
 'Zandvoort':'https://commons.wikimedia.org/wiki/Special:Redirect/file/Circuit_Zandvoort.svg?width=1000',
 'Monza':'https://commons.wikimedia.org/wiki/Special:Redirect/file/Monza_track_map.svg?width=1000',
 'Madrid':'https://commons.wikimedia.org/wiki/Special:Redirect/file/Madring_circuit_map.svg?width=1000',
 'Baku':'https://commons.wikimedia.org/wiki/Special:Redirect/file/Baku_Formula_1_circuit_map.svg?width=1000',
 'Singapore':'https://commons.wikimedia.org/wiki/Special:Redirect/file/Marina_Bay_Street_Circuit.svg?width=1000',
 'Austin':'https://commons.wikimedia.org/wiki/Special:Redirect/file/Circuit_of_the_Americas.svg?width=1000',
 'Mexico City':'https://commons.wikimedia.org/wiki/Special:Redirect/file/Autodromo_Hermanos_Rodriguez.svg?width=1000',
 'São Paulo':'https://commons.wikimedia.org/wiki/Special:Redirect/file/Interlagos.svg?width=1000',
 'Las Vegas':'https://commons.wikimedia.org/wiki/Special:Redirect/file/Las_Vegas_Street_Circuit.svg?width=1000',
 'Lusail':'https://commons.wikimedia.org/wiki/Special:Redirect/file/Lusail_International_Circuit.svg?width=1000',
 'Yas Marina':'https://commons.wikimedia.org/wiki/Special:Redirect/file/Yas_Marina_Circuit.svg?width=1000',
 'Sepang':'https://commons.wikimedia.org/wiki/Special:Redirect/file/Sepang_International_Circuit.svg?width=1000'
};
const circuitFallback=(venue)=>`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="600"><rect width="1200" height="600" fill="#101010"/><path d="M120 430 C180 100 420 120 470 300 S800 500 860 180 S1100 170 1080 430" fill="none" stroke="#e10600" stroke-width="18" stroke-linecap="round"/><path d="M120 430 C180 100 420 120 470 300 S800 500 860 180 S1100 170 1080 430" fill="none" stroke="#fff" stroke-width="4" stroke-dasharray="12 10"/><text x="60" y="80" fill="#fff" font-family="Arial" font-size="44" font-weight="700">${venue}</text><text x="60" y="125" fill="#888" font-family="Arial" font-size="22">F1 CIRCUIT</text></svg>`)}`;
const circuitSrc=(venue)=>circuitImages[venue]||circuitFallback(venue);
const circuitWiki={
 'Melbourne':'Albert Park Circuit','Shanghai':'Shanghai International Circuit','Suzuka':'Suzuka International Racing Course','Sakhir':'Bahrain International Circuit','Sepang':'Sepang International Circuit','Jeddah':'Jeddah Corniche Circuit','Miami':'Miami International Autodrome','Montreal':'Circuit Gilles Villeneuve','Monaco':'Circuit de Monaco','Barcelona-Catalunya':'Circuit de Barcelona-Catalunya','Spielberg':'Red Bull Ring','Silverstone':'Silverstone Circuit','Spa-Francorchamps':'Circuit de Spa-Francorchamps','Budapest':'Hungaroring','Zandvoort':'Circuit Zandvoort','Monza':'Monza Circuit','Madrid':'Madrid Grand Prix','Baku':'Baku City Circuit','Singapore':'Marina Bay Street Circuit','Austin':'Circuit of the Americas','Mexico City':'Autódromo Hermanos Rodríguez','São Paulo':'Interlagos Circuit','Las Vegas':'Las Vegas Strip Circuit','Lusail':'Lusail International Circuit','Yas Marina':'Yas Marina Circuit'
};
const teamLogoFallback={
 'McLaren':'MCL','Ferrari':'FER','Mercedes':'MER','Red Bull Racing':'RBR','Racing Bulls':'VCARB','Alpine':'ALP','Audi':'AUD','Williams':'WIL','Cadillac':'CAD','Aston Martin':'AMR','Haas F1 Team':'HAS'
};
const teamLogoColor={McLaren:'#ff8000',Ferrari:'#e10600',Mercedes:'#00d2be','Red Bull Racing':'#3671c6','Racing Bulls':'#6692ff',Alpine:'#2293d1',Audi:'#d8d8d8',Williams:'#64c4ff',Cadillac:'#f5f5f5','Aston Martin':'#006f62','Haas F1 Team':'#b6b6b6'};
function logoData(team){
 const code=teamLogoFallback[team]||'TEAM'; const color=teamLogoColor[team]||'#777';
 return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="160" viewBox="0 0 300 160"><rect width="300" height="160" rx="24" fill="#111"/><rect x="0" y="0" width="10" height="160" fill="${color}"/><text x="150" y="98" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="64" font-weight="900" fill="${color}">${code}</text></svg>`)}`;
}
const teamLogoUrl={
 'McLaren':'https://media.formula1.com/image/upload/c_fit,h_64/q_auto/v1740000001/common/f1/2025/mclaren/2025mclarenlogowhite.webp',
 'Ferrari':'https://media.formula1.com/image/upload/c_fit,h_64/q_auto/v1740000001/common/f1/2025/ferrari/2025ferrarilogolight.webp',
 'Mercedes':'https://media.formula1.com/image/upload/c_fit,h_64/q_auto/v1740000001/common/f1/2025/mercedes/2025mercedeslogowhite.webp',
 'Red Bull Racing':'https://media.formula1.com/image/upload/c_fit,h_64/q_auto/v1740000001/common/f1/2025/redbullracing/2025redbullracinglogowhite.webp',
 'Racing Bulls':'https://media.formula1.com/image/upload/c_fit,h_64/q_auto/v1740000001/common/f1/2025/racingbulls/2025racingbullslogowhite.webp',
 'Alpine':'https://media.formula1.com/image/upload/c_fit,h_64/q_auto/v1740000001/common/f1/2025/alpine/2025alpinelogowhite.webp',
 'Haas F1 Team':'https://media.formula1.com/image/upload/c_fit,h_64/q_auto/v1740000001/common/f1/2025/haas/2025haaslogowhite.webp',
 'Audi':'https://media.formula1.com/image/upload/c_fit,h_64/q_auto/v1740000001/common/f1/2026/audi/2026audilogowhite.webp',
 'Williams':'https://media.formula1.com/image/upload/c_fit,h_64/q_auto/v1740000001/common/f1/2025/williams/2025williamslogowhite.webp',
 'Aston Martin':'https://media.formula1.com/image/upload/c_fit,h_64/q_auto/v1740000001/common/f1/2025/astonmartin/2025astonmartinlogowhite.webp',
 'Cadillac':'https://media.formula1.com/image/upload/c_fit,h_64/q_auto/v1740000001/common/f1/2026/cadillac/2026cadillaclogowhite.webp'
};
const driverImage={
 'George Russell':'https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000001/common/f1/2026/mercedes/georus01/2026mercedesgeorus01right.webp',
 'Andrea Kimi Antonelli':'https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000001/common/f1/2026/mercedes/andant01/2026mercedesandant01right.webp',
 'Charles Leclerc':'https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000001/common/f1/2026/ferrari/chalec01/2026ferrarichalec01right.webp',
 'Lewis Hamilton':'https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000001/common/f1/2026/ferrari/lewham01/2026ferrarilewham01right.webp',
 'Lando Norris':'https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000001/common/f1/2026/mclaren/lannor01/2026mclarenlannor01right.webp',
 'Oscar Piastri':'https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000001/common/f1/2026/mclaren/oscpia01/2026mclarenoscpia01right.webp',
 'Max Verstappen':'https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000001/common/f1/2026/redbullracing/maxver01/2026redbullracingmaxver01right.webp',
 'Isack Hadjar':'https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000001/common/f1/2026/redbullracing/isahad01/2026redbullracingisahad01right.webp',
 'Liam Lawson':'https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000001/common/f1/2026/racingbulls/lialaw01/2026racingbullslialaw01right.webp',
 'Arvid Lindblad':'https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000001/common/f1/2026/racingbulls/arllin01/2026racingbullsarllin01right.webp',
 'Pierre Gasly':'https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000001/common/f1/2026/alpine/piegas01/2026alpinepiegas01right.webp',
 'Franco Colapinto':'https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000001/common/f1/2026/alpine/fracol01/2026alpinefracol01right.webp',
 'Esteban Ocon':'https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000001/common/f1/2026/haas/estoco01/2026haasestoco01right.webp',
 'Oliver Bearman':'https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000001/common/f1/2026/haas/olibea01/2026haasolibea01right.webp',
 'Nico Hülkenberg':'https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000001/common/f1/2026/audi/nichul01/2026audinichul01right.webp',
 'Gabriel Bortoleto':'https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000001/common/f1/2026/audi/gabbor01/2026audigabbor01right.webp',
 'Carlos Sainz':'https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000001/common/f1/2026/williams/carsai01/2026williamscarsai01right.webp',
 'Alexander Albon':'https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000001/common/f1/2026/williams/alealb01/2026williamsalealb01right.webp',
 'Fernando Alonso':'https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000001/common/f1/2026/astonmartin/feralo01/2026astonmartinferalo01right.webp',
 'Lance Stroll':'https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000001/common/f1/2026/astonmartin/lanstr01/2026astonmartinlanstr01right.webp',
 'Sergio Pérez':'https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000001/common/f1/2026/cadillac/serper01/2026cadillacserper01right.webp',
 'Valtteri Bottas':'https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000001/common/f1/2026/cadillac/valbot01/2026cadillacvalbot01right.webp'
};
async function wikiPageImage(title, size=800){
 try{
  const url='https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=thumbnail&pithumbsize='+size+'&origin=*&titles='+encodeURIComponent(title);
  const r=await fetch(url,{cache:'force-cache'}); if(!r.ok) throw new Error('image api');
  const j=await r.json(); const pages=j?.query?.pages||{}; const page=Object.values(pages)[0]; return page?.thumbnail?.source||'';
 }catch{return ''}
}
function imageFallback(img, fallback){img.onerror=()=>{img.onerror=null;img.src=fallback}};
async function loadImages(){
 document.querySelectorAll('img[data-wiki]').forEach(async img=>{
  const title=img.dataset.wiki; if(!title) return;
  const u=await wikiPageImage(title,800); if(u) img.src=u;
 });
}
function renderTeams(){
 const grid=document.getElementById('teamGrid');
 grid.innerHTML=teams.map((t,ti)=>`<article class="team-card" style="--team:${t.color}"><div class="team-top"><div><div class="team-name">${t.name}</div><div class="team-sub">${t.tag} • 2026</div></div><img class="team-logo" data-team-logo="${t.name}" alt="${t.name} logo" src="${teamLogoUrl[t.name]||logoData(t.name)}"></div><div class="team-buttons">${t.drivers.map((d,di)=>`<button class="driver-button" data-ti="${ti}" data-di="${di}"><img data-wiki="${d.name}" alt="${d.name}" src="${driverImage[d.name]||logoData(t.name)}"><span class="driver-info"><small>#${d.number}</small><b>${d.name}</b></span></button>`).join('')}<button class="team-button" data-team="${ti}">TEAM PROFILE →</button></div></article>`).join('');
 grid.querySelectorAll('.driver-button').forEach(b=>b.onclick=()=>openDriver(+b.dataset.ti,+b.dataset.di));
 grid.querySelectorAll('.team-button').forEach(b=>b.onclick=()=>openTeam(+b.dataset.team));
 grid.querySelectorAll('img.driver-button, img.team-logo').forEach(img=>img.addEventListener('error',()=>{img.onerror=null;img.src=logoData('TEAM')}));
 grid.querySelectorAll('.driver-button img').forEach(img=>img.addEventListener('error',()=>{img.onerror=null;const b=img.closest('.driver-button');const t=teams[+b.dataset.ti];img.src=logoData(t.name)}));
 }
const wikiTeam={McLaren:'McLaren',Ferrari:'Ferrari',Mercedes:'Mercedes', 'Red Bull Racing':'Red Bull Racing','Racing Bulls':'Racing Bulls',Alpine:'Alpine','Haas F1 Team':'Haas F1 Team',Audi:'Audi',Williams:'Williams','Aston Martin':'Aston Martin',Cadillac:'Cadillac'};
function openDriver(ti,di){let t=teams[ti],d=t.drivers[di];resetProfileActions();setHero(t.color,d.name,d.nationality,'DRIVER PROFILE');profileContent(d,t)}
function openTeam(ti){let t=teams[ti];setHero(t.color,t.name,'2026 CONSTRUCTOR','TEAM PROFILE');document.getElementById('driverTab').classList.remove('active');document.getElementById('teamTab').classList.add('active');renderTeamOnly(t)}
function setHero(color,name,meta,kicker){document.getElementById('profile').style.setProperty('--accent',color);document.getElementById('profileKicker').textContent=kicker;document.getElementById('profileName').textContent=name;document.getElementById('profileMeta').textContent=meta;document.getElementById('profileNumber').textContent='';document.getElementById('profilePhoto').src=logoData('TEAM');document.getElementById('modal').classList.add('show');document.body.style.overflow='hidden'}
function profileContent(d,t){document.getElementById('driverTab').classList.add('active');document.getElementById('teamTab').classList.remove('active');let p=document.getElementById('profilePhoto');p.src=driverImage[d.name]||logoData(t.name);document.getElementById('profileNumber').textContent='#'+d.number;document.getElementById('profileContent').innerHTML=`<section><h3>OVERVIEW</h3><p>${d.bio}</p></section><div class="profile-facts"><div class="fact"><small>NATIONALITY</small><b>${d.nationality}</b></div><div class="fact"><small>BIRTH</small><b>${d.dob}</b></div><div class="fact"><small>F1 DEBUT</small><b>${d.debut}</b></div><div class="fact"><small>WORLD TITLES</small><b>${d.titles}</b></div></div><section><h3>CAREER HIGHLIGHTS</h3><ul class="highlights">${d.highlights.map(x=>`<li class="highlight">${x}</li>`).join('')}</ul></section><section><h3>TEAM</h3><p>${t.name} • ${t.tag}</p></section>`}
function renderTeamOnly(t){
 const logo=teamLogoUrl[t.name]||logoData(t.name);
 const p=document.getElementById('profilePhoto');
 p.src=logo; p.alt=t.name+' logo'; p.onerror=()=>{p.onerror=null;p.src=logoData(t.name)};
 document.getElementById('profileNumber').textContent='';
 document.getElementById('driverTab').style.display='none';
 document.getElementById('teamTab').style.display='none';
 document.getElementById('profileContent').innerHTML=`<section class="team-profile"><div class="team-banner"><img src="${logo}" alt="${t.name} logo"><div><h3>${t.name}</h3><p>2026 CONSTRUCTOR • ${t.tag}</p></div></div><div class="team-car"><div class="team-car-mark" style="--team:${t.color}">${t.tag}</div></div><div class="team-stats"><div class="team-stat"><small>DRIVERS</small><b>${t.drivers.map(d=>d.name).join(' / ')}</b></div><div class="team-stat"><small>TEAM CODE</small><b>${t.tag}</b></div><div class="team-stat"><small>2026 GRID</small><b>ACTIVE</b></div></div><p class="team-history">นี่คือหน้า <b>Team Profile</b> โดยเฉพาะ ไม่มี Overview หรือ Career Highlights ของนักแข่งมาปนกับข้อมูลทีม</p></section>`;
}
function resetProfileActions(){document.getElementById('driverTab').style.display='inline-block';document.getElementById('teamTab').style.display='inline-block';}

document.getElementById('driverTab').onclick=()=>{let name=document.getElementById('profileName').textContent;let found=null;teams.forEach((t,ti)=>t.drivers.forEach((d,di)=>{if(d.name===name)found=[ti,di]}));if(found)openDriver(...found)};document.getElementById('teamTab').onclick=()=>{let name=document.getElementById('profileName').textContent;let ti=teams.findIndex(t=>t.name===name);if(ti>=0)openTeam(ti)};
document.querySelectorAll('[data-close]').forEach(x=>x.onclick=closeModal);document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});function closeModal(){document.getElementById('modal').classList.remove('show');document.body.style.overflow=''}
function renderSchedule(){
 const sg=document.getElementById('scheduleGrid');
 sg.innerHTML=races.map(r=>`<article class="race-card" data-date="${r.date}"><img class="circuit-img" data-circuit="${circuitWiki[r.venue]||r.venue}" src="${circuitSrc(r.venue)}" alt="${r.venue} circuit"><div class="race-body"><div class="round">ROUND ${String(r.round).padStart(2,'0')}${r.type?'<span class="sprint"> '+r.type+'</span>':''}</div><div class="race-name">${r.country} • ${r.venue}</div><div class="race-date">${fmtDate(r.date)}</div><div class="sessions"><div class="session"><span>FP1</span><b>${fmtTime(r.fp1)}</b></div><div class="session"><span>FP3</span><b>${fmtTime(r.fp3)}</b></div><div class="session"><span>Q</span><b>${fmtTime(r.qualifying)}</b></div><div class="session ${r.type?'sprint':''}"><span>${r.type?'SP':'R'}</span><b>${fmtTime(r.type?r.sprint:r.race)}</b></div></div><div class="status" data-status></div></div></article>`).join('');
 sg.querySelectorAll('.circuit-img').forEach(img=>img.addEventListener('error',()=>{img.onerror=null;img.src=circuitFallback(img.alt.replace(' circuit',''))}));
 updateCountdown();
}

function updateCountdown(){let now=new Date();let upcoming=races.map(r=>({...r,dt:new Date(r.date+'T'+r.race+':00') ,d:new Date(r.date+'T12:00:00')})).find(r=>r.dt>now);if(!upcoming)return;let diff=upcoming.dt-now;let card=[...document.querySelectorAll('.race-card')].find(x=>x.dataset.date===upcoming.date);let days=Math.floor(diff/86400000),hours=Math.floor(diff%86400000/3600000),mins=Math.floor(diff%3600000/60000),secs=Math.floor(diff%60000/1000);let text=days>0?`${days}d ${String(hours).padStart(2,'0')}h ${String(mins).padStart(2,'0')}m`:diff>86400000?`${Math.ceil(diff/3600000)}h`:`${String(hours).padStart(2,'0')}:${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')}`;document.getElementById('nextRace').innerHTML=`<div class="next-main"><div><div class="eyebrow">NEXT GRAND PRIX</div><h3>${upcoming.country} • ${upcoming.venue}</h3><div>${fmtDate(upcoming.date)} • Race ${fmtTime(upcoming.race)}</div></div><div class="countdown">${text}</div></div>`;if(card){card.classList.toggle('live',diff<3600000);card.querySelector('[data-status]').innerHTML=diff<3600000?'<span class="live-badge">● LIVE SOON</span>':''}}
renderTeams();
renderSchedule();
setInterval(updateCountdown,1000);
timeFormat.addEventListener('click',()=>{use12=!use12;timeFormat.textContent=use12?'12-HOUR':'24-HOUR';renderSchedule()});
document.getElementById('historyNav').addEventListener('click',()=>document.getElementById('history').scrollIntoView({behavior:'smooth'}));
document.getElementById('seasonNav').textContent=`2026 SEASON • ${races.length} ROUNDS`;document.getElementById('seasonNav').addEventListener('click',()=>document.getElementById('schedule').scrollIntoView({behavior:'smooth'}));
const teamsHeading=document.querySelector('#history h2');
const seasonHeading=document.querySelector('#schedule h2');
[teamsHeading,seasonHeading].forEach((h)=>{if(h){h.classList.add('clickable-heading');h.setAttribute('role','button');h.tabIndex=0;h.onclick=()=>document.getElementById(h===seasonHeading?'schedule':'history').scrollIntoView({behavior:'smooth'});h.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();h.click();}}}});

