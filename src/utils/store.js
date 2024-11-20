import { create } from "zustand";
import { persist } from "zustand/middleware";
import { canAfford } from "./utils";
import { cities } from "../Clicker";

// Game  variables
export const M = 1.15;
export const clickPriceMultiplier = 0.00004;

export let baseCosts = {
  upgrade: 8,
  building: 35,
};

export const useBearStore = create(
  persist(
    (set, get) => ({
      bears: 0,
      increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
      removeAllBears: () => set({ bears: 0 }),

      //   Coins
      coins: 0,
      increaseCoins: (amount) =>
        set((state) => ({ coins: state.coins + amount })),
      subtractCoins: (amount) =>
        set((state) => ({ coins: Math.max(state.coins - amount, 0) })),

      // Tokens
      tokens: 0,
      increaseTokens: (amount) =>
        set((state) => ({ tokens: state.tokens + amount })),
      subtractTokens: (amount) =>
        set((state) => ({ tokens: Math.max(state.tokens - amount, 0) })),

      // New game state
      elapsedTime: 0,
      coinsPerSec: 0,
      clickAmount: 1,
      upgradeStrength: 0.5,
      autoClickerAmount: 1.5,
      upgradeCount: 0,
      upgradePrice: baseCosts.upgrade,
      buildingCount: 0,
      buildingPrice: baseCosts.building,
      cityLevel: 0,
      shopStatus: 1,
      clickMultiplier: 1,
      items: [],
      ownedProperties: {},
      ownedSouvenirs: {},

      // Actions
      setElapsedTime: (time) => set({ elapsedTime: time }),
      incrementElapsedTime: () => set((state) => ({ elapsedTime: state.elapsedTime + 1 })),
      setCoinsPerSec: (amount) => set({ coinsPerSec: amount }),
      setClickAmount: (amount) => set({ clickAmount: amount }),
      setUpgradeStrength: (amount) => set({ upgradeStrength: amount }),
      setAutoClickerAmount: (amount) => set({ autoClickerAmount: amount }),
      setUpgradeCount: (count) => set({ upgradeCount: count }),
      setUpgradePrice: (price) => set({ upgradePrice: price }),
      setBuildingCount: (count) => set({ buildingCount: count }),
      setBuildingPrice: (price) => set({ buildingPrice: price }),
      setCityLevel: (level) => set({ cityLevel: level }),
      setShopStatus: (status) => set({ shopStatus: status }),
      setClickMultiplier: (multiplier) => set({ clickMultiplier: multiplier }),
      setItems: (items) => set({ items: items }),
      setOwnedProperties: (properties) => set({ ownedProperties: properties }),
      setOwnedSouvenirs: (souvenirs) => set({ ownedSouvenirs: souvenirs }),

      // Game functions
      buyBuilding: () => {
        const state = get();
        if (!canAfford(state.coins, state.buildingPrice)) {
          return;
        }
        state.subtractCoins(state.buildingPrice);
        const newBuildingCount = state.buildingCount + 1;
        state.setBuildingCount(newBuildingCount);
        
        // Check if we meet the next city level requirement
        let nextCityBuildingsRequired = 
          cities[Math.min(state.cityLevel + 1, cities.length - 1)].buildingsRequired;
        if (
          state.cityLevel + 1 < cities.length &&
          newBuildingCount >= nextCityBuildingsRequired
        ) {
          state.setCityLevel(state.cityLevel + 1);
        }
      },

      buyUpgrade: () => {
        const state = get();
        if (!canAfford(state.coins, state.upgradePrice)) {
          return;
        }
        state.subtractCoins(state.upgradePrice);
        state.setUpgradeCount(state.upgradeCount + 1);
      },

      handleCollect: () => {
        const state = get();
        state.increaseCoins(state.clickAmount);
      },

      getAdjustedPrice: (baseCost, count) => {
        return baseCost * Math.pow(M, count);
      },

      // Update calculations
      updateCoinsPerSec: () => {
        const state = get();
        const propertyTotalValue = Object.values(state.ownedProperties).reduce((a, b) => a + b, 0);
        const propertyIncome = getPropertyIncome(propertyTotalValue);
        state.setCoinsPerSec(state.autoClickerAmount * state.buildingCount + propertyIncome);
        state.setBuildingPrice(state.getAdjustedPrice(baseCosts.building, state.buildingCount));
      },

      updateClickAmount: () => {
        const state = get();
        state.setClickAmount(1 + state.upgradeCount * state.upgradeStrength * state.clickMultiplier);
        state.setUpgradePrice(state.getAdjustedPrice(baseCosts.upgrade, state.upgradeCount));
      },

      updateClickMultiplier: () => {
        const state = get();
        const totalPrice = state.items.map((item) => item.price).reduce((a, b) => a + b, 0);
        const newMultiplier = 1 + totalPrice * clickPriceMultiplier;
        state.setClickMultiplier(newMultiplier);
      },

      reset: () => set({}, true) // true means it will replace state instead of merging
    }),
    {
      name: "bear-storage",
      getStorage: () => localStorage,
    }
  )
);