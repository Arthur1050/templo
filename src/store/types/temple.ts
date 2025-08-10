export interface TempleState {
    target: 'person' | 'pet' | null;
}

export interface TempleActions {
    setTarget: (target: 'person' | 'pet' | null) => void;
}

export type TempleStore = TempleState & TempleActions;