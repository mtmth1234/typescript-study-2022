export {};

// Record<K, T>
type Prefectures = 'Tokyo' | 'Chiba' | 'Saitama' | 'Ibaraki';

type Covid19InfectionInfo = {
  kanji_name: string;
  confirmed_cases: number;
};

const covie19Japan: Record<Prefectures, Covid19InfectionInfo> = {
  Tokyo: { kanji_name: '東京', confirmed_cases: 11 },
  Chiba: { kanji_name: '千葉', confirmed_cases: 12 },
  Saitama: { kanji_name: '埼玉', confirmed_cases: 13 },
  Ibaraki: { kanji_name: '茨城', confirmed_cases: 14 },
};
