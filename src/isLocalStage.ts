export const isLocalStage = (stage: string) => {
  for (const nonLocalStage of ['pr', 'dev', 'staging', 'prod']) {
    if (stage.startsWith(nonLocalStage)) {
      return false;
    }
  }
  return true;
};
