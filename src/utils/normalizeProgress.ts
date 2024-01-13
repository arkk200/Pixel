const normalizeProgress = (progress: number) => {
  if (progress <= 60) return 0;
  if (progress <= 148) return 1;
  if (progress <= 236) return 2;
  if (progress <= 324) return 3;
  if (progress <= 412) return 4;
  if (progress <= 500) return 5;
  if (progress <= 588) return 6;
  if (progress <= 648) return 7;
  return 0;
};

export default normalizeProgress;
