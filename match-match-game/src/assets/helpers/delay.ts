export default function delay(delayTime: number): Promise<void> {
  return new Promise((res) => {
    setTimeout(res, delayTime);
  });
}
