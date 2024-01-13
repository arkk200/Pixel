/**
 * 슬라이더 프로그레스에 따른 타일의 인덱스를 찾을 때 쓴다
 */
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
