export interface Personality {
  id: number;
  title: string;
  personalityText: string;
  createdAt: string;
  // mood: string;
}

export interface PersonalityModalProps {
  open: boolean;
  onClose: () => void;
  personality: Personality | null;
  onSave: (updatedPersonality: Personality) => void;
}
