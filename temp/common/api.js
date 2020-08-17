export function callApiLike() {
  console.log('callAPILike');
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000);
  });
}
