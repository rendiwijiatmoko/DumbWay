function count_handshake(num) {
    let b = 0;
    for (let a = num; a > 0;) {
        a--
        b+=a
    }
    console.log(b);
}

count_handshake(6);