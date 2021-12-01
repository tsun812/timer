const intervals = process.argv.slice(2);
for (let i = 0; i < intervals.length; i++){
  let curr = parseInt(intervals[i]);
  if (typeof curr !== 'number' || curr < 0 || curr === null){
    continue;
  }
  setTimeout(() => {
    console.log("time is up")
    process.stdout.write('\x07');
  }, intervals[i]*1000)
}