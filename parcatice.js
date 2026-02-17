// function demoo(){
//     console.log(a)
//     var a =10
//     let b=20
//     console.log(b)
// }
// demoo()


async function test() {
    console.log(1)
    setTimeout(()=>console.log(2),0)
    console.log(3)
    await Promise.resolve()
    console.log(4)
}
test()