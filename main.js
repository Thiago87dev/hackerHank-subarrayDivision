// Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

// Lily decides to share a contiguous segment of the bar selected such that:

// The length of the segment matches Ron's birth month, and,
// The sum of the integers on the squares is equal to his birth day.
// Determine how many ways she can divide the chocolate.

function birthday(s, d, m) {
    let cc = 0
    let acc =0
    for(let i = 0; i < s.length; i++){  
        if(i + m > s.length) break
        for(let j = i; j < i + m; j++){
            cc+= s[j]
        }
        if(cc === d) acc++
        cc = 0
    }
    return acc
}

console.log(birthday([2,2,3,3,1],7,3));