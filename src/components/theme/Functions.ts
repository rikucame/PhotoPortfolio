export const getAspectRatio = (width: number, height: number) => {
  const gcp =
    Math.max(width, height) % 210 !== 0
      ? 1000
      : getGcp(Math.max(width, height), Math.min(width, height))
  return { width: width / gcp, height: height / gcp }
}
const getGcp = (largeNum: number, smallNum: number) => {
  const nums = {
    a: largeNum,
    b: smallNum,
  }
  while (true) {
    const r = nums.a % nums.b
    nums.a = nums.b
    if (r < 1) {
      return nums.a
    }
    nums.b = r
  }
}
