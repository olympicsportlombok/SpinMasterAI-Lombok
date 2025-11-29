
import { PlayerStyle, Technique, HandDominance, SwingSpeed, Level, BladeFeel, Experience } from './types';

export const BLADE_DATABASE = [
  "Butterfly Sardius (Power: 5/5, Control: 1/5, Sangat kencang, kaku, sulit dikontrol. Level: Jago)",
  "Butterfly Zhang Jike ALC (Power: 4/5, Control: 3/5, Kencang, stabil, touch baik. Level: Menengah/Jago)",
  "DHS Hurricane Long 5 (Power: 5/5, Control: 3/5, Dual-speed, power loop. Level: Jago)",
  "Donic New Impuls 7.5 (Power: 3/5, Control: 3/5, 7-ply all-wood, cepat tapi empuk. Level: Menengah)",
  "Donic Skachkov Carbon (Power: 5/5, Control: 2/5, Sangat kencang, kaku, ofensif murni. Level: Jago)",
  "Donic Waldner Blackdevil (Power: 4/5, Control: 3/5, Kencang dan ringan, inti balsa. Level: Menengah)",
  "Donic Waldner Legend (Power: 3/5, Control: 4/5, Klasik 5-ply all-wood, feel bagus. Level: Menengah)",
  "Doublefish Athlon 1 (Power: 3/5, Control: 3/5, Ofensif, kaku. Level: Menengah)",
  "Doublefish Dragon Blade 1 (Power: 2/5, Control: 4/5, All-round, kontrol. Level: Pemula/Menengah)",
  "Doublefish Dragon Blade 2 (Power: 3/5, Control: 4/5, All-round+, sedikit lebih cepat. Level: Menengah)",
  "Doublefish King Power (Power: 4/5, Control: 2/5, Kencang, power 5+2 Carbon. Level: Menengah)",
  "Doublefish King Speed (Power: 5/5, Control: 2/5, Sangat kencang. Level: Menengah/Jago)",
  "Joola Classic Carbon (Power: 4/5, Control: 3/5, Ofensif, kaku, sweet spot besar. Level: Menengah)",
  "Joola Santoru KLC Inner (Power: 4/5, Control: 3/5, Fleksibel, spin tinggi, inner carbon. Level: Menengah/Jago)",
  "Joola Tezzo Guardian (Power: 2/5, Control: 5/5, Defensif/All-round, kontrol tinggi. Level: Pemula/Menengah)",
  "Joola Tezzo Spartan (Power: 3/5, Control: 4/5, Ofensif all-wood, feel baik. Level: Menengah)",
  "Joola Zelebro PBO-C (Power: 5/5, Control: 2/5, Sangat cepat, kaku, outer PBO-C. Level: Jago)",
  "Joola Zhou Ji Hao Hyper Ary 90 (Power: 5/5, Control: 1/5, Sangat kencang, tebal 9mm Hinoki. Level: Jago)",
  "Kokutaku Graphene Carbon (Power: 4/5, Control: 3/5, Kaku, kencang. Level: Menengah/Jago)",
  "Kokutaku Graphene ZC Grid (Power: 5/5, Control: 2/5, Sangat kaku, power murni. Level: Jago)",
  "Nittaku DHS H30i NXD (Power: 4/5, Control: 3/5, Inner composite, spin, power. Level: Jago)",
  "Nittaku Ease Carbon (Power: 3/5, Control: 4/5, All-round serang, ringan, mudah dikontrol. Level: Pemula/Menengah)",
  "Nittaku Flyatt Carbon (Power: 4/5, Control: 3/5, Cepat tapi ringan, kontrol baik. Level: Menengah)",
  "Nittaku Gyo En (Power: 4/5, Control: 3/5, 5-ply all-wood, serang, feel solid. Level: Menengah)",
  "Nittaku So Ten (Power: 4/5, Control: 3/5, 7-ply kayu murni, kencang. Level: Menengah/Jago)",
  "Nittaku Tribus Carbon (Power: 4/5, Control: 4/5, Inner carbon, seimbang, dwell time baik. Level: Menengah/Jago)",
  "Sanwei 1091 (Power: 2/5, Control: 4/5, All-round, kontrol. Level: Pemula)",
  "Sanwei C&C (Power: 4/5, Control: 3/5, Hinoki-Carbon, kencang, touch empuk. Level: Menengah/Jago)",
  "Sanwei Future Carbon (Power: 3/5, Control: 3/5, Ofensif karbon, harga terjangkau. Level: Menengah)",
  "Sanwei J (Power: 2/5, Control: 4/5, All-round, sangat dasar. Level: Pemula)",
  "Sanwei T5000 (Power: 5/5, Control: 2/5, Kaku, sangat kencang. Level: Jago)",
  "Stiga Carbonado 145 (Power: 5/5, Control: 2/5, Sangat kencang, kaku, trayektori tinggi. Level: Jago)",
  "Stiga Carbonado 45 (Power: 4/5, Control: 3/5, Kencang tapi fleksibel, spin tinggi. Level: Menengah/Jago)",
  "Stiga Clipper CR (Power: 4/5, Control: 3/5, Ofensif klasik 7-ply all-wood, stabil. Level: Menengah/Jago)",
  "Stiga Dynasty Carbon (Power: 5/5, Control: 2/5, Sangat kencang, touch lembut. Level: Jago)",
  "Stiga Ebenholz NCT V (Power: 4/5, Control: 3/5, 5-ply kayu eksotis, kencang, feel jernih. Level: Jago)",
  "Stiga Legacy Carbon (Power: 5/5, Control: 2/5, Sangat kencang, kaku, power serang. Level: Jago)",
  "Tmount Hyper Carbon F720 (Power: 4/5, Control: 3/5, Ofensif, 7-ply+carbon. Level: Menengah/Jago)",
  "Tmount Hyper Carbon T560 (Power: 4/5, Control: 3/5, Ofensif, 5-ply+carbon. Level: Menengah)",
  "Tmount KTS 740 (Power: 3/5, Control: 4/5, All-round+. Level: Menengah)",
  "Tmount KTS 760 (Power: 4/5, Control: 3/5, Ofensif. Level: Menengah)",
  "Tmount KTS 920 (Power: 4/5, Control: 2/5, Ofensif+. Level: Menengah/Jago)",
  "Tmount KTS Fury LC (Power: 4/5, Control: 3/5, Inner Carbon, spin, kontrol. Level: Menengah/Jago)",
  "TSP Swat Power (Power: 4/5, Control: 3/5, 7-ply kayu, power serang. Level: Menengah/Jago)",
  "Victas Firefall AC (Power: 4/5, Control: 3/5, Outer AC, kencang, stabil. Level: Menengah)",
  "Victas Firefall HC (Power: 5/5, Control: 2/5, Hinoki-Carbon, sangat kencang. Level: Jago)",
  "Victas Firefall SC (Power: 4/5, Control: 3/5, Kencang, kaku, power. Level: Menengah/Jago)",
  "Victas Koji Matsushita (Power: 1/5, Control: 5/5, Defensif murni, lambat, kontrol maksimal. Level: Menengah/Jago)",
  "Victas Koki Niwa All Wood (Power: 4/5, Control: 3/5, 7-ply kayu, ofensif cepat. Level: Menengah/Jago)",
  "Victas Koki Niwa DSE (Power: 4/5, Control: 3/5, Inner carbon, seimbang. Level: Jago)",
  "Victas Quartet Carbon (Power: 5/5, Control: 2/5, Sangat kaku, sangat kencang. Level: Jago)",
  "XIOM 36.5 ALX (Power: 4/5, Control: 3/5, Kencang, fleksibel, outer ALC. Level: Menengah/Jago)",
  "XIOM 36.5 ALXi (Power: 4/5, Control: 4/5, Inner ALC, fleksibel, spin tinggi. Level: Menengah/Jago)",
  "XIOM Axelo (Power: 5/5, Control: 2/5, Hinoki-Carbon, tebal, sangat kencang. Level: Jago)",
  "XIOM AZX ICE CREAM (Power: 5/5, Control: 3/5, Dua sisi beda ALC/ZLC. Level: Jago)",
  "XIOM Cho Dae Song (Power: 4/5, Control: 3/5, Outer ALC, kencang, stabil. Level: Menengah/Jago)",
  "XIOM Hayabusa ARX (Power: 4/5, Control: 4/5, Aramid-Carbon, feel empuk. Level: Menengah/Jago)",
  "XIOM Hayabusa ZL Pro (Power: 5/5, Control: 2/5, Zylon, sangat kencang. Level: Jago)",
  "XIOM Hayabusa ZLX (Power: 5/5, Control: 2/5, Zylon-Carbon, kencang, kaku. Level: Jago)",
  "XIOM Strato (Power: 4/5, Control: 3/5, Outer ALC, kencang, feel klasik. Level: Menengah/Jago)"
];

export const STEPS = [
  {
    id: 'style',
    question: "Apa gaya bermain utama Anda?",
    options: Object.values(PlayerStyle)
  },
  {
    id: 'technique',
    question: "Teknik apa yang paling sering Anda andalkan untuk mencetak poin?",
    options: Object.values(Technique)
  },
  {
    id: 'dominance',
    question: "Sisi mana yang lebih dominan saat menyerang?",
    options: Object.values(HandDominance)
  },
  {
    id: 'swingSpeed',
    question: "Seberapa cepat ayunan tangan (swing) Anda?",
    options: Object.values(SwingSpeed)
  },
  {
    id: 'experience',
    question: "Berapa lama Anda sudah bermain tenis meja?",
    options: Object.values(Experience)
  },
  {
    id: 'level',
    question: "Bagaimana Anda menilai level permainan Anda saat ini?",
    options: Object.values(Level)
  },
  {
    id: 'feel',
    question: "Preferensi rasa pantulan (feel) bola pada bet?",
    options: Object.values(BladeFeel)
  }
];
