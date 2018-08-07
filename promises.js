let resolveAfter2Seconds = function() {
    console.log("starting slow promise")
    return new Promise(resolve => {
        setTimeout(function() {
            resolve(20)
            console.log("slow promise done")
        }, 2000)
    })
}

let resolveAfter1Second = function() {
    console.log("starting fast promise")
    return new Promise(resolve => {
        setTimeout(function() {
            resolve(10)
            console.log("fast promise done")
        }, 1000)
    })
}

let sequentialStart = async function() {
    console.log("==SEQUENTIAL START==")
    const slow = await resolveAfter2Seconds()
    const fast = await resolveAfter1Second()

    console.log(slow)
    console.log(fast)
}

let concurrentStart = async function() {
    console.log("==CONCURRENT START==")
    const slow = resolveAfter2Seconds()
    const fast = resolveAfter1Second()

    console.log(await slow)
    console.log(await fast)
}

let stillSerial = function() {
    console.log("==CONCURRENT START WITH Promise.all==")
    Promise.all([resolveAfter2Seconds(), resolveAfter1Second()])
        .then(([slow, fast]) => {
            console.log(slow)
            console.log(fast)
        })
}

let parallel = function() {
    console.log("==PARALLEL==")
    resolveAfter2Seconds().then(message => console.log(message))
    resolveAfter1Second().then(message => console.log(message))
}

// sequentialStart()
// concurrentStart()
// stillSerial()
parallel()