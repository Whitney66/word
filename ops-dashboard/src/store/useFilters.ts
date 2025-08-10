import { create } from 'zustand';

export type OrgLevel = 'group' | 'bu' | 'company' | 'store';
export type RegionScope = 'nationwide' | 'region' | 'province' | 'hainan';
export type Channel = 'offline' | 'online_taxed' | 'cross_border' | 'airport';

export interface GlobalFiltersState {
  year: number;
  month: number; // 1-12
  orgLevel: OrgLevel;
  regionScope: RegionScope;
  channel: Channel | 'all';
  compareYoY: boolean;
  compareBudget: boolean;
  setYear: (year: number) => void;
  setMonth: (month: number) => void;
  setOrgLevel: (org: OrgLevel) => void;
  setRegionScope: (scope: RegionScope) => void;
  setChannel: (channel: GlobalFiltersState['channel']) => void;
  toggleYoY: () => void;
  toggleBudget: () => void;
}

export const useGlobalFiltersStore = create<GlobalFiltersState>((set) => ({
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1,
  orgLevel: 'group',
  regionScope: 'nationwide',
  channel: 'all',
  compareYoY: true,
  compareBudget: true,
  setYear: (year) => set({ year }),
  setMonth: (month) => set({ month }),
  setOrgLevel: (orgLevel) => set({ orgLevel }),
  setRegionScope: (regionScope) => set({ regionScope }),
  setChannel: (channel) => set({ channel }),
  toggleYoY: () => set((s) => ({ compareYoY: !s.compareYoY })),
  toggleBudget: () => set((s) => ({ compareBudget: !s.compareBudget })),
}));