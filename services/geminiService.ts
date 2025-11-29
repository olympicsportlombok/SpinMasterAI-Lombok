
import { GoogleGenAI, Type, Schema } from "@google/genai";
import { UserProfile, AnalysisResult } from '../types';
import { BLADE_DATABASE } from '../constants';

const apiKey = process.env.API_KEY || '';

const genAI = new GoogleGenAI({ apiKey });

const analysisSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    summary: {
      type: Type.STRING,
      description: "Ringkasan analisis gaya bermain user dalam Bahasa Indonesia.",
    },
    mainRecommendation: {
      type: Type.OBJECT,
      properties: {
        name: { type: Type.STRING, description: "Nama Blade lengkap persis seperti di database." },
        description: { type: Type.STRING, description: "Deskripsi singkat blade." },
        technicalReasoning: { type: Type.STRING, description: "Alasan teknis lengkap mengapa cocok." }
      },
      required: ["name", "description", "technicalReasoning"]
    },
    alternatives: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING, description: "Nama blade persis seperti di database." },
          reasoning: { type: Type.STRING, description: "Alasan singkat." }
        },
        required: ["name", "reasoning"]
      }
    },
    rubberPairing: {
      type: Type.STRING,
      description: "Saran pairing tipe rubber (tanpa menyebut harga).",
    },
    proTips: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: "2-3 tips tambahan sesuai gaya bermain."
    }
  },
  required: ["summary", "mainRecommendation", "alternatives", "rubberPairing", "proTips"]
};

export const analyzeProfile = async (profile: UserProfile): Promise<AnalysisResult> => {
  const modelId = "gemini-2.5-flash"; // Using flash for speed
  
  const systemInstruction = `
    Kamu adalah AI rekomendasi bet pingpong profesional untuk toko "Olympic Sport Lombok".
    
    Tugasmu adalah menganalisis gaya bermain pengguna dan mencocokkannya HANYA dengan blade yang tersedia dalam DATABASE STOCK di bawah ini.
    
    DATABASE STOCK (SANGAT KETAT, JANGAN GUNAKAN DATA LAIN):
    ${BLADE_DATABASE.join('\n')}

    📌 CARA KERJA AI:
    1. Analisis profil user:
       - Gaya bermain (Offensive/All-round/Defensive)
       - Teknik dominan
       - Dominasi tangan
       - Kecepatan swing
       - Pengalaman main
       - Level pemain
       - Preferensi feel blade
       
    2. COCOKKAN dengan blade di DATABASE STOCK di atas.
       - Pilih blade dengan karakteristik (Power/Control/Karakter/Level) yang paling sesuai dengan user.
       - Perhatikan "Level Pemain" di database. Jangan sarankan blade level "Jago" untuk pemain "Pemula".
    
    3. ATURAN REKOMENDASI (WAJIB):
       - HANYA rekomendasikan blade yang ada di list di atas. DILARANG KERAS mengarang nama blade atau merekomendasikan blade merk lain (Andro, Tibhar, Yasaka, dll tidak ada di stock).
       - Jika pemain Pemula (< 1 Tahun), prioritaskan blade dengan Control tinggi (nilai 4 atau 5) dan kategori All-round/Ofensif ringan (Contoh: Sanwei J, Sanwei 1091, Nittaku Ease Carbon, Doublefish Dragon Blade 1).
    
    4. FORMAT SKOR:
       - Jika menyebutkan nilai statistik (Power, Speed, Control) dalam ulasan atau alasan, WAJIB tuliskan dalam format 'X/5' (Contoh: "Power 4/5", "Control 3/5") agar user mengerti ini adalah skala 5, bukan 10.

    5. Berikan output rekomendasi sesuai schema JSON.

    LARANGAN:
    - Tidak boleh menampilkan harga.
    - Tidak boleh merekomendasikan produk di luar list di atas.
    
    Jika ada pertanyaan harga, respons:
    "Untuk harga bisa langsung hubungi pemilik toko ya kak 😊"

    Gunakan bahasa yang profesional namun mudah dimengerti.
  `;

  const prompt = `
    Mohon analisis profil pemain ini dan berikan rekomendasi blade terbaik dari database stock yang tersedia:
    
    - Gaya Bermain: ${profile.style}
    - Teknik Andalan: ${profile.technique}
    - Dominasi: ${profile.dominance}
    - Kecepatan Swing: ${profile.swingSpeed}
    - Pengalaman Main: ${profile.experience}
    - Level: ${profile.level}
    - Preferensi Feel: ${profile.feel}
  `;

  try {
    const response = await genAI.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        responseMimeType: "application/json",
        responseSchema: analysisSchema,
        temperature: 0.2, // Lower temperature to strict adherence to database
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");

    return JSON.parse(text) as AnalysisResult;
  } catch (error) {
    console.error("Gemini Analysis Error:", error);
    throw error;
  }
};
