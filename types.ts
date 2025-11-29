export enum PlayerStyle {
  OFFENSIVE = "Offensive",
  ALLROUND = "All-round",
  DEFENSIVE = "Defensive"
}

export enum Technique {
  TOPSPIN = "Topspin Loop",
  BLOCK = "Blocking/Control",
  DRIVE = "Flat Hit/Drive",
  COUNTER = "Counter Attack",
  CHOP = "Chop/Cut"
}

export enum HandDominance {
  FOREHAND = "Forehand Dominant",
  BACKHAND = "Backhand Dominant",
  BALANCED = "Balanced"
}

export enum SwingSpeed {
  FAST = "Cepat (Explosive)",
  MEDIUM = "Sedang (Controlled)",
  SLOW = "Lambat (Passive)"
}

export enum Experience {
  NEWBIE = "< 1 Tahun (Baru Mulai)",
  JUNIOR = "1 - 3 Tahun",
  SENIOR = "3 - 5 Tahun",
  VETERAN = "> 5 Tahun"
}

export enum Level {
  BEGINNER = "Pemula",
  INTERMEDIATE = "Menengah",
  ADVANCED = "Jago / Pro"
}

export enum BladeFeel {
  HARD = "Keras (Crisp)",
  MEDIUM = "Medium (Balanced)",
  SOFT = "Soft (Dwell time tinggi)"
}

export interface UserProfile {
  style: PlayerStyle;
  technique: Technique;
  dominance: HandDominance;
  swingSpeed: SwingSpeed;
  level: Level;
  experience: Experience;
  feel: BladeFeel;
}

export interface BladeRecommendation {
  name: string;
  reasoning: string;
}

export interface AnalysisResult {
  summary: string;
  mainRecommendation: {
    name: string;
    description: string;
    technicalReasoning: string;
  };
  alternatives: BladeRecommendation[];
  rubberPairing: string;
  proTips: string[];
}