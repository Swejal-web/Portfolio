export const animationOne = {
    in:{
        opacity:1
    },
    out:{
        opacity:0
    }
}

export const animationTwo = {
    in:{
        opacity:1,
        y:0,
        scale:1
    },
    out:{
        opacity:0,
        y:'-100vh',
        scale:0.3
    }
}

export const animationThree = {
    in:{
        opacity:1,
        x:-300
    },
    out:{
        opacity:0,
        x:300
    },
    end: {
        x:0,
        opacity:1
    }
}

export const animationFour ={
    in:{
        x:-300
    },
    out:{
        x: 300
    },
    end: {
        x:0
    }
}

export const transition={
    duration: 2
}

export const animationFive = {
    in: {
        y: 1000
    },
    out: {
        y: 0
    },
    end: {
        y:0
    }
}