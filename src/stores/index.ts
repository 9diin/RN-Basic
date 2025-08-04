import { create } from "zustand";

// 스토어 상태 타입 정의
interface KeywordState {
    keyword: string;
    setKeyword: (newKeyword: string) => void;
}

interface AxisState {
    mapx: string;
    mapy: string;

    setMapx: (newMapx: string) => void;
    setMapy: (newMapy: string) => void;
}

export const useKeywordStore = create<KeywordState>((set) => ({
    keyword: "",
    setKeyword: (newKeyword: string) => set({ keyword: newKeyword }),
}));

export const useAxisStore = create<AxisState>((set) => ({
    mapx: "126.9780",
    mapy: "37.5665",

    setMapx: (newMapx: string) => set({ mapx: newMapx }),
    setMapy: (newMapy: string) => set({ mapy: newMapy }),
}));
