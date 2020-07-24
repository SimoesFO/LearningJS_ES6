function resolveAfter3Seconds() {
  console.log('starting slow promise')

  return new Promise(resolve => {
    setTimeout(() => {
      resolve('slow promise is done')
    }, 3000)
  })
}

function resolveAfter1Seconds() {
  console.log('starting fast promise')
  
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('fast promise is done')
    }, 1000)
  })
}


/******* BEGIN - SEQUENTIAL START *******/
async function sequentialStart() {
  console.log('== SEQUENTIAL START ==')

  const slow = await resolveAfter3Seconds()
  console.log(slow)  // this runs 3 seconds later

  const fast = await resolveAfter1Seconds()
  console.log(fast) // this runs 4 seconds (3 + 1) later
}
//sequentialStart()
/******* END - SEQUENTIAL START *******/


/******* BEGIN - CONCURRENT START *******/
async function concurrentStart() {
  console.log('== CONCURRENT START ==')

  const slow = resolveAfter3Seconds() // starts timer immediately
  const fast = resolveAfter1Seconds() // starts timer immediately

  console.log(await slow)
  console.log(await fast)
  
}
//concurrentStart()
/******* END - CONCURRENT START *******/


/******* BEGIN - CONCURRENT PROMISE WITHOUT ASYNC/AWAIT ******/
function concurrentPromise() {
  console.log('== CONCURRENT START WITHOUT ASYNC/AWAIT ==')

  const arrayPromises = [resolveAfter3Seconds(), resolveAfter1Seconds()]

  return Promise.all(arrayPromises)
      .then((messages) => {
        console.log(messages[0]) // slow
        console.log(messages[1]) // fast
      })
}
//concurrentPromise()
/******* END - CONCURRENT PROMISE WITHOUT ASYNC/AWAIT *******/


/******* BEGIN - PARALLEL PROMISE WITH ASYNC/AWAIT ******/
async function parallelPromise() {
  console.log('== PARALLEL WITH ASYNC/AWAIT ==')

  // Start 2 "Jobs" in parallel and wait for both of them to complete
  await Promise.all([
    ( async() => console.log( await resolveAfter3Seconds() ) ) (),
    ( async() => console.log( await resolveAfter1Seconds() ) ) ()
  ])
}
//parallelPromise()
/******* END - PARALLEL PROMISE WITH ASYNC/AWAIT ******/


/******* BEGIN - PROMISE RACE ******/
async function promiseRace() {
  console.log('== PROMISE RACE ==')

  let p1 =  resolveAfter3Seconds()
  let p2 =  resolveAfter1Seconds()
  
  Promise.race([p1, p2])
    .then( (message) => console.log(message) )
}
promiseRace()
/******* END - PROMISE RACE ******/

/******* BEGIN - PROMISE RACE ******/
async function promiseAny() {
  console.log('== PROMISE ANY ==')

  var p1 =  resolveAfter3Seconds()
  var p2 =  resolveAfter1Seconds()
  
  Promise.any([p1, p2])
    .then( (message) => console.log(message) )
}
//promiseAny()
/******* END - PROMISE RACE ******/