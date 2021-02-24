import { createContext, useState, ReactNode } from "react";
import challenges from "../../challenges.json";

interface Challenge {
  type: "body" | "eye";
  amount: number;
  description: string;
}

interface ChallengesContextData {
  level: number;
  activeChallenge: Challenge;
  currentExperience: number;
  challengeCompleted: number;
  experienceToNextLevel: number;
  levelUp: () => void;
  resetChallenge: () => void;
  startNewChallenge: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengeCompleted, setChallengesCompleted] = useState(0);

  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        activeChallenge,
        currentExperience,
        challengeCompleted,
        experienceToNextLevel,
        levelUp,
        resetChallenge,
        startNewChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
